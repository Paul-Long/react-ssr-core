const gulp = require('gulp');
const concat = require('gulp-concat');
const tar = require('gulp-tar');
const gzip = require('gulp-gzip');
const shell = require('shelljs');
const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.resolve(__dirname, './package.json'));
let packageJson = JSON.parse(content);

gulp.task('build-react', function () {
  return gulp.src([
    'node_modules/react/umd/react.production.min.js',
    'node_modules/react-dom/umd/react-dom.production.min.js',
  ])
    .pipe(concat('react.min.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('copy-static', function () {
  return gulp.src('./dist/**/*')
    .pipe(gulp.dest('./build/ssr/dist'));
});

gulp.task('copy-entry', function () {
  return gulp.src([
    '.babelrc',
    'index.js'
  ]).pipe(gulp.dest('./build/ssr/'));
});

gulp.task('copy-server', function () {
  return gulp.src('./src/server/**/*')
    .pipe(gulp.dest('./build/ssr/src/server'));
});

gulp.task('copy-bin', function () {
  return gulp.src('bin/**/*')
    .pipe(gulp.dest('build/ssr/bin'));
});

gulp.task('copy-config', function () {
  return gulp.src('config/**/*')
    .pipe(gulp.dest('build/ssr/config'));
});

gulp.task('package', ['copy-static', 'copy-entry', 'copy-server', 'copy-bin', 'copy-config'], function () {
  delete packageJson.devDependencies;
  delete packageJson.betterScripts;
  packageJson.scripts = {start: 'node index.js'};
  fs.writeFileSync(path.resolve(__dirname, './build/ssr/package.json'), JSON.stringify(packageJson, null, 2));
  shell.cd('./build/ssr');
  shell.exec('npm install');
  shell.echo('npm install finished');
  shell.cd('../../');
  return gulp.src([
    'build/ssr/**/*',
    'build/ssr/.babelrc',
  ]).pipe(tar('ssr.tar', {'prefix': 'ssr/', 'mode': 0755}))
    .pipe(gzip())
    .pipe(gulp.dest('build/'));
});

gulp.task('build', ['package'], function () {
});