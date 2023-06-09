/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      primary: "#2C2B58",
      secondary: "#3D3C70",
      white: "#ffffff",
      danger: "#FD7D6F",
      success: "#39ff71",
      lightGray: "#ABAAB6",
      darkGray: "#9796AE",
      pink: "#E674E5",
      lightPink: "#BEBDEF",
      yellow: "#FFD33F",
      lila: "#D3C1F9",
      lightLila: "#C5C6FF",
      lightBlue: "#BEBDEF",
      celeste: "#98E2FF",
      blue: "#6589FF",
      gray: "#ABAAB6",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
      "9xl": "7rem",
      "10xl": "8rem",
      "11xl": "9rem",
      "12xl": "10rem",
      "13xl": "11rem",
      "14xl": "12rem",
      "15xl": "13rem",
      "16xl": "14rem",
      "17xl": "15rem",
      "18xl": "16rem",
      "19xl": "17rem",
      "20xl": "18rem",
      "21xl": "19rem",
      "22xl": "20rem",
      "23xl": "21rem",
    },
    extend: {
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        18: "4.5rem",
        20: "5rem",
      },
      rounded: {
        xl: "0.5rem",
        "2xl": "1.2rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      fontSize: {
        xxs3: ".4rem",
        xxs2: ".5rem",
        xxs: ".65rem",
      },
    },
    plugins: [],
  },
};
