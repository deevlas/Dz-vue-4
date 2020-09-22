import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"
import {store} from "./store/store";

Vue.use(VueResource);

export const url = 'https://todolist-e5e03.firebaseio.com/tdl';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store

}).$mount('#app')
