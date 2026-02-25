import type { Metadata } from "next";
import { buildSeoByPath } from "@/lib/seo";
import PageShell from "@/components/DefaultPageShell";

export const metadata: Metadata = buildSeoByPath("/about/ceo");

export default function AboutCeoPage() {
    return (
        <>
            <link rel="stylesheet" href="/css/about.css"/>

            <PageShell subVisual={{
                title: "CEO 인사말",
                message: "고객과 함께 성장하는 기업, (주)대연입니다.",
                pageClass: "about"
            }}>
                <section className="ceo-intro-flex">
                    <div className="ceo-image">
                        <img
                            src="/img/about/greeting_img_01.jpg"
                            alt={`대표이사 김영식`}
                        />
                    </div>

                    <div className="ceo-text-content">
                        <div className="message-top">
                            <span className="sub-title">GREETINGS</span>
                            <h3>
                                기술과 품질을 바탕으로
                                <br/>
                                <span>세계 일류 상품</span>을 실현하겠습니다.
                            </h3>
                        </div>

                        <div className="message-body">
                            <p className="highlight">
                                우리는 1984년 창업이래 기술과 품질을 바탕으로 세계 일류 상품을
                                만들겠다는 신념으로 성장 발전하여 왔습니다.
                            </p>
                            <p>
                                자체 기술연구소를 운영 중이며 제품과 금형의 설계 및 제작을 통하여
                                가스 및 수도관용 폴리에틸렌(PE) EF(전자) / HF(일반) 이음관 및
                                볼 밸브 제품을 생산 공급을 하고 있습니다.
                            </p>
                            <p>
                                철저한 품질관리를 통해 생산된 제품은 국내는 물론 30여 국가에
                                공급하고 있습니다.
                            </p>
                            <p>
                                우리는 고객의 지속적인 관심과 지원에 진심으로 감사드리며 앞으로도
                                끊임없는 관심과 성원을 당부드립니다. ㈜대연은 항상 고객 곁에서
                                함께 할 것을 약속드립니다.
                            </p>
                            <p className="closing">감사합니다.</p>
                        </div>

                        <div className="ceo-signature">
                            <div className="company-name">주식회사 대연</div>
                            <div className="ceo-name">
                                대표이사 <span>김영식</span>
                            </div>
                        </div>
                    </div>
                </section>
            </PageShell>
        </>
    );
}