import Vue from 'vue'
import App from './components/App.vue'
import VueResource from 'vue-resource';
import router from './router'
import store from  './js/store'

Vue.use(VueResource);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
