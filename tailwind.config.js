/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // lightPurple: "#D9D7F1",
                // lightYellow: "#FFFDDE",
                // lightGreen: "#E7FBBE",
                // lightPink: "#FFCBCB",

                brightPink: "#FF55BB",
                softOrange: "#FFD3A3",
                paleYellow: "#FCFFB2",
                skyBlue: "#B6EAFA",

                lightGray: "#F1F1F1",
                neonGreen: "#D5FF5E",
            },
            fontFamily: {
                merriweather: ["Merriweather", "serif"],
            },
        },
    },
    plugins: [daisyui],
};
