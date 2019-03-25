const mutations =  {
    // 获取同步的方法list
	getListSync(state,obj){
		// console.log(state , obj)
		state[obj.type] = obj.list; //狗列表对应狗 人列表数据对应人
	},
	// 测试加一
	tap(state,mun){
		state.count += mun;
	}
};
export default mutations;