<template>
	<div class="basicinfor">
		<div class="basic-header">
			<div class="step">
				<span class="step1"></span>
				<span class="step2"></span>
				<span class="step3"></span>
			</div>
			<ul>
				<li>Basic Info</li>
				<li>Demo Lesson</li>
				<li>Contract Info</li>
			</ul>
		</div>
		<div class="basic-main basic2">
			<h3>教育背景 <small class="tishi"> Please Start With your highest academic degree obtained</small></h3>
			

			<div class="full-name basic1-degree">
				<h4><span class="tishi">*</span>Degree</h4>
				<el-radio-group v-model="form.degree">
					<el-radio :label="2">本科</el-radio>
					<el-radio :label="4">硕士</el-radio>
					<el-radio :label="5">博士</el-radio>
					<el-radio :label="6">博士后</el-radio>
				</el-radio-group>
			</div>
      <div v-for="(item, index) in form.education_history_ls" :key="index">
        <h3 class="xueli">学历 {{index}}</h3>
        <div class="full-name">
          <h4><span class="tishi">*</span>Period</h4>
          <div class="street">
            <el-date-picker
              v-model="item.start"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
          <div class="street">
            <el-date-picker
              v-model="item.end"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
        </div>
        <div class="full-name email">
          <h4>
            <span class="tishi">*</span>School 
          </h4>
          <input type="text" placeholder="please input" v-model="item.school">
        </div>
        <div class="full-name email">
          <h4>
            <span class="tishi">*</span>Major
          </h4>
          <input type="text" placeholder="please input" v-model="item.major">
        </div>
        <h4 class="h4">
          <span class="tishi">*</span>Certificate
        </h4>
        <div class="full-name basic2-resume">
          <upload-button v-model="item.certificate" text="上传学历证明"></upload-button>
        </div>
      </div>
		</div>
		<div class="next-btn">
      <button class="adds" @click="addEducation">增加教育背景</button>
			<button @click="nextStep">下一步</button>
		</div>
	</div>
</template>
<script>
import EducationHistory from '@/model/EducationHistory';
import { userinfo,auth,basicCache } from '@/mixins';
export default {
  name: 'basicInformation1',
  mixins: [userinfo,auth,basicCache],
  data() {
    return {
      form: {
        degree: '',
        education_history: '',
        education_history_ls: [new EducationHistory({})]
      }
    };
  },
  created() {

  },
  methods: {
    valid() {
      if(!this.degree) {
        this.$message.error('请选择最高学历！')
        return false;
      }
      return true;
    },
    addEducation() {
      this.form.education_history_ls.push(new EducationHistory({}))
    },
    nextStep () {
      this.form.education_history = JSON.stringify(this.form.education_history_ls.filter(item => item.start&&item.end&&item.certificate&&item.major&&item.school))
      this.$router.push('/basic2')
    }
  }
};
</script>

<style scoped>
.basicinfor {
  width: 1000px;
  min-height: 800px;
  margin: 0 auto 30px;
  overflow: hidden;
  margin-top: 20px;
  background: #ffffff;
}

.street .tishi{
  display: inline;
}
.tishi{
  margin: 0!important;
  font-size: 12px;
  color: #FF4433;
}
.none{
  visibility: hidden;
}
.xueli{
  font-size: 14px!important;
  color: #333333;
}
.h4{
  font-size: 14px;
  color: #151515;
  line-height: 16px;
  font-weight: normal;
}
.next-btn button.adds{
  font-size: 18px;
  color: #FF8200;
  background: #FFFFFF;
  border: 1px solid #FF8200;
  border-radius: 5px;
  margin-right: 40px;
}

.basic-header {
  height: 100px;
  margin: 30px 70px;
  border: 1px solid #d8d8d8;
  border-top: none;
}

.step span {
  width: 33.333%;
  display: block;
  height: 5px;
  background: #d8d8d8;
  z-index: 99999;
  float: left;
  position: relative;
}

.step {
  width: 100%;
  border-bottom: 5px solid #ff8200;
}

.step1 {
  background: #ff8200 !important;
}

.step1::after,
.step2::after,
.step3::after {
  content: "";
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: -9px;
  margin-left: -12px;
}

.step1::after {
  background-color: #ff8200;
}

.step2::after,
.step3::after {
  background-color: #d8d8d8;
}

.basic-header ul {
  list-style: none;
}

.basic-header ul li {
  float: left;
  width: 33.333%;
  height: 90px;
  line-height: 90px;
  text-align: center;
  font-size: 18px;
  color: #666666;
}

.basic-header ul li:first-child {
  color: #ff8200;
  font-weight: bold;
}

.basic-main {
  margin: 0 70px;
}

.basic-main h3 {
  font-size: 18px;
  font-weight: normal;
}

.full-name {
  font-size: 14px;
  overflow: hidden;
  margin: 25px 0;
}

.next-btn {
  text-align: center;
  margin: 60px 0;
}

.next-btn button {
  width: 150px;
  height: 40px;
  font-size: 18px;
  color: #ffffff;
  background: #ff8200;
  border-radius: 5px;
  outline: none;
  border: none;
}

.full-name h4 {
  margin-bottom: 10px;
  font-weight: normal;
}

.street {
  margin-right: 10px;
  margin-bottom: 10px;
  float: left;
}

.street span {
  display: block;
}

.street span select {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  width: 198px;
  height: 40px;
  border: 1px solid #d8d8d8;
  text-align: center;
  padding: 0 2%;
  background-color: #ffffff;
}

.street-name {
  margin-bottom: 12px;
}

.street-input {
  position: relative;
}

.street-input::after {
  position: absolute;
  content: "";
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 10px solid #999999;
  width: 0;
  height: 0;
  left: 175px;
  top: 16px;
  pointer-events: none;
}

.email input {
  width: 418px;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  border-radius: 3px;
  border: 1px solid #d8d8d8;
  outline: none;
}

.basic2-input input {
  width: 188px;
  height: 38px;
  background: #ffffff;
  border: 1px solid #d8d8d8;
  border-radius: 3px;
  outline: none;
  padding-left: 10px;
}

.basic2-checkbox {
  width: 80%;
  overflow: hidden;
}

.basic2-checkbox span {
  display: inline-block;
  width: 200px;
  text-align: left;
}

.basic2-checkbox span input {
  margin-right: 7px;
}
.basic2-resume span {
  display: inline-block;
  width: 198px;
  height: 38px;
  background: #f7f7f7;
  border: 1px solid #d8d8d8;
  border-radius: 3px;
  line-height: 38px;
  text-align: center;
}

.basic2-resume span:first-child {
  margin-right: 200px;
}

.basic1-degree span {
  margin-left: 1px;
  margin-right: 30px;
}

.basic1-degree span input {
  margin-right: 5px;
}
</style>