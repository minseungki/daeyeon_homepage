import "../globals.css";
import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import { SITE } from "@/config/site";
import React from "react";

// 전역 기본값(페이지에서 덮어씀)
export const metadata: Metadata = {
    title: SITE.name,
    description: SITE.description,
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
    const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
    return (
        <html lang="ko">
            <head>
                <base href={base ? `${base}/` : "/"} />
                {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                <script src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APPKEY}&libraries=services&autoload=false`} />
            </head>
            <body>
                <SplashScreen />
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
