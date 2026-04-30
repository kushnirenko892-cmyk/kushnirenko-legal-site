import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#120A06",
        foreground: "#F4E8DA",
        muted: "#D9C6B2",
        border: "rgba(244, 232, 218, 0.16)",
        accent: "#C79A6B",
        card: "#1A0F0A",
        cocoa: "#24140D",
        "luxury-gold": "#A97945",
        bronze: "#C79A6B",
        "chocolate-dark": "#120A06",
        ink: "#120A06",
        coal: "#1A0F0A",
        paper: "#F4E8DA",
        mist: "#D9C6B2",
        oxblood: "#7B2F2A",
        graphite: "#24140D",
        chocolate: "#120A06",
        espresso: "#1A0F0A",
        sand: "#BCA087",
        taupe: "#D9C6B2",
        caramel: "#B58D6E",
        cream: "#EEE3D7",
        porcelain: "#F5EDE6"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Arial", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        luxury: ["var(--font-bodoni)", "var(--font-cormorant)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(18, 10, 6, 0.2)",
        editorial: "0 32px 120px rgba(18, 10, 6, 0.42)"
      }
    }
  },
  plugins: []
};

export default config;
