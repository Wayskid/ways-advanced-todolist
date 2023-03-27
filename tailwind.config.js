/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'clr-neutral-100': '#ffffff',
        'clr-primary-200': '#edf2f4',
        'clr-primary-400': '#8d99ae',
        'clr-primary-600': '#d62338',
        'clr-primary-700': '#020121',
        'clr-primary-800': '#d90429',
        'clr-neutral-900': '#000000'
      },
      width: {
        "containerWidth": "min(600px, 95%)"
      }
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [
    require("daisyui")
  ],
}
