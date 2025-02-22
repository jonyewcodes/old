import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#5073b1",
        secondary: "#5a96d9",
        accent: "#64c6fb",
        glassBlue: "rgba(222, 231, 251, 0.5)",
      },
      fontFamily: {
        sans: "var(--font-roboto), sans-serif",
        geist: "var(--font-geist-sans), sans-serif",
        mono: "var(--font-geist-mono), monospace",
        serif: "var(--font-roboto-serif), serif",

        // ADD THIS:
        raleway: "var(--font-raleway), sans-serif",
      },
    },
  },
  plugins: [],
};

export default config;
