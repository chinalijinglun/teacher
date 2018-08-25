<template>
	<div class="soon">
		<div class="appoint-class" v-if="appointNum">
			<p class="title">试听课邀请</p>
			<p class="content">
				您有<span class="class-num">{{appointNum}}</span>节试听课上课邀请
				<el-button type="text" @click="goDetail">查看详情</el-button>
			</p>
		</div>
		<div class="soon-come">
			<div class="title">
				<span>即将开课</span>
				<span @click="$router.push('/course')" style="cursor: pointer">更多 >></span>
			</div>
			<div class="soon-stage">
				<div class="stage-line stage-color" v-if="!futureCourse">
					<p>暂无数据</p>
				</div>
				<template v-else>
					<div class="stage-head">
						<span>{{futureCourse.class_name}}</span>
						<span>{{futureCourse.start | courseScheduleTime(futureCourse.end)}}</span>
					</div>
					<div class="stage-line stage-color">
						<p>{{futureCourse.course_name}}</p>
					</div>
					<div class="stage-line stage-color" v-for="(item, index) in futureCourse.courseware" :key="index">
						<span>{{item.name}}</span>
						<span>
							<a :href="item.ware_url" target="block">预览课件</a>
						</span>
					</div>
				</template>
			</div>
		</div>
		<div class="soon-stage soon-come">
			<div class="title">
				<span>待审批的作业</span>
				<span @click="$router.push('/course')" style="cursor: pointer">更多 >></span>
			</div>
			<div class="soon-stage">
				<div class="stage-line stage-color" v-if="!homework.length">
					<p>暂无数据</p>
				</div>
				<template v-else>
					<div v-for="(item, index) in homework" :key="index">
						<div class="soon-approval">
							<span>{{item.question_name}}</span>
							<span>{{created_at | noTime}}</span>
						</div>
						<div class="soon-approval-btn stage-color">
							<span @click="viewHomework(item)">查看作业</span>
						</div>
					</div>
				</template>
			</div>
		</div>
	</div>
</template>
<script>
	import {
		mySchedule,
		teacherApplyStudents,
		previewDoc,
		checkHomeworkLs
	} from '@/api/teacher'
	export default {
		created() {
			this.getNextCourse()
			this.getAppointment()
			this.getHomework()
		},
		data() {
			return {
				appointNum: 0,
				futureCourse: null,
				homework: []
			}
		},
		methods: {
			getNextCourse() {
				mySchedule({
					start: new Date(),
					end: new Date(new Date().getTime() + 7*24*3600*1000),
					page_no: 1,
					page_limit: 1000
				}).then(resp => {
					const courseInfo = resp.data.objects[0];
					previewDoc(courseInfo.course_schedule_id).then(resp => {
						courseInfo.courseware = resp.data.objects
						this.futureCourse = courseInfo;
					})
				})
			},
			getHomework() {
				checkHomeworkLs().then(resp => {
					this.homework = resp.data.objects || [];
				})
			},
			goDetail() {
				this.$router.push({path: '/center/inviteDetail'})
			},
			getAppointment() {
				return teacherApplyStudents(this.$deleteEmptyProps({
					page_no: 1,
					page_limit: 1000
				})).then(resp => {
					this.appointNum = resp.data.num_results;
				})
			},
			viewHomework(item) {
				// ?course_id=128&course_schedule_id=240&id=61
				this.$router.push({
					path: '/check-homework',
					query: {
						course_id: item.course_id,
						course_schedule_id: item.course_schedule_id,
						id: item.id
					}
				})
			}
		}
	}
</script>
<style scoped>
.soon {
  width: 800px;
  min-height: 800px;
  margin-left: 20px;
  float: left;
}
.appoint-class {
	background: #FFFBED;
	padding: 18px 30px;
	margin-bottom: 22px;
}
.appoint-class>p.title {
	font-family: PingFangSC-Medium;
	font-size: 18px;
	color: #333333;
	line-height: 34px;
	font-weight: bolder;
	margin-bottom: 0;
}
.appoint-class>p.content {
	font-family: PingFangSC-Regular;
	font-size: 14px;
	color: #2A2A2A;
	line-height: 34px;
}
.appoint-class>p.content>span.class-num {
	font-family: PingFangSC-Regular;
	font-size: 14px;
	color: #FF8200;
	line-height: 34px;
	margin: 0 5px;
}
.appoint-class>p.content>.el-button {
	margin-left: 20px;
}
.soon-come {
  background-color: #ffffff;
  margin-bottom: 25px;
  padding: 30px;
}
.title {
  margin-bottom: 25px;
}

.stage-head,
.soon-approval {
  height: 60px;
  line-height: 60px;
  background: #ffeca7;
}
.stage-head span,
.soon-approval span {
  display: inline-block;
}
.stage-head span:first-child {
  background: #ffffff;
  border-radius: 5px;
  width: 170px;
  height: 40px;
  margin: 10px 20px;
  line-height: 40px;
  float: left;
  text-align: center;
	font-size: 14px;
	color: #FF8200;
}
.stage-head span:last-child {
  margin-right: 20px;
  font-size: 14px;
  color: #666666;
  float: right;
}
.stage-color {
  background: #fffbed;
}
.stage-line {
  padding: 0 30px;
  height: 60px;
  line-height: 60px;
}
.stage-line span {
  display: inline-block;
}
.stage-line span:first-child,
.soon-approval span:first-child {
  float: left;
}
.stage-line span:last-child,
.soon-approval span:last-child,
.title span:last-child {
  float: right;
}
.soon-approval {
  padding: 0 20px;
}
.soon-approval-btn {
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 25px auto;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
}
</style>