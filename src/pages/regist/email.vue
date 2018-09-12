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
			<el-form label-width="240px" ref="registForm" :rules="rules" :model="form" class="regist-form" :validate-on-rule-change="false">
				<el-form-item label="mobile" prop="username" ref="mobile" :rules="rules.username">
					<div class="form-input">
						<el-input type="text" v-model="form.username" placeholder="mobile no">
							<el-select slot="prepend" v-model="form.code" style="width: 150px;">
								<el-option value="" label="please choose"></el-option>
								<el-option v-for="(item, index) in $NATIONAL_CODE" :value="item.code" :key="index" :label="item.name"></el-option>
							</el-select>
						</el-input>
					</div>
				</el-form-item>
				<el-form-item label="Verification code" prop="verify_code">
					<div class="form-input">
						<el-input type="text" v-model="form.verify_code" placeholder="Get code from your mobile">
							<el-button style="width: 120px" slot="append" ref="countDown" :disabled="!verifyBtn.status" @click="getVerifyCode">{{verifyBtn.text}}</el-button>
						</el-input>
					</div>
				</el-form-item>
				<el-form-item label="Pass Word" prop="password">
					<div class="form-input">
						<el-input type="password" v-model="form.password" placeholder="at least 6 characters">
						</el-input>
					</div>
				</el-form-item>
				<el-form-item label="Re-enter password" prop="repass">
					<div class="form-input">
						<el-input type="password" v-model="form.repass" placeholder="at least 6 characters">
						</el-input>
					</div>
				</el-form-item>
				<el-form-item prop="agree">
					<div class="form-input">
						<el-checkbox v-model="form.agree">
						</el-checkbox>
						<span>I have read and agreed the UStutor user registration agreement.
						</span>
					</div>
				</el-form-item>
				<el-form-item>
					<div class="form-input">
						<el-button class="regist-now" @click="regist" type="primary" style="width: 100%">Register Now</el-button>
					</div>
				</el-form-item>
			</el-form>
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
				code: '',
        username: '',
        password: '',
				repass: '',
				agree: false,
        verify_code: ''
			},
			isGetCode: false,
			verifyBtn: {
				status: true,
				text: 'Get Code'
			}
    };
	},
	computed: {
		rules() {
			const codeRequire = (rule, value, cb) => {
				if(!this.form.code) {
					cb(new Error('the nation code is required'))
				}
				cb()
			}
			const samePassword = (rule, value, cb) => {
				if(this.form.password !== value) {
					cb(new Error('The passwords do not match'))
				}
				cb()
			}
			const agreeFirst = (rule, value, cb) => {
				console.log(value)
				if(!value) {
					cb(new Error('You must agree to the agreement first'))
				}
				cb()
			}
			if(this.isGetCode) {
				return {
					username: [
						{required: true, message: 'the phone number is required', trigger: 'blur'},
						{validator: codeRequire, trigger: 'blur' }
					]
				}
			}
			return {
				username: [
					{required: true, message: 'the phone number is required', trigger: 'blur'},
					{validator: codeRequire, trigger: 'blur' }
				],
				verify_code: [
					{required: true, message: 'the verify code is required', trigger: 'blur'}
				],
				password: [
					{required: true, message: 'the password is required', trigger: 'blur'}
				],
				repass: [
					{required: true, message: 'enter password again', trigger: 'blur'},
					{validator: samePassword, trigger: 'blur' }
				],
				agree: [
					{validator: agreeFirst }
				]
			}
		}
	},
	methods: {
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
			this.isGetCode = true
			this.$nextTick(_=>{
				this.$refs.registForm.validate().then(_=>{
					this.isGetCode = false
					const {
						username,
						code
					} = this.form;
					authSmsverifyPost({
						mobile_no: username,
						country_code: code.replace('+', '')
					}).then(resp => {
						this.$message.success('The verification code has been sent. Please check')
						this.countDown(60);
					});
				}).catch(_=>{
					this.isGetCode = false;
				})
			})
		},
		regist() {
			this.$refs.registForm.validate().then(_ => {
				return authRegisterPost(this.form).then(resp=> {
					this.$message.success('Registered successfully, please complete your personal infomation!');
					this.$router.push('/basic');
				})
			})
		}
	}
};
</script>

<style>
.main-contain {
	width: 830px;
	border-radius: 10px;
	background: #FFFFFF;
	margin: 80px auto;
	overflow: hidden;
}
.main-contain .title {
	padding: 0 30px 0 53px;
	border-bottom: 1px solid #E8E8E8;
	overflow: hidden;
}
.title .use-phone {
	line-height: 82px;
	float: right;
	font-family: PingFangSC-Regular;
	font-size: 14px;
	color: #333333;
}
.title .use-phone .user-login {
	font-family: PingFangSC-Regular;
	font-size: 14px;
	color: #FF8200;
	line-height: 20px;
}
.title .account-registration {
	line-height: 82px;
	float: left;
	font-family: PingFangSC-Regular;
	font-size: 22px;
	color: #333333;
	border-bottom: 2px #FF8200 solid;
}
.regist-form {
	width: 100%;
	padding: 21px 0;
}
.regist-form .el-form-item__label {
	font-size: 16px;
}
.regist-form .form-input {
	width: 392px;
}
.instructor {
	font-family: PingFangSC-Regular;
	font-size: 14px;
	color: #FF8200;
	line-height: 20px;
	cursor: pointer;
}
</style>