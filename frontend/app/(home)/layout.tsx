import "../globals.css";
import type { Metadata } from "next";
import Head from "@/components/Head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/config/site";
import React from "react";

// 전역 기본값(페이지에서 덮어씀)
export const metadata: Metadata = {
    title: SITE.name,
    description: SITE.description,
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
    const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
    return (
        <html lang="ko">
            <head>
                <base href={base ? `${base}/` : "/"} />
                <Head />
            </head>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
