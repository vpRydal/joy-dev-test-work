import Vue from 'vue'
import App from './js/App'
import router from './js/router/index'
import store from './js/store/index'
import './scss/index.scss';
import $ from 'jquery'

Vue.config.productionTip = false;

window.$ = window.JQuery = $;

store.dispatch('init');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
