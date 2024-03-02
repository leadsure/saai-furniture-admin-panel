/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "500px",
        "small-tab": "800px",
        tab: "1300px",
        pc: "1600px",
      },
    },
  },
  plugins: [],
};
