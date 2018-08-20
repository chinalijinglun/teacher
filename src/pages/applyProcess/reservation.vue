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
		<div class="basic-main reservation">
			<small>Dear Mr. / Ms,<br/> Mr. Jack Baron, our personnel director, has asked me to acknowledge your application for the post of accountant and to ask you to come to see him on Friday afternoon, 5th July, at half past two.<br/> I will appreciate your letting me know whether you will be able to come.<br/> Yours faithfully<br/>
			</small>

			<div class="full-name">
				<h4>
					请选择一个合适的面试时间：
				</h4>
				<h4>
					Your Time Zone：America/Adak
				</h4>
				<div class="reservation-span">
					<el-radio-group v-model="form.timeRadio">
						<el-radio v-for="(item, index) in timeLs" :key="index" :label="index">{{item.viewStr}}</el-radio>
						<el-radio :label="-1">其他时间</el-radio>
					</el-radio-group>
				</div>
				<el-row class="reservation-time">
					<el-col :span="3">我方便的时间：</el-col>
					<el-col :span="18">
						<course-date-range
							ref="courseDateRange"
							:start-date.sync="subform.start"
							:end-date.sync="subform.end"
							range-separator="-"
							start-placeholder="开始时间"
							end-placeholder="结束时间">
						</course-date-range>
					</el-col>
				</el-row>
				<br />
				<span class="reservation-reason">
					原因：
					<textarea v-model="subform.reason"></textarea>
				</span>
			</div>
		</div>
		<div class="next-btn">
			<button @click="submit">submit</button>
		</div>
	</div>
</template>
<script>
import {
	interviewGetBare,
	interviewPutByinterviewid,
	acceptInterview
} from '@/api/interview'
import {
	teacherPutByTeacherid
} from '@/api/teacher'
import { mapState } from 'vuex'
export default {
	computed: {
		...mapState({
			userId: state => state.auth.id,
			userName: state => state.userinfo.teacher.username
		})
	},
  data() {
    return {
			form: {
				timeRadio: -1
			},
			subform: {
				start: '',
				end: '',
				reson: ''
			},
			interviewId: '',
			timeLs: []
    };
  },
  created() {
		this.getInterview();
	},
  methods: {
    getInterview() {
			const filter = this.$json2filter({
				teacher_id: [this.userId]
			})
			interviewGetBare(filter).then(resp => {
				if(resp.data.objects[0].set_time) {
					this.interviewId = resp.data.objects[0].id
					const timeRanges = JSON.parse(resp.data.objects[0].set_time);
					this.timeLs = timeRanges.map(item => this.getStartAndEnd(item.date, item.timeRange))
				}
			})
		},
		submit() {
			let {
				start, 
				end,
				reason
			} = this.subform;
			if(this.form.timeRadio !== -1) {
				start = this.timeLs[this.form.timeRadio].start;
				end = this.timeLs[this.form.timeRadio].end;
				teacherPutByTeacherid(this.userId, {
					state: 10,
					updated_by: this.userName,
					updated_at: new Date()
				})
				acceptInterview({
					interview_at_end: end,
					interview_at_start: start,
					interview_id: this.interviewId
				}).then(resp => {
					this.$router.push('/reservation-result')
				})
			} else {
				interviewPutByinterviewid(this.interviewId, {
					start,
					end,
					reason,
					state: 7,
					updated_by: this.userName,
					updated_at: new Date()
				}).then(resp => {
					this.$message.success('回复成功！');
				})
			}
		},
		getStartAndEnd(day, [start, end]) {
			const date = this.$dateFmt(new Date(day), 'yyyy-MM-dd');
			const startTime = this.$dateFmt(new Date(start), 'hh:mm:ss');
			const startTimeView = this.$dateFmt(new Date(start), 'hh:mm');
			const endTime = this.$dateFmt(new Date(end), 'hh:mm:ss');;
			const endTimeView = this.$dateFmt(new Date(end), 'hh:mm');
			return {
				start: new Date(date+' '+startTime),
				end: new Date(date+' '+endTime),
				viewStr: date+' '+startTimeView+'-'+endTimeView
			}
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

.step2 {
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

.step2::after {
  background-color: #ff8200;
}

.step1::after,
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

.basic-header ul li:nth-child(2) {
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

.reservation small {
  line-height: 35px;
}

.full-name {
  font-size: 14px;
  overflow: hidden;
  margin: 25px 0;
}
.full-name h4 {
  margin-bottom: 20px;
  font-weight: normal;
}
.reservation-time {
	line-height: 40px;
}
.reservation-time input {
  width: 188px;
  height: 38px;
  border: 1px solid #d8d8d8;
  border-radius: 3px;
  margin-right: 40px;
  padding-left: 10px;
}
.reservation-reason {
  display: block;
}
.reservation-reason textarea {
  width: 752px;
  height: 120px;
  background: #ffffff;
  border: 1px solid #d8d8d8;
  border-radius: 3px;
  vertical-align: top;
	outline: none;
	padding: 10px;
}
.reservation-span {
  margin-left: 1px;
  margin-bottom: 20px;
}
.reservation-span * {
  margin-right: 15px;
}
</style>