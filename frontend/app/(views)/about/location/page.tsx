import type { Metadata } from "next";
import { buildSeoByPath } from "@/lib/seo";
import PageShell from "@/components/DefaultPageShell";
import KakaoMapPage from "@/app/kakao-map/page"
import { SITE } from "@/config/site";

export const metadata: Metadata = buildSeoByPath("/about/location");

export default function AboutLocationPage() {
    return (
        <>
            <link rel="stylesheet" href="css/about.css"/>

            <PageShell subVisual={{
                title: "찾아오시는 길",
                message: "궁금하신 사항은 언제든지 연락 주시면 친절히 안내해 드리겠습니다.",
                pageClass: "about"
            }}>
                <section>
                    <KakaoMapPage />
                    <div className="info-grid">
                        <div className="info-card">
                            <div className="card-icon">📍</div>
                            <h4>Address</h4>
                            <p>{SITE.company.address}</p>
                        </div>
                        <div className="info-card">
                            <div className="card-icon">📞</div>
                            <h4>Contact</h4>
                            <p><span>TEL</span> {SITE.company.tel}</p>
                            <p><span>FAX</span> {SITE.company.fax}</p>
                        </div>
                        <div className="info-card">
                            <div className="card-icon">📧</div>
                            <h4>E-mail / Web</h4>
                            <p>daeyoun@daeyoun.kr</p>
                            <p className="web-url">{SITE.company.email}</p>
                        </div>
                    </div>
                </section>

                <section className="transport">
                    <div className="trans-item">
                        <div className="label">자가용 이용 시</div>
                        <p>아산테크노밸리 일반산업단지 내 위치, '주식회사 대연' 검색</p>
                    </div>
                </section>
            </PageShell>
        </>
    );
}