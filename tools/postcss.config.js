const purgecss = require('@fullhuman/postcss-purgecss')
module.exports = {
    plugins: [
        purgecss({
            content: ['./**/*.html', './shared/js/**/*.js']
        }),
        require('cssnano')({
            preset: 'default',
        }),
    ],
};
