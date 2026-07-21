/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FF7A00",
                secondary: "#0F172A",
                card: "#111827",
                text: "#FFFFFF",
                muted: "#9CA3AF",
                accent: "#3B82F6",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
            spacing: {
                xs: "0.5rem",
                sm: "1rem",
                md: "1.5rem",
                lg: "2rem",
                xl: "2.5rem",
                "2xl": "3rem",
                "3xl": "4rem",
            },
            borderRadius: {
                base: "16px",
                lg: "24px",
            },
            backdropBlur: {
                xs: "4px",
                sm: "8px",
                md: "12px",
            },
            boxShadow: {
                glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                soft: "0 4px 20px rgba(0, 0, 0, 0.1)",
                premium: "0 8px 32px rgba(0, 0, 0, 0.2)",
                card: "0 10px 40px rgba(0, 0, 0, 0.3)",
            },
        },
    },
    plugins: [],
}
