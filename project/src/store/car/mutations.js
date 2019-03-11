export default {
    // 点击加传入id进行比较
    jia(state,id){
		console.log(id)
        state.list.forEach((item)=>{
            if(item.id === id){
                item.count++;
            }
        })
    },
    // jian  
    jian(state,id){
        state.list.forEach((item)=>{
            if(item.id === id){
                if(item.count > 1){
                    item.count--;
                }
            }
        })
    },
    // 添加商品
    addProduct(state,p){
        state.list.push({id:++state.count,name:p.name,price:p.price,count:1});
    }
}