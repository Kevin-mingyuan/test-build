<template>
	<div>

		<mt-loadmore :top-method="loadTop" ref="loadmore">

			<p style="text-align: center;">{{$route.meta.title}}</p>

			<ul
				v-infinite-scroll="loadMore"
				infinite-scroll-disabled="loading"
				infinite-scroll-distance="10"
				infinite-scroll-immediate-check='false'
			>

				<li v-for="(item, i) in list" :key='i'>{{ item.name }}</li>
			</ul>

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
			}
		},

		mounted(){

			this.$http.get('http://localhost:3000', {
				params: {page: this.page}
			}).then(({data}) => {

				this.list = data;
			})
		},

		methods:{

			loadTop(){

				// console.log('aa');

				this.loading = false;

				this.page = 1;

				this.$http.get('http://localhost:3000', {

					params: {page: this.page}
				}).then(({data}) => {

					this.list = data;
				})

				this.$refs.loadmore.onTopLoaded();

			},

			loadMore() {

				this.loading = true;

				this.page += 1;

				this.$http.get('http://localhost:3000', {

					params: {page: this.page}
				}).then(({data}) => {

					console.log(data);

					if(data.length != 0){

						this.list = this.list.concat(data);

						this.loading = false;
					}else{

						console.log('no more');
					}

					
						
					

					
				})
				
				
				
			}
		},

		components: {

			'mt-loadmore': Loadmore,
		}
	}
</script>
<style scoped lang="scss">
	$sc:25;
ul li{

	height: 90/$sc + rem;
}
	
</style>