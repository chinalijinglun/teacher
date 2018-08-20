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
			<small v-if="interviewCourseLs.length">
				Dear Mr. / Ms, Mr. Jack Baron, our personnel director, has asked me to acknowledge your application for the post of accountant and to ask you to come to see him on Friday afternoon, 5th July, at half past two.
			</small>

			<table class="reservation-table" v-if="interviewCourseLs.length">
				<thead>
					<tr>
						<th width="160">课节名称</th>
						<th width="220">面试时间</th>
						<th width="120">面试人</th>
						<th>
							操作
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, index) in interviewCourseLs" :key="index">
						<td>{{item.course_name}}</td>
						<td>{{item.start | hasTime}}</td>
						<td>{{item.interview_name}}</td>
						<td class="reservation-operate">
							<span v-if="teacher.interview.state === 9 || teacher.interview.state === 10" @click="toRoom(item.course_schedule_id)">回放</span>
							<span v-else @click="toRoom(item.course_schedule_id)">进入教室</span>
							<span @click="toUpload(item)">查看课件</span>
						</td>
					</tr>
				</tbody>
			</table>
			<div class="reservation-success" v-if="teacher.interview.state === 9">
				<img src="" alt=""> 恭喜，你通过面试，稍后我们会发送合同。
			</div>
			<div class="reservation-fail" v-if="teacher.interview.state === 10">
				很遗憾，您没有通过面试，
      </div>
		</div>
	</div>
</template>
<script>
import {
  interviewCourse
} from '@/api/interview'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      interviewCourseLs: []
    };
  },
  computed: {
    ...mapState({
      teacher: state => state.userinfo.teacher
    })
  },
  created() {
    const teacher_id = this.$store.state.auth.id;
    this.$store.dispatch("TEACHER_GET_BY_ID", teacher_id);
    this.getInterviewSchedule()
  },
  methods: {
    toRoom(id) {
			window.open(`#/room?id=${id}`)
    },
    toUpload(item) {
      this.$router.push(`/uploading-courseware?id=${item.course_schedule_id}&course_id=${item.course_id}`)
    },
    getInterviewSchedule() {
      interviewCourse({
        page_no: 1,
        page_limit: 10
      }).then(resp => {
        this.interviewCourseLs = resp.data.objects;
      })
    },
    getInterviewResult() {

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

.reservation small {
  line-height: 35px;
}
.reservation-table {
  width: 100%;
  border: 1px solid #d8d8d8;
}
.reservation-table thead {
  font-size: 12px;
  font-weight: normal;
  background-color: #f5f5f5;
}
.reservation-table thead tr {
  height: 45px;
  font-size: 14px;
}
.reservation-table tbody tr {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 12px;
}
.reservation-operate {
  color: #ff8200;
}
.reservation-operate span {
  margin: 0 15px;
}
.reservation-success {
  font-size: 18px;
  color: #ff4433;
}
.reservation-fail {
  font-size: 18px;
  color: #333333;
}
</style>