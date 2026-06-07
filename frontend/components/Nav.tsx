"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

type NavItem = { href: string; label: string };
type NavGroup = { label: string; items: NavItem[] };

const groups: NavGroup[] = [
    { label: "ABOUT DAEYOUN", items: [
        { href: "/about/index", label: "회사소개" },
        { href: "/about/ceo", label: "CEO 인사말" },
        { href: "/about/history", label: "회사연혁" },
        { href: "/about/organization", label: "조직도" },
        { href: "/about/export", label: "주요수출업체" },
        { href: "/about/location", label: "찾아오시는 길" },
    ]},
    { label: "PRODUCTS", items: [
        {href: "/product/ball-valve-strength", label: "볼밸브의 장점" },
        {href: "/product/ball-valve-dimension", label: "볼밸브 주요치수" },
        {href: "/product/ef-coupling-strength", label: "EF 이음관의 장점" },
        {href: "/product/ef-coupling-dimension", label: "EF 이음관 주요치수" },
        {href: "/product/hf-normal-coupling-dimension", label: "HF 일반이음관 주요치수" },
    ]},
    { label: "TECHNOLOGY", items: [
        { href: "/tech/production-system", label: "생산시스템" },
        { href: "/tech/quality-assurance-system", label: "품질보증시스템" },
        { href: "/tech/certificate", label: "인증서" },
        { href: "/tech/manual", label: "사용설명서" },
    ]},
    { label: "CONTACT DAEYOUN", items: [
        { href: "/contact/information", label: "문의안내" },
        { href: "/contact/catalog", label: "카다로그&승인원" },
    ]},
];

export default function Nav() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openGroup, setOpenGroup] = useState<string | null>(null);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <>
            {/* 데스크탑 GNB */}
            <nav className="nav">
                <ul className="gnb">
                    {groups.map((g) => (
                        <li key={g.label}>
                            <Link href={g.items[0].href}>{g.label}</Link>
                            <ul className="submenu">
                                {g.items.map((it) => {
                                    const active = pathname === it.href;
                                    return (
                                        <li key={it.href}>
                                            <Link
                                                href={it.href}
                                                className={`navLink ${active ? "active" : ""}`}
                                                aria-current={active ? "page" : undefined}
                                            >
                                                {it.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* 모바일 햄버거 버튼 */}
            <button
                className={`hamburger ${mobileOpen ? "open" : ""}`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="메뉴 열기"
            >
                <span /><span /><span />
            </button>

            {/* 모바일 드로어 */}
            {mobileOpen && (
                <div className="mobile-nav">
                    <ul className="mobile-gnb">
                        {groups.map((g) => (
                            <li key={g.label} className="mobile-group">
                                <button
                                    className={`mobile-group-btn ${openGroup === g.label ? "active" : ""}`}
                                    onClick={() => setOpenGroup(openGroup === g.label ? null : g.label)}
                                >
                                    {g.label}
                                    <span className="arrow">{openGroup === g.label ? "▲" : "▼"}</span>
                                </button>
                                {openGroup === g.label && (
                                    <ul className="mobile-submenu">
                                        {g.items.map((it) => (
                                            <li key={it.href}>
                                                <Link
                                                    href={it.href}
                                                    className={pathname === it.href ? "active" : ""}
                                                    onClick={() => setMobileOpen(false)}
                                                >
                                                    {it.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}
