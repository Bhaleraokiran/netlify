/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslateblue: "#0f469b",
        whitesmoke: {
          "100": "#f5f5f5",
          "200": "#eee",
        },
        honeydew: "#c2efd4",
        gold: {
          "100": "#ffe70f",
          "200": "#ffe600",
        },
        steelblue: "#386183",
        black: "#000",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "roboto-slab": "'Roboto Slab'",
        inherit: "inherit",
        montserrat: "Montserrat",
      },
      borderRadius: {
        "10xs": "3px",
        "8xs": "5px",
      },
    },
    fontSize: {
      "3xl": "22px",
      "13xl": "32px",
      "29xl": "48px",
      xl: "20px",
      "11xl": "30px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
