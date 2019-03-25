<template>
	<div>
		<p style="text-align: center;">{{$route.meta.title}}</p>
			<Swiper></Swiper>
	</div>
</template>
<script>
	import Swiper from "../Common/Swiper";

	export default {
		name: "Home",
		components:{
			Swiper
		},
		data() {
			return {

			}
		},
		created(){
				//先要代理
				this.$http.get("/mz/v4/api/billboard/home",
				{
					params:{
						__t:new Date().getTime()
					}
				})
				.then((res)=>{
					console.log(res);
				});
				// users/login  city.json
// 				this.$http.get("/mz/users/login").then((res)=>{
// 					console.log(res)
// 				})
					
		},
		mounted() {
			
		}
	}
</script>
<style scoped lang="scss">
	$sc:25;

	
</style>
