require("./bootstrap");

// make vue global
window.Vue = require("vue");

// import & use bootstrap-vue
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);

// init app
new Vue({
  el: "#app",
  components: {
    "app-component": require("./components/index.vue").default
  }
});
