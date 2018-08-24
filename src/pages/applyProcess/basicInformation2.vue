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
			<h3>教学经历
				<small class="tishi"> 如果是已经退休的教师或目前不在学校任职，请填写最新一段教学经历</small>
			</h3>

			<div class="full-name email">
				<h4>
					<span class="tishi">*</span>Current School Teaching At
				</h4>
				<input type="text" placeholder="please input" v-model="form.cur_school">
			</div>
			<div class="full-name">
				<div class="street">
					<span class="street-name">
						<span class="tishi">*</span>Current Teaching Location
					</span>
					<el-select name="" v-model="form.cur_country" @change="handlerCountryChange">
						<el-option v-for="(item, index) in countryLs" :key="index" :value="item.id" :label="item.name"></el-option>
					</el-select>
				</div>
				<div class="street">
					<span class="street-name">
						<span class="tishi">*</span>Current Teaching State 
					</span>
					<el-select name="" v-model="form.cur_province">
						<el-option v-for="(item, index) in provinceLs" :key="index" :value="item.id" :label="item.name"></el-option>
					</el-select>
				</div>
			</div>
			<div class="full-name">
				<h4>
					<span class="tishi">*</span>Current Teaching Academic Subject
				</h4>
				<curriculum-select v-model="curSubjects"></curriculum-select>
			</div>
			<div class="full-name">
				<div class="street">
					<span class="street-name">
						<span class="tishi">*</span>Current Teaching Grade
					</span>
					<el-select name="" v-model="form.cur.grade">
						<el-option v-for="(item, key) in $DEGREE_VALUE" :value="key" :label="item" :key="key"></el-option>
					</el-select>
				</div>
			</div>
			<div class="full-name">
				<h4>
					<span class="tishi">*</span>Other Teaching Academic Subject
				</h4>
				<curriculum-select v-model="otherSubjects"></curriculum-select>
			</div>
			<div class="full-name">
				<div class="street">
					<span class="street-name">Other Teaching Grade</span>
					<el-select name="" v-model="form.other.grade">
						<el-option v-for="(item, key) in $DEGREE_VALUE" :value="key" :label="item" :key="key"></el-option>
					</el-select>
				</div>
			</div>
			<div class="full-name">
				<div class="street years">
					<span class="street-name">
						<span class="tishi">*</span>Total Teaching Years
					</span>
					<input type="text" placeholder="please input" v-model="form.teacher_age">
				</div>
			</div>
			<h4 class="h4">
				<span class="tishi">*</span>Most Current Resume
			</h4>
			<div class="full-name basic2-resume">
				<upload-button v-model="form.resume_url" text="上传简历"></upload-button>
			</div>
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
				resume_url: ''
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
		getProvinceLs() {
			return getRegionByPid().then(resp => {
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
				resume_url: form3.resume_url,
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