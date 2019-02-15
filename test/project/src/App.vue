<template>
  <div id="app">
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
    </ul>
    <router-view/>
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
          index:""
      }
  },
  created(){

  },
  mounted(){
      setTimeout(()=>{
				this.index = 1;
    },3000);
  },
  methods:{
    close(){
      this.index = 2;
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
