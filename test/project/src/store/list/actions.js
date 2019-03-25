import axios from 'axios';
const actions = {
    getList(context,type){
        axios.get("http://localhost:3000/"+type).then((res)=>{
            console.log(context);
            context.commit("getListSync",{list:res.data,type}); //将请求的数据发送到同步的方法内
        })
    },
    // 测试异步减去
    tapjian(context,num){
        console.log(context);  //dispatch commit 等方法
        setTimeout(()=>{
            context.commit("tap",num)
        },500)
    }
};
export default actions;