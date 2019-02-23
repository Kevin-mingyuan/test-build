<template>
    <div>
        {{$route.meta.title}}

<div class="register-wrap">
        <ul class="register-ul">
            <li class="active">注册公司名字</li>
            <li>注册公司账号</li>
            <li>注册成功</li>
        </ul>
        <div class="one form-group comm" v-if="one">
            <div class="comm-info">
                <p>注册公司名字</p>
                <div class="comm-ipt">
                    <label for="company">请输入你的公司:</label>
                    <input type="text" value="" id="company" class="company form-control" placeholder="请输入公司" />
                </div>
                <div class="comm-ipt">
                    <label for="address">请输出你的地址:</label>
                    <input type="text" value="" id="address" class="address form-control" placeholder="请输入地址" />
                </div>
                <button class="next-one btn btn-info" @click="next1">
                    下一步
                </button>
            </div>
        </div>
        <div class="two form-group" v-if="two">
            <div class="comm-info">
                <p>注册公司账号</p>
                <div class="comm-ipt">
                    <label for="usersNumber">请输入账号</label>
                    <input type="text" class="usersNumber form-control" id="usersNumber" value="" placeholder="请输出账号" />
                </div>
                <div class="comm-ipt">
                    <label for="usersName">请输入联系人</label>
                    <input type="text" class="usersName form-control" id="usersName" value="" placeholder="请输入联系人" />
                </div>
                <div class="comm-ipt">
                    <label for="usersPhone">请输入电话</label>
                    <input type="text" class="usersPhone form-control" id="usersPhone" value="" placeholder="请输入电话" />
                </div>
                <div class="comm-ipt">
                    <label for="password">请输入密码</label>
                    <input type="text" class="password form-control" id="password" value="" placeholder="请输入密码" />
                </div>
                <button class="next-two btn btn-info" @click="next2">
                    下一步
                </button>
            </div>
        </div>
        <div class="three form-group" v-if="three">
            <div class="comm-info">
                <p>恭喜您,注册成功</p>
                <p>
                    您的公司是<span class="users-company"></span><br />
                    地址是<span class="user-address"></span><br />
                    账号是<span class="users-number"></span><br />
                    姓名是<span class="users-name"></span><br />
                    联系电话是<span class="users-phone"></span><br />
                </p>
                <button class="next-three btn btn-info">
                    返回登录
                </button>
            </div>
        </div>

        <!-- <input type="text" value="" class="aa" />
        <button class="del">delete</button>
        <div style="width:100px;height:100px;border:1px solid blue; display: none;" class="toggle">
            123
        </div> -->
    </div>
    </div>
</template>
<script>
export default {
    name:"Register",
    data(){
        return {
            one:true,
            two:false,
            three:false
        }
    },
    created(){
        console.log(this.$store.isLogin);
    },
    methods:{
        next1(){
            this.one = false;
            this.two = true;
            this.three = false;
        },
        next2(){
            this.one = false;
            this.two = false;
            this.three = true;              
        }
    }
}
</script>
<style scoped>
.register-wrap{
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.12);
    position: absolute;
    width: 1200px;
    height: 600px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}

.comm{
    width: 1200px;
}
.comm-info{
    width: 1200px;
    margin-top: 30px;
}
.comm-info p{
    text-align: center;
}
.comm-ipt{
    margin: 0 auto;
    width: 220px;
    margin-top: 20px;
}
/* 选项进度 */
.register-ul{
    display: flex;
    list-style: none;
    margin-left: 260px;
    margin-top: 20px;
}
.register-ul li{
    margin: 0 45px;
    color: #ccc;
}
.active{
    color: #1cbcff;
    border-bottom: 2px solid #1cbcff;
}
/* icon */
/* 公司 */
.company{
    background: url("../../assets/img/company.png") no-repeat;
    background-size: 22px 22px;
    text-indent: 20px;
    width: 220px;
}
/* 用户账号 */
.usersNumber{
    background: url("../../assets/img/usernunmber.png") no-repeat;
    background-size: 22px 22px;
    text-indent: 20px;
    width: 220px;
}
/* 地址 */
.address{
    background: url("../../assets/img/address.png") no-repeat;
    background-size: 22px 22px;
    text-indent: 20px;
    width: 220px;
}
/* 用户名字 */
.usersName{
    background: url("../../assets/img/user.png") no-repeat;
    background-size: 22px 22px;
    text-indent: 20px;
    width: 220px;
}
/* 用户电话 */
.usersPhone{
    background: url("../../assets/img/userphone.png") no-repeat;
    background-size: 22px 22px;
    text-indent: 20px;
    width: 220px;
}
/* 用户密码 */
.password{
    background: url("../../assets/img/password.png") no-repeat;
    background-size: 22px 22px;
    text-indent: 20px;
    width: 220px;
}
.next-one,.next-two,.next-three{
    width: 300px;
    margin-left: 450px;
    margin-top: 20px;
}
</style>

