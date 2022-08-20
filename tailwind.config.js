/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  // purge: {
  //   content: [
  //     "./src/**/*.{html,ts}",
  //     "./src/**/**/**/*.{html,ts}",
  //   ],
  // },
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/**/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
