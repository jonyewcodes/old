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
        background: "#f6f2ec",
        backdrop: "gradient-to-r from #3864bc to rgb(50, 99, 199)",
        primary: "#5073b1",
        secondary: "#5a96d9",
        accent: "#64c6fb",
        baseText: "#272a30",
        lightBlack: "#3a3e44",
        lightGrey: "#797979",
        navbar: "#272a30",
        footer: "#0b1c2e",
        discordBlue: "#5865F2",
        divider: "#cdcac8",
      },
      fontFamily: {
        sans: "var(--font-roboto), sans-serif",
        serif: "var(--font-roboto-serif), serif",
      },
    },
  },
  plugins: [],
};

export default config;
