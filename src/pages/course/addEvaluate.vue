<template>
	<div class="add-evaluate">
		<div class="student-name">
			ALEX ren
		</div>
		<div class="lesson">
			Lesson 1 Exploring Space and Astronomy
		</div>
		<div class="border"></div>
		<div class="text-tit">
			Lesson Objective (key points, vocabulary, skills, etc.):
		</div>
		<vue-editor v-model="evaluate.lesson_objective"></vue-editor>

		<div class="stat">
			Completion status:
		</div>
		<div class="radio">
      <el-radio-group v-model="evaluate.completion_status.status">
        <el-radio label="Completed"></el-radio>
        <el-radio label="Not Completed"></el-radio>
      </el-radio-group>
		</div>
		<vue-editor v-model="evaluate.completion_status.text"></vue-editor>
		<div class="stat">
			Performance in class:
		</div>
		<div class="overall">
			<span class="word">Overall:</span>
      <el-select v-model="evaluate.performace.overall">
				<el-option v-for="(item, key) in OVERALL_ENUM" :value="item" :key="item" :label="item"></el-option>
      </el-select>
		</div>
		<div class="overall">
			<span class="word">On Time:</span>
      <el-radio-group v-model="evaluate.performace.onTime">
        <el-radio label="YES"></el-radio>
        <el-radio label="NO"></el-radio>
      </el-radio-group>
		</div>
		<div class="overall">
			<span class="word">Missing Time:</span>
			<input type="text" name="" id="" v-model="evaluate.performace.missTime" class="inp"> min
		</div>
		<div class="overall">
			<span class="word">Learning Attitude:</span>
      <el-radio-group v-model="evaluate.performace.attitude">
        <el-radio label="Excellent"></el-radio>
        <el-radio label="Good"></el-radio>
        <el-radio label="Poor"></el-radio>
      </el-radio-group>
		</div>
		<div class="overall">
			<span class="word">Positive interaction:</span>
      <el-radio-group v-model="evaluate.performace.interaction">
        <el-radio label="Excellent"></el-radio>
        <el-radio label="Good"></el-radio>
        <el-radio label="Poor"></el-radio>
      </el-radio-group>
		</div>
		<div class="stat">
			Summary of the class:
		</div>
		<vue-editor v-model="evaluate.summary"></vue-editor>
		<div class="stat">
			Skills the student exhibited well:
		</div>
		<vue-editor v-model="evaluate.skills"></vue-editor>
		<div class="stat">
			Areas to be improved:
		</div>
		<vue-editor v-model="evaluate.improved"></vue-editor>
		<div class="stat">
			Suggested strategies for improvement:
		</div>
		<vue-editor v-model="evaluate.suggest"></vue-editor>
		<div class="btn">
			<div class="submit" @click="submit">
				提交
			</div>
			<div class="back" @click="goback">
				取消
			</div>
		</div>
	</div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import TeacherEvaluate, {
  OVERALL_ENUM,
  INTERACTION_ENUM,
  ATTITUDE_ENUM
} from "@/model/TeacherEvaluate";
import {
  studySchedulePutById
} from '@/api/study_schedule';
import { mapState } from 'vuex'

export default {
  components: {
    VueEditor
  },
  computed: {
    ...mapState({
      userName: state=>state.auth.userName
    })
  },
  data() {
    return {
      evaluate: new TeacherEvaluate({}),
      OVERALL_ENUM,
      INTERACTION_ENUM,
      ATTITUDE_ENUM,
      study_schedule_id: ''
    };
  },
  created() {    
    this.evaluate = new TeacherEvaluate({"lesson_objective":"<p><span style=\"color: rgb(51, 51, 51);\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</span></p>","completion_status":{"status":"Completed","text":"<p><span style=\"color: rgb(51, 51, 51);\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</span></p>"},"performace":{"overall":"Greade 5","onTime":"YES","missTime":"10","attitude":"Excellent","interaction":"Excellent"},"summary":"<p><span style=\"color: rgb(51, 51, 51);\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</span></p>","skills":"<p><span style=\"color: rgb(51, 51, 51);\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</span></p>","improved":"<p><span style=\"color: rgb(51, 51, 51);\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</span></p>","suggest":"<p><span style=\"color: rgb(51, 51, 51);\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</span></p>"})
    this.study_schedule_id = this.$route.query.id;
  },
  methods: {
    submit() {
      // 记录总结时间
      this.evaluate.created_at = new Date();
      studySchedulePutById(this.study_schedule_id, {
        teacher_evaluation: JSON.stringify(this.evaluate),
        updated_by: this.userName,
        updated_at: new Date()
      }).then(resp => {
        this.$message.success('添加成功！');
        this.goback();
      })
    },
    goback() {
      this.$router.back();
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
.overall select {
  background: #ffffff;
  border: 1px solid #d8d8d8;
  border-radius: 3px;
  width: 198px;
  height: 40px;
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
</style>