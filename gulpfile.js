const {src, dest, series, watch} = require('gulp')
const sass = require('gulp-sass')(require('sass'))


/* scss task */
function scssTask(){
    return src('assets/sass/index.scss', { sourcemaps:true })
            .pipe(sass())
            .pipe(dest('./assets/dist'), {sourcemaps: '.'})
}

/* watch task */
function watchTask(){
    watch(['assets/sass/index.scss'], scssTask)
}

exports.default = series(scssTask, watchTask)
