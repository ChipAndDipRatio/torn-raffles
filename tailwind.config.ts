import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        torn: {
          green: "#00ff9d",
          red: "#ff0066",
          dark: "#0a0a0a",
          neon: "#00ff9d",
        },
      },
    },
  },
  plugins: [],
};
export default config;
