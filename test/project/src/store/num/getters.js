const getters = {
    // 比如是否及格 == 直接参数state内的变量名字
    isGood(state){
        return state.n >= 60 ? "及格" : "不及格"; 
    },

    //模拟大于10
    isBigTen(state){
        return state.vuexNum > 10 ? '大于10了' : '小于10呢';// 返回state内声明的状态值 
    }
}
export default getters;