const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    // plugins: {   //Works
    //     'cssnano': {},
    // }
    plugins: [      //Doesn't work, all css removed
        purgecss({
            content: ['./src/**/*.html'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        }),
    ]
};