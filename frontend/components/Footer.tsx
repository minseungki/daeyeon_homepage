import { SITE } from "@/config/site";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-logo">
                    <img src="img/home/footer_logo.gif" alt="DAEYOUN Co.,Ltd."/>
                </div>

                <div className="footer-info">
                    <div className="info-row">
                        <span>상호 : {SITE.company.name}</span>
                        <span>대표이사 : {SITE.company.ceo}</span>
                        <span>주소 : {SITE.company.address}</span>
                    </div>
                    <div className="info-row">
                        <span>TEL : {SITE.company.tel}</span>
                        <span>FAX : {SITE.company.fax}</span>
                        <span>E-Mail : <a href={"mailto:" + SITE.company.email}>{SITE.company.email}</a></span>

                    </div>
                </div>

                <p className="copyright">Copyright © DAEYOUN Co.,Ltd. All rights reserved.</p>
            </div>
        </footer>
    );
}
