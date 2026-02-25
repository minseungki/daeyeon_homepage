import Link from "next/link";
import Nav from "./Nav";
import { SITE } from "@/config/site";

export default function Header() {
    return (
        <header className="header">
            <div className="container header-inner">
                <h1 className="logo">
                    <Link href="/" aria-label={`${SITE.name} 홈으로`}>
                        <img src="img/home/logo.png" alt="DAEYOUN"/>
                    </Link>
                </h1>
                <Nav/>
            </div>
            <div className="nav-bg"></div>
        </header>
    );
}
