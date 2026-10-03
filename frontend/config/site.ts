export const SITE = {
    name: "대연",
    // 사이트가 실제로 서비스되는 주소 (basePath 포함, 끝 슬래시 없음). next.config.ts 에서 주입
    baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    defaultTitle: "(주)대연 | 가스·수도용 PE 볼밸브, EF·HF 이음관 전문 제조",
    description: "(주)대연은 가스용·수도용 PE 볼밸브와 EF(전기융착)·HF(열융착) 이음관을 생산하는 배관 부속 전문 제조기업입니다. KS·ASTM 인증을 바탕으로 국내외에 공급합니다.",
    defaultOgImage: "img/og.jpg",
    naverSiteVerification: "d52800064aa20d156b50dc4835b8a25d4e4ce6dc",
    company: {
        name: "주식회사 대연",
        ceo: "김영식",
        address: "충남 아산시 도고면 도송로 23(오암리)",
        address2: "충남 아산시 도고면 도송로 23",
        tel: "041-546-9966",
        fax: "041-546-9965/9923",
        email: "kevin@daeyoun.kr"
    }
};
