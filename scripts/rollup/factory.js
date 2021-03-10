import readPkg from 'read-pkg';
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import progress from 'rollup-plugin-progress';
import typescript from '@rollup/plugin-typescript';
import eslint from '@rollup/plugin-eslint';
// import { rollupImportMapPlugin } from 'rollup-plugin-import-map';

// import externalToESM from '../rollup-plugin-external-to-esm';

function configure(name, path, isProd) {
  const { entry, module, umdGlobals } = readPkg.sync({ cwd: path });
  const plugins = [
    eslint(),
    // externalToESM({
    //   imports: {
    //     react: 'https://unpkg.com/es-react',
    //     'react-dom': 'https://unpkg.com/es-react/react-dom',
    //     // 'carbon-components-react'
    //   },
    // }),
    // rollupImportMapPlugin([{
    //   imports: {
    //     'carbon-components': './../../node_modules/carbon-components/es/index.js',
    //   },
    // }]),
    nodeResolve({
      browser: true,
      dedupe: ['react', 'react-dom'],
    }),
    commonjs(),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
    }),
    typescript(),
    progress(),
  ];

  return {
    input: `${path}/${entry}`,
    output: {
      file: `${path}/${module}`,
      format: 'esm',
      name,
      // globals: umdGlobals,
    },
    plugins,
  };
}

function factory(name, path) {
  const isProd = process.env.NODE_ENV === 'production';
  return configure(name, path, isProd);
}

export default factory;
