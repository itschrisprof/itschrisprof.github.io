// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},  // usa el plugin separado de Tailwind v4
    autoprefixer: {},             // sigue necesitando Autoprefixer
  }
};
