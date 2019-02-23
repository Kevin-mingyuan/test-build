<template>
    <div>
        {{$route.meta.title}}
    </div>
</template>
<script>
export default {
    name:"Directives",
    data(){
        return {
            
        }
    },
    directives:{
        test:{
            inserted:function(el){
                console.log(el);
            }
        }
    }
}
</script>
<style scoped>

</style>


