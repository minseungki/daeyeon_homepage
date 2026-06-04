'use client'

import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk'
import { SITE } from "@/config/site"
import { useState, useEffect } from "react"

export default function KakaoMapPage() {
    const [ready, setReady] = useState(false)
    const initial = { lat: 36.7215259575344, lng: 126.924729809111, level: 4 }

    const [center, setCenter] = useState({ lat: initial.lat, lng: initial.lng })
    const [level, setLevel] = useState(initial.level)
    const [mapKey, setMapKey] = useState(0)

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>
        const tryLoad = () => {
            const kakao = (window as any).kakao
            if (kakao?.maps?.load) {
                kakao.maps.load(() => setReady(true))
            } else {
                timer = setTimeout(tryLoad, 300)
            }
        }
        tryLoad()
        return () => clearTimeout(timer)
    }, [])

    const label = SITE.company.address2
    const searchUrl = `https://map.kakao.com/link/search/${encodeURIComponent(label)}`
    const routeUrl = `https://map.kakao.com/link/to/${encodeURIComponent(label)},${center.lat},${center.lng}`

    const refresh = () => {
        setCenter({ lat: initial.lat, lng: initial.lng })
        setLevel(initial.level)
        setMapKey(k => k + 1)
    }

    const zoomIn = () => setLevel(l => Math.max(1, l - 1))
    const zoomOut = () => setLevel(l => Math.min(14, l + 1))

    if (!ready) return (
        <div style={{ width: '100%', height: '360px', background: '#f0f4f8', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
            <span style={{ color: '#aaa', fontSize: '14px' }}>지도를 불러오는 중...</span>
        </div>
    )

    return (
        <>
            <style>{`
              .mapWrap { position: relative; width: 100%; height: 360px; }
              .ctrlBox { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); z-index: 10; display: flex; flex-direction: column; gap: 6px; }
              .ctrlBtn { width: 36px; height: 36px; border-radius: 10px; background: #fff; border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0,0,0,.08); display: grid; place-items: center; cursor: pointer; color: #111; line-height: 0; padding: 0; }
              .icon { width: 18px; height: 18px; display: block; }
              .addrLink { text-decoration: none; color: #111; }
              .addrBox { display: inline-block; padding: 6px 8px; background: #fff; border: 1px solid #ddd; border-radius: 10px; font-size: 12px; font-weight: 700; line-height: 1.2; box-shadow: 0 2px 8px rgba(0,0,0,.08); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
              .addrLink:hover .addrBox { text-decoration: underline; }
              .routeText { position: absolute; right: 12px; bottom: 12px; z-index: 9999; background: transparent; padding: 0; margin: 0; color: #111; font-size: 12px; font-weight: 700; text-decoration: none; cursor: pointer; }
              .routeText:hover { text-decoration: underline; }
            `}</style>

            <div className="mapWrap">
                <div className="ctrlBox" onMouseDown={e => e.stopPropagation()} onTouchStart={e => e.stopPropagation()}>
                    <button className="ctrlBtn" type="button" onClick={zoomIn} aria-label="Zoom in">
                        <svg className="icon" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                    </button>
                    <button className="ctrlBtn" type="button" onClick={zoomOut} aria-label="Zoom out">
                        <svg className="icon" viewBox="0 0 24 24" fill="none"><path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                    </button>
                    <button className="ctrlBtn" type="button" onClick={refresh} aria-label="Refresh map">
                        <svg className="icon" viewBox="0 0 24 24" fill="none">
                            <path d="M20 12a8 8 0 1 1-2.34-5.66" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M20 4v6h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>

                <a className="routeText" href={routeUrl} target="_blank" rel="noreferrer">길찾기</a>

                <Map
                    key={mapKey}
                    center={center}
                    level={level}
                    style={{ width: "100%", height: "360px" }}
                    onZoomChanged={map => setLevel(map.getLevel())}
                    onCenterChanged={map => {
                        const c = map.getCenter()
                        setCenter({ lat: c.getLat(), lng: c.getLng() })
                    }}
                >
                    <MapMarker position={{ lat: initial.lat, lng: initial.lng }} />
                    <CustomOverlayMap position={{ lat: initial.lat, lng: initial.lng }} yAnchor={2.1}>
                        <a className="addrLink" href={searchUrl} target="_blank" rel="noreferrer" title={label}>
                            <div className="addrBox">{label}</div>
                        </a>
                    </CustomOverlayMap>
                </Map>
            </div>
        </>
    )
}
