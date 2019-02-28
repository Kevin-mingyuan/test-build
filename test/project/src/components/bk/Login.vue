<template>
	<div>
		{{title}}
		<input type="text" value="" v-model="username" /> <br />
		<input type="password" value="" v-model="password" @keyup.enter="login"/>
		<button @click="login" >登录</button>
	</div>
</template>
<script>
	export default {
		name:"Login",
		data(){
			return {
				title:"",
				username:"",
				password:""
			}
		},
		created(){
			this.title = this.$route.meta.title;
		},
		methods:{
			login(){
				if(this.username === "admin" && this.password === "admin"){
					sessionStorage.setItem("user",this.username);
					this.$router.push("/userpage");
					this.$emit("child",this.username); //@child='receive'使用方式 子组件发送
				}else{
					alert("账户密码为admin");
					this.username = "";
					this.password = "";
				}
			}
		}
	}
</script>
<style scoped>
	
</style>