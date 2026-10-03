"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// 가로 스크롤이 필요한 표 영역에 data-scroll 속성을 달아 오른쪽 끝 페이드로 "더 있음"을 알려준다.
// data-scroll="more" : 오른쪽에 더 볼 내용이 있음 / "end" : 끝까지 스크롤함
export default function TableScrollHint() {
    const pathname = usePathname();

    useEffect(() => {
        const containers = new Set<HTMLElement>();
        document.querySelectorAll("main table").forEach((table) => {
            let el = table.parentElement;
            while (el && el.tagName !== "MAIN") {
                const ox = getComputedStyle(el).overflowX;
                if (ox === "auto" || ox === "scroll") { containers.add(el); break; }
                el = el.parentElement;
            }
        });

        const update = (el: HTMLElement) => {
            const overflow = el.scrollWidth - el.clientWidth > 2;
            if (!overflow) { el.removeAttribute("data-scroll"); return; }
            const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
            el.setAttribute("data-scroll", atEnd ? "end" : "more");
        };
        const onScroll = (e: Event) => update(e.currentTarget as HTMLElement);
        const updateAll = () => containers.forEach(update);

        containers.forEach((el) => el.addEventListener("scroll", onScroll, { passive: true }));
        window.addEventListener("resize", updateAll);
        updateAll();

        return () => {
            containers.forEach((el) => {
                el.removeEventListener("scroll", onScroll);
                el.removeAttribute("data-scroll");
            });
            window.removeEventListener("resize", updateAll);
        };
    }, [pathname]);

    return null;
}
