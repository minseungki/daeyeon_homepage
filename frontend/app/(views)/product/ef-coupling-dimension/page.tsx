import type { Metadata } from "next";
import { buildSeoByPath } from "@/lib/seo";
import PageShell from "@/components/DefaultPageShell";
import ProductSection, { SectionType } from "@/components/ProductSection";
import { stylesheet } from "@/lib/asset";
import { config } from "./table";

export const metadata: Metadata = buildSeoByPath("/product/ef-coupling-dimension", {
    title: "EF 이음관 주요치수",
    description: "EF 소켓, 엘보, 레듀셔, 티, 엔드캡, 서비스티, 새들 등 (주)대연 전기융착 이음관의 규격별 치수표입니다.",
});

export default function ProductEfCouplingDimensionPage() {
    return (
        <>
            <link rel="stylesheet" href={stylesheet("product.css")}/>

            <PageShell subVisual={{
                title: "EF 이음관 주요치수",
                message: "고객과의 약속을 최우선으로 생각하며, 최고의 제품만을 고집하는 기업이 되도록 노력하겠습니다.",
                pageClass: "product"
            }}>
                <ProductSection
                    title="전자 소켓, 조합형 소켓"
                    subSections={[
                        {
                            type: SectionType.DEFAULT,
                            title: "EF 소켓",
                            imgSrc: "img/product/ef_02_img_01.jpg",
                            items: [
                                {caption: "KS / ISO EF Coupler Dimensional Table (국내사양)", tableConfig: {header: config.header.ab, body: config.efSocket.kr}},
                                {caption: "ASTM EF Coupler Dimensional Table (미국사양)", tableConfig: {header: config.header.ab, body: config.efSocket.us}},
                                {caption: "JIS EF Coupler Dimensional Table (일본사양)", tableConfig: {header: config.header.ab, body: config.efSocket.jp}},
                            ],
                        },
                        {
                            type: SectionType.DEFAULT,
                            title: "EF 조합형이음관",
                            imgSrc: "img/product/ef_02_img_02.jpg",
                            items: [
                                {caption: "KS / ISO EF Combination Coupler Dimensional Table (국내사양)", tableConfig: {header: config.header.ab, body: config.efCombination}},
                            ]
                        }
                    ]}
                />

                <ProductSection
                    title="엘보"
                    subSections={[
                        {
                            type: SectionType.DEFAULT,
                            title: "E/F 90° 엘보",
                            imgSrc: "img/product/ef_02_img_03.jpg",
                            items: [
                                {caption: "KS / ISO EF 90° Elbow Dimensional Table (국내사양)", tableConfig: {header: config.header.ab, body: config.elbow90.kr}},
                                {caption: "ASTM EF 90° Elbow Dimensional Table (미국사양)", tableConfig: {header: config.header.ab, body: config.elbow90.us}},
                                {caption: "JIS EF 90° Elbow Dimensional Table (일본사양)", tableConfig: {header: config.header.ab, body: config.elbow90.jp}},
                            ],
                        },
                        {
                            type: SectionType.DEFAULT,
                            title: "E/F 45° 엘보",
                            imgSrc: "img/product/ef_02_img_04.jpg",
                            items: [
                                {caption: "KS / ISO EF 45° Elbow Dimensional Table (국내사양)", tableConfig: {header: config.header.ab, body: config.elbow45.kr}},
                                {caption: "ASTM EF 45° Elbow Dimensional Table (미국사양)", tableConfig: {header: config.header.ab, body: config.elbow45.us}},
                                {caption: "JIS EF 45° Elbow Dimensional Table (일본사양)", tableConfig: {header: config.header.ab, body: config.elbow45.jp}},
                            ]
                        }
                    ]}
                />

                <ProductSection
                    title="레듀셔"
                    subSections={[
                        {
                            type: SectionType.MULTI,
                            imgSrc: "img/product/ef_02_img_05.jpg",
                            items: [
                                {caption: "KS / ISO EF Reducer Dimensional Table (국내사양)", isManyTable: true, tableConfig: {header: config.header.abc, body: config.reducer.kr}},
                                {caption: "ASTM EF Reducer Dimensional Table (미국사양)", tableConfig: {header: config.header.abc, body: config.reducer.us}},
                            ],
                        }
                    ]}
                />

                <ProductSection
                    title="엔드캡"
                    subSections={[
                        {
                            type: SectionType.HALF,
                            imgSrc: "img/product/ef_02_img_06.jpg",
                            items: [
                                {caption: "KS / ISO EF End Cap Dimensional Table (국내사양)", tableConfig: {header: config.header.ab, body: config.endCap.kr}},
                                {caption: "ASTM EF End Cap Dimensional Table (미국사양)", tableConfig: {header: config.header.ab, body: config.endCap.us}},
                            ],
                        }
                    ]}
                />

                <ProductSection
                    title="티"
                    subSections={[
                        {
                            type: SectionType.MULTI,
                            imgSrc: "img/product/ef_02_img_07.jpg",
                            items: [
                                {caption: "KS / ISO EF TEE Dimensional Table (국내사양)", isManyTable: true, tableConfig: {header: config.header.abc, body: config.t.kr}},
                                {caption: "ASTM EF TEE Dimensional Table (미국사양)", tableConfig: {header: config.header.abc, body: config.t.us}},
                                {caption: "JIS EF TEE Dimensional Table (일본사양)", tableConfig: {header: config.header.abc, body: config.t.jp}},
                            ],
                        }
                    ]}
                />

                <ProductSection
                    title="서비스티"
                    subSections={[
                        {
                            type: SectionType.MULTI,
                            imgSrc: "img/product/ef_02_img_08.jpg",
                            items: [
                                {caption: "KS / ISO EF Tapping Tee Dimensional Table (국내사양)", isManyTable: true, tableConfig: {header: config.header.abc, body: config.serviceT}},
                            ],
                        }
                    ]}
                />

                <ProductSection
                    title="스톱퍼 새들"
                    subSections={[
                        {
                            type: SectionType.HALF,
                            imgSrc: "img/product/ef_02_img_09.jpg",
                            items: [
                                {caption: "KS / ISO EF Stopper Saddle Dimensional Table (국내사양)", tableConfig: {header: config.header.ab, body: config.stoper.kr1}},
                                {caption: "JIS EF Stopper Saddle Dimensional Table (일본사양)", tableConfig: {header: config.header.ab, body: config.stoper.kr2}},
                            ],
                        }
                    ]}
                />
            </PageShell>
        </>
    );
}
