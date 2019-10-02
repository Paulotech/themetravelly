var gulp = require('gulp');
var sass = require('gulp-sass');

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