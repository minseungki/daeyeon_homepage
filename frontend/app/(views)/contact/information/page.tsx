import type { Metadata } from "next";
import { buildSeoByPath } from "@/lib/seo";
import PageShell from "@/components/DefaultPageShell";

export const metadata: Metadata = buildSeoByPath("/contact/information");

export default function ContactInformationPage() {
    return (
        <>
            <link rel="stylesheet" href="/css/contact.css"/>

            <PageShell subVisual={{
                title: "문의안내",
                message: "(주)대연은 고객의 목소리에 항상 귀를 기울이고 있습니다.",
                pageClass: "contact"
            }}>
                <div className="container-contact">
                    <div className="row row-3">
                        <div className="main-card">
                            <div className="card-inner">
                                <span className="tag">대표번호</span>
                                <h4><a className="contact-link" href="tel:041-546-9966">041-546-9966</a></h4>
                            </div>
                        </div>

                        <div className="main-card">
                            <div className="card-inner">
                                <span className="tag">팩스</span>
                                <h4>041-546-9965 / 9923</h4>
                            </div>
                        </div>

                        <div className="main-card">
                            <div className="card-inner">
                                <span className="tag">본사 주소</span>
                                <h4>충청남도 아산시 도고면 도송로 23 (오암리)</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-contact">
                    <div className="row row-2">
                        <div className="main-card">
                            <div className="card-inner">
                                <span className="tag">국내영업</span>
                                <h4>가스 / 수도</h4>

                                <div className="contact-list">
                                    <a href="mailto:mgmin@daeyoun.kr">mgmin@daeyoun.kr</a>
                                    <a href="mailto:djsin1@daeyoun.kr">djsin1@daeyoun.kr</a>
                                </div>
                            </div>
                        </div>

                        <div className="main-card">
                            <div className="card-inner">
                                <span className="tag">해외영업</span>
                                <h4>Global Sales</h4>

                                <div className="contact-list">
                                    <a href="mailto:kevin@daeyoun.kr">kevin@daeyoun.kr</a>
                                    <a href="mailto:shkim@daeyoun.kr">shkim@daeyoun.kr</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageShell>
        </>
    );
}