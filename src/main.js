import Vue from "vue";
import App from "./App.vue";
import cosha from "../lib";

Vue.config.productionTip = false;

Vue.use(cosha);

new Vue({
  render: h => h(App)
}).$mount("#app");
