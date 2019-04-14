import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'index.js',
  output: {
    file: 'esm.js',
    format: 'esm'
  },
  context: 'null',
  moduleContext: 'null',
  plugins: [
		babel({
      runtimeHelpers: true,
      presets: ['@babel/preset-env']
		}),
    resolve()
  ]
}
