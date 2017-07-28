import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state :{
        cartList :[]
    },
    getters : {
        getCartList : state => {
            state.cartList =JSON.parse(window.localStorage.getItem("cartList"));
            return state.cartList;
        }
    },
    mutations : {
        saveCartList (state , cartList ) {
            state.cartList = cartList;
            window.localStorage.setItem("cartList",JSON.stringify(state.cartList));
        }
    }
})
