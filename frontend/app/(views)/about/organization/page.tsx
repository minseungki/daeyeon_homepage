import type { Metadata } from "next";
import { buildSeoByPath } from "@/lib/seo";
import PageShell from "@/components/DefaultPageShell";

export const metadata: Metadata = buildSeoByPath("/about/organization");

export default function AboutOrganizationPage() {
    return (
        <>
            <link rel="stylesheet" href="css/about.css"/>

            <PageShell subVisual={{
                title: "조직도",
                message: "전문성을 바탕으로 체계적인 시스템을 구축하여 최상의 가치를 창출합니다.",
                pageClass: "about"
            }}>
                <div className="org-chart-container">

                    <div className="org-level level-ceo">
                        <div className="node ceo">대표이사</div>
                    </div>

                    <div className="org-mid-wrap">
                        <div className="planning-branch">
                            <div className="node planning">경영기획실</div>
                        </div>
                    </div>

                    <div className="org-structure-layout">
                        <div className="org-main-grid">
                            <div className="hq-column">
                                <div className="node hq">경영지원본부</div>
                                <ul className="team-list">
                                    <li>경영지원팀</li>
                                    <li>구매/자재팀</li>
                                </ul>
                            </div>

                            <div className="hq-column">
                                <div className="node hq">영업본부</div>
                                <ul className="team-list">
                                    <li>해외영업</li>
                                    <li>국내영업</li>
                                    <li>수도영업</li>
                                </ul>
                            </div>

                            <div className="hq-column">
                                <div className="node hq">생산 총괄본부</div>
                                <ul className="team-list grid-teams">
                                    <li>생산관리팀</li>
                                    <li>사출팀</li>
                                    <li>금형팀</li>
                                    <li>밸브팀</li>
                                    <li>CNC팀</li>
                                    <li>설계팀</li>
                                    <li>공정혁신팀</li>
                                    <li>생산기술팀</li>
                                </ul>
                            </div>

                            <div className="hq-column">
                                <div className="node hq">품질관리본부</div>
                                <ul className="team-list">
                                    <li>품질관리팀</li>
                                    <li>연구개발팀</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </PageShell>
        </>
    );
}