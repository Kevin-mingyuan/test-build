<template>
  <div id="app">
		<HeaderNav></HeaderNav>
    <router-view class="main"/>
  </div>
</template>

<script>
import HeaderNav from "@/components/Page/HeaderNav";
export default {
  name: 'App',
	components:{
		HeaderNav
	},
  data(){
			return {
				
			}
	}
}
</script>

<style lang="scss">
	@import "./assets/css/style.scss";
	$sc:25;
	.main{
		padding-top:50/$sc + rem;
	}
</style>
