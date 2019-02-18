<template>
    <div>
        watch{{$route.meta.title}}<br />
        <input value="" v-model="ipt1" />111<br /><br />
        <input value="" v-model="ipt2" />222 <br /><br/>
        <!-- <input value="" v-model="ipt3" />333 <br /><br/> -->

    </div>
</template>
<script>
export default {
    name:"Watch",
    data(){
        return { 
            ipt1:"",
            ipt2:"",
            b:{
                ipt2:""
            },
            e: {
                f: {
                    g: 5
                }
            }
        }
    },
	beforeRouteEnter(to,from,next){
		console.log(to.params.type , from );
		next((vm)=>{
			// vm.方法 回调
			console.log(vm, to.params.type);
		});
	},
	beforeRouteUpdate(to,from,next){
		console.log(to,"去",from,"来自于");
		next();
	},
    watch:{
        ipt1:(oldVal,newVal)=>{
            console.log(oldVal , newVal);
        },
        ipt2:{
            handler:(oldVal , newVal)=>{
                console.log(oldVal , newVal)
            },
            deep: true
        },
        // b:[
        //     'handler1',
            
        // ]
        e: [
        'handle1',
        function handle2 (val, oldVal) { /* ... */ },
        {
            handler: function handle3 (val, oldVal) { /* ... */ },
            /* ... */
        }
        ],
        // watch vm.e.f's value: {g: 5}
        'e.f': function (val, oldVal) { console.log(val , oldVal) }
    },
    created(){
        this.$root.bus.$emit("name","监听"); //非父子间传值
    }
}
</script>
<style scoped>

</style>

