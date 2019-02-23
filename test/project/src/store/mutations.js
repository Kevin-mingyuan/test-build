//同步改变数据
const mutations = {
	changeN(state,num){  //只能接受一个参数如果多个只能传对象
		state.n+=num;
		console.log(num,"canshu")
	},
	// 获取同步的方法list
	getListSync(state,obj){
		// console.log(state , obj)
		state[obj.type] = obj.list; //狗列表对应狗 人列表数据对应人
	}
}
export default mutations;