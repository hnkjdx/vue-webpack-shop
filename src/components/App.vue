<template>
  <div>
    <nav-header :cartList="cartList"></nav-header>
    <page @addCartAction = "getCartList"></page>
    <nav-footer></nav-footer>
  </div>

</template>

<script>
    import './../assets/css/animate.css'
    import './../assets/css/icomoon.css'
    import './../assets/css/bootstrap.css'
    import './../assets/css/flexslider.css'
//  import './../assets/css/owl.carousel.min.css'
//  import './../assets/css/owl.theme.default.min.css'
    import './../assets/css/style.css'

    import NavHeader from "./header.vue"
    import NavFooter from "./footer.vue"
    import Page from "./page.vue"

    export default {
      name: 'app',
      data () {
        return {
          cartList : []
        }
      },
      components :{
          NavHeader,
          Page,
          NavFooter
      },
      methods : {
          getCartList (cartList) {
              this.cartList = cartList;
          }
      }
    }
</script>
