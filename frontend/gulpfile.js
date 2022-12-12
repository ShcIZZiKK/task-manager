const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');

function generateSprites() {
    let config = {
        shape: {
            dimension: {
                maxWidth: 500,
                maxHeight: 500,
            },
            spacing: {
                padding: 0,
            },
            transform: [
                {
                    svgo: {
                        plugins: [
                            { removeViewBox: false },
                            { removeUnusedNS: false },
                            { removeUselessStrokeAndFill: true },
                            { cleanupIDs: false },
                            { removeComments: true },
                            { removeEmptyAttrs: true },
                            { removeEmptyText: true },
                            { collapseGroups: true },
                            { removeAttrs: { attrs: '(fill|stroke|style)' } },
                        ],
                    },
                },
            ],
        },
        mode: {
            symbol: {
                dest: '.',
                sprite: 'sprite.svg',
            },
        },
    };

    return gulp
        .src('src/common/sprites/*.svg')
        .pipe(svgSprite(config))
        .on('error', function (error) {
            console.log(error);
        })
        .pipe(gulp.dest('public/sprites/'));
}

module.exports = {
    generateSprites,
};
