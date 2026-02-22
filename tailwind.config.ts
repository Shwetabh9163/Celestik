import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: {
                    base: "#0a0a2e",
                    deep: "#0d0d35",
                    mid: "#111140",
                    light: "#15154a",
                },
                gold: {
                    DEFAULT: "#E6D3A3",
                    muted: "#CBB27C",
                    border: "rgba(230,211,163,0.3)",
                    glow: "rgba(230,211,163,0.15)",
                },
                panel: "rgba(10,10,40,0.75)",
            },
            fontFamily: {
                logo: ["var(--font-bilbo)", "cursive"],
                heading: ["var(--font-cinzel-deco)", "serif"],
                script: ["var(--font-bilbo)", "cursive"],
                body: ["var(--font-cormorant)", "serif"],
                serif: ["var(--font-cormorant)", "serif"],
                display: ["var(--font-imfell)", "serif"],
            },
            borderRadius: {
                card: "6px",
            },
            animation: {
                float: "float 6s ease-in-out infinite",
                "float-slow": "float 8s ease-in-out infinite",
                "pulse-glow": "pulseGlow 3s ease-in-out infinite",
                grain: "grain 0.5s steps(1) infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-15px)" },
                },
                pulseGlow: {
                    "0%, 100%": { boxShadow: "0 0 15px rgba(230,211,163,0.15)" },
                    "50%": { boxShadow: "0 0 30px rgba(230,211,163,0.35)" },
                },
                grain: {
                    "0%, 100%": { transform: "translate(0,0)" },
                    "10%": { transform: "translate(-5%,-10%)" },
                    "20%": { transform: "translate(-15%,5%)" },
                    "30%": { transform: "translate(7%,-25%)" },
                    "40%": { transform: "translate(-5%,25%)" },
                    "50%": { transform: "translate(-15%,10%)" },
                    "60%": { transform: "translate(15%,0%)" },
                    "70%": { transform: "translate(0%,15%)" },
                    "80%": { transform: "translate(3%,35%)" },
                    "90%": { transform: "translate(-10%,10%)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
