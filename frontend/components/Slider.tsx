"use client";

import { useEffect, useRef, useState } from "react";
// import Link from "next/link"; // 내부 링크면 이거 쓰기

type Slide = {
    src: string;
    href?: string;
};

type SliderProps = {
    slides: Slide[];
    interval?: number;
    title: string;
    description: string;
};

export default function Slider({ slides, interval = 5000, title, description }: SliderProps) {
    const [current, setCurrent] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const stopTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
    };

    const startTimer = () => {
        stopTimer();
        timerRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, interval);
    };

    const changeSlide = (index: number) => {
        setCurrent(index);
        startTimer();
    };

    useEffect(() => {
        if (slides.length <= 1) return;
        startTimer();
        return stopTimer;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slides.length]);

    return (
        <>
        <div className="slider-container">
            {slides.map((s, i) => {
                const active = current === i;

                const slideDiv = (
                    <div
                        className={`slide ${active ? "active" : ""}`}
                        style={{ backgroundImage: `url("${s.src}")` }}
                    />
                );

                const node = s.href ? <a href={s.href}>{slideDiv}</a> : slideDiv;
                // 내부 링크면: const node = s.href ? <Link href={s.href}>{slideDiv}</Link> : slideDiv;

                return <div key={s.src}>{node}</div>;
            })}
        </div>

        <div className="visual-content">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>

        <div className="slider-dots" aria-label="슬라이드 선택">
            {slides.map((_, i) => (
                <span
                    key={i}
                    className={`dot ${current === i ? "active" : ""}`}
                    onClick={() => changeSlide(i)}
                    aria-label={`슬라이드 ${i + 1}`}
                />
            ))}
        </div>
        </>
    );
}