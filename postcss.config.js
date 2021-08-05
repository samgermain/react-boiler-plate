const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  //   plugins: {
  //     cssnano: {},
  //   },
  plugins: [
    //Doesn't work, all css removed
    // @ts-ignore
    purgecss({
      content: ["./src/**/*.js"],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: {
        //standard: [/fa-$/],
        deep: [/.*fa-.*$/, /react-share__ShareButton/, /cont/],

        //greedy: [/yellow$/],
      },
    }),
  ],
};
