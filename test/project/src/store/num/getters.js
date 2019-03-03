const getters = {
    // 比如是否及格 == 直接参数state内的变量名字
    isGood(state){
        return state.n >= 60 ? "及格" : "不及格"; 
    }
}
export default getters;