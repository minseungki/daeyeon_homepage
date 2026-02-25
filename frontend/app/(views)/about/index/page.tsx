import type { Metadata } from "next";
import { buildSeoByPath } from "@/lib/seo";
import PageShell from "@/components/DefaultPageShell";

export const metadata: Metadata = buildSeoByPath("/about/index");

export default function AboutIndexPage() {
    return (
        <>
            <link rel="stylesheet" href="/css/about.css"/>

            <PageShell subVisual={{
                title: "회사 소개",
                message: "고객과의 약속을 최우선으로, 최고의 제품만을 고집합니다.",
                pageClass: "about"
            }}>
                <section className="about-intro">
                    <div className="title-box">
                        <span className="top-label">MESSAGE</span>
                        <h3>안녕하세요.<br/><span>주식회사 대연</span> 방문을 진심으로 환영합니다.</h3>
                    </div>
                    <div className="text-box">
                        <p>
                            대연은 1984년 설립하여 30여년간 축적된 기술과 풍부한 경험을 바탕으로 안전하고 완벽한 제품을 생산 공급하기 위하여 지속적인 기술개발과 철저한 품질관리를 진행해왔습니다.
                        </p>
                        <p>
                            가장 우수하고 안정된 제품을 공급하고, 완벽한 고품질의 서비스로 가스 및 수도 배관 업계에 기여하고자 가일층 노력하겠습니다.
                        </p>
                    </div>
                </section>

                <section className="achievement">
                    <div className="achieve-card">
                        <div className="achieve-num">1994</div>
                        <h4>국내 최초 EF 국산화</h4>
                        <p>수입에 의존하던 전기융착식 폴리에틸렌 이음관을 국내 최초 개발하여 기술 독립을 이루었습니다.</p>
                    </div>
                    <div className="achieve-card">
                        <div className="achieve-num">80%</div>
                        <h4>시장 점유율</h4>
                        <p>경제성과 품질의 우수성을 인정받아 현재 국내 시장의 약 80%를 점유하고 있는 업계 리더입니다.</p>
                    </div>
                    <div className="achieve-card">
                        <div className="achieve-num">28<span>개국</span></div>
                        <h4>글로벌 수출</h4>
                        <p>미국, 일본, 호주, 러시아 등 전 세계 28개국에 제품을 수출하며 세계적인 기술력을 인정받고 있습니다.</p>
                    </div>
                    <div className="achieve-card">
                        <div className="achieve-num">1998</div>
                        <h4>폴리에틸렌 볼 밸브 개발</h4>
                        <p>가스안전공사의 정밀검사를 거쳐 가스관 시공현장에 진출함으로써 국내 최고의 전문 생산 업체로 자리 잡았습니다.</p>
                    </div>
                </section>

                <section className="core-values container">
                    <div className="section-title-center">
                        <h3>핵심 강점</h3>
                        <p>대연의 제품은 폴리에틸렌 고유의 장점을 극대화하여 최상의 품질을 보장합니다.</p>
                    </div>

                    <div className="value-grid">
                        <div className="value-card">
                            <span className="value-eng">ECONOMY</span>
                            <p className="value-kor">경제성</p>
                        </div>

                        <div className="value-card">
                            <span className="value-eng">RESISTANCE</span>
                            <p className="value-kor">내화학성</p>
                        </div>

                        <div className="value-card">
                            <span className="value-eng">SIMPLICITY</span>
                            <p className="value-kor">간편성</p>
                        </div>

                        <div className="value-card">
                            <span className="value-eng">LIGHTWEIGHT</span>
                            <p className="value-kor">경량성</p>
                        </div>
                    </div>
                </section>
            </PageShell>
        </>
    );
}