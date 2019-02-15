<template>
	<div>
		<!-- de /de/:type/:id 多级路由 路由传参需要id和type -->
		<ul>
			<li v-for="(v,k,i) in obj" :key="i">
				{{k}} ==> {{v}}
			</li>
		</ul>
		<button @click="go">返回</button>
		<button @click="dogs">跳转dogs</button>
	</div> 
</template>
<script>
	export default {
		data(){
			return {
				obj:{}
			}
		},
		created(){
			console.log(this.$route.params.type,this.$route.params.id,"获取的是路由的实时动态变化，可以拿值发起请求")
			var type = this.$route.params.type;
			var id = this.$route.params.id;
			this.axios.get("http://localhost:3000/"+type+'/'+id)
			.then(res=>{
				console.log(res.data);
				this.obj = res.data;
			})
		},
		methods:{
			go(){
				this.$router.go(-1)
			},
			dogs(){
				this.$router.push({"name":"Life",params:{a:'1',b:2},query:{c:3}});
			}
		}
	}
</script>