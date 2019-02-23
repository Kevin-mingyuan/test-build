// 异步请求
import axios from 'axios';

const actions = {
    asyncChangeN(context,num){
        setTimeout(()=>{
            context.commit("changeN",num); //调用state里面得changeN这个动作
        },1500)
    },
    getList(context,type){
        axios.get("http://localhost:3000/"+type).then((res)=>{
            console.log(context);
            context.commit("getListSync",{list:res.data,type}); //将请求的数据发送到同步的方法内
        })
    }
}
export default actions;