<template>
	<div>
		{{$route.meta.title}}
		{{n}}
		<button @click="inc">++++++</button>
	</div>
</template>
<script>
	export default {
		name:"Vuex",
		data(){
			return{
				// n:this.$store.state.n
			}
		},
		computed:{
			n(){
				return this.$store.state.n;
			}
		},
		created(){
			
		},
		mounted(){
			console.log(this.$store.state)
		},
		methods:{
			inc(){
				this.$store.commit("changeN","yes")
			}
		}
	}
</script>
<style scoped>
	
</style>