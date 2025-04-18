// Подключаем необходимые модули
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

// Задача для минификации HTML
gulp.task('minify-html', () => {
	return gulp.src('*.html') // Исходные файлы HTML
		.pipe(htmlmin({ collapseWhitespace: true, removeComments: true })) // Минификация
		.pipe(gulp.dest('dist')); // Выводим в папку dist
});

// Задача для минификации CSS
gulp.task('minify-css', () => {
	return gulp.src('*.css') // Исходные файлы CSS
		.pipe(cleanCSS({ compatibility: 'ie8' })) // Минификация
		.pipe(gulp.dest('dist')); // Выводим в папку dist/css
});

// Задача для минификации JavaScript
gulp.task('minify-js', () => {
	return gulp.src('js/*.js') // Исходные файлы JS
		.pipe(uglify()) // Минификация
		.pipe(gulp.dest('dist')); // Выводим в папку dist/js
});

// Задача по умолчанию (запускается при вызове 'gulp')
gulp.task('default', gulp.parallel('minify-html', 'minify-css', 'minify-js'));
