import Link from "next/link";
import Nav from "./Nav";
import { SITE } from "@/config/site";
import { asset } from "@/lib/asset";

export default function Header() {
    return (
        <header className="header">
            <div className="container header-inner">
                <div className="logo">
                    <Link href="/" aria-label={`${SITE.name} 홈으로`}>
                        <img src={asset("img/home/logo.png")} alt="DAEYOUN"/>
                    </Link>
                </div>
                <Nav/>
            </div>
            <div className="nav-bg"></div>
        </header>
    );
}
