<template>
    <div>
        {{$route.meta.title}}
        组件切换<br/>
        <button
            v-for="item in tabs"
            :key="item"
            @click="currentTab = item"
        >
            {{item}}
        </button>
        <component :is="currentTabComponent"></component>
    </div>
</template>
<script>
import Is2 from './Is2';
import Is3 from './Is3';
export default {
    name:"Is",
    components:{
        Is2,
        Is3
    },
    data(){
        return{
            currentTab:"Is2",
            tabs:["Is2","Is3"]
        }
    },
    computed:{
        currentTabComponent(){
            return this.currentTab;
        }
    }
}
</script>
<style scoped>

</style>


