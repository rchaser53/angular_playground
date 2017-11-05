const chokidar = require('chokidar')
const shell = require('shelljs')

const ColorOption = '--color=always'
const watchDefaultOption = {
  ignoreInitial: true
};

chokidar.watch('pages-ts/**/*', watchDefaultOption).on('all', () => {
  shell.exec(`npm run tsc ${ColorOption}`);
});