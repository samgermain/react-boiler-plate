const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = ({env}) => env === 'production' 
? ({
  plugins: [
    //Doesn't work, all css removed
    // require('cssnano')({
    //   preset: 'default',
    // }),
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
}) 
: {
    plugins: {
        'cssnano': {}
    }
};
