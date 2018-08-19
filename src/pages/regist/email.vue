<template>
	<div class="regist">
		<div class="main-contain">
			<div class="title">
				<div class="account-registration">
					Sign up
				</div>
				<div class="use-phone">
					Already have an account?
					<router-link to="login" class="user-login">Sign in</router-link>
				</div>
			</div>
			<div class="form">
				<div class="phone">
					<div class="phone-left">
						Your name
					</div>
					<input type="text" class="register" v-model="form.first_name" placeholder="First name">
					<input type="text" class="register" v-model="form.last_name" placeholder="Last name">
				</div>
				<div class="phone">
					<div class="phone-left">
						mobile
					</div>
					<input type="text" class="inps" v-model="form.username" placeholder="mobile no">
				</div>
				<div class="phone">
					<div class="phone-left">
						Verification code
					</div>
					<div class="inps">
						<input type="text" class="yan-num" v-model="form.verify_code" placeholder="Get code from your mobile">
						<div class="click-btn" ref="countDown" @click="getVerifyCode">
							{{verifyBtn.text}}
						</div>
					</div>
				</div>
				<div class="phone">
					<div class="phone-left">
						Pass Word
					</div>
					<input type="password" class="inps" v-model="form.password" placeholder="at least 6 characters">
				</div>
				<div class="phone">
					<div class="phone-left">
						Re-enter password
					</div>
					<input type="password" class="inps" v-model="repass" placeholder="at least 6 characters">
				</div>
				<div class="checkbox">
					<input type="checkbox" v-model="agree">
					<span>我已阅读并同意
						<span class="instructor">《UStutor用户注册协议》</span>
					</span>
				</div>
				<button class="regist-now" @click="regist">立即注册</button>
			</div>
		</div>
	</div>
</template>
<script>
import {
	authSmsverifyPost,
	authRegisterPost 
} from '@/api/auth'
export default {
  name: "phone",
  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        verify_code: ""
      },
			repass: '',
			verifyBtn: {
				status: true,
				text: 'Get Code'
			},
			agree: false
    };
  },
	methods: {
		valid(type) {
			const {
        first_name,
        last_name,
        username,
				password,
				usertype,
        verify_code
			} = this.form;
			const repass = this.repass;
			const error = this.$message.error.bind(this.$message);

			if(!username) {
				error('请输入手机号! ');
				return false;
			}
			if(!this.$MOBILE_REG_EXP_NATIONAL.test(username)) {
				error('手机号格式不对! ');
				return false;
			}
			if(type === 'verify_code') {
				return true;
			}
			if(!verify_code) {
				error('请输入验证码！');
				return false;
			}
			if(!password) {
				error('请输入密码! ');
				return false;
			}
			if(!repass) {
				error('请再次输入密码! ');
				return false;
			}
			if(repass !== password) {
				error('两次输入密码不一致！');
				return false;
			}
			return true;
		},
		countDown(count) {
			if(count === 0) {
				this.verifyBtn.status = true;
				this.verifyBtn.text = 'Get Code';
				return;
			} else {
				this.verifyBtn.status = false;
				this.verifyBtn.text = `${count}S`;
				setTimeout(() => {
					this.countDown(--count);
				}, 1000);
			}
		},
		getVerifyCode() {
			if(!this.verifyBtn.status) return
			const {
        username
			} = this.form;
			if(this.valid('verify_code')){
				this.countDown(60);
				authSmsverifyPost({
					mobile_no: username
				}).then(resp => {
				});
			}
		},
		regist() {
			if(!this.agree) {
				this.$message.error('请先同意《UStutor用户注册协议》');
				return false;
			}
			if(this.valid()) {
				return authRegisterPost(this.form).then(resp=> {
					this.$message.success('注册成功，请重新登录！');
					this.$router.push('/login');
				})
			}
		}
	}
};
</script>

<style scoped>
.main-contain {
  width: 830px;
  height: 600px;
  background: #ffffff;
  margin: 0 auto;
  margin-top: 81px;
}
.title {
  overflow: hidden;
  height: 86px;
  border: 1px solid #e8e8e8;
}
.account-registration {
  padding: 33px 0 20px 0;
  margin-left: 51px;
  float: left;
  border-bottom: 3px solid #ff8200;
  font-size: 22px;
  color: #333333;
}
.user-login {
  color: #ff8200;
}
.use-phone {
  font-size: 14px;
  color: #333333;
  float: right;
  margin: 43px 34px 0 0;
  cursor: pointer;
}
.phone-left {
  float: left;
  height: 52px;
  width: 225px;
  text-align: right;
  line-height: 52px;
}
.register {
  width: 185px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  float: left;
  margin-left: 20px;
  text-indent: 30px;
  outline: none;
}
.inps {
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  width: 392px;
  height: 52px;
  float: left;
  margin-left: 20px;
  text-indent: 30px;
  outline: none;
}
.phone {
  overflow: hidden;
  margin-top: 20px;
}
.yan-num {
  float: left;
  border: none;
  height: 50px;
  width: 278px;
  text-indent: 30px;
  outline: none;
}
.click-btn {
  float: right;
  width: 108px;
  height: 44px;
  background: #f5f5f5;
  font-size: 14px;
  color: #666666;
  text-align: center;
  line-height: 44px;
  text-indent: 0;
  margin: 3px;
  cursor: pointer;
}
.instructor {
  font-size: 14px;
  color: #ff8200;
  line-height: 20px;
}
.checkbox {
  font-size: 14px;
  color: #666666;
  margin-top: 20px;
  text-align: center;
}
.regist-now {
  background: #ff8200;
  border-radius: 5px;
  width: 392px;
  height: 52px;
  margin: 0 25%;
  margin-top: 36px;
  font-size: 18px;
  color: #ffffff;
  outline: none;
  cursor: pointer;
}
.login {
  font-size: 14px;
  color: #333333;
  text-align: center;
  margin-top: 20px;
}
</style>