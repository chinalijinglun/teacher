<template>
	<div class="add-evaluate">
		<div class="student-name">
			<span class="course-name">{{course.course_name}}</span>
			<span class="class-time">上课时间：{{course.course_times}}</span>
		</div>
		<div class="time">
			<span class="demonstration">总结周期：</span>
			<el-date-picker type="daterange" v-model="timeRange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
			</el-date-picker>
		</div>
		<div class="time" style="margin-bottom:40px;">
			<span class="demonstration">学生：</span>
      <el-select v-model="form.student_id">
        <el-option v-for="item in studentLs" :key="item.id" :value="item.id" :label="item.name"></el-option>
      </el-select>
		</div>
		<div class="text-tit">
			Summary of what have been taught in last stage (List key points, vocabulary, skills, etc.):
		</div>
		<vue-editor v-model="summary.summary"></vue-editor>
		<div class="stat">
			Grade (Grade from A-F based on the test result):
		</div>
    <el-select v-model="summary.grade">
      <el-option v-for="item in GRADE_ENUMS" :key="item" :value="item" :label="item"></el-option>
    </el-select>
		<div class="stat">
			Review on the test and result:
		</div>
		<vue-editor v-model="summary.review"></vue-editor>
		<div class="stat">
			Comments on Behavior/ Performance in class:
		</div>
		<vue-editor v-model="summary.comments_behavior"></vue-editor>
		<div class="stat">
			Comments on Homework in last stage:
		</div>
		<vue-editor v-model="summary.comments_homework"></vue-editor>
		<div class="stat">
			Areas to be improved and suggested strategies for improvement:
		</div>
		<vue-editor v-model="summary.suggest"></vue-editor>
		<div class="stat">
			Future Plan (especially focus on next stage)
		</div>
		<vue-editor v-model="summary.future_plan"></vue-editor>
		<div class="btn">
			<div class="submit" @click="submit">
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
import CourseSummary, {
  GRADE_ENUMS
} from '@/model/CourseSummary';
import {
  courseSummaryAdd
} from '@/api/course'

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
		this.form.course_id = course_id;
		this.$store.dispatch('COURSE_GET_BY_ID', course_id)
	},
  data() {
    return {
      GRADE_ENUMS,
			content: '',
			form: {
        course_id: '',
        student_id: '1',
        start: '',
        end: ''
      },
      studentLs: [],
      timeRange: [],
			summary: new CourseSummary({})
    };
  },
  methods: {
    submit() {
      this.form.evaluation = JSON.stringify(this.summary)
      this.form.start = this.$dateFmt(this.timeRange[0]);
      this.form.end = this.$dateFmt(this.timeRange[1]);
      courseSummaryAdd(this.form).then(resp => {
        this.$message.success('添加成功！');
        this.goback();
      });
    },
    goback() {
      this.$router.back()
    },
    getStudentLs() {
    }
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