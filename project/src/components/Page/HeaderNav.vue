<template>
	<div class="wrap">
		<MyHeader :toggle="toggle"></MyHeader>		<!-- 顶部点击控制状态 -->
		<MyNav :flag="flag" :toggle="toggle"></MyNav>   <!-- 侧边栏切换的状态 -->
	</div>
</template>
<script>
import MyHeader from "@/components/Page/MyHeader"; //引入myheader头部
import MyNav from "@/components/Page/Nav"; //引入侧边导航
export default {
	name:"HeaderNav",
	components:{
		MyHeader,
		MyNav
	},
	data(){
		return {
			flag:false
		}
	},
	methods:{
		toggle(){ //控制是否隐藏
			this.flag =! this.flag;
		}
	}
}
</script>
<style scoped lang="scss">
	
</style>