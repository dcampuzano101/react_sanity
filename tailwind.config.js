module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'green',
      },
      fontFamily: {
        rubik: ['rubik', 'sans-serif'],
        karla: ['karla', 'sans-serif'],
      },
      backgroundImage: {
        // 'fitness-card': "url('images/fitness.jpeg')",
        // 'coding-card': "url('images/simple_setup.jpeg')",
        // 'lifestyle-card': "url('images/medellin.jpeg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
