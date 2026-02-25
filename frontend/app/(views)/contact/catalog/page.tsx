import type { Metadata } from "next";
import { buildSeoByPath } from "@/lib/seo";
import PageShell from "@/components/DefaultPageShell";

export const metadata: Metadata = buildSeoByPath("/contact/catalog");

export default function ContactCatalogPage() {
    return (
        <>
            <link rel="stylesheet" href="/css/catalog.css"/>

            <PageShell subVisual={{
                title: "카다로그&승인원",
                message: "대연의 카탈로그 및 승인원 PDF 파일을 제공합니다.",
                pageClass: "contact"
            }}>
                <div className="catalog-grid">
                    <div className="catalog-card">
                        <div className="catalog-thumb">
                            <img src="/img/contact/cardalog_img_01.jpg" alt="대연 국문 카탈로그" />
                        </div>
                        <div className="catalog-info">
                            <div className="info-top">
                                <h4>DAEYOUN 제품 카탈로그</h4>
                                <span className="lang">국문 (KOR)</span>
                            </div>
                            <a href="http://www.daeyoun.kr/en/download/daeyoun_catalogue.pdf" target="_blank" download className="pdf-link">
                                <span>PDF</span>
                                <i className="icon-arrow-up-right">↗</i>
                            </a>
                        </div>
                    </div>

                    <div className="catalog-card">
                        <div className="catalog-thumb">
                            <img src="/img/contact/cardalog_img_02.jpg" alt="대연 영문 카탈로그" />
                        </div>
                        <div className="catalog-info">
                            <div className="info-top">
                                <h4>DAEYOUN 제품 카탈로그</h4>
                                <span className="lang">영문 (ENG)</span>
                            </div>
                            <a href="http://www.daeyoun.kr/en/download/daeyoun_catalogue.pdf" target="_blank"  download className="pdf-link">
                                <span>PDF</span>
                                <i className="icon-arrow-up-right">↗</i>
                            </a>
                        </div>
                    </div>

                    <div className="catalog-card">
                        <div className="catalog-thumb">
                            <img src="/img/contact/cardalog_img_03.jpg" alt="대연 승인원" />
                        </div>
                        <div className="catalog-info">
                            <div className="info-top">
                                <h4>DAEYOUN 승인원</h4>
                                <span className="lang">국문 (KOR)</span>
                            </div>
                            <a href="http://www.daeyoun.kr/download/daeyoun_approvalsheet_2021.pdf" target="_blank" download className="pdf-link">
                                <span>PDF</span>
                                <i className="icon-arrow-up-right">↗</i>
                            </a>
                        </div>
                    </div>
                </div>
            </PageShell>
        </>
    );
}