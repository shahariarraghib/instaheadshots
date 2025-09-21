/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: "1rem"
        },
        screens: {
            xs: "450px",
            // => @media (min-width: 450px) { ... }

            sm: "575px",
            // => @media (min-width: 576px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "992px",
            // => @media (min-width: 992px) { ... }

            xl: "1200px",
            // => @media (min-width: 1200px) { ... }

            "2xl": "1400px"
            // => @media (min-width: 1400px) { ... }
        },
        extend: {
            colors: {
                current: "currentColor",
                transparent: "transparent",
                white: "#FFFFFF",
                black: "#1E1D23",
                primary: "black",
                secondary: "#274aff",
                info: "#00B8D9",
                success: "#4e8353",
                warning: "#FFAB00",
                error: "#FF5630",
                "body-color": "#959CB1",
                dark: "#151418",
                secondaryDark: "#1E1D23",
                "primary-gradient-start": "#2295ff ",
                "primary-gradient-end": "#274aff"
            },
            keyframes: {
                shine: {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(100%)" }
                }
            },
            animation: {
                shine: "shine 2s linear infinite"
            }
        }
    },

    plugins: [require("@tailwindcss/typography"), require("daisyui")]
};
