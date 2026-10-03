import type { NextConfig } from "next";

const repo = "daeyeon_homepage";
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = isPages ? `/${repo}` : "/daeyeon-homepage";

// canonical / og:url / sitemap 에 쓰이는 실제 서비스 주소. 도메인 이전 시 SITE_URL 환경변수로 덮어쓴다.
const siteUrl = (process.env.SITE_URL
    ?? (isPages
        ? `https://minseungki.github.io${basePath}`
        : `https://devseungki.duckdns.org${basePath}`)).replace(/\/+$/, "");

const nextConfig: NextConfig = {
  /* config options here */
    trailingSlash: true,
    ...(isPages
        ? { output: "export", basePath, assetPrefix: basePath }
        : { basePath }),
    // lib/asset.ts 가 basePath 를 알 수 있도록 빌드 시 주입
    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
        NEXT_PUBLIC_SITE_URL: siteUrl,
        // public/css 캐시 무효화용 버전 (빌드마다 갱신)
        NEXT_PUBLIC_ASSET_VERSION: Date.now().toString(36),
    },
};

export default nextConfig;
