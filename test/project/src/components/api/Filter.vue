<template>
    <div>
        {{$route.meta.title}} 123
        <div>
            <ul>
                <li v-for="(item,index) in stateArr" :key="index">
                    <span>
                        {{item.state | myFilters}} 
                    </span>
                        ||
                    <span>
                        {{item.info}}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"Filter1",
    data(){
        return {
            stateArr:[]
        }
    },
    created(){
        this.getData();
    },
    filters:{
        myFilters(state){
            console.log(state);
        }
    },
    methods:{
        getData(){
            this.axios.get("http://localhost:3000/filter")
            .then(res=>{
                console.log(res.data);

            })
        }
    }
}
</script>
<style scoped>

</style>


