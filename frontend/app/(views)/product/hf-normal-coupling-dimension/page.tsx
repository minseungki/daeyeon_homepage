import type { Metadata } from "next";
import { buildSeoByPath } from "@/lib/seo";
import DefaultPageShell from "@/components/DefaultPageShell";

export const metadata: Metadata = buildSeoByPath("/product/hf-normal-coupling-dimension");

function SizeGrid({ sizes }: { sizes: string[] }) {
    return (
        <div className="size-grid">
            {sizes.map((s) => (
                <span key={s} className="size-chip">{s}</span>
            ))}
        </div>
    );
}

export default function ProductHfNormalCouplingDimensionPage() {
    return (
        <>
            <link rel="stylesheet" href="css/product.css?v=5"/>

            <DefaultPageShell subVisual={{
                title: "HF 일반이음관 주요치수",
                message: "고객과의 약속을 최우선으로 생각하며, 최고의 제품만을 고집하는 기업이 되도록 노력하겠습니다.",
                pageClass: "product"
            }}>
                <section className="info-section">
                    <h2 className="section-title">HF 일반이음관 주요치수</h2>

                    <div className="sub-section">
                        <div className="txt-title-bar">90° Elbow</div>
                        <div className="hf-row">
                            <img src="img/product/hf_img_01.jpg" alt="90° Elbow"/>
                            <div>
                                <p className="size-note">단위 : mm</p>
                                <SizeGrid sizes={[
                                    "32mm","40mm","50mm","63mm","90mm","110mm","160mm","225mm","280mm","315mm"
                                ]}/>
                            </div>
                        </div>
                    </div>

                    <div className="sub-section">
                        <div className="txt-title-bar">45° Elbow</div>
                        <div className="hf-row">
                            <img src="img/product/hf_img_02.jpg" alt="45° Elbow"/>
                            <div>
                                <p className="size-note">단위 : mm</p>
                                <SizeGrid sizes={[
                                    "90mm","110mm","160mm","225mm","280mm","315mm"
                                ]}/>
                            </div>
                        </div>
                    </div>

                    <div className="sub-section">
                        <div className="txt-title-bar">End Cap</div>
                        <div className="hf-row">
                            <img src="img/product/hf_img_03.jpg" alt="End Cap"/>
                            <div>
                                <p className="size-note">단위 : mm</p>
                                <SizeGrid sizes={[
                                    "50mm","63mm","90mm","110mm","160mm","225mm","280mm","315mm"
                                ]}/>
                            </div>
                        </div>
                    </div>

                    <div className="sub-section">
                        <div className="txt-title-bar">TEE</div>
                        <div className="hf-row">
                            <img src="img/product/hf_img_04.jpg" alt="TEE"/>
                            <div>
                                <p className="size-note">단위 : mm</p>
                                <SizeGrid sizes={[
                                    "32×32mm","40×40mm","50×50mm","60×32mm","63×40mm",
                                    "63×63mm","90×50mm","90×63mm","90×90mm",
                                    "110×50mm","110×63mm","110×90mm","110×110mm",
                                    "160×63mm","160×90mm","160×110mm","160×160mm",
                                    "225×63mm","225×90mm","225×110mm","225×160mm","225×250mm",
                                    "280×90mm","280×110mm","280×160mm","280×225mm","280×280mm",
                                    "315×110mm","315×160mm","315×225mm","315×280mm","315×315mm"
                                ]}/>
                            </div>
                        </div>
                    </div>

                    <div className="sub-section">
                        <div className="txt-title-bar">Reducer</div>
                        <div className="hf-row">
                            <img src="img/product/hf_img_05.jpg" alt="Reducer"/>
                            <div>
                                <p className="size-note">단위 : mm</p>
                                <SizeGrid sizes={[
                                    "63×50mm","90×50mm","90×63mm",
                                    "110×50mm","110×63mm","110×90mm",
                                    "160×50mm","160×63mm","160×90mm","160×110mm",
                                    "225×90mm","225×110mm","225×160mm",
                                    "280×110mm","280×160mm","280×225mm",
                                    "315×160mm","315×225mm","315×280mm"
                                ]}/>
                            </div>
                        </div>
                    </div>

                    <div className="sub-section">
                        <div className="txt-title-bar">Flange Adapter</div>
                        <div className="hf-row">
                            <img src="img/product/hf_img_06.jpg" alt="Flange Adapter"/>
                            <div>
                                <p className="size-note">단위 : mm</p>
                                <SizeGrid sizes={[
                                    "63mm","90mm","110mm","160mm","225mm","280mm","315mm","355mm","400mm"
                                ]}/>
                            </div>
                        </div>
                    </div>
                </section>
            </DefaultPageShell>
        </>
    );
}
