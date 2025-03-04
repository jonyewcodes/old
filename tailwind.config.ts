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
        background: "#fefefb",
        backdrop: "#3864bc",
        primary: "#5073b1",
        secondary: "#5a96d9",
        accent: "#64c6fb",
        baseText: "#272a30",
        navbar: "#272a30",
        footer: "#3f3c47",
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
