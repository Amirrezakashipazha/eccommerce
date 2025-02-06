import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       primary:{
        1:"#3B823E",
        2:"#436E35",
        3:"#01370C",
       },
       gray:{

       },
       error:"#D11F1F",
       bg:"#E5E5E5",
       text:"#343434"
      },
    },
  },
  plugins: [],
} satisfies Config;
