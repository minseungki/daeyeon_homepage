"use client";

import dynamic from "next/dynamic";

const KakaoMapPage = dynamic(() => import("@/app/kakao-map/page"), { ssr: false });

export default function KakaoMap() {
    return <KakaoMapPage />;
}
