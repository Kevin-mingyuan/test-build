<template>
	<div>
		<p style="text-align: center;">{{$route.meta.title}}</p>

		<mt-loadmore :top-method="loadTop" ref="loadmore" @top-status-change="handleTopChange">
			<ul
				v-infinite-scroll="loadMore"
				infinite-scroll-disabled="loading"
				infinite-scroll-distance="10"
				infinite-scroll-immediate-check='false'
			>

				<li v-for="(item, i) in list" :key='i'>{{ item.name }}</li>
			</ul>
			<!-- <div slot="top" class="mint-loadmore-top">
				<span v-show="topStatus !== 'loading'">loading...</span>
				<span v-show="topStatus === 'loading'">Loading...</span>
			</div> -->
			<div class="loading-box tc" v-if="loading">
				<mt-spinner type="snake" class="loading-more"></mt-spinner>
				<span class="loading-more-txt">加载中...</span>
			</div>
			<div class="no-more" v-if="noMore">没有更多了~</div>
		</mt-loadmore>
	</div>
</template>

<script>
	import $ from 'jquery';
	import { Loadmore } from 'mint-ui';
	import { InfiniteScroll } from 'mint-ui';

	export default {

		name:"Film",

		data(){
			
			return {
				
				list: [],

				loading: false,

				page: 1,

				noMore:false
			}
		},
		components: {

			'mt-loadmore': Loadmore,
		},
		mounted(){

			this.$http.get('http://localhost:3000', {
				params: {page: this.page}
			}).then(({data}) => {

				this.list = data;
			})
		},

		methods:{
			//上啦刷新
			loadTop(){
				// console.log('aa');

				this.loading = false;

				this.page = 1;

				setTimeout(()=>{
					this.$http.get('http://localhost:3000', {

						params: {page: this.page}
					}).then(({data}) => {

						this.list = data;
					})
				this.$refs.loadmore.onTopLoaded();

				},3000)

			},
			//无限滚动
			loadMore() {

				this.loading = true;

				this.page += 1;

				setTimeout(()=>{
					this.$http.get('http://localhost:3000', {

						params: {page: this.page}
					}).then(({data}) => {

						console.log(data);

						if(data.length != 0){

							this.list = this.list.concat(data);

							this.loading = false;
						}else{

							console.log('no more');

							this.noMore = true
						}
						
					})	
				},1000)
				
			},

			//上啦后的成功回调
			handleTopChange(a){
				console.log(a);
			},

		}
	}
</script>
<style scoped lang="scss">
	$sc:25;
ul li{

	height: 90/$sc + rem;
}
	
</style>