import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
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