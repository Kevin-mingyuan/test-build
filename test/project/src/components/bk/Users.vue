<template>
	<div>
		users
		<ul>
			<li v-for="item in list" :key="item.id">
				{{item.name}}
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name:'Users',
		data(){
			return {
				list:[],
				type:""
			}
		},
		created(){
			var type = this.$route.params.type;
			console.log(type);
			if(!type){
				type = 'users';
			};
			this.getData(type);
		},
		methods:{
			getData(type){
				this.axios.get("http://localhost:3000/"+type)
				.then(data=>{
					this.list = data.data;
				})
			}
		}
	}
</script>