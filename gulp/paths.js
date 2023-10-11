const pathSrc = 'source';
const pathDest = 'build';

export default {
  root: pathDest,

  copyAssets: {
    src: [
      `${pathSrc}/fonts/**/*.*`,
      `${pathSrc}/*.ico`,
      `${pathSrc}/*.webmanifest`,
      `${pathSrc}/vendor/**/*.*`,
    ],
    watch: [
      `${pathSrc}/fonts/**/*.*`,
      `${pathSrc}/*.ico`,
      `${pathSrc}/*.webmanifest`,
    ],
    dest: pathDest,
    base: pathSrc
  },

  createVectorStack: {
    src: `${pathSrc}/img/icons/**/*.svg`,
    watch: `${pathSrc}/img/icons/**/*.svg`,
    dest: `${pathDest}/img`
  },

  createWebp: {
    src: `${pathSrc}/img/**/*.{png,jpg}`,
    watch: `${pathSrc}/img/**/*.{png,jpg}`,
    dest: `${pathDest}/img`
  },

  optimizeImages: {
    src: `${pathSrc}/img/**/*.{png,jpg}`,
    watch: `${pathSrc}/img/**/*.{png,jpg}`,
    dest: `${pathDest}/img`
  },

  optimizeVector: {
    src: [
      `${pathSrc}/img/**/*.svg`,
      `!${pathSrc}/img/icons/**/*.svg`
    ],
    watch: [
      `${pathSrc}/img/**/*.svg`,
      `!${pathSrc}/img/icons/**/*.svg`
    ],
    dest: `${pathDest}/img`
  },

  processMarkup: {
    src: `${pathSrc}/pug/*.pug`,
    watch: `${pathSrc}/pug/**/*.pug`,
    dest: pathDest,
  },

  processScripts: {
    src: `${pathSrc}/js/*.js`,
    watch: `${pathSrc}/js/**/*.js`,
    dest: `${pathDest}/js`
  },

  processStyles: {
    src: `${pathSrc}/sass/*.scss`,
    watch: `${pathSrc}/sass/**/*.scss`,
    dest: `${pathDest}/css`
  },
};
