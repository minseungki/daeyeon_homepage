import Script from "next/script";

export default function Head() {
    let appkey = process.env.KAKAO_NEXT_PUBLIC_APPKEY;
    return (
        <>
            <Script
                strategy="beforeInteractive"
                src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${appkey}&libraries=services&autoload=false`}
            ></Script>
        </>
    );
}
