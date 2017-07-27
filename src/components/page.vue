<template>
  <div id="page">
    <nav class="fh5co-nav" role="navigation">
      <div class="container" >
        <div class="row">
          <div class="col-md-3 col-xs-2">
            <div id="fh5co-logo"><a href="index.html">Shop.</a></div>
          </div>
          <div class="col-md-6 col-xs-6 text-center menu-1">
            <ul>
              <li class="has-dropdown">
                <a href="product.html">Shop</a>
                <ul class="dropdown">
                  <li><a href="single.html">Single Shop</a></li>
                </ul>
              </li>
              <li><a href="about.html">About</a></li>
              <li class="has-dropdown">
                <a href="services.html">Services</a>
                <ul class="dropdown">
                  <li><a href="#">Web Design</a></li>
                  <li><a href="#">eCommerce</a></li>
                  <li><a href="#">Branding</a></li>
                  <li><a href="#">API</a></li>
                </ul>
              </li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="col-md-3 col-xs-4 text-right hidden-xs menu-2">
            <ul>
              <li class="search">
                <div class="input-group">
                  <input type="text" placeholder="Search..">
                  <span class="input-group-btn">
						        <button class="btn btn-primary" type="button"><i class="icon-search"></i></button>
						      </span>
                </div>
              </li>
              <li class="shopping-cart"><a href="cart.html" class="cart"><span><small>{{cartList.length}}</small><i class="icon-shopping-cart"></i></span></a></li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
    <div id="fh5co-product">
      <div class="container">
        <div class="row animate-box">
          <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <span>Cool Stuff</span>
            <h2>Products.</h2>
            <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
          </div>
        </div>

        <div class="row" v-for="( row , rowIndex ) in listFilter">
          <div class="col-md-4 text-center animate-box" v-for="(item , itemIndex) in row">
            <div class="product">
              <div class="product-grid" :style="{backgroundImage: 'url('+item.productImage+')'}">
                <div class="inner">
                  <p>
                    <a href="javascript:void(0)" class="icon" @click="addToCart(item)"><i class="icon-shopping-cart"></i></a>
                  </p>
                </div>
              </div>
              <div class="desc">
                <h3><a href="single.html">{{item.productName}}</a></h3>
                <span class="price">{{item.productPrice}}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div id="fh5co-started">
      <div class="container">
        <div class="row animate-box">
          <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>Newsletter</h2>
            <p>Just stay tune for our latest Product. Now you can subscribe</p>
          </div>
        </div>
        <div class="row animate-box">
          <div class="col-md-8 col-md-offset-2">
            <form class="form-inline">
              <div class="col-md-6 col-sm-6">
                <div class="form-group">
                  <label for="email" class="sr-only">Email</label>
                  <input type="email" class="form-control" id="email" placeholder="Email">
                </div>
              </div>
              <div class="col-md-6 col-sm-6">
                <button type="submit" class="btn btn-default btn-block">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <footer id="fh5co-footer" role="contentinfo">
      <div class="container">
        <div class="row row-pb-md">
          <div class="col-md-4 fh5co-widget">
            <h3>Shop.</h3>
            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
          </div>
          <div class="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
            <ul class="fh5co-footer-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Meetups</a></li>
            </ul>
          </div>

          <div class="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
            <ul class="fh5co-footer-links">
              <li><a href="#">Shop</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Handbook</a></li>
              <li><a href="#">Held Desk</a></li>
            </ul>
          </div>

          <div class="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
            <ul class="fh5co-footer-links">
              <li><a href="#">Find Designers</a></li>
              <li><a href="#">Find Developers</a></li>
              <li><a href="#">Teams</a></li>
              <li><a href="#">Advertise</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>
        </div>

        <div class="row copyright">
          <div class="col-md-12 text-center">
            <p>
              <small class="block">&copy; 2016 Free HTML5. All Rights Reserved.</small>
              <small class="block">More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a> - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a></small>
            </p>
            <p>
            <ul class="fh5co-social-icons">
              <li><a href="#"><i class="icon-twitter"></i></a></li>
              <li><a href="#"><i class="icon-facebook"></i></a></li>
              <li><a href="#"><i class="icon-linkedin"></i></a></li>
              <li><a href="#"><i class="icon-dribbble"></i></a></li>
            </ul>
            </p>
          </div>
        </div>

      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
