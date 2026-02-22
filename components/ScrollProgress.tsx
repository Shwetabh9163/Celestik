"use client";

import { useState, useEffect } from "react";

export default function ScrollProgress() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            setScroll(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="scroll-bar"
            style={{ width: `${scroll}%` }}
            aria-hidden="true"
        />
    );
}
