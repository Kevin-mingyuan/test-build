<template>
	<div>
		<ul>
			<li 
				v-for="(item,index) in filterList"  
				:key="index"
			>
				<input type="checkbox" v-model="item.complete" />
				{{item.task}}
			</li>
		</ul>
		<button @click="type='all'">显示所有任务</button>
		<button @click="type='complete'">显示已完成</button>
		<button @click="type='uncomplete'">显示未完成</button>
		<p>总共完成了{{completeCount}}</p>
		<hr/>
		<p>计算属性双向绑定</p>
		<input type="text" v-model="ipt" /> <span>{{msg}} </span>
		<input type="text" v-model="xing" />
		<input type="text" v-model="ming" />
		{{aPlus}}
		<hr />
		{{meta}}
	</div>
</template>
<script>
	export default {
		name:"Computed",
		data(){
			return {
				type:"all", //all uncomplete 未完成 complete 已完成
				list:[
					{"task":"img1",complete:true},
					{"task":"img2",complete:false},
					{"task":"img3",complete:false}
				],
				ipt:"",
				xing:"",
				ming:"",
				meta:""
			}
		},
		created(){
			this.$root.bus.$emit("name","计算属性");//非父子间传值；
			this.meta = this.$route.meta.title; //自定义meta
		},
		computed:{
			// 状态不同,显示不同
			filterList(){
				return	this.list.filter((item)=>{
					if(this.type === 'all'){
							return true;
						}
						else if(this.type === 'uncomplete'){
							return !item.complete;
						}
						else{
							return item.complete;
						}
					}
				)
			},
			// 总共完成个数
			completeCount(){
				return this.list.filter((item)=>{
					return item.complete
				}).length;
			},
			// 双向绑定
			msg(){
				if(this.ipt.length < 6){
					return "用户名太短";
				}else{
					return "";
				}
			},
			
			// 读取和设置通过input
			aPlus: {
				get (){
					//设置data变量 返回aplus值
					return this.xing + "," + this.ming;
				},
				set (v){
					//双向数据绑定
					console.log(v)
					var arr = v.split(",");
					this.xing = arr[0];
					this.ming = arr[1];
				}
			}
			
		},
		methods:{
			
		}
	}
</script>
<style scoped>
	
</style>