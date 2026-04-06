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
                background: "var(--background)",
                foreground: "var(--foreground)",
                brand: {
                    red: "#CE1126",
                    blue: "#0A3161",
                    gold: "#C5B358",
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
                serif: ['var(--font-playfair)', 'serif'],
                phudu: ['var(--font-phudu)', 'display'],
                hand: ['var(--font-love-ya)', 'cursive'],
            },
        },
    },
    plugins: [],
};
export default config;
