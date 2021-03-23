import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import { eslint } from "rollup-plugin-eslint";
import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle";
import commonjs from 'rollup-plugin-commonjs';
import babel from "@rollup/plugin-babel";
import pkg from "./package.json";

const input = ["src/index.js"];

export default [
  {
    input,
    plugins: [
      nodeResolve(),
      babel({
        babelHelpers: "bundled",
      }),
      terser(),
    ],
    output: {
      file: pkg.browser,
      format: "umd",
      name: "router",
      esModule: false,
      sourcemap: true,
    },
  },
  {
    input,
    plugins: [
      nodeResolve(),
      excludeDependenciesFromBundle(),
      commonjs(),
      eslint(),
    ],
    output: [
      {
        dir: "dist/esm",
        format: "esm",
        exports: "named",
        sourcemap: true,
      },
      {
        dir: "dist/cjs",
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
    ],
  },
];
