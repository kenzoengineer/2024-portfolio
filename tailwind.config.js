/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontSize: {
                huge: "12rem",
            },
            fontFamily: {
                sans: ["Helvetica", "sans-serif"],
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
