import type { Metadata } from "next";
import { buildSeoByPath } from "@/lib/seo";
import DefaultPageShell from "@/components/DefaultPageShell";

export const metadata: Metadata = buildSeoByPath("/tech/production-system");

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "/daeyeon-homepage";

export default function TechProductionSystemPage() {
    return (
        <>
            <link rel="stylesheet" href="css/tech.css?v=5"/>

            <DefaultPageShell subVisual={{
                title: "생산시스템",
                message: "고객과의 약속을 최우선으로 생각하며, 최고의 제품만을 고집하는 기업이 되도록 노력하겠습니다.",
                pageClass: "tech"
            }}>
                {/* 제조 공정도 */}
                <section className="tech-section">
                    <div className="txt-title-bar">대연 제조 공정도 (DAEYOUN Product Process)</div>
                    <img
                        src={`${BASE}/img/tech/production_flow.svg`}
                        alt="대연 생산 공정도 — 수입검사 → 사출성형 → 기계가공 → 사전조립 → 용착 → 공정검사 → 최종조립 → 포장출하"
                        className="process-diagram"
                    />
                </section>

                {/* 원스탑 솔루션 */}
                <section className="tech-section">
                    <div className="txt-title-bar">대연 원스탑 솔루션</div>
                    <div className="solution-desc">
                        <strong>대연 원스탑 솔루션 (DAEYOUN ONE STOP SOLUTION)</strong>
                        대연의 생산 시스템은 제품을 사출하기 위한 금형을 직접 설계부터 제조 및 보유를 하고 있으며 소형, 중형, 대형에 이르기 까지 다양한 크기의
                        사출 장비 보유중으로 제품 생산에 대한 효율성을 증대 시켰다.
                        또한 CNC 및 머시닝 센터를 구축하여 제품을 가공함에 있어 완성도를 높이고, 가공한 제품으로 조립 및 검수를 진행하여 최상의 품질을 생산하기 위해
                        &ldquo;원스탑 솔루션(One Stop Solution)&rdquo; 방식으로 설계부터 포장까지 전 공정을 이루고 있다.
                    </div>

                    <div className="step-title">1. 금형제작</div>
                    <div className="img-grid-2">
                        <img src={`${BASE}/img/tech/production_img_02.jpg`} alt="금형제작 1"/>
                        <img src={`${BASE}/img/tech/production_img_03.jpg`} alt="금형제작 2"/>
                    </div>

                    <div className="step-title">2. 사출 설비</div>
                    <div className="img-grid-2">
                        <img src={`${BASE}/img/tech/production_img_04.jpg`} alt="사출 설비 1"/>
                        <img src={`${BASE}/img/tech/production_img_05.jpg`} alt="사출 설비 2"/>
                    </div>

                    <div className="step-title">3. 가공팀 — 밸브 부품 정밀 자체 가공</div>
                    <div className="img-grid-2">
                        <img src={`${BASE}/img/tech/production_img_06.jpg`} alt="가공팀 1"/>
                        <img src={`${BASE}/img/tech/production_img_07.jpg`} alt="가공팀 2"/>
                    </div>

                    <div className="step-title">4. 밸브팀 (조립 및 제품검수시험)</div>
                    <div className="img-grid-2">
                        <img src={`${BASE}/img/tech/production_img_08.jpg`} alt="밸브팀 1"/>
                        <img src={`${BASE}/img/tech/production_img_09.jpg`} alt="밸브팀 2"/>
                    </div>
                </section>
            </DefaultPageShell>
        </>
    );
}
