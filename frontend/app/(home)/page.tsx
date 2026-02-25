import YouTubeEmbed from "@/components/YouTubeEmbed";
import { SITE } from "@/config/site";
import Slider from "@/components/Slider";
import KakaoMapPage from "@/app/kakao-map/page"

export default function Home() {
    const slides = [
        { src: "/img/home/banner/visual_banner_01.jpg", alt: "배너 1" },
        { src: "/img/home/banner/visual_banner_02.jpg", alt: "배너 2" },
        { src: "/img/home/banner/visual_banner_03.jpg", alt: "배너 3" },
        { src: "/img/home/banner/visual_banner_04.jpg", alt: "배너 3" },
        { src: "/img/home/banner/visual_banner_05.jpg", alt: "배너 3" },
    ];
    const title = "Connecting the World";
    const description = "대연은 안전과 혁신, 신뢰를 통해 세상을 이어줍니다.";

  return (
      <>
          <link rel="stylesheet" href="/css/main.css"/>
          <section className="main-visual">
              <Slider slides={slides} interval={5000} title={title} description={description}/>
          </section>
          <section className="products">
              <div className="container">
                  <h3 className="section-title">OUR SOLUTIONS</h3>
                  <p className="section-desc">축적된 기술과 풍부한 경험을 바탕으로 안전하고 완벽한 제품을 생산 공급하기 위하여 노력하겠습니다.</p>
                  <div className="product-grid">
                      <div className="product-item">
                          <div className="product-img-box"><img src="/img/home/solution/content_02_list_01.jpg" alt="PE 볼밸브"/></div>
                          <div className="product-info"><h4>PE 볼밸브</h4><p>최고의 기밀성과 내구성을 자랑하는 밸브 솔루션</p></div>
                      </div>
                      <div className="product-item">
                          <div className="product-img-box"><img src="/img/home/solution/content_02_list_02.jpg" alt="EF 이음관"/></div>
                          <div className="product-info"><h4>EF 이음관</h4><p>정밀한 시공과 안전한 연결을 보장하는 이음 부속</p></div>
                      </div>
                      <div className="product-item">
                          <div className="product-img-box"><img src="/img/home/solution/content_02_list_03.jpg" alt="PE 볼밸브"/></div>
                          <div className="product-info"><h4>PE 볼밸브</h4><p>다양한 규격과 규제에 최적화된 고품질 밸브</p></div>
                      </div>
                  </div>
                  <div className="btn-wrap"><a href="#" className="btn-detail">더 알아보기</a></div>
              </div>
          </section>
          <section className="about-video">
              <div className="container">
                  <h3 className="section-title">ABOUT DAEYOUN</h3>
                  <p className="section-desc">
                      고객과의 약속을 최우선으로 생각하며, 최고의 제품만을 고집하는 기업이 되도록 노력하겠습니다.
                  </p>

                  <div className="video-wrapper">
                      <YouTubeEmbed videoId="bd9yLroxno8" title="DAEYOUN 홍보 영상"/>
                  </div>
              </div>
          </section>
          <section className="contact-us">
              <div className="container">
                  <h3 className="section-title">CONTACT US</h3>
                  <div className="contact-content">
                      <div className="contact-info-box">
                          <div className="info-item">
                              <span className="label">본사</span>
                              <p className="value">{SITE.company.address}</p>
                          </div>
                          <div className="info-group">
                              <div className="info-item">
                                  <span className="label">Tel</span>
                                  <p className="value">{SITE.company.tel}</p>
                              </div>
                              <div className="info-item">
                                  <span className="label">Fax</span>
                                  <p className="value">{SITE.company.fax}</p>
                              </div>
                          </div>
                      </div>
                      <KakaoMapPage />
                  </div>
              </div>
          </section>
      </>
  );
}
