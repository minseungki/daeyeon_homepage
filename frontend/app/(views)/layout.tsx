import "../globals.css";
import Head from "@/components/Head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <head>
                <Head />
            </head>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}