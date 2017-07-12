 new Vue({
    el: '#app',
    data: {
        totalMoney: 0,
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
            var _this = this;
            this.$http.get("data/cartData.json", {"id": 123}).then(function(res) {
                _this.productList = res.body.result.list;
            });
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
        cartTotalMoney() {

            return this.productList.reduce((total, item) => {
                if (item.checked === true) {
                    total += item.productPrice * item.productQuantity;
                }
                return total;
            }, 0);
        },
        delProduct: function() {
            this.productList.splice(this.deleteIndex, 1);
            this.delFlag = false;
        }
    }
});
// 全局过滤器
Vue.filter('money', function(value, type) {
    return "$" + value.toFixed(2) + type;
})
