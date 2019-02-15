<template>
	<div>
		<p>{{detail}}</p>
		{{d.pname}}
		{{d.pprice}}
	</div>
</template>
<script>
	export default{
		name:"Detail",
		props:["id"],
		data(){
			return {
				detail:"detail",
				d:{},
				a:"123"
			}
		},
		watch:{
			$route:{
				hander(n){
					console.log(n)
				}
			}
		},
		methods:{
			getData (){
				var _this = this;
				if(!this.$route.params.id) return; //如果没有就什么都不显示
				this.axios.get("http://jx.xuzhixiang.top/ap/api/detail.php",{
					params:{
						id:this.$route.params.id
					}
				}).then(data=>{
					console.log(data.data.data);
						_this.d = data.data.data;
						document.title = data.data.data.pname;
						
				})
			}
		},
		created(){
			console.log(this.$route);
			var b = this.a?'yes':'no';
			console.log(b);
		},
		mounted(){
			console.log(this.$route);
			this.getData();
			// console.log(this.d)
			// console.log(this.$props.id , "props")
		}
	}
</script>
<style scoped>
	
</style>