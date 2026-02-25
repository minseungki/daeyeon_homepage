import type { Metadata } from "next";
import { buildSeoByPath } from "@/lib/seo";
import PageShell from "@/components/DefaultPageShell";

export const metadata: Metadata = buildSeoByPath("/about/export");

export default function AboutExportPage() {
    return (
        <>
            <link rel="stylesheet" href="css/about.css"/>

            <PageShell subVisual={{
                title: "주요수출업체",
                message: "전 세계 30여 개국에 걸쳐 대연의 기술력을 선보입니다.",
                pageClass: "about"
            }}>
                <section className="export-overview">
                    <div className="export-summary">
                        <span className="sub-title">GLOBAL PRESENCE</span>
                        <h3>국내(가스, 수도), 중국, 미국, 호주, 일본, 인도 <br/>외 <span>22개국</span> 수출 진행중</h3>
                    </div>
                    <div className="world-map">
                        <img src="img/about/export_img.gif" alt="세계 지도"/>
                    </div>
                </section>

                <section className="export-list-section">
                    <div className="export-country-grid">

                        <div className="country-item">
                            <div className="country-flag">
                                <img src="img/about/export_list_img_01.gif" alt="대한민국 국기"/>
                            </div>
                            <h4>대한민국</h4>
                            <ul className="company-list">
                                <li><strong>가스</strong>
                                    <p>삼천리도시가스, 서울도시가스, 인천도시가스, SK E&S (코원에너지, 강원도시가스, 충북에너지서비스, 영남에너지, 전북에너지서비스, 전남도시가스, 부산도시가스), 미래엔서해에너지, 참빛도시가스, 예스코, 대화도시가스, 대성에너지, 해양에너지 등</p>
                                </li>
                                <li><strong>수도</strong>
                                    <p>한국수자원공사, 한국환경공단, 한국농어촌공사, 각 전국 지자체 등</p>
                                </li>
                            </ul>
                        </div>

                        <div className="country-item">
                            <div className="country-flag">
                                <img src="img/about/export_list_img_02.gif" alt="중국 국기"/>
                            </div>
                            <h4>중국</h4>
                            <ul className="company-list">
                                <li>Xinao Gas</li>
                                <li>Huarun Gas</li>
                                <li>Kunlun Gas</li>
                                <li>China Gas</li>
                                <li>Hongkong Gas</li>
                                <li>Zhejiang Gas</li>
                                <li>Beijing Gas</li>
                                <li>Shenzhen Gas</li>
                                <li>Fujian Gas</li>
                            </ul>
                        </div>

                        <div className="country-item">
                            <div className="country-flag">
                                <img src="img/about/export_list_img_03.gif" alt="미국 국기"/>
                            </div>
                            <h4>미국</h4>
                            <ul className="company-list">
                                <li>SOUTHERN CALIFORNIA GAS COMPANY</li>
                                <li>PACIFIC GAS</li>
                                <li>ATMOS ENERGY CORPORATION</li>
                                <li>SOUTHWEST GAS CORPORATION</li>
                                <li>CENTERPOINT ENERGY ENTEX</li>
                                <li>NICOR GAS</li>
                                <li>CONSUMERS ENERGY COMPANY</li>
                                <li>PUBLIC SERVICE ELECTRIC & GAS CO</li>
                                <li>PUB SERVICE CO OF COLORADO</li>
                                <li>SPIRE MISSOURI INC</li>
                            </ul>
                        </div>

                        <div className="country-item">
                            <div className="country-flag">
                                <img src="img/about/export_list_img_04.gif" alt="호주 국기"/>
                            </div>
                            <h4>호주</h4>
                            <ul className="company-list">
                                <li>QGC</li>
                                <li>Santos Limited</li>
                                <li>Arrow Energy</li>
                                <li>AGL Energy</li>
                            </ul>
                        </div>

                        <div className="country-item">
                            <div className="country-flag">
                                <img src="img/about/export_list_img_05.gif" alt="일본 국기"/>
                            </div>
                            <h4>일본</h4>
                            <ul className="company-list">
                                <li>Tokyo Gas</li>
                                <li>Osaka Gas</li>
                                <li>Shizuoka Gas (TYO: 9543)</li>
                                <li>Hokkaido Gas (TYO: 9534)</li>
                                <li>Shizuoka Gas (TYO: 9543)</li>
                            </ul>
                        </div>

                        <div className="country-item">
                            <div className="country-flag">
                                <img src="img/about/export_list_img_06.gif" alt="인도 국기"/>
                            </div>
                            <h4>인도</h4>
                            <ul className="company-list">
                                <li>Mahanagar Gas Ltd, Mumbai</li>
                                <li>Indraprastha Gas Ltd, Delhi</li>
                                <li>Gujarat Gas Ltd, Gujarat</li>
                                <li>Maharshtra Natural Gas Ltd, Pune</li>
                                <li>Adani Gas Ltd, Ahmedabad</li>
                            </ul>
                        </div>

                    </div>
                </section>
            </PageShell>
        </>
    );
}