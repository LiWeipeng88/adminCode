import Vue from 'vue'
import Vuex from 'vuex'
import dailog from './modules/dailog'
Vue.use(Vuex);
const store = new Vuex.Store({
    modules:{
        dailog
    }
});
export default store;