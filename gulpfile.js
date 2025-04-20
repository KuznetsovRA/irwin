// Подключаем необходимые модули
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const del = require('del');

gulp.task('clean', () => {
	return del(['dist']);
});

// Задача для минификации HTML
gulp.task('minify-html', () => {
	return gulp.src('frontend/*.html') // Исходные файлы HTML
		.pipe(htmlmin({ collapseWhitespace: true, removeComments: true })) // Минификация
		.pipe(gulp.dest('dist')); // Выводим в папку dist
});

// Задача для минификации CSS
gulp.task('minify-css', () => {
	return gulp.src('frontend/css/*.css') // Исходные файлы CSS
		.pipe(cleanCSS({ compatibility: 'ie8' })) // Минификация
		.pipe(gulp.dest('dist/css')); // Выводим в папку dist/css
});

// Задача для минификации JavaScript
gulp.task('minify-js', () => {
	return gulp.src('frontend/js/*.js') // Исходные файлы JS
		.pipe(uglify()) // Минификация
		.pipe(gulp.dest('dist/js')); // Выводим в папку dist/js
});

// Задача для копирования изображений
gulp.task('copy-images', () => {
	return gulp.src('frontend/images/**/*') // Копирует все файлы и подпапки
		.pipe(gulp.dest('dist/images'));
});

// Копирование robots.txt
gulp.task('copy-robots', () => {
	return gulp.src('frontend/robots.txt')
		.pipe(gulp.dest('dist'));
});

// Копирование sitemap.xml
gulp.task('copy-sitemap', () => {
	return gulp.src('frontend/sitemap.xml')
		.pipe(gulp.dest('dist'));
});

// Копирование .htaccess
gulp.task('copy-htaccess', () => {
	return gulp.src('frontend/.htaccess')
		.pipe(gulp.dest('dist'));
});

// Копирование favicon.ico
gulp.task('copy-favicon', () => {
	return gulp.src('frontend/favicon.ico')
		.pipe(gulp.dest('dist'));
});

// Задача по умолчанию (запускается при вызове 'gulp')
gulp.task('default', gulp.series(
	'clean',
	gulp.parallel(
		'minify-html',
		'minify-css',
		'minify-js',
		'copy-images',
		'copy-robots',
		'copy-sitemap',
		'copy-htaccess',
		'copy-favicon',
	)
));
