import gulp from 'gulp';

// Configuration
import mode from '../mode.js';
import paths from '../paths.js';

// Plugins
import browser from 'browser-sync';
import gulpIf from 'gulp-if';
import newer from 'gulp-newer';
import squoosh from 'gulp-libsquoosh';

export default function optimizeImages() {
  return gulp.src(paths.optimizeImages.src)
    .pipe(newer(paths.optimizeImages.dest))
    .pipe(gulpIf(mode.isProd, squoosh()))
    .pipe(gulp.dest(paths.optimizeImages.dest))
    .pipe(gulpIf(mode.isDev, browser.stream()));
}
