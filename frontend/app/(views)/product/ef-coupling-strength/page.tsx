import type { Metadata } from "next";
import { buildSeoByPath } from "@/lib/seo";
import DefaultPageShell from "@/components/DefaultPageShell";

export const metadata: Metadata = buildSeoByPath("/product/ef-coupling-strength");

export default function ProductEfCouplingStrengthPage() {
    return (
        <>
            <link rel="stylesheet" href="css/product.css"/>
            <link rel="stylesheet" href="css/ef-coupling-strength.css"/>

            <DefaultPageShell subVisual={{
                title: "EF 이음관의 장점",
                message: "고객과의 약속을 최우선으로 생각하며, 최고의 제품만을 고집하는 기업이 되도록 노력하겠습니다.",
                pageClass: "product"
            }}>
                <section className="info-section">
                    <h2 className="section-title">가스용, 수도용 E/F 소켓 특성 및 제품규격</h2>
                    <section className="hero-section">
                        <div className="hero-content">
                            <h1 className="hero-title">
                                대연의 <strong>전기 융착식 폴리에틸렌 이음관 (E/F)</strong>
                            </h1>
                            <p className="hero-description">
                                1994년 국내 최초 개발 및 국산화를 성공적으로 이루어 낸<br/>
                                대연의 독보적인 기술력과 품질을 만나보세요.
                            </p>
                        </div>
                        <div className="hero-image-wrapper">
                            <img src="img/product/ef_img_01.jpg" alt="대연 PE 파이프 및 이음관 제품 이미지" className="hero-pipe-image"/>
                        </div>
                    </section>
                    <div className="sub-section">
                        <h3>전기 융착 시스템 (Electro fusion fitting system)</h3>
                        <div className="tech-info-body">
                            <p className="main-desc">
                                이음관 내부에 내장된 <strong>열선에 전기를 공급</strong>하여 발생된 저항 열로 접합하는 첨단 융착 방식입니다.
                            </p>

                            <div className="process-flow">
                                <div className="flow-step">
                                    <span className="step-label">열 발생</span>
                                    <p>전기 저항열로 이음관 내면과 PIPE 외면 용융</p>
                                </div>
                                <div className="flow-arrow">▶</div>
                                <div className="flow-step">
                                    <span className="step-label">자동 제어</span>
                                    <p>START 버튼 클릭 시 자동 시간 조절 및 융착</p>
                                </div>
                                <div className="flow-arrow">▶</div>
                                <div className="flow-step">
                                    <span className="step-label">완벽 접합</span>
                                    <p>부피 팽창으로 공극을 채워 완벽한 기밀 유지</p>
                                </div>
                            </div>

                            <p className="detail-text">
                                열선의 온도 변화에 따라 PIPE와 이음관 사이의 공극이 <strong>PE 용융에 의한 부피 팽창</strong>으로 채워지면서 시스템적으로 완벽한 융착이 진행됩니다.
                            </p>
                        </div>
                    </div>
                    <div className="sub-section">
                        <h3>전기 융착 이음관(E/F)의 특징</h3>
                        <div className="caution-box feature-box">
                            <div className="caution-item">
                                <span className="step-badge feature-badge">01</span>
                                <div className="item-content">
                                    <p><strong>폴리에틸렌의 특성</strong></p>
                                    <p className="sub-desc">폴리에틸렌의 특성상 <strong>내식성, 내약품성, 내한성</strong>이 매우 뛰어나며 반 영구적입니다.</p>
                                </div>
                            </div>

                            <div className="caution-item">
                                <span className="step-badge feature-badge">02</span>
                                <div className="item-content">
                                    <p><strong>편리한 시공성 (ONE – TOUCH) 방식</strong></p>
                                    <p className="sub-desc">융착기의 연결단자 연결만으로 <strong>융착, 냉각시간이 자동으로 설정</strong>되어 시작 버튼만 누르면 융착이 진행됩니다.</p>
                                </div>
                            </div>

                            <div className="caution-item">
                                <span className="step-badge feature-badge">03</span>
                                <div className="item-content">
                                    <p><strong>저렴한 경제성</strong></p>
                                    <p className="sub-desc">타 배관에 비해 <strong>자재비 및 시공 비용이 저렴</strong>하여 경제적입니다.</p>
                                </div>
                            </div>

                            <div className="caution-item">
                                <span className="step-badge feature-badge">04</span>
                                <div className="item-content">
                                    <p><strong>우수한 기밀성</strong></p>
                                    <p className="sub-desc">대연의 E/F는 열 융착 방식으로 <strong>열선폭이 넓어 기밀 성능</strong>이 매우 우수합니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sub-section">
                        <h3>COMPOUND의 물리적 특성</h3>
                        <table className="vertical-table">
                            <colgroup>
                                <col style={{ width: "40%" }}/>
                                <col style={{ width: "10%" }}/>
                                <col style={{ width: "20%" }}/>
                                <col style={{ width: "15%" }}/>
                                <col style={{ width: "15%" }}/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th rowSpan={2}>물성</th>
                                <th rowSpan={2}>단위</th>
                                <th rowSpan={2}>시험방법</th>
                                <th>가스용</th>
                                <th>수도용</th>
                            </tr>
                            <tr>
                                <th>중밀도 (MDPE)</th>
                                <th>고밀도 (HDPE)</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>밀도(Density)</td>
                                <td>g/㎤</td>
                                <td>ASTM D 1505</td>
                                <td>0.926 - 0.941</td>
                                <td>0.955</td>
                            </tr>
                            <tr>
                                <td>용융지수(Melt flow index)</td>
                                <td>g/10min</td>
                                <td>ASTM D 1238</td>
                                <td>0.18 - 2.0</td>
                                <td>0.08 - 0.12</td>
                            </tr>
                            <tr>
                                <td>인장강도(Tensile strength at yield)</td>
                                <td>㎏/㎠</td>
                                <td>ASTM D 638</td>
                                <td>200</td>
                                <td>230이상</td>
                            </tr>
                            <tr>
                                <td>파단신율(Elongation at break)</td>
                                <td>%</td>
                                <td>ASTM D 638</td>
                                <td>650이상</td>
                                <td>650이상</td>
                            </tr>
                            <tr>
                                <td>취하온도(Brittleness temperature)</td>
                                <td>℃</td>
                                <td>ASTM D 746</td>
                                <td>-80이하</td>
                                <td>-80이하</td>
                            </tr>
                            <tr>
                                <td>용융온도(Melt temperature)</td>
                                <td>℃</td>
                                <td>ASTM D 3418</td>
                                <td>126</td>
                                <td>128</td>
                            </tr>
                            <tr>
                                <td>환경응력균열시험(E.S.C.R)</td>
                                <td>Hours</td>
                                <td>ASTM D 1693</td>
                                <td>&gt;1,000</td>
                                <td>&gt;1,000</td>
                            </tr>
                            <tr>
                                <td>카본블랙함량(Carbon black content)</td>
                                <td>WT %</td>
                                <td>ASTM D 421</td>
                                <td>-</td>
                                <td>2.00 - 2.50</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="sub-section">
                        <h3>가스용, 수도용 E/F 비교</h3>
                        <table className="vertical-table">
                            <colgroup>
                                <col style={{ width: "40%" }}/>
                                <col style={{ width: "20%" }}/>
                                <col style={{ width: "20%" }}/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th>구분</th>
                                <th>가스</th>
                                <th>수도</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>최소 요구 강도 (MRS)</td>
                                <td>8bar</td>
                                <td>10bar</td>
                            </tr>
                            <tr>
                                <td>최대 사용 압력 (MOP)</td>
                                <td>10bar</td>
                                <td>16bar</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="sub-section">
                        <h3>시공 전 주의사항</h3>
                        <div className="caution-box caution-blue">
                            <div className="caution-item">
                                <span className="step-badge">01</span>
                                <div className="item-content">
                                    <p>전원에 의한 불량을 예방하기 위하여 해당 <strong>전기융착기 사용에 양호한 전원 상태</strong>인지를 필히 확인한다.</p>
                                    <ul className="sub-list">
                                        <li>발전기 사용 시 용량은 <strong>5Kw 이상</strong>이어야 하며, 10분 이상 공회전 후 사용한다.</li>
                                        <li>사용하는 전선의 길이는 <strong>20m 이내</strong>로 굵기는 <strong>5Ø 이상</strong>이어야 한다.</li>
                                        <li>융착기에 필요한 정격전원은 <strong>(110V±5V, 220V±10V, 60hz)</strong> 이어야 한다.</li>
                                        <li>전기 융착 시에는 많은 전류를 사용하는 타 전기기기와 함께 사용하지 말아야 한다.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="caution-item">
                                <span className="step-badge">02</span>
                                <p>융착 작업은 <strong>0℃ 이하의 기온 및 우천 시</strong> 불량이 발생할 수 있으니 금하며, 부득이한 경우 습기 제거 및 보온 조치 후 작업한다.</p>
                            </div>

                            <div className="caution-item">
                                <span className="step-badge">03</span>
                                <p>소켓 및 단자핀이 파손될 수 있으니 <strong>제품을 던지거나 떨어뜨리지 마세요.</strong></p>
                            </div>

                            <div className="caution-item">
                                <span className="step-badge">04</span>
                                <p>물성 변화 방지를 위해 제품은 <strong>실내나 직사광선을 피해 보관</strong>하세요.</p>
                            </div>

                            <div className="caution-item">
                                <span className="step-badge">05</span>
                                <p>전기융착기의 정상 작동 여부 및 <strong>1년 이내 가스안전공사 정기점검 필증</strong>을 확인한다.</p>
                            </div>
                        </div>
                        <div className="sub-section">
                            <h3>시공 시 주의사항</h3>
                            <div className="caution-box">
                                <div className="caution-item">
                                    <span className="step-badge">01</span>
                                    <p>융착 작업 시 융착면을 <strong>0.2mm이상 면취(스크랩핑)</strong>를 반드시 한다.</p>
                                </div>
                                <div className="caution-item">
                                    <span className="step-badge">02</span>
                                    <p>파이프와 이음관의 융착면에 <strong>흙이나 이물질</strong>이 있어서는 아니한다.</p>
                                </div>
                                <div className="caution-item">
                                    <span className="step-badge">03</span>
                                    <p>이음관 삽입 시 <strong>일직선으로 정렬</strong>하게 삽입되어야 하고 <strong>스톱퍼까지 완전히</strong> 밀어 넣어야 한다.</p>
                                </div>
                                <div className="caution-item">
                                    <span className="step-badge">04</span>
                                    <p>융착 작업 시 융착기의 연결단자를 단단히 삽입하며, <strong>융착 시간과 냉각 시간</strong>을 반드시 확인하여야 한다.</p>
                                </div>
                                <div className="caution-item">
                                    <span className="step-badge">05</span>
                                    <p>융착 후 <strong>돌출핀이 돌출(1mm이상)</strong> 되어있는지 확인하여야 한다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </DefaultPageShell>
        </>
);
}