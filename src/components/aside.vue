<template>
	<div class="aside">
		<div class="teacher-header">
			<div class="teacher-header-img">
				<template>
					<img :src="this.$baseApiUrl+teacher.avatar" alt="">
				</template>
			</div>
			<div class="teacher-header-name">{{teacher.username || 'username'}}</div>
      <div class="teacher-header-btn" @click="$router.push('/center')">
        个人中心
      </div>
		</div>
		<div class="select-bar">
			<ul class="bars">
				<li class="active">
					<router-link :to="{path: '/schedule'}">
						<img class="imgs" src="@/assets/kechengbiao_h.png" alt="">
						<span>课程表</span>
					</router-link>
				</li>
				<li class="active">
					<router-link :to="{path: '/course'}">
						<img class="imgs" src="@/assets/kecheng_h.png" alt="">
						<span>我的课程</span>
					</router-link>
				</li>
				<li class="active">
					<router-link :to="{path: '/common'}">
            <img class="imgs" src="@/assets/wenti01.png" alt="">
            <span>常见问题</span>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "asides",
  computed: {
    ...mapState({
      teacher: state => state.userinfo.teacher
    })
  }
};
</script>

<style scoped>
.aside {
  width: 180px;
  float: left;
}
.select-bar {
  background: #fff;
  border: 1px solid #dcdcdc;
  border-top: none;
}
.bars {
  padding-top: 10px;
}
.bars li {
  height: 60px;
  font-size: 16px;
  color: #333333;
  line-height: 60px;
  cursor: pointer;
}
.bars li a {
  display: block;
  color: #333333;
  text-decoration: none;
}
.bars li a.router-link-active {
  color: #ff8200;
}
.imgs {
  float: left;
  margin: 20px;
}
.teacher-header {
  height: 240px;
  background: #fffdf3;
  border: 1px solid #dcdcdc;
}
.teacher-header-img {
  width: 96px;
  height: 96px;
  margin-top: 35px;
  padding: 0 42px;
}
.teacher-header-img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.teacher-header-name {
  margin: 10px 0;
  font-size: 24px;
  color: #333333;
  font-weight: bold;
  text-align: center;
}
.teacher-header-btn {
  width: 127px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #ff8200;
  border-radius: 3px;
  font-size: 14px;
  color: #ffffff;
  margin-left: 21px;
  cursor: pointer;
}
</style>