import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);

const router = new Router({
  mode:'history', //打包记得注销
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
			redirect:{"name":"Login"}
    },
    {
      path:"/home",        
      name:"Home",
      component:()=>import("@/components/shop/Home"),
      meta:{
        title:"商品列表"
      },
			beforeEnter:(to,from,next) =>{
				alert("路由守卫 home");
				next();	
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
        title:"计算属性1"
      }
    },
    {
      path:"/myhead",
      name:"Myhead",
      component:()=>import("@/components/MyHead"),
      meta:{
        title:"Head"
      }
    },
    {
      path:"/two/:type",
      name:"Two",
      component:()=>import("@/components/bk/Two"),
      meta:{
        title:"bk"
      }
    },
    {
      path:"/detailbk/:type/:id",
      name:"Detailbk",
      component:()=>import("@/components/bk/Detailbk"),
      meta:{
        title:"Detailbk"
      }
    },
    {
      path:"/watch",
      name:"Watch",
      component:()=>import("@/components/api/Watch"),
      meta:{
        title:"监听",
				isLogin:true,
      }
    },
		{
			path:"/login",
			name:"Login",
			component:()=>import("@/components/bk/Login"),
			meta:{
				title:"登录"
			}
    },
    {
      path:"/register",
      name:"Register",
      component:()=>import("@/components/bk/Register"),
      meta:{
        title:"注册"
      }
    },
		{
			path:"/userpage",
			name:"UserPage",
			component:()=>import("@/components/bk/UserPage"),
			meta:{
				title:"用户资料",
				isLogin:true
			}
    },
    {
      path:"/testroute/:id",
      name:"TestRoute",
      component:()=>import("@/components/bk/TestRoute"),
      meta:{
        title:"route-test"
      }
    },
    {
      path:"/tablepage",
      name:"TablePage",
      component:(reslove)=>{
        require(['@/components/element/TablePage'],reslove)
      },
      meta:{
        title:"elementPage"
      }
    },
    {
      path:"/nexttick",
      name:"NextTick",
      component:()=>import("@/components/api/NextTick"),
      meta:{
        title:"NextTick"
      }
    },
    {
      path:"/tags",
      name:"Tags",
      component:()=>import("@/components/element/Tags"),
      meta:{
        title:"Tags"
      }
    },
    {
      path:"/layout",
      name:"Layout",
      component:()=>import("@/components/element/Layout"),
      meta:{
        title:"Layout"
      }
    },
    {
      path:"/directives",
      name:"Directives",
      component:()=>import("@/components/api/Directives"),
      meta:{
        title:"自定义指令"
      }
    },
		{
			path:"/vuex",
			name:"Vuex",
			component:()=>import("@/components/api/Vuex"),
			meta:{
				title:"Vuex"
			}
    },
    {
      path:"/is",
      name:"is",
      component:()=>import("@/components/api/Is"),
      meta:{
        title:"api-is"
      }
    },
		{
			path:"**",
			name:"NotFind",
			component:()=>import("@/components/bk/NotFind"),
			meta:{
				title:"404"
			}
		}
  ]
})

router.beforeEach((to,from,next)=>{
	var matchedRoute = to.matched[0]; //匹配的路由
	console.log(to.matched[0]);
	if(matchedRoute && matchedRoute.meta.isLogin){ //需要登录验证的页面 需要的页面是加了isLogin变量的不需要的不加
			if(sessionStorage.getItem("user")){  //如果登陆了; 用sessionStorage 模拟是否登录； 但是else无next执行不了
				next();
		}else{
			router.push({"name":"Login"});
		}
	}else{
				next(); //执行下一步
	}
})

export default router;