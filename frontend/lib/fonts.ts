import { Noto_Sans_KR } from "next/font/google";

// 빌드 시 Google Fonts 를 내려받아 자체 호스팅한다 (가변 폰트, unicode-range 분할로 필요한 글자만 로드)
export const notoSansKr = Noto_Sans_KR({
    subsets: ["latin"],
    display: "swap",
    preload: false,
    variable: "--font-noto-sans-kr",
});
