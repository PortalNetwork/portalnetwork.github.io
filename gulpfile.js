"use strict";
const gulp = require('gulp'),
    changed = require('gulp-changed'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    autoprefixer = require('gulp-autoprefixer'),
    source = require('vinyl-source-stream'),    
    gutil = require('gulp-util'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    Proxy = require('gulp-api-proxy');

/* Server無法重新整理時改 port 試試看 */
gulp.task('connect',()=>{
	connect.server({
		root: './',
		port: 3001,
		livereload: true,
        middleware: (connect, opt)=> {
            opt.route = '/api';
            opt.context = '192.168.1.186';
            let proxy = new Proxy(opt);
            return [proxy];
        }
	});
});


/* html */
gulp.task('html', () => { 
    return gulp.src('./*.html')
    .pipe(connect.reload())
})

/* js */
gulp.task('js', () => {
    let files = [
        'index.js',
        'roadmap.js',
        'showcase.js',
    ];
    files.map((obj, idx) => {
        browserify({ debug: true })
        .transform(babelify, {
           presets: ["env", "stage-2"],
           plugins: [
               "babel-plugin-transform-class-properties",
               "transform-async-to-generator"
           ]
        })
       .require(`es6/${obj}`, { entry: true })
       .bundle()
       .on('error', gutil.log)
       .pipe(source(obj)) 
       .pipe(gulp.dest('./js'))
       .pipe(connect.reload())
    })
    
});

/*Sass*/
gulp.task('sass',()=> {
	return gulp.src('scss/**/*.scss')
	.pipe(sass.sync().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['> 1%', 'last 5 versions', 'Firefox >= 45', 'iOS >=8', 'Safari >=8','ie >= 10'],
		cascade: false
	}))
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(gulp.dest('css/'))
	.pipe(connect.reload())
});

// /*Images*/
// gulp.task('images', ()=>{
//     let src = 'images-src/**/*.{jpg, png, gif, ico}';
//     let tar = 'images';
//     const imagemin = require('gulp-imagemin');
//     return gulp.src(src)
//     .pipe(changed(tar))
//     .pipe(imagemin([
//         require('imagemin-pngquant')(),
//         require('imagemin-jpegtran')({quality:70}),
//         require('imagemin-gifsicle')({optimizationLevel:2}),
//     ]))
//     .pipe(gulp.dest(tar))
// 	.pipe(connect.reload())
// });



/*Watch*/
gulp.task('watch',()=> {
    gulp.watch('./*.html', ['html']);
    gulp.watch('scss/**/*.scss', ['sass']);
    // gulp.watch('images-src/**/*.{jpg,png,gif,ico}', ['images']);
    gulp.watch('es6/**/*.js', ['js']);
});


gulp.task('default', ['connect','html' , 'js', 'sass' , 'watch']);
