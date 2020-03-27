import cosha from "./_directive";

const plugin = {
  install(Vue, options) {
    Vue.directive("cosha", cosha(options));
  }
};

export default plugin;
