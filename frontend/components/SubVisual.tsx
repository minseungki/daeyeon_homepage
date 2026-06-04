type subVisualProps = {
    title: string;
    message: string;
    pageClass: String;
};

export default function SubVisual({title, message, pageClass} : subVisualProps) {
    return (
        <>
            <style>{`
            .sub-visual {
                height: 450px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                text-align: center;
                padding: 0 20px;
            }

            .sub-visual-inner h2 { font-size: 50px; font-weight: 700; letter-spacing: 5px; margin-bottom: 15px; }
            .sub-visual-inner p { font-size: 18px; font-weight: 300; opacity: 0.8; word-break: keep-all; }

            @media (max-width: 768px) {
                .sub-visual { height: 280px; }
                .sub-visual-inner h2 { font-size: 28px; letter-spacing: 2px; margin-bottom: 10px; }
                .sub-visual-inner p { font-size: 13px; }
            }
            
            .sub-visual.about {
                background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('img/about/company_bg.jpg') no-repeat center/cover;
            }
            
            .sub-visual.product {
                background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('img/product/visual_products.jpg') no-repeat center/cover;
            }
            
            .sub-visual.tech {
                background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('img/tech/visual_technology.jpg') no-repeat center/cover;
            }
            
            .sub-visual.contact {
                background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('img/contact/visual_contact.jpg') no-repeat center/cover;
            }
            
            `}</style>
            <section className={`sub-visual ${pageClass ?? ""}`.trim()}>
                <div className="sub-visual-inner">
                    <h2>{title}</h2>
                    <p>{message}</p>
                </div>
            </section>
        </>
    );
}