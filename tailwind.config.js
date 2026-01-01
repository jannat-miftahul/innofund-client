/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Premium Pastel Foundation
                lightPurple: "#E0E7FF", // Soft Indigo
                lightYellow: "#FFFBEB", // Warm Ivory
                lightGreen: "#DCFCE7", // Soft Mint
                lightPink: "#FCE7F3", // Pale Rose

                // Vibrant Accents
                brightPink: "#DB2777", // Vibrant Rose
                softOrange: "#FDBA74", // Muted Orange
                paleYellow: "#FEF3C7", // Subtle Amber
                skyBlue: "#BAE6FD", // Light Sky

                // Neutrals & Highlights
                lightGray: "#F3F4F6", // Cool Gray
                neonGreen: "#84CC16", // Sharp Lime

                // New accent colors
                coral: "#F472B6", // Soft Coral Pink
                violet: "#8B5CF6", // Rich Violet
                teal: "#14B8A6", // Modern Teal

                // Dark mode specific colors
                darkBg: "#0F172A", // Slate 900
                darkCard: "#1E293B", // Slate 800
                darkBorder: "#334155", // Slate 700
            },
            fontFamily: {
                merriweather: ["Merriweather", "serif"],
                pacifico: ["Pacifico", "cursive"],
            },
            backgroundColor: {
                dark: {
                    primary: "#0F172A",
                    secondary: "#1E293B",
                    tertiary: "#334155",
                },
            },
        },
    },
    // daisyUI config with light and dark themes
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["light"],
                    primary: "#E11D74", // brightPink
                    secondary: "#10B981", // neonGreen (emerald)
                    accent: "#8B5CF6", // violet
                    neutral: "#F3F4F6", // lightGray
                    "base-100": "#ffffff",
                    "base-200": "#F9FAFB",
                    "base-300": "#F3F4F6",
                },
            },
            {
                dark: {
                    ...require("daisyui/src/theming/themes")["dark"],
                    primary: "#F472B6", // coral (brighter for dark mode)
                    secondary: "#34D399", // lighter emerald for dark mode
                    accent: "#A78BFA", // lighter violet for dark mode
                    neutral: "#1E293B", // slate 800
                    "base-100": "#0F172A", // slate 900
                    "base-200": "#1E293B", // slate 800
                    "base-300": "#334155", // slate 700
                    info: "#7DD3FC",
                    success: "#34D399",
                    warning: "#FBBF24",
                    error: "#FB7185",
                },
            },
        ],
        darkTheme: "dark",
    },
    plugins: [daisyui],
};
