<template>
    <div>
        {{$route.meta.title}}
		<el-button type="primary" size="small" @click="flag =! flag">显示/隐藏</el-button>
		<transition name="c" enter-active-class="animated zoomIn delay-1s" leave-active-class="animated zoomOut delay-1s">
			<div v-if="flag">
				loading...<br />
				loading...<br />
				loading...<br />
				loading...<br />
				loading...<br />
				loading...<br />
				loading...<br />
			</div>
		</transition>
		<hr />
		<el-button type="success" @click="show =! show">动画切换</el-button>
		<transition name="l">
			<div class="test" v-show="show">
				<span>测试</span>
			</div>
		</transition>
    </div>
</template>
<script>
export default {
    nema:"Animate",
    data(){
        return {
			flag:true,
			show:true
        }
    },
	created(){
		console.log(this.flag);
	}
}
</script>
<style scoped lang="scss">
	@import "@/style/animate.scss";
	$r: red;
	.test{
		color: $r;
		width: 300px;
		height: 300px;
		background: #ccc;
	}
	// .c-enter-active,.c-leave-active{
	// 	transition: opacity .5s; 
	// }
	// .c-enter, .c-leave-active{
	// 	opacity:0;
	// }
	.tr{
		border: 1px solid red;
		width: 100px;
		height: 100px;
		
	}

	// l动画
	// 第一帧移到屏幕左侧外面
	.l-enter,.l-leave-to {
		transform: translateX(-100%)
	}
	// 第一帧后的动画
	.l-leave-active,.l-leave-active {
		transition: all 500ms;
	}
	// 最终的结果
	.l-enter-to, .l-leave {
		transform: translateX(0%);
	}
	// 离开第一帧
	// .l-leave {
	// 	transform: translateX(0%)
	// }
	// 离开过程
	// .l-leave-active{
	// 	transition: all 500ms;
	// } 
	// 最终回到进入位置
	// .l-leave-to{
	// 	transform: translateX(-100%)
	// }
</style>

