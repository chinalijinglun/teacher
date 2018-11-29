<template>
	<div class="headers">
		<div class="header-top">
			<div class="centers">
				<div class="right_01">
					<img src="@/assets/dianhua_s.png" class="tel" alt="">
					<span class="user" v-if="userName">
            <span @click="$router.push('/center')">Hi，{{teacher | teacherName}}</span>
						<span>|</span>
						<span @click="logout">Logout</span>
					</span>
					<span class="user" v-else>
						<span @click="logout">Login</span>
					</span>
					<span class="mouseenter">
						<span class="span">join us</span>
						<img src="@/assets/erweima.png" alt="" class="erweima">
					</span>
				</div>
			</div>
		</div>
		<div class="header-bottom">
			<img @click="$router.push('/en/index')" src="@/assets/logo1.png" alt="" class="logo">
			<ul class="nav">
				<!-- <li @click="$router.push('/en/school')">
					<p>School Staff</p>
					<p>师资团队</p>
				</li> -->
				<li @click="$router.push('/en/course')">
					<p>Course System</p>
					<p>课程体系</p>
				</li>
				<!-- <li @click="$router.push('/en/service')">
					<p>Service System</p>
					<p>教学服务</p>
				</li> -->
				<!-- <li @click="$router.push('/en/admissions')">
					<p>Admissions</p>
					<p>招生入学</p>
				</li> -->
				<li @click="$router.push('/en/about')">
					<p>About US</p>
					<p>关于我们</p>
				</li>
			</ul>
			<div class="btn-box">
			</div>
		</div>
	</div>
</template>
<script>
import {mapState} from 'vuex'
export default {
	name: "headers",
	computed: {
		...mapState({
			userName: state=>state.auth.userName,
      teacher: state => state.userinfo.teacher
		})
	},
  data() {
    return {
      show: false,
      showAdmissions: false
    };
  },
  methods: {
    mouserover() {
      this.showAdmissions = true;
    },
    mouseout() {
      this.showAdmissions = false;
		},
		logout() {
			this.$store.dispatch('auth/loginOut')
			this.$router.push('/login')
		}
  }
};
</script>

<style scoped>
ul,
li {
  list-style: none;
}
.headers {
  height: 140px;
  width: 100%;
  min-width: 1200px;
  border-bottom: 2px solid #ff8200;
  background: #ffffff;
  position: relative;
  z-index: 1;
}
.header-top {
  background: #f3f3f3;
  border-bottom: 1px solid #e3e3e3;
}
.centers {
  height: 33px;
  margin: 0 auto;
  width: 1400px;
  /* overflow: hidden; */
}
.left {
  font-size: 12px;
  color: #2a2a2a;
  line-height: 33px;
  cursor: pointer;
  float: left;
}
.left .click {
  color: #ff8200;
}
.right_01 {
  float: right;
}
.right_01 img {
  margin: 7px;
}
.right_01 .tel {
  margin-right: 71px;
  float: left;
}
.right_01 .span {
  display: inline-block;
  font-size: 12px;
  color: #666666;
  line-height: 33px;
  float: right;
  cursor: pointer;
}
.wx_h {
  cursor: pointer;
}
.mouseenter {
  position: relative;
  background: url(../assets/wx_h.jpg) no-repeat center left;
  display: inline-block;
  width: 100px;
}
.erweima {
  position: absolute;
  left: 0;
  top: 33px;
  display: none;
}
.mouseenter:hover .erweima {
  display: block;
}
.mouseenter:hover .span {
  color: #ff8200;
}
.mouseenter:hover {
  background: url(../assets/weixin.png) no-repeat center left;
}
.header-bottom {
  width: 1400px;
  margin: 0 auto;
  height: 104px;
  position: relative;
  /* overflow: hidden; */
}
.logo {
  margin-top: 19px;
  float: left;
  cursor: pointer;
}
.nav {
  overflow: hidden;
  margin-left: 91px;
  margin-top: 28px;
  float: left;
}
.nav li {
  float: left;
  height: 56px;
  text-align: center;
  font-size: 18px;
  color: #333333;
  line-height: 28px;
  cursor: pointer;
  margin-right: 40px;
}
.nav li:hover {
  color: #ff8200;
}
.login {
  background: #ffffff;
  border: 1px solid #ff8200;
  border-radius: 100px;
  font-size: 14px;
  color: #ff8200;
  width: 119px;
  height: 40px;
  float: left;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  margin-right: 15px;
}
.regist {
  width: 119px;
  height: 40px;
  float: left;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  background: #ff8200;
  border-radius: 100px;
  font-size: 14px;
  color: #ffffff;
}
.btn-box {
  overflow: hidden;
  float: right;
  margin-top: 25px;
}
.img-box {
  position: absolute;
  overflow: hidden;
  width: 1920px;
}
.img-box li {
  float: left;
  width: 480px;
  height: 230px;
  position: relative;
  cursor: pointer;
}
.img-box li p {
  position: absolute;
  bottom: 0;
  height: 50px;
  width: 480px;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  color: #ffffff;
}
.user {
  float: left;
  display: inline-block;
  line-height: 33px;
  font-size: 12px;
  color: #666666;
  margin-right: 71px;
}
.user span {
  margin-right: 10px;
  cursor: pointer;
}
.b_dianhua {
  margin: 32px 0;
  float: right;
}
</style>