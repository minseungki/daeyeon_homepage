import type { Metadata } from "next";
import { buildSeoByPath } from "@/lib/seo";
import PageShell from "@/components/DefaultPageShell";

export const metadata: Metadata = buildSeoByPath("/about/history");

export default function AboutHistoryPage() {
    return (
        <>
            <link rel="stylesheet" href="/css/about.css"/>

            <PageShell subVisual={{
                title: "회사연혁",
                message: "끊임없는 도전과 혁신으로 배관 산업의 역사를 써 내려갑니다.",
                pageClass: "about"
            }}>
                <div className="history-container">

                    <div className="history-group">
                        <div className="history-year-range">2011 ~ Present</div>
                        <ul className="history-list">
                            <li>
                                <span className="date">2019</span>
                                <p>아산 제 2공장 설립</p>
                            </li>
                            <li>
                                <span className="date">2018</span>
                                <p>아산공장으로 이전 등록</p>
                            </li>
                            <li>
                                <span className="date">2014</span>
                                <p>1,000만불 수출의 탑 수상</p>
                            </li>
                            <li>
                                <span className="date">2011</span>
                                <p>아르헨티나 가스 EF 이음관 인증서 획득</p>
                            </li>
                        </ul>
                    </div>

                    <div className="history-group">
                        <div className="history-year-range">2006 ~ 2010</div>
                        <ul className="history-list">
                            <li>
                                <span className="date">2010</span>
                                <p>EF 이음관 TUV인증서 획득 / ISO 14001:2004 & KS | 14001:2009 획득</p>
                            </li>
                            <li>
                                <span className="date">2009</span>
                                <p>500만불 수출의 탑 수상</p>
                            </li>
                            <li>
                                <span className="date">2007</span>
                                <p>KS M ISO 8085-3 PE 전기 이음관 인증서 획득</p>
                                <p>KS M ISO 8085-2 PE 스피곳 Fittings 인증서 획득</p>
                                <p>KS M ISO 3515 PE 이경 이음관 인증서 획득</p>
                                <p>가스용 PE 밸브(KS M ISO 10933) 및 수동 작동용 밸브(KS M 3529) 인증서 획득</p>
                            </li>
                        </ul>
                    </div>

                    <div className="history-group">
                        <div className="history-year-range">1990 ~ 1999</div>
                        <ul className="history-list">
                            <li>
                                <span className="date">1999</span>
                                <p>EF 전자 이음관 EM 마크 획득 / ISO 9002 인증서 획득</p>
                                <p>중국에 EF Fitting과 Ball Valve를 신상품으로 등록</p>
                            </li>
                            <li>
                                <span className="date">1998</span>
                                <p>PE 볼 밸브 한국가스안전공사 시험 통과</p>
                            </li>
                            <li>
                                <span className="date">1997</span>
                                <p>KPS M2015 - 수도 EF Fitting 인증서 획득</p>
                            </li>
                            <li>
                                <span className="date">1996</span>
                                <p>KS인증서 획득 (가스용 KS M 3515 / 수도용 KS M 3411)</p>
                            </li>
                            <li>
                                <span className="date">1994</span>
                                <p>국내 최초 Electro Fitting 개발완료 및 생산 개시</p>
                            </li>
                            <li>
                                <span className="date">1992</span>
                                <p>사출 성형 사업 시작 및 제 2공장 설립</p>
                            </li>
                        </ul>
                    </div>

                    <div className="history-group">
                        <div className="history-year-range">1984</div>
                        <ul className="history-list">
                            <li>
                                <span className="date">1984</span>
                                <p>금형 회사 설립</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </PageShell>
        </>
    );
}