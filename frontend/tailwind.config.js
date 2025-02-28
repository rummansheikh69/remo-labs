/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#EFE3E5",
        text: "#374151",
      },
    },
  },
  plugins: [require("daisyui")],
};
