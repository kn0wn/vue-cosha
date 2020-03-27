import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default {
  input: "lib/index.js",
  plugins: [nodeResolve(), babel()],
  output: [
    {
      format: "umd",
      name: "VueCosha",
      exports: "named",
      file: "dist/vue-cosha.js"
    },
    {
      format: "esm",
      file: "dist/vue-cosha.esm.js"
    }
  ]
};
