<template>
  <div id="page">
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
                  <h3><a href="">{{item.productName}}</a></h3>
                  <span class="price">{{item.productPrice}}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
  </div>
</template>

<script>
    import './../assets/css/animate.css'
    import './../assets/css/icomoon.css'
    import './../assets/css/bootstrap.css'
    import './../assets/css/flexslider.css'
//    import './../assets/css/owl.carousel.min.css'
  //  import './../assets/css/owl.theme.default.min.css'
    import './../assets/css/style.css'

    export default {
      name: 'page',
      data () {
        return {
            productList : [],
            cartList : []
        }
      },
      components :{

      },
        computed :{
            listFilter : function () {
                var list = this.productList;
                var index = 0;
                var sectionCount = 3;
                var arrTemp = [];
                for(var i = 0; i < list.length ; i++){
                    index = parseInt( i / sectionCount);
                    if(arrTemp.length <= index)
                        arrTemp.push([]);
                    arrTemp[index].push(list[i]);
                }
                return arrTemp;
            }
        },
        mounted : function () {
            this.$nextTick(function () {
                this.populateProduct();
            })
        },
        watch : {
            cartList : {
                handler(){
                    window.localStorage.setItem("cartList",JSON.stringify(this.cartList));
                },
                deep:true
            }
        },
        methods :{
            populateProduct() {
                var _this = this;
                console.log("------");
                this.$http.get("/src/assets/data/productData.json", {"id": 123}).then(function (response) {
                    console.log("------");
                    _this.productList = response.body.list;
                });
            },
            addToCart(product) {
                var filterResult = this.cartList.filter(function (item, index, array) {
                    return item.productId == product.productId;
                })
                if (filterResult.length < 1)
                    this.cartList.push(product)
                else
                    filterResult[0].productQuantity++;
            }

        }
    }
</script>

<style>

</style>
