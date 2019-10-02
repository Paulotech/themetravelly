var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

//Tarefa "default" que inicia com comando "gulp"
gulp.task('default', watch);

//Tarefa que chama a função compilaSass
gulp.task('sass', compilaSass);

//Função que compila o sass utilizando o "gulp-sass"
function compilaSass() {
    return gulp.src(['node_modules/bootstrap/scss/*.scss', 'sass/*.scss'])
    .pipe(sass()) //Converter o sass em css
    .pipe(gulp.dest('css'));
}

//Função assiste qualquer mudança nos diretórios indicados e chama alguma outra função
function watch() {
    gulp.watch(['node_modules/bootstrap/scss/*.scss', 'sass/*.scss'], compilaSass);
}

//
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on("change", reload);
});