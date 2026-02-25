import type { Metadata } from "next";
import { buildSeoByPath } from "@/lib/seo";
import DefaultPageShell from "@/components/DefaultPageShell";

export const metadata: Metadata = buildSeoByPath("/product/hf-normal-coupling-dimension");

export default function ProductHfNormalCouplingDimensionPage() {
    return (
        <>
            <link rel="stylesheet" href="css/product.css"/>

            <DefaultPageShell subVisual={{
                title: "HF 일반이음관 주요치수",
                message: "고객과의 약속을 최우선으로 생각하며, 최고의 제품만을 고집하는 기업이 되도록 노력하겠습니다.",
                pageClass: "product"
            }}>
                <div></div>
            </DefaultPageShell>
        </>
    );
}