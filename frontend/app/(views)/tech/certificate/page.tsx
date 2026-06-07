import type { Metadata } from "next";
import { buildSeoByPath } from "@/lib/seo";
import PageShell from "@/components/DefaultPageShell";

export const metadata: Metadata = buildSeoByPath("/tech/certificate");

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "/daeyeon-homepage";

const certImages = [
    { img: "01", label: "KS인증" },
    { img: "02", label: "KS인증" },
    { img: "03", label: "ASTM (미국 인증)" },
    { img: "04", label: "품질경영시스템 인증\n(ISO 9001)" },
    { img: "05", label: "환경경영시스템 인증\n(ISO 14001)" },
    { img: "06", label: "CE 인증\n(유럽 인증)" },
    { img: "07", label: "TUV EN\n유럽(EN 1555-4)" },
    { img: "08", label: "TUV EN\n유럽(EN12201-4)" },
    { img: "09", label: "기업부설연구소 인정서" },
    { img: "10", label: "세계일류상품인증서" },
    { img: "11", label: "기술혁신형 중소기업\n(INNO-BIZ) 확인서" },
    { img: "12", label: "벤처기업 확인서" },
    { img: "13", label: "소재, 부품, 장비\n전문기업확인서" },
    { img: "14", label: "스마트공장 수준확인서" },
];

const certTableRows: { no: number; category: string; categoryRowspan?: number; std: string; name: string; org: string; note: string }[] = [
    { no:  1, category: "국내", categoryRowspan: 6,  std: "KS M ISO 10933",       name: "KS 가스 배관용 폴리에틸렌(PE) 밸브",                                  org: "한국표준협회",                   note: "" },
    { no:  2, category: "",                          std: "KS M ISO 8085-2",      name: "KS 가스용 폴리에틸렌(PE) 이음관 - 제2부 : 스피곳 이음관",              org: "한국표준협회",                   note: "" },
    { no:  3, category: "",                          std: "KS M ISO 8085-3",      name: "KS 가스용 폴리에틸렌(PE) 이음관 - 제3부 : 전기융착 이음관",            org: "한국표준협회",                   note: "" },
    { no:  4, category: "",                          std: "KS M 3513",            name: "KS 가스용 폴리에틸렌관의 이음관",                                       org: "한국표준협회",                   note: "" },
    { no:  5, category: "",                          std: "KS M 3408-3",          name: "KS 수도용 플라스틱 배관계 - 폴리에틸렌(PE) - 제3부 : 이음관",          org: "한국표준협회",                   note: "" },
    { no:  6, category: "",                          std: "KC",                   name: "KC 위생안전기준 인증서 - 수도용 폴리에틸렌 이음관",                     org: "한국물기술인증원",               note: "" },
    { no:  7, category: "해외", categoryRowspan: 7,  std: "EN 1555-4",            name: "Type test  Gas  ball valve",                                            org: "TUV",                            note: "" },
    { no:  8, category: "",                          std: "EN12201-4",            name: "Type test  Water  ball valve",                                          org: "TUV",                            note: "" },
    { no:  9, category: "",                          std: "EN 1555-4",            name: "CE safety certificate  Gas  ball valve",                                org: "TUV",                            note: "" },
    { no: 10, category: "",                          std: "EN12201-3",            name: "WRAS  Water EF Fitting",                                                org: "WRAS/ UK",                       note: "" },
    { no: 11, category: "",                          std: "ASME B16.40",          name: "Gas  ball valve",                                                       org: "TUV",                            note: "" },
    { no: 12, category: "",                          std: "GB/T 15558.3-2008",    name: "형식시험 검사보고서",                                                   org: "중국국가화학건축재료측정센터",   note: "" },
    { no: 13, category: "",                          std: "GB/T 15558.3-2008",    name: "특종설비형식시험인증서",                                                org: "중국국가화학건축재료측정센터",   note: "" },
    { no: 14, category: "공통", categoryRowspan: 11, std: "ISO 9001:2015",        name: "품질경영시스템 (KS Q ISO 9001:2015 / ISO 9001:2015)",                   org: "한국가스안전공사",               note: "" },
    { no: 15, category: "",                          std: "ISO 14001:2015",       name: "환경경영시스템 (KS I ISO 14001:2015 / ISO 14001:2015)",                 org: "한국가스안전공사",               note: "" },
    { no: 16, category: "",                          std: "EN 1555-3",            name: "Type test  Gas  EF Fitting",                                            org: "TUV",                            note: "" },
    { no: 17, category: "",                          std: "-",                    name: "세계일류상품인증서",                                                    org: "산업통상자원부",                 note: "" },
    { no: 18, category: "",                          std: "-",                    name: "기업부설연구소 인정서",                                                 org: "한국산업기술진흥협회",           note: "" },
    { no: 19, category: "",                          std: "-",                    name: "기술혁신형 중소기업(Inno-Biz) 확인서",                                  org: "중소기업청",                     note: "" },
    { no: 20, category: "",                          std: "-",                    name: "벤처기업 확인서",                                                       org: "기술보증기금",                   note: "" },
    { no: 21, category: "",                          std: "-",                    name: "가스용품제조사업 허가증",                                               org: "충청남도 아산시",                note: "" },
    { no: 22, category: "",                          std: "-",                    name: "소재, 부품, 장비 전문기업확인서",                                       org: "한국산업기술평가관리원",         note: "" },
    { no: 23, category: "",                          std: "-",                    name: "스마트공장 수준확인서",                                                 org: "SRCB",                           note: "Level 1" },
    { no: 24, category: "",                          std: "-",                    name: "뿌리기업 확인서",                                                       org: "국가뿌리산업진흥센터",           note: "" },
];

export default function TechCertificatePage() {
    return (
        <>
            <link rel="stylesheet" href="css/tech.css?v=8"/>

            <PageShell subVisual={{
                title: "인증서",
                message: "고객과의 약속을 최우선으로 생각하며, 최고의 제품만을 고집하는 기업이 되도록 노력하겠습니다.",
                pageClass: "tech"
            }}>
                {/* 인증서 갤러리 */}
                <section className="tech-section">
                    <div className="txt-title-bar">인증서</div>
                    <div className="cert-grid">
                        {certImages.map((c) => (
                            <div className="cert-card" key={c.img}>
                                <img
                                    src={`${BASE}/img/tech/certificate_img_${c.img}.jpg`}
                                    alt={c.label.replace("\n", " ")}
                                />
                                <span>{c.label.split("\n").map((line, i) => (
                                    i === 0 ? line : <><br key={i}/>{line}</>
                                ))}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 인증서 리스트 테이블 */}
                <section className="tech-section">
                    <div className="txt-title-bar">국내 및 해외 인증서 리스트</div>
                    <div className="qa-table-wrap">
                        <table className="qa-table">
                            <thead>
                                <tr>
                                    <th>NO</th>
                                    <th>구분</th>
                                    <th>표준번호</th>
                                    <th>인증명</th>
                                    <th>인증기관</th>
                                    <th>비고</th>
                                </tr>
                            </thead>
                            <tbody>
                                {certTableRows.map((row) => (
                                    <tr key={row.no}>
                                        <td>{row.no}</td>
                                        {row.categoryRowspan ? (
                                            <td rowSpan={row.categoryRowspan}>{row.category}</td>
                                        ) : null}
                                        <td>{row.std}</td>
                                        <td style={{ textAlign: "left" }}>{row.name}</td>
                                        <td>{row.org}</td>
                                        <td>{row.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </PageShell>
        </>
    );
}
