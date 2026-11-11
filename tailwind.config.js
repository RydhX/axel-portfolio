/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        serif: ['"Times New Roman"', "Times", "serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgb(0 0 0 / 0.04)",
        card: "0 18px 50px rgb(17 24 39 / 0.08)",
      },
      colors: {
        ink: "#111827",
        muted: "#6B7280",
        paper: "#F9FAFB",
      },
    },
  },
  plugins: [],
};
