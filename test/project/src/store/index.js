import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import state from "./state";
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

var store = new Vuex.Store({
// 	state:{
// 		n:1
// 	}
	state,
	mutations,
	getters,
	actions
})
export default store;