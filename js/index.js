/**
 * Created by Shane on 2017/7/12.
 */
 new Vue  ({
    el : '#page',
    data : {
        productList : [],
        cartList : []
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
            handler : function (){
                window.localStorage.setItem("cartList",JSON.stringify(this.cartList));
            },
            deep:true
        }
    },
    methods :{
        populateProduct : function () {
            var _this = this;
            this.$http.get("data/productData.json", {"id": 123}).then(function (response) {
                _this.productList = response.body.list;
            });
        },
        addToCart : function (product) {
            var filterResult = this.cartList.filter(function (item, index, array) {
                return item.productId == product.productId;
            })
            if (filterResult.length < 1)
                this.cartList.push(product)
            else
                filterResult[0].productQuantity++;
        }

    }



});