import type { Metadata } from "next";
import { buildSeoByPath } from "@/lib/seo";
import DefaultPageShell from "@/components/DefaultPageShell";

export const metadata: Metadata = buildSeoByPath("/product/ef-coupling-dimension");

export default function ProductEfCouplingDimensionPage() {
    return (
        <>
            <link rel="stylesheet" href="css/product.css?v=4"/>

            <DefaultPageShell subVisual={{
                title: "EF 이음관 주요치수",
                message: "고객과의 약속을 최우선으로 생각하며, 최고의 제품만을 고집하는 기업이 되도록 노력하겠습니다.",
                pageClass: "product"
            }}>
                <section className="info-section dim-page">
                    <h2 className="section-title">EF 이음관 주요치수</h2>

                    {/* ── 전자 소켓, 조합형 소켓 ── */}
                    <div className="sub-section">
                        <div className="txt-title-bar">전자 소켓, 조합형 소켓</div>

                        <div className="product-label">EF 소켓</div>
                        <img src="img/product/ef_02_img_01.jpg" alt="EF 소켓" className="box-img"/>

                        <p className="table-caption">KS / ISO EF Coupler Dimensional Table (국내사양)</p>
                        <table className="vertical-table ef-table" style={{ tableLayout: "fixed" }}>
                            <colgroup><col style={{ width: "110px" }}/></colgroup>
                            <thead><tr>
                                <th className="diagonal-header"><span className="left-bottom">SIZE</span><span className="right-top">DIMENSION</span></th>
                                <th>A</th><th>B</th>
                            </tr></thead>
                            <tbody>
                                <tr><td>20mm</td><td>33.1</td><td>76</td></tr>
                                <tr><td>25mm</td><td>39</td><td>78</td></tr>
                                <tr><td>32mm</td><td>47.2</td><td>82</td></tr>
                                <tr><td>40mm</td><td>56</td><td>88</td></tr>
                                <tr><td>50mm</td><td>66</td><td>98</td></tr>
                                <tr><td>63mm</td><td>87</td><td>118</td></tr>
                                <tr><td>75mm</td><td>99.5</td><td>128</td></tr>
                                <tr><td>90mm</td><td>117</td><td>141</td></tr>
                                <tr><td>110mm</td><td>141</td><td>151</td></tr>
                                <tr><td>125mm</td><td>156</td><td>163</td></tr>
                                <tr><td>140mm</td><td>176</td><td>165</td></tr>
                                <tr><td>160mm</td><td>203</td><td>196</td></tr>
                                <tr><td>180mm</td><td>225</td><td>207</td></tr>
                                <tr><td>200mm</td><td>252</td><td>223</td></tr>
                                <tr><td>225mm</td><td>279.8</td><td>260</td></tr>
                                <tr><td>250mm</td><td>312</td><td>258</td></tr>
                                <tr><td>280mm</td><td>352</td><td>276</td></tr>
                                <tr><td>315mm</td><td>391</td><td>300</td></tr>
                                <tr><td>355mm</td><td>440</td><td>318</td></tr>
                                <tr><td>400mm</td><td>493</td><td>330</td></tr>
                                <tr><td>500mm</td><td>617.9</td><td>400</td></tr>
                            </tbody>
                        </table>

                        <p className="table-caption">ASTM EF Coupler Dimensional Table (미국사양)</p>
                        <table className="vertical-table ef-table" style={{ tableLayout: "fixed" }}>
                            <colgroup><col style={{ width: "110px" }}/></colgroup>
                            <thead><tr>
                                <th className="diagonal-header"><span className="left-bottom">SIZE</span><span className="right-top">DIMENSION</span></th>
                                <th>A</th><th>B</th>
                            </tr></thead>
                            <tbody>
                                <tr><td>1/2&quot;CTS</td><td>28</td><td>77</td></tr>
                                <tr><td>3/4&quot;IPS</td><td>44.646</td><td>72</td></tr>
                                <tr><td>1&quot;CTS</td><td>44.464</td><td>73</td></tr>
                                <tr><td>1&quot;IPS</td><td>48.434</td><td>84</td></tr>
                                <tr><td>1¼&quot;IPS</td><td>61</td><td>90</td></tr>
                                <tr><td>2&quot;IPS</td><td>81</td><td>118</td></tr>
                                <tr><td>3&quot;IPS</td><td>115</td><td>143</td></tr>
                                <tr><td>4&quot;IPS</td><td>142</td><td>158</td></tr>
                                <tr><td>6&quot;IPS</td><td>203</td><td>198</td></tr>
                                <tr><td>8&quot;IPS</td><td>261</td><td>230</td></tr>
                                <tr><td>10&quot;IPS</td><td>328</td><td>257</td></tr>
                                <tr><td>12&quot;IPS</td><td>396</td><td>287</td></tr>
                            </tbody>
                        </table>

                        <p className="table-caption">JIS EF Coupler Dimensional Table (일본사양)</p>
                        <table className="vertical-table ef-table" style={{ tableLayout: "fixed" }}>
                            <colgroup><col style={{ width: "110px" }}/></colgroup>
                            <thead><tr>
                                <th className="diagonal-header"><span className="left-bottom">SIZE</span><span className="right-top">DIMENSION</span></th>
                                <th>A</th><th>B</th>
                            </tr></thead>
                            <tbody>
                                <tr><td>30A</td><td>60.4</td><td>88</td></tr>
                                <tr><td>40A</td><td>66.45</td><td>100</td></tr>
                                <tr><td>50A</td><td>83.55</td><td>118</td></tr>
                                <tr><td>65A</td><td>99.6</td><td>128</td></tr>
                                <tr><td>75A</td><td>116.7</td><td>140</td></tr>
                                <tr><td>100A</td><td>144.85</td><td>158</td></tr>
                                <tr><td>125A</td><td>177.1</td><td>166</td></tr>
                                <tr><td>150A</td><td>206.05</td><td>198</td></tr>
                                <tr><td>200A</td><td>273.6</td><td>232</td></tr>
                                <tr><td>250A</td><td>324.6</td><td>254</td></tr>
                            </tbody>
                        </table>

                        <div className="product-label">EF 조합형이음관</div>
                        <img src="img/product/ef_02_img_02.jpg" alt="EF 조합형이음관" className="box-img"/>

                        <p className="table-caption">KS / ISO EF Combination Coupler Dimensional Table (국내사양)</p>
                        <table className="vertical-table ef-table" style={{ tableLayout: "fixed" }}>
                            <colgroup><col style={{ width: "130px" }}/></colgroup>
                            <thead><tr>
                                <th className="diagonal-header"><span className="left-bottom">SIZE</span><span className="right-top">DIMENSION</span></th>
                                <th>A</th><th>B</th>
                            </tr></thead>
                            <tbody>
                                <tr><td>30A x 40mm</td><td>58</td><td>88</td></tr>
                                <tr><td>40A x 50mm</td><td>67</td><td>100</td></tr>
                                <tr><td>50A x 63mm</td><td>83</td><td>117</td></tr>
                                <tr><td>75A x 90mm</td><td>115</td><td>140</td></tr>
                                <tr><td>100A x 110mm</td><td>143</td><td>154</td></tr>
                                <tr><td>150A x 160mm</td><td>212</td><td>202</td></tr>
                                <tr><td>200A x 225mm</td><td>280</td><td>260</td></tr>
                                <tr><td>250A x 280mm</td><td>348</td><td>274</td></tr>
                                <tr><td>300A x 315mm</td><td>390</td><td>270</td></tr>
                                <tr><td>350A x 355mm</td><td>451.1</td><td>328</td></tr>
                            </tbody>
                        </table>
                    </div>

                    {/* ── 엘보 ── */}
                    <div className="sub-section">
                        <div className="txt-title-bar">엘보</div>

                        <div className="product-label">E/F 90° 엘보</div>
                        <img src="img/product/ef_02_img_03.jpg" alt="EF 90도 엘보" className="box-img"/>

                        <p className="table-caption">KS / ISO EF 90° Elbow Dimensional Table (국내사양)</p>
                        <table className="vertical-table ef-table" style={{ tableLayout: "fixed" }}>
                            <colgroup><col style={{ width: "110px" }}/></colgroup>
                            <thead><tr>
                                <th className="diagonal-header"><span className="left-bottom">SIZE</span><span className="right-top">DIMENSION</span></th>
                                <th>A</th><th>B</th>
                            </tr></thead>
                            <tbody>
                                <tr><td>32mm</td><td>47.77</td><td>660.2</td></tr>
                                <tr><td>40mm</td><td>58.43</td><td>71.75</td></tr>
                                <tr><td>50mm</td><td>67.49</td><td>82</td></tr>
                                <tr><td>63mm</td><td>87</td><td>104.09</td></tr>
                                <tr><td>90mm</td><td>116</td><td>134</td></tr>
                                <tr><td>110mm</td><td>141</td><td>155</td></tr>
                                <tr><td>125mm</td><td>157</td><td>167.48</td></tr>
                                <tr><td>160mm</td><td>200.3</td><td>196.05</td></tr>
                                <tr><td>180mm</td><td>227</td><td>215</td></tr>
                                <tr><td>200mm</td><td>258</td><td>230</td></tr>
                                <tr><td>225mm</td><td>277.2</td><td>245</td></tr>
                            </tbody>
                        </table>

                        <p className="table-caption">ASTM EF 90° Elbow Dimensional Table (미국사양)</p>
                        <table className="vertical-table ef-table" style={{ tableLayout: "fixed" }}>
                            <colgroup><col style={{ width: "110px" }}/></colgroup>
                            <thead><tr>
                                <th className="diagonal-header"><span className="left-bottom">SIZE</span><span className="right-top">DIMENSION</span></th>
                                <th>A</th><th>B</th>
                            </tr></thead>
                            <tbody>
                                <tr><td>2&quot;IPS</td><td>8</td><td>140</td></tr>
                                <tr><td>4&quot;IPS</td><td>143</td><td>239</td></tr>
                                <tr><td>6&quot;IPS</td><td>208</td><td>298</td></tr>
                                <tr><td>8&quot;IPS</td><td>276</td><td>373</td></tr>
                                <tr><td>12&quot;IPS</td><td>401</td><td>573</td></tr>
                            </tbody>
                        </table>

                        <p className="table-caption">JIS EF 90° Elbow Dimensional Table (일본사양)</p>
                        <table className="vertical-table ef-table" style={{ tableLayout: "fixed" }}>
                            <colgroup><col style={{ width: "110px" }}/></colgroup>
                            <thead><tr>
                                <th className="diagonal-header"><span className="left-bottom">SIZE</span><span className="right-top">DIMENSION</span></th>
                                <th>A</th><th>B</th>
                            </tr></thead>
                            <tbody>
                                <tr><td>40A</td><td>66.45</td><td>115.23</td></tr>
                                <tr><td>50A</td><td>83.55</td><td>152.28</td></tr>
                                <tr><td>75A</td><td>116.7</td><td>191.85</td></tr>
                                <tr><td>100A</td><td>144.85</td><td>226.93</td></tr>
                            </tbody>
                        </table>

                        <div className="product-label">E/F 45° 엘보</div>
                        <img src="img/product/ef_02_img_04.jpg" alt="EF 45도 엘보" className="box-img"/>

                        <p className="table-caption">KS / ISO EF 45° Elbow Dimensional Table (국내사양)</p>
                        <table className="vertical-table ef-table" style={{ tableLayout: "fixed" }}>
                            <colgroup><col style={{ width: "110px" }}/></colgroup>
                            <thead><tr>
                                <th className="diagonal-header"><span className="left-bottom">SIZE</span><span className="right-top">DIMENSION</span></th>
                                <th>A</th><th>B</th>
                            </tr></thead>
                            <tbody>
                                <tr><td>20mm</td><td>33.1</td><td>76</td></tr>
                                <tr><td>25mm</td><td>39</td><td>78</td></tr>
                                <tr><td>32mm</td><td>47.2</td><td>82</td></tr>
                                <tr><td>40mm</td><td>56</td><td>88</td></tr>
                                <tr><td>50mm</td><td>66</td><td>98</td></tr>
                                <tr><td>63mm</td><td>87</td><td>118</td></tr>
                                <tr><td>75mm</td><td>99.5</td><td>128</td></tr>
                                <tr><td>90mm</td><td>117</td><td>141</td></tr>
                                <tr><td>110mm</td><td>141</td><td>151</td></tr>
                                <tr><td>125mm</td><td>156</td><td>163</td></tr>
                                <tr><td>140mm</td><td>176</td><td>165</td></tr>
                                <tr><td>160mm</td><td>203</td><td>196</td></tr>
                                <tr><td>180mm</td><td>225</td><td>207</td></tr>
                                <tr><td>200mm</td><td>252</td><td>223</td></tr>
                                <tr><td>225mm</td><td>279.8</td><td>260</td></tr>
                                <tr><td>250mm</td><td>312</td><td>258</td></tr>
                                <tr><td>280mm</td><td>352</td><td>276</td></tr>
                                <tr><td>315mm</td><td>391</td><td>300</td></tr>
                                <tr><td>355mm</td><td>440</td><td>318</td></tr>
                                <tr><td>400mm</td><td>493</td><td>330</td></tr>
                                <tr><td>500mm</td><td>617.9</td><td>400</td></tr>
                            </tbody>
                        </table>

                        <p className="table-caption">ASTM EF 45° Elbow Dimensional Table (미국사양)</p>
                        <table className="vertical-table ef-table" style={{ tableLayout: "fixed" }}>
                            <colgroup><col style={{ width: "110px" }}/></colgroup>
                            <thead><tr>
                                <th className="diagonal-header"><span className="left-bottom">SIZE</span><span className="right-top">DIMENSION</span></th>
                                <th>A</th><th>B</th>
                            </tr></thead>
                            <tbody>
                                <tr><td>1/2&quot;CTS</td><td>28</td><td>77</td></tr>
                                <tr><td>3/4&quot;IPS</td><td>44.646</td><td>72</td></tr>
                                <tr><td>1&quot;CTS</td><td>44.464</td><td>73</td></tr>
                                <tr><td>1&quot;IPS</td><td>48.434</td><td>84</td></tr>
                                <tr><td>1¼&quot;IPS</td><td>61</td><td>90</td></tr>
                                <tr><td>2&quot;IPS</td><td>81</td><td>118</td></tr>
                                <tr><td>3&quot;IPS</td><td>115</td><td>143</td></tr>
                                <tr><td>4&quot;IPS</td><td>142</td><td>158</td></tr>
                                <tr><td>6&quot;IPS</td><td>203</td><td>198</td></tr>
                                <tr><td>8&quot;IPS</td><td>261</td><td>230</td></tr>
                                <tr><td>10&quot;IPS</td><td>328</td><td>257</td></tr>
                                <tr><td>12&quot;IPS</td><td>396</td><td>287</td></tr>
                            </tbody>
                        </table>

                        <p className="table-caption">JIS EF 45° Elbow Dimensional Table (일본사양)</p>
                        <table className="vertical-table ef-table" style={{ tableLayout: "fixed" }}>
                            <colgroup><col style={{ width: "110px" }}/></colgroup>
                            <thead><tr>
                                <th className="diagonal-header"><span className="left-bottom">SIZE</span><span className="right-top">DIMENSION</span></th>
                                <th>A</th><th>B</th>
                            </tr></thead>
                            <tbody>
                                <tr><td>30A</td><td>60.4</td><td>88</td></tr>
                                <tr><td>40A</td><td>66.45</td><td>100</td></tr>
                                <tr><td>50A</td><td>83.55</td><td>118</td></tr>
                                <tr><td>65A</td><td>99.6</td><td>128</td></tr>
                                <tr><td>75A</td><td>116.7</td><td>140</td></tr>
                                <tr><td>100A</td><td>144.85</td><td>158</td></tr>
                                <tr><td>125A</td><td>177.1</td><td>166</td></tr>
                                <tr><td>150A</td><td>206.05</td><td>198</td></tr>
                                <tr><td>200A</td><td>273.6</td><td>232</td></tr>
                                <tr><td>250A</td><td>324.6</td><td>254</td></tr>
                            </tbody>
                        </table>
                    </div>

                    {/* ── 레듀셔 ── */}
                    <div className="sub-section">
                        <div className="txt-title-bar">레듀셔</div>
                        <img src="img/product/ef_02_img_05.jpg" alt="EF 레듀셔" className="box-img"/>

                        <p className="table-caption">KS / ISO EF Reducer Dimensional Table (국내사양) — ①</p>
                        <table className="vertical-table" style={{ tableLayout: "fixed" }}>
                            <colgroup><col style={{ width: "110px" }}/></colgroup>
                            <thead><tr>
                                <th className="diagonal-header"><span className="left-bottom">SIZE</span><span className="right-top">DIMENSION</span></th>
                                <th>A</th><th>B</th><th>C</th>
                            </tr></thead>
                            <tbody>
                                <tr><td>25*20</td><td>40</td><td>32</td><td>85</td></tr>
                                <tr><td>32*25</td><td>48.2</td><td>40</td><td>90</td></tr>
                                <tr><td>32*20</td><td>48</td><td>33</td><td>90</td></tr>
                                <tr><td>40*32</td><td>58.5</td><td>48</td><td>95</td></tr>
                                <tr><td>40*25</td><td>58.5</td><td>40</td><td>95</td></tr>
                                <tr><td>40*20</td><td>58.5</td><td>33</td><td>95</td></tr>
                                <tr><td>50*40</td><td>67.5</td><td>58.5</td><td>102.5</td></tr>
                                <tr><td>50*32</td><td>67.5</td><td>48.22</td><td>102.5</td></tr>
                                <tr><td>50*25</td><td>67.5</td><td>40</td><td>104</td></tr>
                                <tr><td>50*20</td><td>67.5</td><td>33</td><td>104</td></tr>
                                <tr><td>63*50</td><td>88.7</td><td>66</td><td>116</td></tr>
                                <tr><td>63*40</td><td>88.7</td><td>58.5</td><td>116</td></tr>
                                <tr><td>63*32</td><td>88.7</td><td>48.22</td><td>116</td></tr>
                                <tr><td>63*25</td><td>88.7</td><td>40</td><td>116</td></tr>
                                <tr><td>63*20</td><td>88.7</td><td>33</td><td>116</td></tr>
                                <tr><td>75*63</td><td>99.4</td><td>87</td><td>130</td></tr>
                                <tr><td>90*75</td><td>117</td><td>99.5</td><td>148</td></tr>
                                <tr><td>90*63</td><td>117</td><td>87</td><td>153</td></tr>
                                <tr><td>90*50</td><td>117</td><td>66</td><td>146</td></tr>
                                <tr><td>90*40</td><td>117</td><td>58.5</td><td>142</td></tr>
                                <tr><td>90*32</td><td>117</td><td>48.22</td><td>142</td></tr>
                            </tbody>
                        </table>

                        <p className="table-caption">KS / ISO EF Reducer Dimensional Table (국내사양) — ②</p>
                        <table className="vertical-table" style={{ tableLayout: "fixed" }}>
                            <colgroup><col style={{ width: "110px" }}/></colgroup>
                            <thead><tr>
                                <th className="diagonal-header"><span className="left-bottom">SIZE</span><span className="right-top">DIMENSION</span></th>
                                <th>A</th><th>B</th><th>C</th>
                            </tr></thead>
                            <tbody>
                                <tr><td>110*90</td><td>144.5</td><td>118.5</td><td>160</td></tr>
                                <tr><td>110*75</td><td>144.5</td><td>99.5</td><td>163</td></tr>
                                <tr><td>110*63</td><td>144.5</td><td>89.5</td><td>165</td></tr>
                                <tr><td>110*50</td><td>144.5</td><td>67.5</td><td>161</td></tr>
                                <tr><td>110*40</td><td>144.5</td><td>58.5</td><td>158</td></tr>
                                <tr><td>125*110</td><td>160</td><td>144.5</td><td>185</td></tr>
                                <tr><td>125*90</td><td>160</td><td>118.5</td><td>183</td></tr>
                                <tr><td>125*63</td><td>160</td><td>89.5</td><td>180</td></tr>
                                <tr><td>160*110</td><td>205</td><td>144.5</td><td>216</td></tr>
                                <tr><td>160*90</td><td>205</td><td>118.5</td><td>216</td></tr>
                                <tr><td>160*63</td><td>205</td><td>87</td><td>202</td></tr>
                                <tr><td>180*160</td><td>225</td><td>203</td><td>250</td></tr>
                                <tr><td>180*125</td><td>225</td><td>159</td><td>253</td></tr>
                                <tr><td>180*90</td><td>225</td><td>116</td><td>248</td></tr>
                                <tr><td>200*180</td><td>250</td><td>225</td><td>248</td></tr>
                                <tr><td>200*160</td><td>250</td><td>203</td><td>243</td></tr>
                                <tr><td>200*110</td><td>250</td><td>140</td><td>243</td></tr>
                                <tr><td>200*90</td><td>250</td><td>115.42</td><td>238</td></tr>
                            </tbody>
                        </table>

                        <p className="table-caption">ASTM EF Reducer Dimensional Table (미국사양)</p>
                        <table className="vertical-table" style={{ tableLayout: "fixed" }}>
                            <colgroup><col style={{ width: "140px" }}/></colgroup>
                            <thead><tr>
                                <th className="diagonal-header"><span className="left-bottom">SIZE</span><span className="right-top">DIMENSION</span></th>
                                <th>A</th><th>B</th><th>C</th>
                            </tr></thead>
                            <tbody>
                                <tr><td>3/4&quot;IPS*1/2&quot;CTS</td><td>40.616</td><td>28</td><td>85</td></tr>
                                <tr><td>1&quot;IPS*1/2&quot;CTS</td><td>48.434</td><td>28</td><td>94</td></tr>
                                <tr><td>1&quot;IPS*3/4&quot;CTS</td><td>48.434</td><td>40.616</td><td>83</td></tr>
                                <tr><td>1¼&quot;IPS*1&quot;IPS</td><td>-</td><td>-</td><td>-</td></tr>
                                <tr><td>4&quot;IPS*2&quot;IPS</td><td>142.45</td><td>82.5</td><td>177</td></tr>
                                <tr><td>6&quot;IPS*4&quot;IPS</td><td>208.174</td><td>142.45</td><td>212</td></tr>
                                <tr><td>12&quot;IPS*6&quot;IPS</td><td>400</td><td>212</td><td>325</td></tr>
                                <tr><td>12&quot;IPS*8&quot;IPS</td><td>398</td><td>278</td><td>319</td></tr>
                            </tbody>
                        </table>
                    </div>

                    {/* ── 엔드캡 ── */}
                    <div className="sub-section">
                        <div className="txt-title-bar">엔드캡</div>
                        <img src="img/product/ef_02_img_06.jpg" alt="EF 엔드캡" className="box-img"/>

                        <p className="table-caption">KS / ISO EF End Cap Dimensional Table (국내사양)</p>
                        <table className="vertical-table ef-table" style={{ tableLayout: "fixed" }}>
                            <colgroup><col style={{ width: "110px" }}/></colgroup>
                            <thead><tr>
                                <th className="diagonal-header"><span className="left-bottom">SIZE</span><span className="right-top">DIMENSION</span></th>
                                <th>A</th><th>B</th>
                            </tr></thead>
                            <tbody>
                                <tr><td>63mm</td><td>87.76</td><td>88.74</td></tr>
                                <tr><td>75mm</td><td>94</td><td>100</td></tr>
                                <tr><td>90mm</td><td>116.86</td><td>111.88</td></tr>
                                <tr><td>110mm</td><td>140</td><td>129.98</td></tr>
                                <tr><td>125mm</td><td>155</td><td>140</td></tr>
                                <tr><td>140mm</td><td>176</td><td>150.22</td></tr>
                                <tr><td>160mm</td><td>200</td><td>165</td></tr>
                                <tr><td>200mm</td><td>255</td><td>217.62</td></tr>
                            </tbody>
                        </table>

                        <p className="table-caption">ASTM EF End Cap Dimensional Table (미국사양)</p>
                        <table className="vertical-table ef-table" style={{ tableLayout: "fixed" }}>
                            <colgroup><col style={{ width: "110px" }}/></colgroup>
                            <thead><tr>
                                <th className="diagonal-header"><span className="left-bottom">SIZE</span><span className="right-top">DIMENSION</span></th>
                                <th>A</th><th>B</th>
                            </tr></thead>
                            <tbody>
                                <tr><td>2&quot;IPS</td><td>84</td><td>92</td></tr>
                                <tr><td>3&quot;IPS</td><td>114.9</td><td>110</td></tr>
                                <tr><td>4&quot;IPS</td><td>142</td><td>130</td></tr>
                                <tr><td>6&quot;IPS</td><td>209</td><td>176</td></tr>
                                <tr><td>8&quot;IPS</td><td>274</td><td>226</td></tr>
                            </tbody>
                        </table>
                    </div>

                    {/* ── 티 ── */}
                    <div className="sub-section">
                        <div className="txt-title-bar">티</div>
                        <img src="img/product/ef_02_img_07.jpg" alt="EF 티" className="box-img"/>

                        <p className="table-caption">KS / ISO EF TEE Dimensional Table (국내사양) — ①</p>
                        <table className="vertical-table" style={{ tableLayout: "fixed" }}>
                            <colgroup><col style={{ width: "110px" }}/></colgroup>
                            <thead><tr>
                                <th className="diagonal-header"><span className="left-bottom">SIZE</span><span className="right-top">DIMENSION</span></th>
                                <th>A</th><th>B</th><th>C</th>
                            </tr></thead>
                            <tbody>
                                <tr><td>63*63</td><td>85.7</td><td>180</td><td>155.85</td></tr>
                                <tr><td>63*50</td><td>85.7</td><td>180</td><td>147.35</td></tr>
                                <tr><td>63*40</td><td>85.7</td><td>180</td><td>141.35</td></tr>
                                <tr><td>63*32</td><td>85.7</td><td>180</td><td>136.35</td></tr>
                                <tr><td>63*25</td><td>85.7</td><td>180</td><td>133.35</td></tr>
                                <tr><td>63*20</td><td>85.7</td><td>180</td><td>133.35</td></tr>
                                <tr><td>75*75</td><td>99.4</td><td>200</td><td>184.7</td></tr>
                                <tr><td>75*63</td><td>99.4</td><td>200</td><td>187.61</td></tr>
                                <tr><td>90*90</td><td>116.8</td><td>230</td><td>208.4</td></tr>
                                <tr><td>90*75</td><td>116.8</td><td>230</td><td>199.4</td></tr>
                                <tr><td>90*63</td><td>116.8</td><td>230</td><td>186.7</td></tr>
                                <tr><td>90*50</td><td>116.8</td><td>230</td><td>178.7</td></tr>
                                <tr><td>90*40</td><td>116.8</td><td>230</td><td>172.7</td></tr>
                                <tr><td>90*32</td><td>116.8</td><td>230</td><td>167.7</td></tr>
                                <tr><td>110*110</td><td>138.4</td><td>270</td><td>239.2</td></tr>
                                <tr><td>110*90</td><td>138.4</td><td>270</td><td>232.2</td></tr>
                                <tr><td>110*75</td><td>138.4</td><td>270</td><td>224.2</td></tr>
                                <tr><td>110*63</td><td>138.4</td><td>270</td><td>217.2</td></tr>
                                <tr><td>110*50</td><td>138.4</td><td>270</td><td>209.2</td></tr>
                                <tr><td>110*40</td><td>138.4</td><td>270</td><td>204.2</td></tr>
                                <tr><td>125*125</td><td>157.47</td><td>310</td><td>268.74</td></tr>
                            </tbody>
                        </table>

                        <p className="table-caption">KS / ISO EF TEE Dimensional Table (국내사양) — ②</p>
                        <table className="vertical-table" style={{ tableLayout: "fixed" }}>
                            <colgroup><col style={{ width: "110px" }}/></colgroup>
                            <thead><tr>
                                <th className="diagonal-header"><span className="left-bottom">SIZE</span><span className="right-top">DIMENSION</span></th>
                                <th>A</th><th>B</th><th>C</th>
                            </tr></thead>
                            <tbody>
                                <tr><td>125*90</td><td>157.47</td><td>310</td><td>268.74</td></tr>
                                <tr><td>125*63</td><td>157.47</td><td>310</td><td>233.74</td></tr>
                                <tr><td>160*160</td><td>200.3</td><td>390</td><td>330.15</td></tr>
                                <tr><td>160*140</td><td>200.3</td><td>390</td><td>331.15</td></tr>
                                <tr><td>160*125</td><td>200.3</td><td>390</td><td>326.15</td></tr>
                                <tr><td>160*110</td><td>200.3</td><td>390</td><td>321.15</td></tr>
                                <tr><td>160*90</td><td>200.3</td><td>390</td><td>316.15</td></tr>
                                <tr><td>160*63</td><td>200.3</td><td>390</td><td>292.15</td></tr>
                                <tr><td>180*180</td><td>227</td><td>380</td><td>363.5</td></tr>
                                <tr><td>200*200</td><td>258.8</td><td>480</td><td>415.4</td></tr>
                                <tr><td>200*180</td><td>258.8</td><td>480</td><td>400.4</td></tr>
                                <tr><td>200*160</td><td>258.8</td><td>480</td><td>395.4</td></tr>
                                <tr><td>200*140</td><td>258.8</td><td>480</td><td>390.4</td></tr>
                                <tr><td>200*125</td><td>258.8</td><td>480</td><td>385.4</td></tr>
                                <tr><td>200*110</td><td>258.8</td><td>480</td><td>380.4</td></tr>
                                <tr><td>200*90</td><td>258.8</td><td>480</td><td>375.4</td></tr>
                                <tr><td>200*63</td><td>258.8</td><td>480</td><td>327.4</td></tr>
                                <tr><td>225*225</td><td>277.2</td><td>500</td><td>448.6</td></tr>
                                <tr><td>225*160</td><td>277.2</td><td>500</td><td>423.6</td></tr>
                                <tr><td>225*110</td><td>277.2</td><td>500</td><td>403.6</td></tr>
                            </tbody>
                        </table>

                        <p className="table-caption">ASTM EF TEE Dimensional Table (미국사양)</p>
                        <table className="vertical-table" style={{ tableLayout: "fixed" }}>
                            <colgroup><col style={{ width: "120px" }}/></colgroup>
                            <thead><tr>
                                <th className="diagonal-header"><span className="left-bottom">SIZE</span><span className="right-top">DIMENSION</span></th>
                                <th>A</th><th>B</th><th>C</th>
                            </tr></thead>
                            <tbody>
                                <tr><td>3/4&quot;IPS</td><td>43.946</td><td>110</td><td>93</td></tr>
                                <tr><td>1&quot;IPS</td><td>50.12</td><td>123</td><td>111.3</td></tr>
                                <tr><td>2&quot;IPS</td><td>83</td><td>173</td><td>157</td></tr>
                                <tr><td>4&quot;IPS*2&quot;IPS</td><td>145</td><td>286</td><td>183</td></tr>
                                <tr><td>4&quot;IPS</td><td>145</td><td>286</td><td>250</td></tr>
                                <tr><td>6&quot;IPS</td><td>205.3</td><td>390</td><td>334.85</td></tr>
                                <tr><td>8&quot;IPS</td><td>274.8</td><td>480</td><td>422.5</td></tr>
                            </tbody>
                        </table>

                        <p className="table-caption">JIS EF TEE Dimensional Table (일본사양)</p>
                        <table className="vertical-table ef-table" style={{ tableLayout: "fixed" }}>
                            <colgroup><col style={{ width: "110px" }}/></colgroup>
                            <thead><tr>
                                <th className="diagonal-header"><span className="left-bottom">SIZE</span><span className="right-top">DIMENSION</span></th>
                                <th>A</th><th>B</th><th>C</th>
                            </tr></thead>
                            <tbody>
                                <tr><td>30A</td><td>60.4</td><td>143</td><td>125.2</td></tr>
                                <tr><td>40A</td><td>66.45</td><td>163</td><td>167.45</td></tr>
                                <tr><td>50A</td><td>83.55</td><td>173</td><td>153.78</td></tr>
                                <tr><td>75A</td><td>116.7</td><td>223</td><td>208.35</td></tr>
                                <tr><td>100A</td><td>144.85</td><td>282</td><td>252.43</td></tr>
                            </tbody>
                        </table>
                    </div>

                    {/* ── 서비스티 ── */}
                    <div className="sub-section">
                        <div className="txt-title-bar">서비스티</div>
                        <img src="img/product/ef_02_img_08.jpg" alt="EF 서비스티" className="box-img"/>

                        <p className="table-caption">KS / ISO EF Tapping Tee Dimensional Table (국내사양) — ①</p>
                        <table className="vertical-table" style={{ tableLayout: "fixed" }}>
                            <colgroup><col style={{ width: "110px" }}/></colgroup>
                            <thead><tr>
                                <th className="diagonal-header"><span className="left-bottom">SIZE</span><span className="right-top">DIMENSION</span></th>
                                <th>A</th><th>B</th><th>C</th>
                            </tr></thead>
                            <tbody>
                                <tr><td>63*40</td><td>125.15</td><td>117</td><td>102</td></tr>
                                <tr><td>63*63</td><td>194.95</td><td>140</td><td>156.65</td></tr>
                                <tr><td>90*40</td><td>128.15</td><td>117</td><td>126</td></tr>
                                <tr><td>90*63</td><td>175.95</td><td>140</td><td>126</td></tr>
                                <tr><td>110*40</td><td>142.45</td><td>117</td><td>156.65</td></tr>
                                <tr><td>110*63</td><td>194.95</td><td>140</td><td>156.65</td></tr>
                                <tr><td>110*90</td><td>213.45</td><td>150</td><td>173</td></tr>
                                <tr><td>160*63</td><td>225.65</td><td>140</td><td>219.72</td></tr>
                                <tr><td>160*90</td><td>239.15</td><td>150</td><td>228</td></tr>
                                <tr><td>160*110</td><td>255.65</td><td>170</td><td>228</td></tr>
                            </tbody>
                        </table>

                        <p className="table-caption">KS / ISO EF Tapping Tee Dimensional Table (국내사양) — ②</p>
                        <table className="vertical-table" style={{ tableLayout: "fixed" }}>
                            <colgroup><col style={{ width: "110px" }}/></colgroup>
                            <thead><tr>
                                <th className="diagonal-header"><span className="left-bottom">SIZE</span><span className="right-top">DIMENSION</span></th>
                                <th>A</th><th>B</th><th>C</th>
                            </tr></thead>
                            <tbody>
                                <tr><td>225*63</td><td>218.05</td><td>140</td><td>255.2</td></tr>
                                <tr><td>225*90</td><td>236.55</td><td>150</td><td>275</td></tr>
                                <tr><td>225*110</td><td>253.05</td><td>170</td><td>275</td></tr>
                                <tr><td>225*160</td><td>334.74</td><td>210</td><td>299</td></tr>
                                <tr><td>280*63</td><td>233</td><td>140</td><td>335.13</td></tr>
                                <tr><td>280*90</td><td>252</td><td>150</td><td>335.13</td></tr>
                                <tr><td>280*110</td><td>268.5</td><td>170</td><td>335.13</td></tr>
                                <tr><td>280*160</td><td>330</td><td>210</td><td>335.13</td></tr>
                                <tr><td>315*63</td><td>235</td><td>140</td><td>356.27</td></tr>
                                <tr><td>315*90</td><td>250</td><td>150</td><td>356.27</td></tr>
                                <tr><td>315*110</td><td>266.5</td><td>170</td><td>356.27</td></tr>
                                <tr><td>315*160</td><td>328</td><td>210</td><td>356.27</td></tr>
                            </tbody>
                        </table>
                    </div>

                    {/* ── 스톱퍼 새들 ── */}
                    <div className="sub-section">
                        <div className="txt-title-bar">스톱퍼 새들</div>
                        <img src="img/product/ef_02_img_09.jpg" alt="EF 스톱퍼 새들" className="box-img"/>

                        <p className="table-caption">KS / ISO EF Stopper Saddle Dimensional Table (국내사양)</p>
                        <table className="vertical-table ef-table" style={{ tableLayout: "fixed" }}>
                            <colgroup><col style={{ width: "110px" }}/></colgroup>
                            <thead><tr>
                                <th className="diagonal-header"><span className="left-bottom">SIZE</span><span className="right-top">DIMENSION</span></th>
                                <th>A</th><th>B</th>
                            </tr></thead>
                            <tbody>
                                <tr><td>110*63</td><td>166</td><td>52</td></tr>
                                <tr><td>160*90</td><td>212</td><td>65</td></tr>
                                <tr><td>225*110</td><td>182</td><td>93</td></tr>
                                <tr><td>280*110</td><td>176</td><td>93</td></tr>
                                <tr><td>315*110</td><td>152</td><td>93</td></tr>
                            </tbody>
                        </table>

                        <p className="table-caption">JIS EF Stopper Saddle Dimensional Table (일본사양)</p>
                        <table className="vertical-table ef-table" style={{ tableLayout: "fixed" }}>
                            <colgroup><col style={{ width: "110px" }}/></colgroup>
                            <thead><tr>
                                <th className="diagonal-header"><span className="left-bottom">SIZE</span><span className="right-top">DIMENSION</span></th>
                                <th>A</th><th>B</th>
                            </tr></thead>
                            <tbody>
                                <tr><td>100A*63</td><td>166</td><td>52</td></tr>
                                <tr><td>150A*90</td><td>212.1</td><td>65</td></tr>
                                <tr><td>200A*110</td><td>182</td><td>93</td></tr>
                                <tr><td>250A*110</td><td>176</td><td>93</td></tr>
                                <tr><td>300A*110</td><td>152</td><td>93</td></tr>
                            </tbody>
                        </table>
                    </div>

                </section>
            </DefaultPageShell>
        </>
    );
}
