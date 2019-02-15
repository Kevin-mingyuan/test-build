<template>
	<div class="loading-box">
		Loading...
	</div>
</template>
<script>
	export default {
		name:"Loading",
		data(){
			return {
				
			}
		},
		methods:{
			
		}
	}
</script>
<style scoped>
	.loading-box{
		border: 1px solid red;
		width: 200px;
		height: 200px;
		text-align: center;
		line-height: 200px;
		position: fixed;
		margin: 0 auto;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}
</style>