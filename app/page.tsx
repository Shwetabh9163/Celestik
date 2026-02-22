import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ScrollProgress from "../components/ScrollProgress";

// Lazy load below-the-fold components
const UnlockStory = dynamic(() => import("../components/UnlockStory"));
const HowItWorks = dynamic(() => import("../components/HowItWorks"));
const AstrologySection = dynamic(() => import("../components/AstrologySection"));
const ContactSection = dynamic(() => import("../components/ContactSection"));
const Footer = dynamic(() => import("../components/Footer"));

export default function Home() {
    return (
        <main>
            <ScrollProgress />
            <Navbar />
            <HeroSection />
            <UnlockStory />
            <HowItWorks />
            <AstrologySection />
            <ContactSection />
            <Footer />
        </main>
    );
}
