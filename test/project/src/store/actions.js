// 异步请求
import axios from 'axios';

const actions = {
   
    getList(context,type){
        axios.get("http://localhost:3000/"+type).then((res)=>{
            console.log(context);
            context.commit("getListSync",{list:res.data,type}); //将请求的数据发送到同步的方法内
        })
    }
}
export default actions;