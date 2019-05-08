const mutations = {
    changeN(state,num){  //只能接受一个参数如果多个只能传对象
		state.n+=num;
		console.log(num,"canshu")
	},
	changeNum(state,num){
		state.vuexNum+=num; //state里状态vuexNum:1
	}
}
export default mutations;