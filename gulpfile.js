const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')

function styles(){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/styles/'))
}

function scripts(){
    return gulp.src('./src/script/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/script/'))
}

function images(){
    return gulp.src('./src/assets/**/*', { encoding: false })
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/assets/'));
}

exports.default = gulp.parallel(styles, images, scripts)
exports.watch =  function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}