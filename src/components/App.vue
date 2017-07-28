<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
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
    import './../js/bootstrap.min.js'


    import NavHeader from "./header.vue"
    import NavFooter from "./footer.vue"
    export default {
      name: 'app',
      data () {
        return {
        }
      },
      components :{
          NavHeader,
          NavFooter
      },
        mounted () {
            this.$nextTick(function () {
                if(window.localStorage.getItem("cartList") == "undefined"){
                    window.localStorage.setItem("cartList",JSON.stringify([]));
                }

        })
        }
    }
</script>
