import type { Metadata } from "next";
import { buildSeoByPath } from "@/lib/seo";
import PageShell from "@/components/DefaultPageShell";

export const metadata: Metadata = buildSeoByPath("/tech/manual");

export default function TechManualPage() {
    return (
        <>
            <link rel="stylesheet" href="css/tech.css"/>

            <PageShell subVisual={{
                title: "사용설명서",
                message: "고객과의 약속을 최우선으로 생각하며, 최고의 제품만을 고집하는 기업이 되도록 노력하겠습니다.",
                pageClass: "tech"
            }}>
                <div></div>
            </PageShell>
        </>
    );
}