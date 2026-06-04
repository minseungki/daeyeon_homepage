import type { NextConfig } from "next";

const repo = "daeyeon_homepage";
const isPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  /* config options here */
    ...(isPages
        ? { output: "export", basePath: `/${repo}`, assetPrefix: `/${repo}` }
        : { basePath: "/daeyeon-homepage", trailingSlash: true }),
};

export default nextConfig;
