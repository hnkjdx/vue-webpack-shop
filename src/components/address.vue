<template>
    <div id ="selectAddress"class="address">
        <div class="container">
            <div class="checkout-addr">
                <!-- process step -->
                <div class="check-step">
                    <ul>
                        <li class="cur">地址确认</li>
                        <li>查看订单</li>
                        <li>支付</li>
                        <li>订单确认</li>
                    </ul>
                </div>

                <!-- address list -->
                <div class="checkout-title">
                    <span>配送地址</span>
                </div>
                <div class="addr-list-wrap">
                    <div class="addr-list">
                        <ul>
                            <li v-for="(item, index) in filterAddress" v-bind:class="{'check': index == currentIndex}" @click="currentIndex=index">
                                <dl>
                                    <dt>{{item.userName}}</dt>
                                    <dd class="address">{{item.streetName}}</dd>
                                    <dd class="tel">{{item.tel}}</dd>
                                </dl>
                                <div class="addr-opration addr-edit">
                                    <a href="javascript:;" class="addr-edit-btn">
                                        <svg class="icon icon-edit"><use xlink:href="#icon-edit"></use></svg>
                                    </a>
                                </div>
                                <div class="addr-opration addr-del">
                                    <a href="javascript:;" class="addr-del-btn">
                                        <svg class="icon icon-del"><use xlink:href="#icon-del"></use></svg>
                                    </a>
                                </div>
                                <div class="addr-opration addr-set-default" v-if="!item.isDefault">
                                    <a href="javascript:;" class="addr-set-default-btn" @click="setDefault(item.addressId)"><i>设为默认</i></a>
                                </div>
                                <div class="addr-opration addr-default" v-if="item.isDefault">默认地址</div>
                            </li>

                            <li class="addr-new">
                                <div class="add-new-inner">
                                    <i class="icon-add">
                                        <svg class="icon icon-add"><use xlink:href="#icon-add"></use></svg>
                                    </i>
                                    <p >添加新地址</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="shipping-addr-more">
                        <a class="addr-more-btn up-down-btn" href="javascript:" @click="loadMore">
                            more
                            <i class="i-up-down">
                                <i class="i-up-down-l"></i>
                                <i class="i-up-down-r"></i>
                            </i>
                        </a>
                    </div>
                </div>

                <!-- shipping method-->
                <div class="checkout-title">
                    <span>配送方式</span>
                </div>
                <div class="shipping-method-wrap">
                    <div class="shipping-method">
                        <ul>
                            <li v-bind:class="{'check': shippingMethod == 1}" @click="shippingMethod = 1">
                                <div class="name">标准配送</div>
                                <div class="price">Free</div>
                            </li>
                            <li v-bind:class="{'check': shippingMethod == 2}" @click="shippingMethod = 2">
                                <div class="name">高级配送</div>
                                <div class="price">180</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="next-btn-wrap">
                    <a href="javascript:;" class="btn btn--red">下一步</a>
                </div>
                <div class="md-modal modal-msg md-modal-transition" id="showModal">
                    <div class="md-modal-inner">
                        <div class="md-top">
                            <button class="md-close">关闭</button>
                        </div>
                        <div class="md-content">
                            <div class="confirm-tips">
                                <p id="cusLanInfo">你确认删除此配送地址信息吗?</p>
                            </div>
                            <div class="btn-wrap col-2">
                                <button class="btn btn--m" id="btnModalConfirm">Yes</button>
                                <button class="btn btn--m btn--red" id="btnModalCancel">No</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md-modal modal-msg md-modal-transition" id="showModalw">
                    <div class="md-modal-inner">
                        <div class="md-top">
                            <button class="md-close">关闭</button>
                        </div>
                        <div class="md-content">
                            <div class="confirm-tips">
                                <div class="md-form-item">
                                    <label class="md-form-item__label" style="width: 80px;">
                                        姓名
                                    </label>
                                    <div class="md-form-item__content" style="margin-left: 80px;">
                                        <div  class="el-input">
                                            <input type="text" autocomplete="off" class="md-input__inner">
                                        </div>
                                    </div>
                                </div>
                                <div class="md-form-item">
                                    <label class="md-form-item__label" style="width: 80px;">
                                        地址
                                    </label>
                                    <div class="md-form-item__content" style="margin-left: 80px;">
                                        <div  class="el-input">
                                            <input type="text" autocomplete="off" class="md-input__inner">
                                        </div>
                                    </div>
                                </div>
                                <div class="md-form-item">
                                    <label class="md-form-item__label" style="width: 80px;">
                                        电话号码
                                    </label>
                                    <div class="md-form-item__content" style="margin-left: 80px;">
                                        <div  class="el-input">
                                            <input type="text" autocomplete="off" class="md-input__inner">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="btn-wrap col-2">
                                <button class="btn btn--s" id="btnModalConfirms">保存</button>
                                <button class="btn btn--s btn--red" id="btnModalCancels">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!--         <div class="md-overlay" id="showOverLay"></div>
                 -->
            </div>
        </div>
    </div>
</template>

<script>
    import './../assets/css/checkout.css'
    import './../assets/css/base.css'
    import './../assets/css/modal.css'
export default {

  name: 'selectAddress',
  data () {
      return {
          limitNum: 3,
          addressList: [],
          currentIndex: 0,
          shippingMethod: 1
      }
  },
    mounted() {
        this.$nextTick(function() {
            this.getAddressList();
        });
    },
    computed: {
        filterAddress() {
            return this.addressList.slice(0, this.limitNum);
        }
    },
    methods: {
        getAddressList() {
            var _this = this;
            this.$http.get("/src/assets/data/address.json").then(function(response) {
                var res = response.data;
                if (res.status = "0") {
                    _this.addressList = res.result;
                }
            });
        },
        loadMore() {
            this.limitNum = this.addressList.length;
        },
        setDefault(addressId) {
            this.addressList.forEach(function (address, index) {
                if (address.addressId == addressId) {
                    address.isDefault = true;
                }
                else {
                    address.isDefault = false;
                }
            });
        }
    }

}
</script>
