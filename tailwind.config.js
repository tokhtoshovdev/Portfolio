/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-inset-black": "inset 10px 10px 20px 0px #00000040",
        "custom-inset-white": "inset -10px -10px 20px 0px #FFFFFF40",
      },
    },
  },
  plugins: [],
};
