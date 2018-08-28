<template>
	<div class="basicinfor">
    <div class="basic-header">
      <step :steps="steps"></step>
    </div>
    <div class="basic-main">
			<h3>Teaching Experience</h3>
      <el-form label-position="top" :model="form" :rules="rules" ref="basicForm">
        <el-row :gutter="40">
          <el-col :span="22">
            <el-form-item label=" School Currently Teaching" prop="cur_school">
              <el-input 
                :rows="4"
                type="textarea" 
                v-model="form.cur_school" 
                placeholder="If you are not teaching currently, please list your immediate last school of teaching."
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="40">
          <el-col :span="12">
            <el-form-item label="Geographical region(s) where you had taught" prop="country">
              <el-select v-model="form.cur_country" @change="handlerCountryChange">
                <el-option v-for="(item, index) in countryLs" :value="item.id" :key="index" :label="item.name"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="40">
          <el-col :span="12">
            <el-form-item label=" State(s) where you have taught" prop="province">
              <el-select v-model="form.cur_province">
                <el-option v-for="(item, index) in provinceLs" :value="item.id" :key="index" :label="item.name"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="40">
          <el-col :span="12">
            <el-form-item label="Total Teaching Years" prop="street">
              <el-input v-model="form.street"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="40">
          <el-col :span="22">
            <el-form-item label="Current Resume" prop="teaching_history">
              <upload-button
                v-model="form.resume_url"
                :max-length="1"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="40">
          <el-col :span="22">
            <el-form-item label="Please describe any professional highlights" prop="teaching_history">
              <el-input 
                :rows="4"
                type="textarea" 
                v-model="form.teaching_history" 
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
		<div class="next-btn">
			<button @click="submit">确定</button>
		</div>
	</div>
</template>

<script>
import {
	getCountry,
	getRegionByPid
} from '@/api/region'
import {
 	teacherPutByTeacherid
} from '@/api/teacher'
import {
	teacherHistoryPost
} from '@/api/teacher_history'
import { userinfo,auth,basicCache } from '@/mixins';
export default {
	mixins: [userinfo,auth,basicCache],
	watch: {
		curSubjects(v) {
			if(v[2]) {
				this.form.cur.subject_id = v[2];
			}
		},
		otherSubjects(v) {
			if(v[2]) {
				this.form.other.subject_id = v[2];
			}
		}
	},
  data() {
    return {
      steps: ['Basic Info', 'Demo Lesson', 'Contract Info'],
      rules: {},
			form: {
				cur_school: '',
				cur_country: '',
				cur_province: '',
				cur: {
					subject_id: '',
					grade: ''
				},
				other: {
					subject_id: '',
					grade: ''
				},
				teacher_age: '',
        resume_url: '',
        teaching_history: ''
			},
			visible: false,
			src: '',
			countryLs: [],
			provinceLs: [],
			curSubjects: [],
			otherSubjects: []
    };
  },
  created() {
		this.getCountry();
	},
  methods: {
		openIframe() {
			this.src = this.$baseApiUrl + '/download/1c47b24a5f9a3c570e512964ee32fc3071a811d2d2a6f547a4e4587488ddf7f0';
			this.visible = true;
		},
		getCountry() {
			return getCountry().then(resp => {
				this.countryLs = resp.data.objects;
			})
		},
		getProvinceLs(id) {
			return getRegionByPid(id).then(resp => {
				this.provinceLs = resp.data.objects;
			})
		},
		handlerCountryChange(id) {
			this.form.cur_province = '';
			this.getProvinceLs(id);
		},
		submit() {
			const form1 = JSON.parse(this.$getSession('/basic'));
			const form3 = this.form;
			const form = {
				...form1,
				cur_school: form3.cur_school,
				cur_country: form3.cur_country,
				cur_province: form3.cur_province,
				teacher_age: form3.teacher_age,
				resume_url: form3.resume_url.url,
				state: 3,
				updated_at: new Date(),
				updated_by: this.userName
			};
			const promise = [];
			// 当前教育经历
			promise.push(
				teacherHistoryPost({
					...form3.cur,
					teacher_id: this.userId,
					type: 2,
					created_at: new Date(),
					delete_flag: 1,
					updated_at: new Date(),
					updated_by: this.userName
				})
			);
			// 其他教育经历
			promise.push(
				teacherHistoryPost({
					...form3.other,
					teacher_id: this.userId,
					type: 1,
					created_at: new Date(),
					delete_flag: 1,
					updated_at: new Date(),
					updated_by: this.userName
				})
			);
			// 更新教师资料
			promise.push(teacherPutByTeacherid(this.userId,form));
			Promise.all(promise).then(resp => {
				this.$message.success('资料补充完成！');
				this.$router.push('/afterSubmit')
			})
		}
	}
};
</script>

<style scoped>
.h4 {
  font-size: 14px;
  color: #151515;
  line-height: 16px;
  font-weight: normal;
}
.street .tishi {
  display: inline;
}
.tishi {
  margin: 0 !important;
  font-size: 12px;
  color: #ff4433;
}

.basicinfor {
  width: 1000px;
  min-height: 800px;
  margin: 0 auto 30px;
  overflow: hidden;
  margin-top: 20px;
  background: #ffffff;
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
  width: 210px;
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
.basic2-resume {
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
.years input {
	width: 100px;
	height: 40px;
	line-height: 40px;
	padding-left: 10px;
	border-radius: 3px;
	border: 1px solid #d8d8d8;
	outline: none;
}
</style>