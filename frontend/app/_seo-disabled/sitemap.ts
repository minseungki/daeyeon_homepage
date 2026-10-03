// TODO: 정식 오픈 시 app/sitemap.ts 로 옮기고 주석 해제 (검색 노출 방지를 위해 비활성화)
// import type { MetadataRoute } from "next";
// import { absoluteUrl } from "@/lib/seo";
// 
// export const dynamic = "force-static";
// 
// const paths = [
//     "/",
//     "/about/index", "/about/ceo", "/about/history", "/about/organization", "/about/export", "/about/location",
//     "/product/ball-valve-strength", "/product/ball-valve-dimension",
//     "/product/ef-coupling-strength", "/product/ef-coupling-dimension",
//     "/product/hf-normal-coupling-dimension",
//     "/tech/production-system", "/tech/quality-assurance-system", "/tech/certificate", "/tech/manual",
//     "/contact/information", "/contact/catalog",
// ];
// 
// export default function sitemap(): MetadataRoute.Sitemap {
//     return paths.map((path) => ({
//         url: absoluteUrl(path),
//         changeFrequency: "monthly",
//         priority: path === "/" ? 1 : 0.7,
//     }));
// }
