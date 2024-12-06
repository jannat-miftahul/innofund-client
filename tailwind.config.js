/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                lightCream: "#FAF6E3",
                paleGreen: "#D8DBBD",
                warmBrown: "#B59F78",
                deepBlue: "#2A3663",
            },
            fontFamily: {
                merriweather: ["Merriweather", "serif"],
            },
        },
    },
    plugins: [daisyui],
};
