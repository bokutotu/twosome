// postcss.config.mjs
export default {
  plugins: {
    '@tailwindcss/postcss': {},   // ← v4 は必ずコレ
    autoprefixer: {},
  },
};
