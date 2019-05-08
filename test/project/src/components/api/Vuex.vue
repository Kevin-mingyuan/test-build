<template>
	<div>
		{{$route.meta.title}}<br />
		state里{{num.n}} 
		<br />
		!! {{list.count}} 
		<button @click="tap(1)">++</button>
		<button @click="tapjian(-6)">async--</button> 
		<br /> getters里{{$store.getters.isGood}}<br />
		
		<!-- old methods -->
		<!-- <button @click="inc(3)">同步加3 state</button> -->
		<!-- <button @click="inc(-3)">同步减3 state</button> -->

		<!-- old methods -->
		<!-- <button @click="asyncinc(8)">异步加8 actions</button> -->

		<!-- new metods -->
		<button @click="changeN(3)">同步加3 state</button>
		<button @click="changeN(-3)">同步减3 state</button>
		<button @click="asyncChangeN(8)">异步加8 actions</button>

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
	import { mapState, mapActions, mapMutations, mapGetters } from "vuex";  //引入辅助函数
	export default {
		name:"Vuex",
		data(){
			return{

			}
		},
		computed:{
			// old methods
			// n(){
			// 	return this.$store.state.num.n;  //加上模块的名字
			// },

			//  new methods
			// 简写辅助函数 ...mapState(['模块名','state内名字'])  解析 {{num.n}} == {{模块名.state名字}}
			...mapState(['num','n',"list","count"]),
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
			// 调用方法 在vuex仓库里获取的数据 old
			// this.$store.dispatch("getList","dogs");
			// this.$store.dispatch("getList","users");

			// new methods list 模块
			this.getList("dogs");
			this.getList("users");
		},
		methods:{
			// new methods  actions 内的方法名字  异步在生命周期函数内调用
			...mapActions(['getList' , 'asyncChangeN' , "tapjian"]),
			// mutations内的方法名字 参数向向上写 同步
			...mapMutations(['changeN' , "tap"]),  

			// 同步old methods
			// inc(num){
			// 	this.$store.commit("changeN",num)
			// },
			// old methods
			// 异步 模拟延时器 通过dispatch(actions内的名字，参数) 
			// asyncinc(num){
			// 	this.$store.dispatch("asyncChangeN",num)
			// }
		}
	}
</script>
<style scoped>
	
</style>