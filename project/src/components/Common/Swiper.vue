<template>
	<div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="item in gateway" :key="item.id">
					<img :src="item.imgUrl" />
				</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>
		</div>
		<!-- <img src="../../assets/imgs/banner2.png" alt=""> -->
	</div>
</template>
<script>
	import Swiper from "swiper";
	import "#/swiper/dist/css/swiper.css";

	export default {
		name: "Home",
		data() {
			return {
				gateway:[
					{		
						id:"1",
						imgUrl:"/static/img/banner1.c6a2bb6.png"
					},
					{
						id:"2",
						imgUrl:"/static/img/banner2.7cdd8f9.png"
					}
				]
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
			var mySwiper = new Swiper('.swiper-container', {
				loop: true, // 循环模式选项
				autoplay:{
					 delay: 3000,
						disableOnInteraction: false,
				},
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
				}
			})
		}
	}
</script>
<style scoped lang="scss">
	$sc:25;

	.swiper-container {
		width: 100%;
		.swiper-slide{
			img{
				width:375/$sc +rem;
			}
		}
	}
</style>
