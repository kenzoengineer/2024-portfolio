/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontSize: {
                bigger: "10rem",
                huge: "12rem",
            },
            fontFamily: {
                sans: ["Helvetica", "sans-serif"],
            },
            colors: {
                "b-red": "#f1522b",
                "b-blue": "#0077b7",
                "b-yellow": "#ffc81c",
                "b-white": "#fffdff",
                "b-black": "#2e252c",
            },
            backgroundImage: {
                stripes:
                    "repeating-linear-gradient(45deg, #2e252c, #2e252c 20px, #00000000 20px,#00000000 40px);",
            },
            boxShadow: {
                hard: "0 0 0 0 #2e252c",
            },
        },
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    // Class name
                    "animation-delay": (value) => {
                        return {
                            "animation-delay": value, // Desired CSS properties here
                        };
                    },
                },
                {
                    values: theme("transitionDelay"),
                },
            );
        }),
    ],
};
