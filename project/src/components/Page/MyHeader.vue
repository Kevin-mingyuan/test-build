<template>
	<div class="wrap">
		<i class="icon" @click="toggle">==</i><h3 class="icon">卖座电影</h3>
	</div>
</template>
<script>
	export default {
		name:"MyHeader",
		props:["toggle"],
		data(){
			return {
				
			}
		},
		created(){
			console.log(this.$props.toggle)
		}
	}
</script>
<style scoped lang="scss">
	$sc:25;
	.wrap{
		background: #282828;
		position: fixed;
		z-index: 500;
		top: 0;
		left: 0;
		right: 0;
		width: auto;
		height: 50/$sc + rem;
		overflow: hidden;
		color: #efefef;
		i{
			font-size: 24/$sc + rem;
			line-height: 50/$sc + rem;
			margin-left: 10/$sc +rem;
		}
		h3{
			font-size: 14/$sc + rem;
			padding: 0 1rem;
			line-height: 50/$sc + rem;
		}
	}
	.icon{
		display: inline-block;
	}
</style>