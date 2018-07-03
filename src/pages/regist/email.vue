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
					<input type="text" class="register" placeholder="First name">
					<input type="text" class="register" placeholder="Last name">
				</div>
				<div class="phone">
					<div class="phone-left">
						Email
					</div>
					<input type="text" class="inps" v-model="form.username" placeholder="Email address">
				</div>
				<div class="phone">
					<div class="phone-left">
						Verification code
					</div>
					<div class="inps">
						<input type="text" class="yan-num" placeholder="Get code from your Email">
						<div class="click-btn" @click="getVerifyCode">
							Get Code
						</div>
					</div>
				</div>
				<div class="phone">
					<div class="phone-left">
						Get Code
					</div>
					<input type="text" class="inps" placeholder="at least 6 characters">
				</div>
				<div class="phone">
					<div class="phone-left">
						Re-enter password
					</div>
					<input type="text" class="inps" placeholder="at least 6 characters">
				</div>
				<div class="checkbox">
					<input type="checkbox">
					<span>我已阅读并同意
						<span class="instructor">《UStutor用户注册协议》</span>
					</span>
				</div>
				<button class="regist-now">立即注册</button>
			</div>
		</div>
	</div>
</template>
<script>
import {
	authEmailverifyPost
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
      }
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
				error('请输入邮箱! ');
				return false;
			}
			if(!this.$EMAIL_REG_EXP.test(username)) {
				error('邮箱格式不对! ');
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
		getVerifyCode() {
			const {
        username
			} = this.form;
			if(this.valid('verify_code')){
				authEmailverifyPost({
					email_address: username
				}).then(resp => {
					console.log(resp);
				});
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