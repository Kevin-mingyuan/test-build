<template>
  <div class="hello">
		<input type="text" placeholder="产品" v-model="name"/>
		<input type="text" placeholder="价格" v-model="price" />
			<button type="primary" @click="addProduct({name,price})">添加商品</button>
			<ul>
				<li v-for="item in car.list" :key="item.id">
					{{item.name}} <br/>
					{{item.price}} <br/>
					<button @click="jian(item.id)"> - </button>
					{{item.count}}
					<button @click="jia(item.id)"> + </button><br/>
				</li>
			</ul>
			总价钱： {{money}}
			
			<div class="demo">适配测试
			</div><br/>
			<div class="baidu">百度一下</div>

    </div>
</template>

<script>
	import {mapState,mapActions,mapGetters,mapMutations} from "vuex";
export default {
  name: 'HelloWorld',
	computed:{
			...mapState(["car","list"]),
			...mapGetters(["money"])
	},
	methods:{
		...mapMutations(["jia","jian","addProduct"])
	},
  data () {
    return {
				name:"", //添加的商品名字
				price:"" //商品的价格
    }
  },
	created(){
		console.log(this.$store)
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	$sc:25;
	.demo{
		width: 372/$sc + rem;
		background: skyblue;
	}
	.baidu{
		width: 100/$sc + rem;
		height: 36/$sc + rem;
		border: #00FFFF 1px solid;
	}
</style>
