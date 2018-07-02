<template>
    <div class="login">
        <div class="login-box">
            <div class="title">
                <span class="login-right">
                Sign in
                </span>
                <span class="login-left">
                Join us
                <img src="../assets/jian.png" alt="">
                </span>
            </div>
            <div class="inps">
                <input type="text" v-model="form.username" class="" placeholder="Email">
                <input type="password" v-model="form.password" placeholder="Password">
            </div>
            <div class="remember-num">
                <input type="checkbox" class="check">
                <div class="text">
                    <span>Keep me signed in.</span>
                </div>
            </div>
            <button class="btn" @click="login">登录</button>
            <div class="regist-now">
                Forgot your password?
            </div>
        </div>
    </div>
</template>

<script>
import {
	authLoginPost
} from '@/api/auth'
export default {
	data() {
		return {
			form: {
				username: '',
				password: ''
			}
		}
	},
	methods: {
		login() {
			authLoginPost(this.form).then(resp => {
				console.log(resp);
			})
		}
	}
}
</script>
<style scoped>
    .login{
        height: 600px;
        background: url('../assets/bj01.jpg') no-repeat;
        position: relative;
    }
    .login-box{
        width: 370px;
        height: 450px;
        background: #FFFFFF;
        border-radius: 10px;
        position: absolute;
        top: 75px;
        right: 150px;
    }
    .title{
        height: 80px;
        font-size: 22px;
        color: #333333;
        line-height: 80px;
        text-indent: 32px;
        border-bottom: 3px solid #FF8200;
    }
    .inps input{
        width: 300px;
        height: 52px;
        background: #FFFFFF;
        border: 1px solid #DCDCDC;
        border-radius: 5px;
        display: block;
        margin: 0 auto;
        margin-top: 21px;
        text-indent: 18px;
        outline: none;
    }
    .inps{
        padding-top: 18px;
    }
    .text{
        font-size: 14px;
        color: #666666;
        float: left;
        width: 277px;
    }
    .check{
        float: left;
        width: 14px;
        height: 14px;
        margin-top: 2px;
        margin-right: 8px;
    }
    .remember-num{
        width: 300px;
        overflow: hidden;
        margin: 0 auto;
        margin-top: 14px;
        cursor: pointer;
    }
    .forget{
        float: right;
    }
    .btn{
        background: #FF8200;
        border-radius: 5px;
        width: 300px;
        height: 52px;
        outline: none;
        font-size: 18px;
        color: #FFFFFF;
        margin: 30px 34px 0 36px;
        outline: none;
        border: none;
    }
    .regist-now{
        font-size: 14px;
        color: #FF8200;
        text-align: center;
        margin-top: 30px;
        cursor: pointer;
    }
    .login-right{
        float: left;
    }
    .login-left{
        float: right;
        font-size: 16px;
        color: #FF8200;
        margin-right: 20px;
    }
    .login-left img{
        vertical-align: middle;
    }
</style>