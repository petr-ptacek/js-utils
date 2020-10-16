import * as path  from 'path';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import pkg        from './package.json';

/**
 * @type {import("rollup").RollupOptions}
 */
const config = {
  input: 'src/index.ts',
  plugins: [
    typescript({
      typescript: require('typescript'),
      tsconfig: path.resolve(__dirname, 'tsconfig.build.json')
    })
  ],
  output: [
    {
      format: 'esm',
      name: pkg.name,
      file: pkg.module
    },
    {
      format: 'commonjs',
      name: pkg.name,
      file: pkg.main,
      plugins: [terser()]
    }
  ]
};

export default config;