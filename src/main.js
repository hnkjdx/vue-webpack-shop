import Vue from 'vue'
import App from './components/App.vue'
import VueResource from 'vue-resource';
import $ from './js/jquery.min'
Vue.use(VueResource);
new Vue({
  el: '#app',
  render: h => h(App)
})
