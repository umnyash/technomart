import gulp from 'gulp';

// Configuration
import mode from '../mode.js';
import paths from '../paths.js';

// Plugins
import browser from 'browser-sync';
import gulpIf from 'gulp-if';
import newer from 'gulp-newer';
import squoosh from 'gulp-libsquoosh';

export default function createWebp() {
  return gulp.src(paths.createWebp.src)
    .pipe(newer(paths.createWebp.dest))
    .pipe(squoosh({
      webp: {}
    }))
    .pipe(gulp.dest(paths.createWebp.dest))
    .pipe(gulpIf(mode.isDev, browser.stream()));
}
