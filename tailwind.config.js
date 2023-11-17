/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#facc15",

          secondary: "#3b82f6",

          accent: "#111827",

          neutral: "#facc15",

          "base-100": "#fef3c7",

          info: "#d946ef",

          success: "#00a043",

          warning: "#ff9400",

          error: "#e44a63",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
