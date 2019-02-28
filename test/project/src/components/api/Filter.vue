<template>
    <div>
        {{$route.meta.title}} 123
        <div>
            <ul>
                <li v-for="(item,index) in stateArr" :key="index">
                    <span>
                        {{item.state | myFilters}} 
                    </span>
                        |--------------------|
                    <span>
                        {{item.info}}
                    </span>
                </li>
            </ul>
        </div>
        <div>
            <input type="text" placeholder="表单验证" :v-model="username | change"/>
                {{username}}
        </div>  
    </div>
</template>
<script>
export default {
    name:"Filter1",
    data(){
        return {
            stateArr:[],
            username:""
        }
    },
    created(){
        this.getData();
    },
    filters:{
        // 自定义过滤器
        myFilters(state){
            console.log(state);
            if(state == 0){

            }else if(state == 1){

            }else if(state == 2){

            }
        },
        // 表单验证过滤器
        change(state){
            console.log(state)

            if(typeof state == "Number"){
                return state +"不能为数字";
            }
        }
    },
    methods:{
        getData(){
            this.axios.get("http://localhost:3000/filter")
            .then(res=>{
                // console.log(res.data);
                this.stateArr = res.data;
            })
        }
    }
}
</script>
<style scoped>

</style>


