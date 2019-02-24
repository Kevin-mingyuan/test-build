<template>
	<div>
		{{$route.meta.title}}<br />
		state里{{n}} <br /> getters里{{$store.getters.isGood}}<br />
		<button @click="inc(3)">同步加3 state</button>
		<button @click="inc(-3)">同步减3 state</button>
		<button @click="asyncinc(8)">异步加8 actions</button>
		<hr/>
		vuex请求数据<br/>
		<ul>
			<li>狗的列表</li>
			<li 
				v-for="item in dogs"
				:key="item.id"
			>
				{{item.name}}
			</li>
		</ul>
		<hr />
		<ul>            
			<li>人的列表</li>
			<li
				v-for="item in users"
				:key="item.id"
			>	
				{{item.name}}
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name:"Vuex",
		data(){
			return{
				// n:this.$store.state.n
			}
		},
		computed:{
			n(){
				return this.$store.state.num.n;  //加上模块的名字
			},
			// 狗list
			dogs(){
				return this.$store.state.list.dogs; //加上拆分后模块的名字
			},
			// 人list
			users(){
				return this.$store.state.list.users; //加上拆分后模块的名字
			}
		},
		created(){
			// 调用方法 在vuex仓库里获取的数据
			this.$store.dispatch("getList","dogs");
			this.$store.dispatch("getList","users");

		},
		mounted(){
			// console.log(this.$store.state)
		},
		methods:{
			// 同步
			inc(num){
				this.$store.commit("changeN",num)
			},
			// 异步
			asyncinc(num){
				this.$store.dispatch("asyncChangeN",num)
			}
		}
	}
</script>
<style scoped>
	
</style>