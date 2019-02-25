export default {
    // 比如是否及格
    isGood(state){
        return state.n > 60 ? "及格" : "不及格";
    }
}