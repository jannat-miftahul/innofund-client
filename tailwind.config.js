/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // Premium Pastel Foundation
                lightPurple: "#E0E7FF", // Soft Indigo
                lightYellow: "#FFFBEB", // Warm Ivory
                lightGreen: "#DCFCE7",  // Soft Mint
                lightPink: "#FCE7F3",   // Pale Rose

                // Vibrant Accents
                brightPink: "#DB2777",  // Vibrant Rose
                softOrange: "#FDBA74",  // Muted Orange
                paleYellow: "#FEF3C7",  // Subtle Amber
                skyBlue: "#BAE6FD",     // Light Sky

                // Neutrals & Highlights
                lightGray: "#F3F4F6",   // Cool Gray
                neonGreen: "#84CC16",   // Sharp Lime
            },
            fontFamily: {
                merriweather: ["Merriweather", "serif"],
                pacifico: ["Pacifico", "cursive"],
            },
        },
    },
    // daisyUI config (optional - matches theme to system preference or forces light)
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["light"],
                    primary: "#DB2777",    // brightPink
                    secondary: "#84CC16",  // neonGreen
                    accent: "#FDBA74",     // softOrange
                    neutral: "#F3F4F6",    // lightGray
                    "base-100": "#ffffff",
                },
            },
        ],
    },
    plugins: [daisyui],
};
