import type { Metadata } from "next";
import { SITE } from "@/config/site";

// TODO: 정식 오픈 시 canonical / og 관련 주석 해제 (검색 노출 방지를 위해 비활성화)
//  - app/_seo-disabled/ 의 robots.ts, sitemap.ts 도 app/ 으로 옮기고 주석 해제

// path("/about/ceo") -> "https://example.com/base/about/ceo/" (trailingSlash: true 와 일치)
export function absoluteUrl(path: string): string {
    const clean = path.replace(/^\/+|\/+$/g, "");
    return `${SITE.baseUrl}/${clean ? `${clean}/` : ""}`;
}

// const ogImage = `${SITE.baseUrl}/${SITE.defaultOgImage}`;

// 루트 레이아웃 공통 메타데이터. 페이지의 title 은 template 으로 "제목 | (주)대연" 이 된다.
export const rootMetadata: Metadata = {
    // metadataBase: new URL(`${SITE.baseUrl}/`),
    title: { default: SITE.defaultTitle, template: `%s | (주)${SITE.name}` },
    description: SITE.description,
    // openGraph: {
    //     type: "website",
    //     locale: "ko_KR",
    //     siteName: `(주)${SITE.name}`,
    //     title: SITE.defaultTitle,
    //     description: SITE.description,
    //     url: absoluteUrl("/"),
    //     images: [{ url: ogImage, width: 1200, height: 630 }],
    // },
    // alternates: { canonical: absoluteUrl("/") },
    other: SITE.naverSiteVerification?.trim()
        ? { "naver-site-verification": SITE.naverSiteVerification.trim() }
        : undefined,
};

export function buildSeoByPath(path: string, { title, description }: { title: string; description: string }): Metadata {
    // const url = absoluteUrl(path);
    return {
        title,
        description,
        // openGraph: {
        //     ...rootMetadata.openGraph,
        //     title: `${title} | (주)${SITE.name}`,
        //     description,
        //     url,
        // },
        // alternates: { canonical: url },
    };
}
