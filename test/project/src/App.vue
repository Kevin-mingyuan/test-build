<template>
  <div id="app">
		<p v-if="user">你好 {{user}} <button @click="quit">退出</button></p>
    <MyHead></MyHead>
    <Loading v-if="index == 1"/><el-button type="primary"  @click="close">关闭全局组件</el-button>
    <ul class="app-ul">
        <li>
            <router-link :to="{'name':'Home'}">商品列表</router-link>
        </li>
        <li>
            <router-link to="/computed">计算属性</router-link>
        </li>
        <li>
          <router-link :to='{"path":"/two/dogs"}'>dogs</router-link>
        </li>
        <li>
          <router-link :to='{"path":"/two/users"}'>users</router-link>
        </li>
        <li>
          <router-link :to='{"path":"/watch"}'>watch</router-link>
        </li>
				<li>
					<router-link :to='{"path":"/login"}'>login</router-link>
				</li>
        	<li>
					<router-link :to='{"path":"/nexttick"}'>nexttick</router-link>
				</li>
        	<li>
					<router-link :to='{"path":"/tablepage"}'>tablepage</router-link>
				</li>
        	<li>
					<router-link :to='{"path":"/tags"}'>tags</router-link>
				</li>
					<li>
					<router-link :to='{"path":"/vuex"}'>vuex</router-link>
				</li>
        	<li>
					<router-link :to='{"path":"/directives"}'>directives</router-link>
				</li>
        	<li>
					<router-link :to='{"path":"/is"}'>is</router-link>
				</li>
        <li>
					<router-link :to='{"path":"/filter"}'>filter</router-link>
				</li>
				<li>
					<router-link :to='{"path":"/animate"}'>animate</router-link>
				</li>
        <li>
					<router-link :to='{"name":"Vuex2"}'>vue辅助函数</router-link>
				</li>
    </ul>
    <router-view @child="receive"/>
  </div>                
</template>

<script>
import MyHead from './components/MyHead';
export default {
  name: 'App',
  components:{
		MyHead:MyHead
	},
  data(){
      return {
          index:"",
					user:""
      }
  },
  created(){
			console.log(this.$root.bus)
  },
  mounted(){
      setTimeout(()=>{
				this.index = 1;
    },3000);
  },
  methods:{
    close(){
      this.index = 2;
    },
		//接收子组件的传值
		receive(user){
			this.user = user;
		},
		quit(){
			sessionStorage.removeItem("user");
			this.user = "";
			this.$router.push("/login");
		}
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.app-ul{
  display: flex;
  list-style: none;
}
.app-ul li{
  margin: 0 10px;
}
</style>
