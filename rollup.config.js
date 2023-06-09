import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
const packageJson = require("./package.json");
export default {
  input: "src/index.tsx",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
      inlineDynamicImports: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
      inlineDynamicImports: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extensions: ['.css'],
      extract: 'https://fonts.googleapis.com/css?family=Press+Start+2P'
    })
  ]
};