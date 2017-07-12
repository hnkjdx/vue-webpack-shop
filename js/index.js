/**
 * Created by Shane on 2017/7/12.
 */
 new Vue  ({
    el : '#page',
    data : {
        productList : []
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
    methods :{
        populateProduct : function (){
            var _this = this;
            this.$http.get("data/productData.json", {"id": 123}).then(function(response) {
                _this.productList = response.body.list;
            });
        }
    }



});