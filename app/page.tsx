"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import UnlockStory from "../components/UnlockStory";
import HowItWorks from "../components/HowItWorks";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const h = () => {
            const total = document.documentElement.scrollHeight - window.innerHeight;
            setScroll(total > 0 ? (window.scrollY / total) * 100 : 0);
        };
        window.addEventListener("scroll", h, { passive: true });
        return () => window.removeEventListener("scroll", h);
    }, []);

    return (
        <main>
            <div className="scroll-bar" style={{ width: `${scroll}%` }} />
            <Navbar />
            <HeroSection />
            <UnlockStory />
            <HowItWorks />
            <ContactSection />
            <Footer />
        </main>
    );
}
