import { Fragment } from "react";
import type { Metadata } from "next";
import { buildSeoByPath } from "@/lib/seo";
import PageShell from "@/components/DefaultPageShell";

export const metadata: Metadata = buildSeoByPath("/tech/manual");

const flowSteps = [
    "관의 절단",
    "관의 청결",
    "융착면\n스크랩핑",
    "이음관과\n관의 청결",
    "이음관과\n관의 고정",
    "융착작업",
    "냉각",
    "검사",
];

const manualRows = [
    {
        item: "관의 절단",
        procedure: ["1) 소정의 관절단기를 이용하여 관을 절단한다."],
        caution: ["＊관이 직각으로 절단되도록 할것."],
    },
    {
        item: "관의 청결",
        procedure: [
            "2) 관의 상처 및 오염등이 없는지를 점검한다.",
            "3) 관의 묻은 흙이나 먼지등을 헝겊이나 솜으로 깨끗이 닦아낸다.",
        ],
        caution: ["＊관의 상처가 큰경우는 그부위를 잘라 제거한다."],
    },
    {
        item: "융착부위의\n스크랩핑",
        procedure: [
            "4) 관을 소켓의 중간부위까지 완전히 밀어넣고 원주방향으로 삽입깊이를 표시한다.",
            "5) 표시 부분이상의 길이만큼 완전하게 스크랩핑한다.",
        ],
        caution: [
            "＊스크랩핑 깊이는 0.2mm이상으로 한다.",
            "＊전용 스크랩기구를 사용한다.",
        ],
    },
    {
        item: "이음관과\n관의 청결",
        procedure: [
            "6) 소켓이음관 내면과 관의 스크랩핑 내면을 헝겊등으로 이물질이 없도록 깨끗이닦아 낸다.",
            "7) 관을 이음관의 중간부위에 있는 스톱퍼 부분까지 완전히 밀어 넣는다.",
            "8) 삽입된 상태를 다시한번 확인하여 Marking의 위치까지 삽입되었는지 확인 한다.",
        ],
        caution: [
            "＊융착전 포장을 풀면 오염의 염려가 있으므로 융착직전에 비닐포장으로 부터 제품을 꺼내어 사용하도록 한다.",
            "＊융착면에 기름등으로 오염되지 않았는가를 확인한다.",
        ],
    },
    {
        item: "이음관과\n관의 고정",
        procedure: ["9) 각호칭전용 클램프를 사용하여 관과 이음관을 고정한다."],
        caution: ["＊관과 이음관이 수평이 되도록 클램프 해야한다."],
    },
    {
        item: "융착준비",
        procedure: ["10) 이음관 융착에 적합한 융착기인지를 확인하고 융착기의 전원을 점검 한다."],
        caution: [
            "＊이음관에 적합한 사용전압등은 융착기 제조 Maker의 자료를 참고한다.",
            "＊출력단자에 접촉부위의 접촉정도 (Loose)와 녹, 더러움등으로 접촉에 이상이 없는지 확인.",
        ],
    },
    {
        item: "융착작업",
        procedure: [
            "11) 출력 케이블의 Connect를 이음관의 Pin에 꽂아 연결한다.",
            "12) 융착기의 Start버튼을 눌러 융착작업을 진행한다.",
            "13) 융착이 끝나면 융착결과를 프린트한다.",
        ],
        caution: [
            "＊이음관의 실제융착시간과 융착기의 display상에 나타난 융착시간과 일치하는지를 확인한다.",
        ],
    },
    {
        item: "냉각",
        procedure: [
            "14) 소정의 시간동안 방치 냉각한다.",
            "15) 소정의 냉각시간 후 플러그를 제거한다.",
        ],
        caution: ["＊융착시간 및 냉각시간은 표 참조"],
    },
    {
        item: "검사",
        procedure: ["16) 융착 후 돌출부(Indicater)로 확인한다."],
        caution: [
            "＊돌출부의 길이는 관과 이음관 사이의 공간에 따라 차이가 있으므로 주의해야 한다.",
        ],
    },
];

function FlowChart() {
    return (
        <div className="flow-chart-wrap">
            <div className="flow-chart-title">융착작업의 Flow - chart</div>
            <div className="flow-chart-steps">
                {flowSteps.map((step, i) => (
                    <Fragment key={i}>
                        <div className="flow-step">
                            <span className="flow-step-num">{i + 1}</span>
                            {step}
                        </div>
                        {i < flowSteps.length - 1 && (
                            <span className="flow-arrow">›</span>
                        )}
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

function ManualTable() {
    return (
        <div className="manual-table-wrap">
            <table className="manual-table">
                <thead>
                    <tr>
                        <th>주요항목</th>
                        <th>작업수순</th>
                        <th>주의사항</th>
                    </tr>
                </thead>
                <tbody>
                    {manualRows.map((row, i) => (
                        <tr key={i}>
                            <td style={{ whiteSpace: "pre-line" }}>{row.item}</td>
                            <td>
                                {row.procedure.map((p, j) => (
                                    <p key={j} style={{ marginBottom: j < row.procedure.length - 1 ? "6px" : 0 }}>{p}</p>
                                ))}
                            </td>
                            <td className="caution">
                                {row.caution.map((c, j) => (
                                    <p key={j} style={{ marginBottom: j < row.caution.length - 1 ? "6px" : 0 }}>{c}</p>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function TechManualPage() {
    return (
        <>
            <link rel="stylesheet" href="css/tech.css?v=9"/>

            <PageShell subVisual={{
                title: "사용설명서",
                message: "고객과의 약속을 최우선으로 생각하며, 최고의 제품만을 고집하는 기업이 되도록 노력하겠습니다.",
                pageClass: "tech"
            }}>
                {/* Socket */}
                <section className="tech-section">
                    <div className="txt-title-bar">Socket</div>
                    <FlowChart />
                    <ManualTable />
                </section>

                {/* Service tee */}
                <section className="tech-section">
                    <div className="txt-title-bar">Service tee</div>
                    <FlowChart />
                    <ManualTable />
                </section>
            </PageShell>
        </>
    );
}
