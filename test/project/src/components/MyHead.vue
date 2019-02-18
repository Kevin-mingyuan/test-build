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
			// console.log(this.$root.bus)
			this.$root.bus.$on("name",(msg)=>{
				console.log(msg);
				this.title = msg;
			});
			// 路由守卫 点进来之后的操作
			this.$router.afterEach((to,from)=>{
				//可以点击判断来自哪个路由 然后决定做什么
				console.log(to.path);
				this.changeTitle(to.path);
			});
			console.log(this.$store)
		},
		methods:{
			//改变标题 路由守卫
			changeTitle(path){
				switch(path){
					case '/two/users' : 
					this.title = "狗的主人的列表";
					break;
					case '/two/dogs':
					this.title = "狗列表";
					break;
					default :;
				}
			}
		}
	}
</script>