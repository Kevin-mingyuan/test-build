//相当于计算属性
const getters = {
    // 比如是否及格
    isGood(state){
        return state.n > 60 ? "及格" : "不及格";
    }
};
export default getters;