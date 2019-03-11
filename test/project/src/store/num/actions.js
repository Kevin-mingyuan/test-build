const actions = {
    asyncChangeN(context,num){  //同步mutations内的方法和参数
        setTimeout(()=>{
            context.commit("changeN",num); //调用state里面得changeN这个动作
        },1600)
    }
}
export default actions;