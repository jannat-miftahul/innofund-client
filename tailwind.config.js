/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // Premium Pastel Foundation
                lightPurple: "#E0E7FF", // Soft Indigo
                lightYellow: "#FFFBEB", // Warm Ivory
                lightGreen: "#D1FAE5", // Soft Mint (slightly adjusted)
                lightPink: "#FCE7F3", // Pale Rose

                // Vibrant Accents
                brightPink: "#E11D74", // Vibrant Rose (slightly more saturated)
                softOrange: "#FB923C", // Warmer Orange
                paleYellow: "#FEF3C7", // Subtle Amber
                skyBlue: "#7DD3FC", // Brighter Sky Blue

                // Neutrals & Highlights
                lightGray: "#F3F4F6", // Cool Gray
                neonGreen: "#10B981", // Emerald (more sophisticated than lime)

                // New accent colors
                coral: "#F472B6", // Soft Coral Pink
                violet: "#8B5CF6", // Rich Violet
                teal: "#14B8A6", // Modern Teal
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
                    primary: "#E11D74", // brightPink
                    secondary: "#10B981", // neonGreen (emerald)
                    accent: "#8B5CF6", // violet
                    neutral: "#F3F4F6", // lightGray
                    "base-100": "#ffffff",
                },
            },
        ],
    },
    plugins: [daisyui],
};
