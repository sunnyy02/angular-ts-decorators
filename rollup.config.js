const pkg = require('./package.json');
const external = [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)];

export default {
  entry: 'dist/es2015/index.js',
  external,
  plugins: [],
  targets: [
    {
      dest: 'dist/' + pkg.main,
      format: 'umd',
      exports: 'named',
      moduleName: pkg.name,
      sourceMap: true
    },
    {
      dest: 'dist/' + pkg.module,
      format: 'es',
      sourceMap: true
    }
  ]
};
