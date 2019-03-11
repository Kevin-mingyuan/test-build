export default {
    money(state){
        var m = 0; //总共多少钱
		console.log(state.list)
        state.list.forEach((item) => {
			console.log(item.price , item.count)
            m += item.price * item.count;
        });
        // 还剩多少钱
        return m;
    }
}