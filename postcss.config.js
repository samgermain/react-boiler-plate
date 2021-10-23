const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = ({env}) => ({
  plugins: [
    "postcss-preset-env",
    // @ts-ignore
    env === 'production' && purgecss({
      content: ["./src/**/*.js"],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: {
        //standard: [/fa-$/],
        deep: [/.*fa-.*$/, /react-share__ShareButton/, /cont/],

        //greedy: [/yellow$/],
      },
    }),
  ],
});