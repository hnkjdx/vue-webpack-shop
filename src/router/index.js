import Vue from 'vue'
import Router from 'vue-router'
import Page from './../components/page.vue'
import Cart from  './../components/cart.vue'
import Address from  './../components/address.vue'

Vue.use(Router)

export default new Router({
    mode : 'history',
  routes: [
    {
      path: '/',
      name: 'Page',
      component: Page
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
  {
      path: '/address',
      name: 'Address',
      component: Address
  }
  ]
})
