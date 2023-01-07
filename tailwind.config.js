/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#544AF4",
        secondary:"#63f861ff"
      },
      maxHeight: {
        "1080p": "1080px",
      },
      maxWidth: {
        "1080p": "1920px",
        "Web-view": "1800px",
      },
    },
  },
  plugins: [],
};
