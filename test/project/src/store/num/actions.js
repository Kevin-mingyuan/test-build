const actions = {
    asyncChangeN(context,num){  //同步mutations内的方法和参数
        setTimeout(()=>{
            context.commit("changeN",num); //调用state里面得changeN这个动作
        },1600)
    },

    asyncChangeNum(context,num){ //同步mutations内的方法和参数 提交的是同步的commit方法
        setTimeout(()=>{ //模拟异步
            context.commit("changeNum",num);
        },1000)
    }
}
export default actions;