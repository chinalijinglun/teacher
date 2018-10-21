<template>
	<div class="soon">
		<div class="appoint-class" v-if="appointNum">
			<p class="title">Invitation for auditioned class </p>
			<p class="content">
				You have <span class="class-num">{{appointNum}}</span> auditioned classes 
				<el-button type="text" @click="goDetail">View details </el-button>
			</p>
		</div>
		<div class="soon-come">
			<div class="title">
				<span class="title-title">Upcoming class</span>
				<span @click="$router.push('/course')" class="title-more">More >></span>
			</div>
			<div class="soon-stage">
				<div class="stage-line stage-color" v-if="!futureCourse">
					<p>No data</p>
				</div>
				<template v-else>
					<div class="stage-head">
						<span>{{futureCourse.course_name}}</span>
						<span>{{futureCourse.start | courseScheduleTime(futureCourse.end)}}</span>
					</div>
					<div class="stage-line stage-color course-name">
						<p>{{futureCourse.class_name}}</p>
					</div>
					<div class="stage-line stage-color" v-for="(item, index) in futureCourse.courseware" :key="index">
						<span class="li-point"></span>
						<span>{{item.ware_name}}</span>
						<div class="priview-button course-ware">
							<i class="icon-yulan"></i>
							<span @click="viewCourseware(item.ware_url)">Preview the courseware</span>
						</div>
					</div>
				</template>
			</div>
		</div>
		<div class="soon-stage soon-come">
			<div class="title">
				<span class="title-title">Checking Homework</span>
				<span @click="$router.push('/course')" class="title-more">More >></span>
			</div>
			<div class="soon-stage">
				<div class="stage-line stage-color" v-if="!homework.length">
					<p>No data</p>
				</div>
				<template v-else>
					<div v-for="(item, index) in homework" :key="index">
						<div class="soon-approval">
							<span>{{item.question_name}}</span>
							<span>{{item.created_at | noTime}}</span>
						</div>
						<div class="btn-center-container">
							<div class="priview-button">
								<i class="icon-homework"></i>
								<span @click="viewHomework(item)">Check the homework</span>
							</div>
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
					this.appointNum = resp.data.objects.filter(item => !item.apply_state && new Date(item.start) > new Date()).length;
				})
			},
			viewHomework(item) {
				this.$router.push({
					path: '/check-homework',
					query: {
						course_id: item.course_id,
						course_schedule_id: item.course_schedule_id,
						id: item.id
					}
				})
			},
			viewCourseware(url) {
				window.open(url)
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
  margin-bottom: 21px;
	line-height: 30px;
}
.title-title {
	font-family: PingFangSC-Regular;
	font-size: 18px;
	color: #333333;
}

.title-more {
	font-size: 14px;
	color: #333333;
	cursor: pointer;
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
.course-name {
	border-bottom: 1px solid #FFF0BB;
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
.li-point {
	background: #FF8200;
	width: 10px;
	height: 10px;
	border-radius: 50%;    
	margin-top: 25px;
	margin-right: 12px;
}
.btn-center-container {
	text-align: center;
	padding: 25px;
	background: #FFFBED;
	width: 100%;
}
.priview-button {
	background: #FFFFFF;
	border: 1px solid #DCDCDC;
	border-radius: 5px;
	padding: 10px 14px 10px 50px;
	display: inline-block;
	font-family: PingFangSC-Regular;
	font-size: 14px;
	color: #333333;
	position: relative;
	line-height: 20px;
	cursor: pointer;
}
.priview-button.course-ware {
	float: right;
	margin-top: 9px;
}
.icon-homework {
	width: 20px;
	height: 20px;
	display: inline-block;
	position: absolute;
	background-image: url(../../assets/chakanzuoye.png);
	background-size: auto;
	background-repeat: no-repeat;
	left: 17px;
	top: 10px;
}
.icon-yulan {
	width: 20px;
	height: 20px;
	display: inline-block;
	position: absolute;
	background-image: url(../../assets/yulan.png);
	background-size: auto;
	background-repeat: no-repeat;
	left: 17px;
	top: 13px;
}
</style>