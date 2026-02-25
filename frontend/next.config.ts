import type { NextConfig } from "next";

const repo = "daeyeon_homepage";
const isPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  /* config options here */
    output: "export",
    ...(isPages
        ? { basePath: `/${repo}`, assetPrefix: `/${repo}` }
        : {}),
};

export default nextConfig;
