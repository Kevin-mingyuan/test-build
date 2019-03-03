<template>
	<div>
		<p>{{home}}</p>
		<ul>
			<li v-for="item in list" :key="item.pid">
				<!-- <router-link :to="'/detail/'+item.pid">{{item.pname}}</router-link> -->
				<!-- <router-link :to='{"name":"Detail",params:{id:item.pid,aa:123},query:{cc:"query"}}'>{{item.pname}}</router-link> -->
				{{item.pname}}
				<button @click="go(item.pid)">go to detail</button>
			</li>
		</ul>
		<hr />
		<p>vuex 拆分num的值 {{$store.state.num.n}}</p>
	</div>
</template>
<script>
	export default {
		name:"",
		data(){
			return {
				home:"home",
				list:[]
			}
		},
		methods:{
			getData(){
				this.axios.get("http://jx.xuzhixiang.top/ap/api/productlist.php")
				.then(data =>{
					console.log(data.data.data)
					this.list = data.data.data;
				})
			},
			go(id){
				this.$router.push({"name":"Detail",params:{id:id}})
			}
		},
		created(){
			// console.log(this.$root)
			//非父子间传值发送
			this.$root.bus.$emit("name",'Home');
		},
		mounted(){
			this.getData();
			console.log(this.$store.state.num.n)
		}
	}
</script>
<style scoped>
	
</style>