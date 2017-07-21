 var cartVue = new Vue({
    el: '#app',
    data: {
        productList: [],
        checkAllFlag: false,
        delFlag: false,
        deleteIndex: 0
    },
    filters: {
    },
    mounted: function() {
        this.$nextTick(function() {
            this.cartView();
        })
    },
    methods: {
        cartView: function() {
            this.productList = JSON.parse(window.localStorage.getItem("cartList"));
            console.log(productList[0]);
        },
        changeMoney: function(product, way) {
            if (way > 0) {
                product.productQuantity++;
            }
            else {
                product.productQuantity--;
                if (product.productQuantity < 1) {
                    product.productQuantity = 1;
                }
            }
        },
        selectedProduct: function(item) {
            if (typeof item.checked == 'undefined') {
                this.$set(item, "checked", true);
            }
            else {
                item.checked = !item.checked;
            }
        },
        checkAll: function(flag) {
            this.checkAllFlag = flag;
            var _this = this;
            this.productList.forEach(function (item, index) {
                if (typeof item.checked == 'undefined', _this.checkAllFlag) {
                    _this.$set(item, "checked", _this.checkAllFlag);
                }
                else {
                    item.checked = _this.checkAllFlag;
                }
            });
        },
        delProduct: function() {
            this.productList.splice(this.deleteIndex, 1);
            this.delFlag = false;
        }
    },
    computed : {
        totalMoney : function() {
            return this.productList.reduce((total, item) => {
                if (item.checked === true) {
                    total += item.productPrice * item.productQuantity;
                }
                return total;
            }, 0);
        }
    }
});
