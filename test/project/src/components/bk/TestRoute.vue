<template>
    <div>
        {{$route.meta.title}}
        

    </div>
</template>
<script>
export default {
    name:"TestRoute",
    data(){
        return {

        }
    },
    created(){
        console.log(this.$route) 
        //params => /testroute/:id => this.$route.params.id => 默认params
    }
}
</script>
<style scoped>

</style>


