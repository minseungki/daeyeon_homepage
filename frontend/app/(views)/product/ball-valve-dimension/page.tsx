import type { Metadata } from "next";
import { buildSeoByPath } from "@/lib/seo";
import DefaultPageShell from "@/components/DefaultPageShell";

export const metadata: Metadata = buildSeoByPath("/product/ball-valve-dimension");

export default function ProductBallValveDimensionPage() {
    return (
        <>
            <link rel="stylesheet" href="/css/product.css"/>

            <DefaultPageShell subVisual={{
                title: "볼밸브 주요치수",
                message: "고객과의 약속을 최우선으로 생각하며, 최고의 제품만을 고집하는 기업이 되도록 노력하겠습니다.",
                pageClass: "product"
            }}>
                <section className="info-section">
                    <h2 className="section-title">가스용, 수도용 PE 볼밸브 주요치수</h2>
                    <div className="sub-section">
                        <h3>ISO · ASTM · JIS 스텐다드 PE 볼 밸브</h3>
                        <img src="/img/product/pe_02_img_01.jpg" className="box-img"/>
                        <table className="vertical-table">
                            <caption>* ISO / KS Standard PE Valve Dimensional Table</caption>
                            <thead>
                            <tr>
                                <th className="diagonal-header">
                                    <span className="left-bottom">SIZE</span>
                                    <span className="right-top">DIMENSON</span>
                                </th>
                                <th>SDR</th>
                                <th>A</th>
                                <th>B</th>
                                <th>C</th>
                                <th>D</th>
                                <th>E</th>
                                <th>L</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>20mm</td>
                                <td rowSpan={21}>11</td>
                                <td>20</td>
                                <td>103</td>
                                <td>100</td>
                                <td>141</td>
                                <td>13.6</td>
                                <td>300</td>
                            </tr>
                            <tr>
                                <td>25mm</td>
                                <td>25</td>
                                <td>103</td>
                                <td>100</td>
                                <td>141</td>
                                <td>18.6</td>
                                <td>300</td>
                            </tr>
                            <tr>
                                <td>32mm</td>
                                <td>32</td>
                                <td>103</td>
                                <td>100</td>
                                <td>141</td>
                                <td>25.6</td>
                                <td>300</td>
                            </tr>
                            <tr>
                                <td>40mm</td>
                                <td>40</td>
                                <td>103</td>
                                <td>100</td>
                                <td>141</td>
                                <td>32.1</td>
                                <td>300</td>
                            </tr>
                            <tr>
                                <td>50mm</td>
                                <td>50</td>
                                <td>103</td>
                                <td>100</td>
                                <td>141</td>
                                <td>40.2</td>
                                <td>300</td>
                            </tr>
                            <tr>
                                <td>63mm</td>
                                <td>63</td>
                                <td>130</td>
                                <td>157</td>
                                <td>222</td>
                                <td>50.7</td>
                                <td>632</td>
                            </tr>
                            <tr>
                                <td>75mm</td>
                                <td>75</td>
                                <td>130</td>
                                <td>182</td>
                                <td>272</td>
                                <td>60.6</td>
                                <td>482</td>
                            </tr>
                            <tr>
                                <td>90mm</td>
                                <td>90</td>
                                <td>160</td>
                                <td>182</td>
                                <td>272</td>
                                <td>72.6</td>
                                <td>700</td>
                            </tr>
                            <tr>
                                <td>110mm</td>
                                <td>110</td>
                                <td>180</td>
                                <td>207</td>
                                <td>322</td>
                                <td>88.8</td>
                                <td>746</td>
                            </tr>
                            <tr>
                                <td>125mm</td>
                                <td>125</td>
                                <td>172</td>
                                <td>207</td>
                                <td>322</td>
                                <td>100.9</td>
                                <td>745</td>
                            </tr>
                            <tr>
                                <td>140mm</td>
                                <td>140</td>
                                <td>178</td>
                                <td>207</td>
                                <td>322</td>
                                <td>113.9</td>
                                <td>746</td>
                            </tr>
                            <tr>
                                <td>160mm</td>
                                <td>160</td>
                                <td>132</td>
                                <td>259</td>
                                <td>427</td>
                                <td>129.2</td>
                                <td>742</td>
                            </tr>
                            <tr>
                                <td>180mm</td>
                                <td>180</td>
                                <td>143</td>
                                <td>259</td>
                                <td>427</td>
                                <td>147.2</td>
                                <td>742</td>
                            </tr>
                            <tr>
                                <td>200mm</td>
                                <td>200</td>
                                <td>154</td>
                                <td>359</td>
                                <td>573</td>
                                <td>161.6</td>
                                <td>815</td>
                            </tr>
                            <tr>
                                <td>225mm</td>
                                <td>225</td>
                                <td>161</td>
                                <td>359</td>
                                <td>573</td>
                                <td>181.8</td>
                                <td>815</td>
                            </tr>
                            <tr>
                                <td>250mm</td>
                                <td>250</td>
                                <td>143</td>
                                <td>359</td>
                                <td>573</td>
                                <td>202.2</td>
                                <td>810</td>
                            </tr>
                            <tr>
                                <td>280mm</td>
                                <td>280</td>
                                <td>151</td>
                                <td>359</td>
                                <td>573</td>
                                <td>226.5</td>
                                <td>805</td>
                            </tr>
                            <tr>
                                <td>315mm</td>
                                <td>315</td>
                                <td>148</td>
                                <td>359</td>
                                <td>573</td>
                                <td>254.8</td>
                                <td>811</td>
                            </tr>
                            <tr>
                                <td>315mm(F)</td>
                                <td>315</td>
                                <td>180</td>
                                <td>408</td>
                                <td>676</td>
                                <td>248</td>
                                <td>956</td>
                            </tr>
                            <tr>
                                <td>355mm</td>
                                <td>355</td>
                                <td>188</td>
                                <td>408</td>
                                <td>676</td>
                                <td>287</td>
                                <td>939</td>
                            </tr>
                            <tr>
                                <td>400mm</td>
                                <td>400</td>
                                <td>223</td>
                                <td>438.5</td>
                                <td>740.5</td>
                                <td>323.4</td>
                                <td>1024</td>
                            </tr>
                            </tbody>
                        </table>

                        <table className="vertical-table">
                            <caption>* ASTM Standard PE Valve Dimensional Table</caption>
                            <thead>
                            <tr>
                                <th className="diagonal-header">
                                    <span className="left-bottom">SIZE</span>
                                    <span className="right-top">DIMENSON</span>
                                </th>
                                <th>A</th>
                                <th>B</th>
                                <th>C</th>
                                <th>D</th>
                                <th>E</th>
                                <th>L</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>2"IPS</td>
                                <td>61</td>
                                <td>224</td>
                                <td>156</td>
                                <td>228</td>
                                <td>46</td>
                                <td>632</td>
                            </tr>
                            <tr>
                                <td>3"IPS</td>
                                <td>89</td>
                                <td>237</td>
                                <td>181</td>
                                <td>272</td>
                                <td>70</td>
                                <td>705</td>
                            </tr>
                            <tr>
                                <td>4"IPS</td>
                                <td>114</td>
                                <td>248</td>
                                <td>206</td>
                                <td>322</td>
                                <td>90</td>
                                <td>746</td>
                            </tr>
                            <tr>
                                <td>6"IPS</td>
                                <td>168</td>
                                <td>201</td>
                                <td>260</td>
                                <td>428</td>
                                <td>133</td>
                                <td>742</td>
                            </tr>
                            <tr>
                                <td>8"IPS</td>
                                <td>219</td>
                                <td>193</td>
                                <td>357</td>
                                <td>571</td>
                                <td>178</td>
                                <td>815</td>
                            </tr>
                            <tr>
                                <td>10"IPS</td>
                                <td>273</td>
                                <td>218</td>
                                <td>398</td>
                                <td>612</td>
                                <td>178</td>
                                <td>815</td>
                            </tr>
                            <tr>
                                <td>12"IPS</td>
                                <td>324</td>
                                <td>236</td>
                                <td>449</td>
                                <td>717</td>
                                <td>248</td>
                                <td>939</td>
                            </tr>
                            <tr>
                                <td>14"IPS</td>
                                <td>356</td>
                                <td>246</td>
                                <td>449</td>
                                <td>717</td>
                                <td>248</td>
                                <td>939</td>
                            </tr>
                            <tr>
                                <td>16"IPS</td>
                                <td>406</td>
                                <td>294</td>
                                <td>464</td>
                                <td>747</td>
                                <td>285</td>
                                <td>1015</td>
                            </tr>
                            </tbody>
                        </table>

                        <div className="split-container">
                            <div className="image-side">
                                <img src="/img/product/pe_02_img_02.jpg" alt="PE 볼 밸브 치수 도면" className="box-img"/>
                            </div>

                            <table className="vertical-table">
                                <caption>* JIS Standard PE Valve Dimensional Table</caption>
                                <thead>
                                <tr>
                                    <th className="diagonal-header">
                                        <span className="left-bottom">SIZE</span>
                                        <span className="right-top">DIMENSON</span>
                                    </th>
                                    <th>A</th>
                                    <th>B</th>
                                    <th>L</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>30A</td>
                                    <td>84.4</td>
                                    <td>152.4</td>
                                    <td>328</td>
                                </tr>
                                <tr>
                                    <td>50A</td>
                                    <td>117.4</td>
                                    <td>212.9</td>
                                    <td>545</td>
                                </tr>
                                <tr>
                                    <td>75A</td>
                                    <td>127.9</td>
                                    <td>262.9</td>
                                    <td>606</td>
                                </tr>
                                <tr>
                                    <td>100A</td>
                                    <td>140.4</td>
                                    <td>312.9</td>
                                    <td>700.4</td>
                                </tr>
                                <tr>
                                    <td>150A</td>
                                    <td>171.2</td>
                                    <td>422.4</td>
                                    <td>1026</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="sub-section">
                        <h3>NO - 퍼지 타입 PE 볼 밸브</h3>
                        <img src="/img/product/pe_02_img_03.jpg" className="box-img"/>
                        <table className="vertical-table">
                            <caption>* ISO / KS No-Purge type PE Valve Dimensional Table</caption>
                            <colgroup>
                                <col style={{ width: "40%" }}/>
                                <col style={{ width: "15%" }}/>
                                <col style={{ width: "15%" }}/>
                                <col style={{ width: "15%" }}/>
                                <col style={{ width: "15%" }}/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th className="diagonal-header">
                                    <span className="left-bottom">SIZE</span>
                                    <span className="right-top">DIMENSON</span>
                                </th>
                                <th>A</th>
                                <th>B</th>
                                <th>L</th>
                                <th>Remark / 비고</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>63mm</td>
                                <td>688</td>
                                <td>785</td>
                                <td>632</td>
                                <td rowSpan={4}>Without gear<br/>operator<br/>일반타입</td>
                            </tr>
                            <tr>
                                <td>90mm</td>
                                <td>699.5</td>
                                <td>835</td>
                                <td>700</td>
                            </tr>
                            <tr>
                                <td>110mm</td>
                                <td>713</td>
                                <td>883.5</td>
                                <td>746</td>
                            </tr>
                            <tr>
                                <td>160mm</td>
                                <td>752</td>
                                <td>1001</td>
                                <td>742</td>
                            </tr>
                            <tr>
                                <td>225mm</td>
                                <td>900.5</td>
                                <td>1227</td>
                                <td>815</td>
                                <td rowSpan={6}>With gear<br/>operator<br/>기어타입</td>
                            </tr>
                            <tr>
                                <td>280mm</td>
                                <td>874</td>
                                <td>1227</td>
                                <td>820</td>
                            </tr>
                            <tr>
                                <td>315mm</td>
                                <td>855.5</td>
                                <td>1227</td>
                                <td>811</td>
                            </tr>
                            <tr>
                                <td>315mm (F)</td>
                                <td>906</td>
                                <td>1331.5</td>
                                <td>956</td>
                            </tr>
                            <tr>
                                <td>355mm</td>
                                <td>886</td>
                                <td>1331.5</td>
                                <td>939</td>
                            </tr>
                            <tr>
                                <td>400mm</td>
                                <td>884.5</td>
                                <td>1386.5</td>
                                <td>1024</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="sub-section">
                        <h3>1 - 퍼지 타입 PE 볼 밸브</h3>
                        <img src="/img/product/pe_02_img_04.jpg" className="box-img"/>
                        <table className="vertical-table">
                            <caption>* ISO / KS No-Purge type PE Valve Dimensional Table</caption>
                            <colgroup>
                                <col style={{ width: "40%" }}/>
                                <col style={{ width: "10%" }}/>
                                <col style={{ width: "10%" }}/>
                                <col style={{ width: "10%" }}/>
                                <col style={{ width: "10%" }}/>
                                <col style={{ width: "20%" }}/>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th className="diagonal-header">
                                        <span className="left-bottom">SIZE</span>
                                        <span className="right-top">DIMENSON</span>
                                    </th>
                                    <th>A</th>
                                    <th>B</th>
                                    <th>C</th>
                                    <th>L</th>
                                    <th>Remark / 비고</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>63mm</td>
                                    <td>688</td>
                                    <td>785</td>
                                    <td>143.5</td>
                                    <td>632</td>
                                    <td rowSpan={4}>Without gear<br/>operator<br/>일반타입</td>
                                </tr>
                                <tr>
                                    <td>90mm</td>
                                    <td>699.5</td>
                                    <td>835</td>
                                    <td>143.5</td>
                                    <td>700</td>
                                </tr>
                                <tr>
                                    <td>110mm</td>
                                    <td>713</td>
                                    <td>883.5</td>
                                    <td>143.5</td>
                                    <td>746</td>
                                </tr>
                                <tr>
                                    <td>160mm</td>
                                    <td>752</td>
                                    <td>1001</td>
                                    <td>181.9</td>
                                    <td>742</td>
                                </tr>
                                <tr>
                                    <td>225mm</td>
                                    <td>900.5</td>
                                    <td>1227</td>
                                    <td>204.5</td>
                                    <td>815</td>
                                    <td rowSpan={6}>With gear<br/>operator<br/>기어타입</td>
                                </tr>
                                <tr>
                                    <td>280mm</td>
                                    <td>874</td>
                                    <td>1227</td>
                                    <td>204.5</td>
                                    <td>820</td>
                                </tr>
                                <tr>
                                    <td>315mm</td>
                                    <td>855.5</td>
                                    <td>1227</td>
                                    <td>204.5</td>
                                    <td>811</td>
                                </tr>
                                <tr>
                                    <td>315mm (F)</td>
                                    <td>906</td>
                                    <td>1331.5</td>
                                    <td>235</td>
                                    <td>956</td>
                                </tr>
                                <tr>
                                    <td>355mm</td>
                                    <td>886</td>
                                    <td>1331.5</td>
                                    <td>235</td>
                                    <td>939</td>
                                </tr>
                                <tr>
                                    <td>400mm</td>
                                    <td>884.5</td>
                                    <td>1386.5</td>
                                    <td>235</td>
                                    <td>1024</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="sub-section">
                    <h3>2 - 퍼지 타입 PE 볼 밸브</h3>
                    <img src="/img/product/pe_02_img_05.jpg" className="box-img"/>
                    <table className="vertical-table">
                        <caption>* ISO / KS 2-Purge type PE Valve Dimensional Table</caption>
                        <colgroup>
                            <col style={{ width: "30%" }}/>
                            <col style={{ width: "10%" }}/>
                            <col style={{ width: "10%" }}/>
                            <col style={{ width: "10%" }}/>
                            <col style={{ width: "10%" }}/>
                            <col style={{ width: "10%" }}/>
                            <col style={{ width: "20%" }}/>
                        </colgroup>
                        <thead>
                            <tr>
                                <th className="diagonal-header">
                                    <span className="left-bottom">SIZE</span>
                                    <span className="right-top">DIMENSON</span>
                                </th>
                                <th>A</th>
                                <th>B</th>
                                <th>C</th>
                                <th>D</th>
                                <th>L</th>
                                <th>Remark / 비고</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>63mm</td>
                                <td>688</td>
                                <td>785</td>
                                <td>287</td>
                                <td>383</td>
                                <td>632</td>
                                <td rowSpan={4}>Without gear<br/>operator<br/>일반타입</td>
                            </tr>
                            <tr>
                                <td>90mm</td>
                                <td>699.5</td>
                                <td>835</td>
                                <td>287</td>
                                <td>383</td>
                                <td>700</td>
                            </tr>
                            <tr>
                                <td>110mm</td>
                                <td>713</td>
                                <td>883.5</td>
                                <td>287</td>
                                <td>383</td>
                                <td>746</td>
                            </tr>
                            <tr>
                                <td>160mm</td>
                                <td>752</td>
                                <td>1001</td>
                                <td>382</td>
                                <td>479</td>
                                <td>742</td>
                            </tr>
                            <tr>
                                <td>225mm</td>
                                <td>900.5</td>
                                <td>1227</td>
                                <td>409</td>
                                <td>550</td>
                                <td>815</td>
                                <td rowSpan={6}>With gear<br/>operator<br/>기어타입</td>
                            </tr>
                            <tr>
                                <td>280mm</td>
                                <td>874</td>
                                <td>1227</td>
                                <td>409</td>
                                <td>550</td>
                                <td>820</td>
                            </tr>
                            <tr>
                                <td>315mm</td>
                                <td>855.5</td>
                                <td>1227</td>
                                <td>409</td>
                                <td>550</td>
                                <td>811</td>
                            </tr>
                            <tr>
                                <td>315mm (F)</td>
                                <td>906</td>
                                <td>1331.5</td>
                                <td>470</td>
                                <td>600.5</td>
                                <td>956</td>
                            </tr>
                            <tr>
                                <td>355mm</td>
                                <td>886</td>
                                <td>1331.5</td>
                                <td>470</td>
                                <td>600.5</td>
                                <td>939</td>
                            </tr>
                            <tr>
                                <td>400mm</td>
                                <td>884.5</td>
                                <td>1386.5</td>
                                <td>470</td>
                                <td>600.5</td>
                                <td>1024</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>

                    <div className="sub-section">
                <h3>PE 볼 밸브 (Short type)</h3>
                <img src="/img/product/pe_02_img_06.jpg" className="box-img"/>
                <table className="vertical-table font-xx-small">
                    <caption>* KS 볼 밸브 (꼬마타입)</caption>
                    <thead>
                    <tr>
                        <th className="diagonal-header">
                            <span className="left-bottom">SIZE</span>
                            <span className="right-top">DIMENSON</span>
                        </th>
                        <th>63mm</th>
                        <th>90mm</th>
                        <th>110mm</th>
                        <th>160mm</th>
                        <th>225mm</th>
                        <th>280mm</th>
                        <th>315mm</th>
                        <th>315mm(F)</th>
                        <th>355mm</th>
                        <th>400mm</th>
                        <th>허용공차</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>높이</td>
                        <td>456mm</td>
                        <td>506mm</td>
                        <td>550mm</td>
                        <td>653.5mm</td>
                        <td>871mm</td>
                        <td>871mm</td>
                        <td>871mm</td>
                        <td>973.5mm</td>
                        <td>973.5mm</td>
                        <td>1003.5mm</td>
                        <td>±10mm</td>
                    </tr>
                    </tbody>
                </table>
            </div>

                </section>
            </DefaultPageShell>
        </>
    )
;
}