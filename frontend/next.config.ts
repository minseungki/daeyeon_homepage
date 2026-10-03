import type { NextConfig } from "next";

const repo = "daeyeon_homepage";
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = isPages ? `/${repo}` : "/daeyeon-homepage";

const nextConfig: NextConfig = {
  /* config options here */
    ...(isPages
        ? { output: "export", basePath, assetPrefix: basePath }
        : { basePath, trailingSlash: true }),
    // lib/asset.ts 가 basePath 를 알 수 있도록 빌드 시 주입
    env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
