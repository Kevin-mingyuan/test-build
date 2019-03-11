import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
		{
			path:"/",
			redirect:{name:"Home"}
		},
    {
      path: '/hellowrold',
      name: 'HelloWorld',
      component: HelloWorld
    },
		{
			path:"/home",
			name:"Home",
			component:resolve => require(["@/components/Page/Home"],resolve),
			meta:{
				title:"主页Home"
			}
		},
		{
			path:"/film",
			name:"Film",
			component:resolve => require(["@/components/Page/Film"],resolve),
			meta:{
				title:"影片Film"
			}
		},
		{
			path:"/cinama",
			name:"Cinama",
			component:resolve => require(["@/components/Page/Cinama"],resolve),
			meta:{
				title:"影院Cinama"
			}
		},
		{
			path:"/shop",
			name:"Shop",
			component:resolve => require(["@/components/Page/Shop"],resolve),
			meta:{
				title:"商城shop"
			}
		},
		{
			path:"/my",
			name:"My",
			component:resolve => require(["@/components/Page/My"],resolve),
			meta:{
				title:"我的My"
			}
		},
		{
			path:"/card",
			name:"Card",
			component:resolve => require(["@/components/Page/Card"],resolve),
			meta:{
				title:"卖座卡Card"
			}
		}
  ]
})
