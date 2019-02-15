<template>
	<div>
		{{title}}
	</div>
</template>
<script>
	export default {
		name:"MyHead",
		data(){
			return {
				title:"我的应用"
			}
		},
		created(){
			//非父子间传值接收
			console.log(this.$root.Bus)
			this.$root.Bus.$on("name",(msg)=>{
				console.log(msg);
				this.title = msg;
			});
			// 路由守卫
			this.$router.afterEach((to,from)=>{
				// console.log(to.path)
			})
		}
	}
</script>