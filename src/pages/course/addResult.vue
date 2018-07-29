<template>
	<div class="add-evaluate">
		<div class="student-name">
			<span class="course-name">{{course.course_name}}</span>
			<span class="class-time">上课时间：{{course.course_times}}</span>
			<span class="class-time">进度：{{course.course_progress}}</span>
		</div>
		<div class="student-name">
			<span class="class-time">学生：{{course.student_name}}</span>
		</div>
		<div class="time">
			<span class="demonstration">总结周期：</span>
			<el-date-picker type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
			</el-date-picker>
		</div>
		<div class="time" style="margin-bottom:40px;">
			<span class="demonstration">学生：</span>
			<select name="" id="">
				<option value=""></option>
			</select>
		</div>
		<div class="text-tit">
			Summary of what have been taught in last stage (List key points, vocabulary, skills, etc.):
		</div>
		<vue-editor v-model="content"></vue-editor>

		<div class="stat">
			Grade (Grade from A-F based on the test result):
		</div>
		<select name="" id="">
			<option value=""></option>
		</select>
		<div class="stat">
			Review on the test and result:
		</div>
		<vue-editor v-model="content"></vue-editor>
		<div class="stat">
			Comments on Behavior/ Performance in class:
		</div>
		<vue-editor v-model="content"></vue-editor>
		<div class="stat">
			Comments on Homework in last stage:
		</div>
		<vue-editor v-model="content"></vue-editor>
		<div class="stat">
			Areas to be improved and suggested strategies for improvement:
		</div>
		<vue-editor v-model="content"></vue-editor>
		<div class="stat">
			Future Plan (especially focus on next stage)
		</div>
		<vue-editor v-model="content"></vue-editor>
		<div class="btn">
			<div class="submit">
				提交
			</div>
			<div class="back">
				取消
			</div>
		</div>
	</div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { mapState } from 'vuex';

export default {
  components: {
    VueEditor
  },
	computed: {
		...mapState({
			course: state=>state.course.course
		})
	},
	created() {
		const course_id = this.$route.query.id;
		this.course_id = course_id;
		this.$store.dispatch('COURSE_GET_BY_ID', course_id)
	},
  data() {
    return {
			content: '',
			course_id: '',
			form: {
				student_id: '',
				result_type: 'SUMMARY'
			},
			result: {
				summary: '',
				grade: '',
			}
    };
  }
};
</script>

<style scoped>
.add-evaluate {
  width: 740px;
  padding: 30px;
  background-color: #fff;
  float: right;
}
.student-name {
  font-size: 20px;
  color: #333333;
  line-height: 36px;
}
.lesson {
  font-size: 14px;
  color: #666666;
  margin-top: 4px;
}
.border {
  border-bottom: 1px solid #dcdcdc;
  margin-top: 26px;
  margin-bottom: 30px;
}
.text-tit {
  font-size: 18px;
  color: #333333;
  margin-bottom: 17px;
}
.stat {
  font-size: 18px;
  color: #333333;
  margin-top: 30px;
  margin-bottom: 16px;
}
.radio {
  font-size: 14px;
  color: #333333;
  margin-bottom: 15px;
}
.radio span {
  margin-right: 30px;
}
.btn {
  width: 273px;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 27px;
}
.submit {
  width: 120px;
  float: left;
  height: 40px;
  line-height: 40px;
  background: #ff8200;
  border-radius: 5px;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
  margin-right: 32px;
}
.back {
  width: 118px;
  float: left;
  height: 38px;
  line-height: 40px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  font-size: 14px;
  color: #333333;
  text-align: center;
}
.overall {
  font-size: 14px;
  color: #333333;
  line-height: 50px;
}
.word {
  display: inline-block;
  width: 150px;
  height: 50px;
  line-height: 50px;
}
.mar {
  margin-left: 50px;
}
.inp {
  background: #ffffff;
  border: 1px solid #d8d8d8;
  border-radius: 3px;
  width: 198px;
  height: 40px;
}
.course-name {
  font-size: 18px;
  color: #333333;
}
.class-time {
  font-size: 14px;
  color: #666666;
  margin-left: 33px;
}
.time {
  margin-top: 17px;
}
.time select {
  background: #ffffff;
  border: 1px solid #d8d8d8;
  border-radius: 3px;
  width: 198px;
  height: 40px;
  margin-left: 34px;
}
select {
  background: #ffffff;
  border: 1px solid #d8d8d8;
  border-radius: 3px;
  width: 198px;
  height: 40px;
}
</style>