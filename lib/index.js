import create from "./v-cosha";

/**
 * @todo implement directive options
 */
const plugin = {
  install(Vue, options) {
    Vue.directive("cosha", create(options));
  }
};

export default plugin;
