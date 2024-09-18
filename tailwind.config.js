// This is for Daisy UI Light and Dark theme
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        250: "250px",
        300: "300px",
        350: "350px",
        650: "650px",
        1100: "1100px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#9ecc7e",
          "primary-content": "#1f2d16",
          secondary: "#eab943",
          "secondary-content": "#2d2206",
          accent: "#2980b9",
          "accent-content": "#ffffff",
          neutral: "#c8c8c8",
          "neutral-content": "#444444",
          "base-100": "#eeeeee",
          "base-200": "#e4e4e4",
          "base-300": "#dadada",
          "base-content": "#444444",
          info: "#2980b9",
          "info-content": "#ffffff",
          success: "#27ae60",
          "success-content": "#ffffff",
          warning: "#e67e22",
          "warning-content": "#ffffff",
          error: "#c0392b",
          "error-content": "#ffffff",
        },
      },
      {
        dark: {
          primary: "#707070",
          "primary-content": "#ffffff",
          secondary: "#8c8c8c",
          "secondary-content": "#ffffff",
          accent: "#3498db",
          "accent-content": "#ffffff",
          neutral: "#444444",
          "neutral-content": "#e0e0e0",
          "base-100": "#303030",
          "base-200": "#282828",
          "base-300": "#212121",
          "base-content": "#e0e0e0",
          info: "#3498db",
          "info-content": "#ffffff",
          success: "#27ae60",
          "success-content": "#ffffff",
          warning: "#e67e22",
          "warning-content": "#ffffff",
          error: "#c0392b",
          "error-content": "#ffffff",
        },
      },
    ],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
