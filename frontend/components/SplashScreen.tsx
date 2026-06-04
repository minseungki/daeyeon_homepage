"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
    const [visible, setVisible] = useState(false);
    const [hiding, setHiding] = useState(false);

    useEffect(() => {
        if (!sessionStorage.getItem("dy_splash")) {
            sessionStorage.setItem("dy_splash", "1");
            setVisible(true);
            setTimeout(() => setHiding(true), 2800);
            setTimeout(() => setVisible(false), 3700);
        }
    }, []);

    if (!visible) return null;

    return (
        <div className={`splash-overlay${hiding ? " splash-hiding" : ""}`}>
            <div className="splash-content">
                <div className="splash-logo">
                    <img src="img/home/logo.png" alt="DAEYOUN" />
                </div>
                <h1 className="splash-brand">DAEYOUN</h1>
                <p className="splash-tagline">Connecting the World</p>
                <div className="splash-progress">
                    <div className="splash-progress-bar" />
                </div>
            </div>
        </div>
    );
}
