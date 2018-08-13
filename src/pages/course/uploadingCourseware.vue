<template>
	<div class="uploading-courseware">
		<div class="course-name">
			课包名称：{{course.course_name}}
		</div>
		<div class="class-name">
			<span>课节名称：</span>
			<input type="text" class="inp" v-model="course_schedule_name" placeholder="请输入作业的标题">
		</div>
		<div class="upload">
			<span>
				上传附件：
			</span>
			<div class="uploading">
				<img src="@/assets/shangchuan.png" alt=""> 本地上传
			</div>
		</div>
		<div class="kejian">
			<div class="singal">
				<div class="left">
					<img src="@/assets/fujian.png" alt="">
				</div>
				<div class="right">
					<div class="rig-tit">Alex and I practiced writing </div>
					<div class="del">删除</div>
					<div class="radio"><input type="radio" name="allow" id=""> 允许学生预习</div>
					<div class="radio"><input type="radio" name="allow" id=""> 不允许</div>
				</div>
			</div>
			<div class="singal">
				<div class="left">
					<img src="@/assets/fujian.png" alt="">
				</div>
				<div class="right">
					<div class="rig-tit">Alex and I practiced writing </div>
					<div class="del">删除</div>
					<div class="radio"><input type="radio" name="allow" id=""> 允许学生预习</div>
					<div class="radio"><input type="radio" name="allow" id=""> 不允许</div>
				</div>
			</div>
			<div class="singal">
				<div class="left">
					<img src="@/assets/fujian.png" alt="">
				</div>
				<div class="right">
					<div class="rig-tit">Alex and I practiced writing </div>
					<div class="del">删除</div>
					<div class="radio"><input type="radio" name="allow" id=""> 允许学生预习</div>
					<div class="radio"><input type="radio" name="allow" id=""> 不允许</div>
				</div>
			</div>
			<div class="singal">
				<div class="left">
					<img src="@/assets/fujian.png" alt="">
				</div>
				<div class="right">
					<div class="rig-tit">Alex and I practiced writing </div>
					<div class="del">删除</div>
					<div class="radio"><input type="radio" name="allow" id=""> 允许学生预习</div>
					<div class="radio"><input type="radio" name="allow" id=""> 不允许</div>
				</div>
			</div>
		</div>
		<div class="btn-box">
			<div class="submit">
				提交
			</div>
			<div class="close">
				关闭
			</div>
		</div>
	</div>
</template>
<script>
import { mapState } from "vuex";
import {courseScheduleBareGetById} from '@/api/course_schedule'
export default {
	data() {
		return {
			course_schedule_id: '',
			course_schedule_name: ''
		}
	},
  computed: {
    ...mapState({
      course: state => state.course.course
    })
	},
	created() {
		const course_id = this.$route.query.course_id;
		this.$store.dispatch('COURSE_GET_BY_ID', course_id);
		const course_schedule_id = this.$route.query.id;
		this.getCourseSchedule(course_schedule_id)
	},
	methods: {
		getCourseSchedule(id) {
			courseScheduleBareGetById(id).then(resp => {
				this.course_schedule_name = resp.data.name;
				this.course_schedule_id = id;
			})
		}
	}
};
</script>

<style scoped>
.uploading-courseware {
  width: 740px;
  min-height: 818px;
  padding: 30px;
  background-color: #fff;
  float: right;
}
.course-name {
  font-size: 14px;
  color: #333333;
}
.class-name {
  font-size: 14px;
  color: #333333;
  margin-top: 20px;
}
.inp {
  width: 300px;
  height: 36px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  text-indent: 10px;
}
.upload {
  color: #333333;
  font-size: 14px;
  line-height: 36px;
  margin-top: 25px;
}
.uploading {
  display: inline-block;
  width: 120px;
  height: 36px;
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 5px;
  cursor: pointer;
}
.uploading img {
  float: left;
  margin: 8px 15px;
}
.kejian {
  overflow: hidden;
  margin-top: 60px;
}
.singal {
  width: 50%;
  float: left;
  height: 153px;
  overflow: hidden;
}
.left {
  float: left;
}
.right {
  float: left;
  margin-left: 13px;
}
.rig-tit {
  font-size: 14px;
  color: #666666;
}
.del {
  font-size: 14px;
  color: #ff8200;
  text-decoration: underline;
  cursor: pointer;
}
.radio {
  font-size: 12px;
  color: #333333;
  margin-top: 14px;
}
.btn-box {
  width: 272px;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 20px;
}
.submit {
  width: 120px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background: #ff8200;
  border-radius: 5px;
  font-size: 14px;
  color: #ffffff;
  float: left;
  margin-right: 28px;
}
.close {
  width: 120px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  font-size: 14px;
  color: #333333;
  float: left;
}
</style>