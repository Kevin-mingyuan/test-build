export default {
    asyncChangeN(context,num){
        setTimeout(()=>{
            context.commit("changeN",num); //调用state里面得changeN这个动作
        },1600)
    }
}