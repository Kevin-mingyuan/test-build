<template>
<!-- 侧边栏 -->
	<transition 
		enter-active-class="animated slideInLeft" 
		leave-active-class="animated slideOutLeft"
	>
	<div class="wrap" v-if="flag">
		<ul class="ul">
			<li v-for="item in nav" :key="item.id" @click="toggle">
				<router-link :to="item.path">
					{{item.text}}
					<i class="icon">></i>
				</router-link>
			</li>
		</ul>
	</div>
	</transition>
</template>
<script>
	export default {
		name:"MyHeader",
		props:["flag","toggle"],
		data(){
			return {
				f:"",
				nav:[
					{
						id:1,
						text:"首页",
						path:"/home"
					},
					{
						id:2,
						text:"影片",
						path:"/film"
					},
					{
						id:3,
						text:"影院",
						path:"/cinama"
					},
					{
						id:4,
						text:"商城",
						path:"/shop"
					},
					{
						id:5,
						text:"我的",
						path:"/my"
					},
					{
						id:6,
						text:"卖座卡",
						path:"/card"
					}
				]
			}
		},
		watch:{
			
		},
		created(){
			 this.f = this.$props.flag
		}
	}
</script>
<style scoped lang="scss">
	$sc:25;
	.wrap{
		border-top:1px solid #222;
		box-shadow: 0 1px 1px #363636 inset;
		background: #282828;
		position: absolute;
		display: block;
		top: 50/$sc+rem;
		right: 110/$sc + rem;
		bottom: 0;
		left: 0;
		transition: all ease 0.4s;
		z-index:999;
		ul{
			padding:0;
			z-index:999999999;
			li{
				line-height: 50/$sc +rem;
				z-index:999999999;
			}
			a{
				display: block;
				box-sizing: border-box;
				width: 100%;
				padding: 0 16px;
				border-bottom: 1px dotted #333;
				color: #9a9a9a;
				font-size: 14/$sc + rem;
				.icon{
					float: right;
				}
			}
			
		}
		
	}
</style>