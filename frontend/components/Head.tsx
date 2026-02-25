import Script from "next/script";

export default function Head() {
    const appKey = process.env.KAKAO_NEXT_PUBLIC_APPKEY;
    return (
        <Script
            strategy="beforeInteractive"
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&libraries=services&autoload=false`}
        />
    );
}
