import type { Metadata } from "next";
import { buildSeoByPath } from "@/lib/seo";
import PageShell from "@/components/DefaultPageShell";

export const metadata: Metadata = buildSeoByPath("/tech/quality-assurance-system");

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "/daeyeon-homepage";

const equipmentRows = [
    { name: "열간내압그래프 시험기", spec: "20kgf / ㎠",       qty: 2, use: "열간내압 시험" },
    { name: "수압 시험기",          spec: "100kgf / ㎠",      qty: 1, use: "수압 및 파열 시험" },
    { name: "낙추 충격 시험기",     spec: "-",                qty: 1, use: "밸브, 새들류 낙추 시험" },
    { name: "유압 압착기",          spec: "20A ~ 400A",       qty: 1, use: "융착접합부 압축박리 시험" },
    { name: "밀도 시험기",          spec: "0 ~ 210g 0.1mg",  qty: 2, use: "밀도 및 비중" },
    { name: "항온실",               spec: "-40 ~ 50℃",       qty: 1, use: "밀도 및 비중" },
    { name: "기밀 시험기",          spec: "10kgf / ㎠",       qty: 2, use: "기밀시험" },
    { name: "회전력 측정기",        spec: "70kgf · M",        qty: 5, use: "밸브 토르크 측정" },
    { name: "고무경도시험기",       spec: "경도 100(Type)",   qty: 1, use: "고무경도 측정" },
    { name: "누름하중 시험기",      spec: "5,000kgf · M",     qty: 1, use: "내구성 측정" },
    { name: "하이트게이지",         spec: "600mm",            qty: 1, use: "치수(높이) 측정" },
    { name: "저항 검사기",          spec: "20A ~ 400A",       qty: 2, use: "저항 측정용" },
    { name: "용융질량흐름률 시험기", spec: "300℃",            qty: 1, use: "MFR 시험" },
    { name: "적외선 수분기",        spec: "5 ~ 70g",          qty: 2, use: "휘발, 수분 시험" },
    { name: "X-RAY 시험기",         spec: "-",                qty: 1, use: "열선, 기포확인" },
];

const qaItems = [
    {
        title: "품질보증 / 설비 : 통인장시험기",
        desc: [
            "국내 PE 밸브 및 연결 피팅 업체 유일 통인장 시험기 보유",
            "최대 인장 하중 250Ton",
            "최대 외경 1,000mm 제품의 통인장 강도 시험을 통하여 제품의 품질을 보증함.",
        ],
        mainImg: `${BASE}/img/tech/quality_assurance_img_01.jpg`,
        subImg:  null,
    },
    {
        title: "품질보증 / 설비 : 열간내압 시험기",
        desc: [
            "시험 가능 온도 : 20℃ ~ 100℃",
            "시험 압력(Hoop Stress) : 4Mpa ~ 12.4Mpa",
            "사용 가능 포트 : 20Port",
            "최대 외경 1,000mm 제품까지 시험 가능",
        ],
        mainImg: `${BASE}/img/tech/quality_assurance_img_03.jpg`,
        subImg:  null,
    },
    {
        title: "품질보증 / 설비 : X-Ray",
        desc: [
            "업체 최대 X-RAY 검사장비 보유",
            "630mm 밸브 엔드 까지 X-Ray검사 가능",
            "중요품목 전수검사를 통한 제품의 품질을 보증",
            "시사출시 QA검사를 통한 제품 품질의 보증",
        ],
        mainImg: `${BASE}/img/tech/quality_assurance_img_05.jpg`,
        subImg:  null,
    },
    {
        title: "포장 검수",
        desc: [
            "제품 포장은 마지막 공정이자 품질 보증을 위해 제품 전수 검사를 실시하며 \"저항측정, 외관상태, 열선정열 등\" 검사를 실시하며 합격품만이 포장이 된다.",
        ],
        mainImg: `${BASE}/img/tech/quality_assurance_img_07.jpg`,
        subImg:  null,
    },
];

export default function TechQualityAssuranceSystemPage() {
    return (
        <>
            <link rel="stylesheet" href="css/tech.css?v=7"/>

            <PageShell subVisual={{
                title: "품질보증시스템",
                message: "고객과의 약속을 최우선으로 생각하며, 최고의 제품만을 고집하는 기업이 되도록 노력하겠습니다.",
                pageClass: "tech"
            }}>
                {/* 검사설비 리스트 */}
                <section className="tech-section">
                    <div className="txt-title-bar">검사설비 리스트</div>
                    <div className="qa-table-wrap">
                        <table className="qa-table">
                            <thead>
                                <tr>
                                    <th>구분</th>
                                    <th>설비명</th>
                                    <th>공칭능력(규격)</th>
                                    <th>수량</th>
                                    <th>용도</th>
                                </tr>
                            </thead>
                            <tbody>
                                {equipmentRows.map((row, i) => (
                                    <tr key={i}>
                                        {i === 0 && <td rowSpan={equipmentRows.length}>검사설비</td>}
                                        <td>{row.name}</td>
                                        <td>{row.spec}</td>
                                        <td>{row.qty}</td>
                                        <td>{row.use}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* 품질보증 설비 */}
                <section className="tech-section">
                    <div className="txt-title-bar">품질보증 설비</div>
                    <div className="qa-list">
                        {qaItems.map((item, i) => (
                            <div className="qa-item" key={i}>
                                <img
                                    src={item.mainImg}
                                    alt={item.title}
                                    className="qa-item-main-img"
                                />
                                <div className="qa-item-body">
                                    <div className="qa-item-title">{item.title}</div>
                                    <ul className="qa-item-desc">
                                        {item.desc.map((d, j) => (
                                            <li key={j}>{d}</li>
                                        ))}
                                    </ul>
                                    {item.subImg && (
                                        <img
                                            src={item.subImg}
                                            alt={`${item.title} 상세`}
                                            className="qa-item-sub-img"
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </PageShell>
        </>
    );
}
