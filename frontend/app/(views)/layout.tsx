import "../globals.css";
import Head from "@/components/Head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
    return (
        <html lang="ko">
            <head>
                <base href={base ? `${base}/` : "/"} />
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