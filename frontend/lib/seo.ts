import type { Metadata } from "next";
import { SITE } from "@/config/site";

const DEFAULT = {
    title: SITE.name,
    description: SITE.description,
    ogTitle: SITE.name,
    ogDescription: SITE.description,
    ogImage: SITE.defaultOgImage,
};

export function buildSeoByPath(path: string, overrides?: Partial<typeof DEFAULT>): Metadata {
    const v = { ...DEFAULT, ...(overrides ?? {}) };

    const canonical = new URL(path, SITE.baseUrl).toString();
    const ogImageAbs = v.ogImage.startsWith("http")
        ? v.ogImage
        : new URL(v.ogImage, SITE.baseUrl).toString();

    return {
        title: v.title,
        description: v.description,
        openGraph: {
            title: v.ogTitle,
            description: v.ogDescription,
            type: "website",
            url: canonical,
            images: [ogImageAbs],
        },
        alternates: { canonical },
        other: SITE.naverSiteVerification?.trim()
            ? { "naver-site-verification": SITE.naverSiteVerification.trim() }
            : undefined,
    };
}
