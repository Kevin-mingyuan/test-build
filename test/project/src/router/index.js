import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:"/home",
      name:"Home",
      component:()=>import("@/components/shop/Home"),
      meta:{
        title:"商品列表"
      }
    },
    {
      path:"/detail",
      name:"Detail",
      component:()=>import("@/components/shop/Detail"),
      meta:{
        title:"详情页"
      }
    },
    {
      path:"/computed",
      name:"Computed",
      component:()=>import("@/components/api/Computed"),
      meta:{
        title:"计算属性"
      }
    }
  ]
})
export default router;