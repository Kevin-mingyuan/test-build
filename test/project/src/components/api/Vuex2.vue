<template>
    <div>
        <!--  
        {{$route.meta.title}}
        <br />
        <button @click="jian(-1)">-</button>
        <span>{{vuexNum}}</span>
        <button @click="jia(1)">+</button>
        <button @click="yibujia(1)">异步加</button>
        <button @click="yibujian(-1)">异步减</button>
        <p>getters => {{$store.getters.isBigTen}}</p>
        -->
        <p>
            num模块内的状态 =>
            n => {{num.n}} 
            <br /> 
            vuexNum => {{num.vuexNum}}
        </p>
       <div>
           <!-- 直接使用...mapMutations(['changeNum']), 内的方法 -->
           <button @click="changeNum(1)">+</button>
           <button @click="changeNum(-1)">-</button>

           <br/>
           <button @click="asyncChangeNum(1)">异步加1</button>
           <button @click="asyncChangeNum(-1)">异步减1</button>

       </div>
        <div>
            getters = >
            {{isBigTen()}}
        </div>
    </div>
</template>
<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";  //引入辅助函数

export default {
    name:'Vuex2',
    data(){
        return{

        }
    },
    /*
    computed:{
        vuexNum(){
            return this.$store.state.num.vuexNum
        }
    },
    */
   /*
    methods:{
        //同步操作
        jia(num){
            this.$store.commit('changeNum',num);// commit提交(mutations方法名字,参数)
        },
        jian(num){
            this.$store.commit('changeNum',num);
        },

        //异步操作 通过dispatch
        yibujia(num){
            this.$store.dispatch("asyncChangeNum",num); //调用action.js内的方法名字
        },
        yibujian(num){
            this.$store.dispatch("asyncChangeNum",num); //调用action.js内的方法名字
        }
    }
    */
    created(){

    },
    
   computed:{
       //  new methods
        // 简写辅助函数 ...mapState(['模块名','state内名字'])  解析 {{num.n}} == {{模块名.state名字}}
        ...mapState(['num','n','vuexNum']),
   },
   methods:{
       //不需要前面写各个模块 可以直接全部放入
        // 同步操作 写入mutations.js内方法函数
        ...mapMutations(['changeNum']),  

        ...mapActions(['asyncChangeNum']),

        ...mapGetters(["isBigTen"])
   }
}
</script>
<style scoped>

</style>

