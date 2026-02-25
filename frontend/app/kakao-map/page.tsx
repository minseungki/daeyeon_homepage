'use client'

import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk'
import { SITE } from "@/config/site"
import { useState } from "react"

export default function KakaoMapPage() {
    const initial = { lat: 36.7215259575344, lng: 126.924729809111, level: 4 }

    const [center, setCenter] = useState({ lat: initial.lat, lng: initial.lng })
    const [level, setLevel] = useState(initial.level)
    const [mapKey, setMapKey] = useState(0)

    const label = SITE.company.address2
    const searchUrl = `https://map.kakao.com/link/search/${encodeURIComponent(label)}`
    const routeUrl = `https://map.kakao.com/link/to/${encodeURIComponent(label)},${center.lat},${center.lng}`

    // (선택) 완전 초기화 느낌까지 원하면 mapKey도 증가
    const refresh = () => {
        setCenter({ lat: initial.lat, lng: initial.lng })
        setLevel(initial.level)
        setMapKey(k => k + 1)
    }

    const zoomIn = () => setLevel(l => Math.max(1, l - 1))
    const zoomOut = () => setLevel(l => Math.min(14, l + 1))

    return (
        <>
            <style>{`
              .mapWrap {
                position: relative;
                width: 100%;
                height: 360px; /* ✅ 핵심: wrapper에 높이 고정 */
              }
            
              /* ✅ 오른쪽 “중간”으로 이동 */
              .ctrlBox {
                position: absolute;
                right: 12px;
                top: 50%;
                transform: translateY(-50%);
                z-index: 10;
                display: flex;
                flex-direction: column;
                gap: 6px;
              }
            
              .ctrlBtn {
                  width: 36px;
                  height: 36px;
                  border-radius: 10px;
                  background: #fff;
                  border: 1px solid #ddd;
                  box-shadow: 0 2px 8px rgba(0,0,0,.08);
                  display: grid;
                  place-items: center;
                  cursor: pointer;
                  user-select: none;
                  padding: 0;
                
                  /* ✅ currentColor 고정 */
                  color: #111;
                
                  /* ✅ 폰트/라인 영향 제거 */
                  line-height: 0;
                }
                
                .icon {
                  width: 18px;
                  height: 18px;
                
                  /* ✅ svg 기본 스타일 충돌 방지 */
                  display: block;
                }
                
                .icon path {
                  vector-effect: non-scaling-stroke; /* 확대/축소 시 선 굵기 안정 */
                }
                
                .addrLink { text-decoration: none; color: #111; }

                /* ✅ 네가 원하는 width가 그대로 먹음 */
                .addrBox{
                  display: inline-block;
                  padding: 6px 8px;
                  background: #fff;
                  border: 1px solid #ddd;
                  border-radius: 10px;
                  font-size: 12px;
                  font-weight: 700;
                  line-height: 1.2;
                  box-shadow: 0 2px 8px rgba(0,0,0,.08);
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
        
                .addrLink:hover .addrBox{
                  text-decoration: underline;
                }
                
                /* ✅ 좌측 하단 길찾기 플로팅 버튼 */
                .routeText{
                  position: absolute;
                  right: 12px;
                  bottom: 12px;
        
                  z-index: 9999;  /* ✅ 핵심: 카카오 레이어보다 위로 */
                  background: transparent;
                  padding: 0;
                  margin: 0;
        
                  color: #111;
                  font-size: 12px;
                  font-weight: 700;
                  text-decoration: none;
                  cursor: pointer;
                  user-select: none;
                }
                .routeText:hover{ text-decoration: underline; }
            `}</style>

            <div className="mapWrap">
                {/* ✅ 줌(+/-) 아래에 갱신 버튼(아이콘) */}
                <div
                    className="ctrlBox"
                    onMouseDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                >
                    <button className="ctrlBtn" type="button" onClick={zoomIn} aria-label="Zoom in">
                        <svg className="icon" viewBox="0 0 24 24" fill="none">
                            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>

                    <button className="ctrlBtn" type="button" onClick={zoomOut} aria-label="Zoom out">
                        <svg className="icon" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>

                    {/* 🔄 갱신(리셋) 아이콘 */}
                    <button className="ctrlBtn" type="button" onClick={refresh} aria-label="Refresh map">
                        <svg className="icon" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M20 12a8 8 0 1 1-2.34-5.66"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                d="M20 4v6h-6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>

                {/* ✅ 길찾기 버튼 */}
                <a className="routeText" href={routeUrl} target="_blank" rel="noreferrer">길찾기</a>

                <Map
                    key={mapKey}
                    center={center}
                    level={level}
                    style={{ width: "100%", height: "360px" }}
                    onZoomChanged={(map) => setLevel(map.getLevel())}
                    onCenterChanged={(map) => {
                        const c = map.getCenter()
                        setCenter({ lat: c.getLat(), lng: c.getLng() })
                    }}
                >
                    <MapMarker position={{ lat: initial.lat, lng: initial.lng }} />

                    <CustomOverlayMap position={{ lat: initial.lat, lng: initial.lng }} yAnchor={2.1}>
                        <a
                            className="addrLink"
                            href={searchUrl}
                            target="_blank"
                            rel="noreferrer"
                            title={label}
                        >
                            <div
                                className="addrBox"
                                style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                }}
                            >{label}</div>
                        </a>
                    </CustomOverlayMap>

                </Map>
            </div>
        </>
    )
}