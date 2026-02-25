import type { Metadata } from "next";
import { buildSeoByPath } from "@/lib/seo";
import DefaultPageShell from "@/components/DefaultPageShell";

export const metadata: Metadata = buildSeoByPath("/product/ball-valve-strength");

export default function ProductBallValveStrengthPage() {
    return (
        <>
            <link rel="stylesheet" href="css/product.css"/>

            <DefaultPageShell subVisual={{
                title: "볼밸브의 장점",
                message: "고객과의 약속을 최우선으로 생각하며, 최고의 제품만을 고집하는 기업이 되도록 노력하겠습니다.",
                pageClass: "product"
            }}>
                <section className="info-section">
                    <h2 className="section-title">가스용, 수도용 PE 볼 밸브 장점 및 시공 시 주의사항</h2>
                    <table className="horizontal-table">
                        <colgroup>
                            <col style={{ width: "15%" }}/>
                            <col style={{ width: "10%" }}/>
                            <col style={{ width: "auto" }}/>
                        </colgroup>
                        <tr>
                            <th>PE 볼 밸브의 장점</th>
                            <td><img src="img/product/pe_img_01.jpg" alt="PE 볼 밸브 장점 이미지"/></td>
                            <td colSpan={2}>
                                <ul className="check-list">
                                    <li>KS 규격품 (KS M ISO 10933 : 열가소성 플라스틱 수동식 볼 밸브)</li>
                                    <li>지하 매몰형으로 공간활용 자유, 초소형 맨홀 사용 가능</li>
                                    <li>PE 배관공사 시 T/F 불필요, 1/4 TURN 계/폐 방식으로 조작 간편</li>
                                    <li>전식 및 부식 염려 없음, 긴 사용수명</li>
                                    <li>BODY와 END 부분 전자식(EF) 융착으로 우수한 기밀성</li>
                                    <li>PURGE용 VALVE도 폴리에틸렌 사용으로 부식 방지 및 우수한 디자인</li>
                                    <li>END부 KS M 3514 규격 준수 (전자식 소켓 및 맞대기 융착 가능)</li>
                                    <li>사용자 선택 가능 (NO-PURGE, 1-PURGE, 2-PURGE)</li>
                                    <li>대형 규격(225~400mm) 기어박스 장착으로 적은 토르크 및 용이한 조작</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th>운전 시 주의사항</th>
                            <td colSpan={2}>통상적으로 밸브 계/폐 시 <strong>메인 아답타(좌측)</strong>를 사용하고, 비상시에는 <strong>비상용 보조 아답타</strong>를 사용한다.</td>
                        </tr>
                        <tr>
                            <th>시공 시 주의사항</th>
                            <td colSpan={2}>
                                <ol className="num-list">
                                    <li>융착 전까지 이물질 침투 방지를 위해 보호캡 유지</li>
                                    <li>운반 및 설치 시 볼은 완전히 개방된 상태 유지</li>
                                    <li>밸브 주변은 양질의 모래로 부설</li>
                                    <li>운반/하역 시 충격 금지</li>
                                    <li>도면은 현장 상황에 따라 변경 가능</li>
                                </ol>
                            </td>
                        </tr>
                    </table>
                </section>

                <section className="info-section">
                    <h2 className="section-title">PE 볼 밸브 구조 및 재질</h2>
                    <div className="sub-section">
                        <h3>볼 밸브 부속 재질</h3>
                        <div className="img-container">
                            <img src="img/product/pe_img_02.jpg" alt="부속 재질 전체 구조" className="img-full"/>

                            <div className="img-center-wrapper">
                                <img src="img/product/pe_img_03.jpg" alt="부속 재질 상세" className="img-center"/>
                            </div>
                        </div>
                    </div>

                    <div className="sub-section">
                        <h3>PE 볼 밸브 구조</h3>
                        <table className="vertical-table">
                            <thead>
                            <tr>
                                <th>NO</th>
                                <th>품명</th>
                                <th>재질</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>바디</td>
                                <td>폴리에틸렌 (PE)</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>엔드</td>
                                <td>폴리에틸렌 (PE)</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>볼</td>
                                <td>폴리프로필렌 (PP)</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>볼 시트</td>
                                <td>니트릴부타디엔 고무 (NBR)</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>리테이너</td>
                                <td>폴리프로필렌 (PP)</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>스템</td>
                                <td>아세탈</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>아답타</td>
                                <td>폴리프로필렌 (PP)</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>스템 O-RING</td>
                                <td>니트릴부타디엔 고무 (NBR)</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>아답타 O-RING</td>
                                <td>니트릴부타디엔 고무 (NBR)</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="info-section">
                    <h2 className="section-title">PE 볼 밸브 사양</h2>
                    <table className="vertical-table">
                        <thead>
                        <tr>
                            <th>구분</th>
                            <th colSpan={2}>특성 및 사양</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>사용 용도</td>
                            <td>가스용</td>
                            <td>수도용</td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>사용 재질</td>
                            <td>PE80 (MDPE)</td>
                            <td rowSpan={2}>PE100 (HDPE)</td>
                        </tr>
                        <tr>
                            <td>PE100 (HDPE)</td>
                        </tr>
                        <tr>
                            <td>사용 압력</td>
                            <td>PE80 : 4bar / PE100 : 10bar</td>
                            <td>16bar</td>
                        </tr>
                        <tr>
                            <td>SDR</td>
                            <td colSpan={2}>SDR : 11, SDR : 17 (소비자 선택가능)</td>
                        </tr>
                        <tr>
                            <td>사용 온도</td>
                            <td colSpan={2}>-29℃ ~ 60℃</td>
                        </tr>
                        <tr>
                            <td>엔드 시공방법</td>
                            <td colSpan={2}>버트 융착, 전자식 소켓 융착 가능</td>
                        </tr>
                        <tr>
                            <td>BORE 타입</td>
                            <td colSpan={2}>FULL BORE TYPE</td>
                        </tr>
                        <tr>
                            <td>STEM TYPE</td>
                            <td colSpan={2}>SHORT STEM TYPE or LONG STEM TYPE</td>
                        </tr>
                        <tr>
                            <td>PURGE TYPE</td>
                            <td colSpan={2}>Standard Type, NO Purge Type, 1 Purge Type, 2 Purge Type (소비자 선택가능)</td>
                        </tr>
                        <tr>
                            <td>바디와 엔드 융착방식</td>
                            <td colSpan={2}>전자식 소켓 융착 / 버트 융착</td>
                        </tr>
                        <tr>
                            <td>개폐 방식</td>
                            <td colSpan={2}>OPEN : 1/4 Turn Left, CLOSE : 1/4 Turn Right</td>
                        </tr>
                        </tbody>
                    </table>

                </section>

                <section className="info-section">
                    <h2 className="section-title">Special Ball Valve</h2>
                    <img src="img/product/pe_img_04.jpg" alt="Special Ball Valve"/>
                    <div className="special-section">
                        <p className="special-desc">“고객의 요청 시 제품의 높이, 바이패스, 플랜지 퍼지타입 등 Special 제작이 가능함.”</p>
                    </div>
                </section>

                <section className="info-section">
                    <h2 className="section-title">기어박스 구성도 및 제품규격</h2>
                    <img src="img/product/pe_img_05.jpg" alt="기어박스 구성도" className="box-img"/>
                    <div className="sub-section">
                        <h3>제품구조</h3>
                        <table className="vertical-table">
                            <caption>* 인서트 기어재질은 Metal임</caption>
                            <thead>
                            <tr>
                                <th>NO</th>
                                <th>품명</th>
                                <th>재질</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>기어박스 상측</td>
                                <td>PE</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>기어박스 하측</td>
                                <td>PE</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>구동기어</td>
                                <td>PP+GL</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>중심기어</td>
                                <td>PP+GL</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>서브스템기어</td>
                                <td>PP+GL</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>오링</td>
                                <td>NBR</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </DefaultPageShell>
        </>
    );
}