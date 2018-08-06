<template>
	<div class="login">
		<div class="login-box">
			<div class="title">
				<span class="login-right">
					Sign in
				</span>
				<span class="login-left button-point" @click="$router.push('/regist')">
					Join us
					<img src="../assets/jian.png" alt="">
				</span>
			</div>
			<div class="inps">
				<input type="text" v-model="form.username" class="" placeholder="Email">
				<input type="password" v-model="form.password" placeholder="Password">
			</div>
			<div class="remember-num">
        <el-checkbox v-model="keep">Keep me signed in.</el-checkbox>
			</div>
			<button class="btn" @click="login">登录</button>
			<div class="regist-now button-point" @click="$router.push('/reset')">
				Forgot your password?
			</div>
		</div>
	</div>
</template>
<script>
import { authLoginPost } from "@/api/auth";
import load from '@/router/load'
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      keep: true
    };
  },
  methods: {
    login() {
      authLoginPost(this.form, this.keep).then(resp => {
        return load()
      }).then(url => {
        if(url === true) {
          this.$router.push('/center')
        } else {
          this.$router.push(url)
        }
      });
    }
  }
};
</script>
<style scoped>
.login {
  height: 600px;
  background: url("../assets/bj01.jpg") no-repeat;
  position: relative;
}
.login-box {
  width: 370px;
  height: 450px;
  background: #ffffff;
  border-radius: 10px;
  position: absolute;
  top: 75px;
  right: 150px;
}
.title {
  height: 80px;
  font-size: 22px;
  color: #333333;
  line-height: 80px;
  text-indent: 32px;
  border-bottom: 3px solid #ff8200;
}
.inps input {
  width: 300px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
  margin-top: 21px;
  text-indent: 18px;
  outline: none;
}
.inps {
  padding-top: 18px;
}
.text {
  font-size: 14px;
  color: #666666;
  float: left;
  width: 277px;
}
.check {
  float: left;
  width: 14px;
  height: 14px;
  margin-top: 2px;
  margin-right: 8px;
}
.remember-num {
  width: 300px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 14px;
  cursor: pointer;
}
.forget {
  float: right;
}
.btn {
  background: #ff8200;
  border-radius: 5px;
  width: 300px;
  height: 52px;
  outline: none;
  font-size: 18px;
  color: #ffffff;
  margin: 30px 34px 0 36px;
  outline: none;
  border: none;
}
.regist-now {
  font-size: 14px;
  color: #ff8200;
  text-align: center;
  margin-top: 30px;
  cursor: pointer;
}
.login-right {
  float: left;
}
.login-left {
  float: right;
  font-size: 16px;
  color: #ff8200;
  margin-right: 20px;
}
.login-left img {
  vertical-align: middle;
}
</style>