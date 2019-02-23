<template>
	<div>
		Two 在TWO组件下写请求和router-link
		<ul>
			<li v-for="item in list" :key="item.id">
				<router-link :to="'/detailbk/'+type+'/'+item.id">{{item.name}}</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name:'Two',
		data(){
			return {
                list:[],
                type:""
			}
		},
		created(){
// 			var type = this.$route.params.type;
// 			console.log(type);
// 			if(!type){
// 				type = 'dogs';
// 			};
// 			this.getData(type);
		},
		watch:{
			//监听路由的变化
			$route:{
				handler(n){   //n == this.$route
					this.type = n.params.type;
					console.log(n.params.type);
					if(!n.params.type){ //如果没有传参
						var type = 'dogs' //默认值
					}
					type = n.params.type; //接受路由的参数
					this.getData(type); //获取参数
				},
				immediate:true //组件一加载立刻执行
			}
		},
		beforeDistory(){
			console.log('beforeDistory')
		},
		destroyed(){
			console.log('destroyed')
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