import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// import state from "./state";
// import mutations from "./mutations";
// import getters from "./getters";
// import actions from "./actions";

// var store = new Vuex.Store({
// // 	state:{
// // 		n:1
// // 	}
// 	state,
// 	mutations,
// 	getters,
// 	actions
// })

import list from './list';  //引入模块 使用方式： this.$store.state.list.name
import num from './num';
const store = new Vuex.Store({
	modules:{
		list,
		num
	}
})
export default store;