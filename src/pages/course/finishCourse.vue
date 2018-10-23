<template>
	<div class="finish-course">
		<div class="top-title">
			<div class="first-line">
				<div>
					{{course.course_name}}
				</div>
				<div>
					<span class="study-time">Time for class（Current time zone: {{timezone}}）：{{course.course_times}}</span>
				</div>
        <p>progress：{{course.course_progress}}</p>
			</div>
			<div class="bottom-line">
				{{course.student_name}}
			</div>
		</div>
		<div class="table">
			<div class="tab-bars">
				<ul>
					<li>
						<router-link :to="{path: '/finish-course', query: {'id': this.$route.query.id}}">Classes finished</router-link>
					</li>
					<li>
						<router-link :to="{path: '/dated-course', query: {'id': this.$route.query.id}}">Classes booked</router-link>
					</li>
					<li>
						<router-link :to="{path: '/summary', query: {'id': this.$route.query.id}}">Assessment</router-link>
					</li>
					<li>
						<router-link :to="{path: '/report', query: {'id': this.$route.query.id}}">Transcripts</router-link>
					</li>
				</ul>
			</div>
			<div class="table-tit">
				<div class="course-name">Course name</div>
				<div class="state">Status</div>
				<div class="oparet">Operation</div>
			</div>
			<div class="table-list" v-for="item in tableData" :key="item.id">
				<div class="list-tit">
					<span>Time for class（Current time zone: {{timezone}}）：{{item.start | courseScheduleTime(item.end)}}</span>
				</div>
				<div class="list-detail">
					<div class="lesson-name">
						{{item.name || '未命名'}}
					</div>
					<div class="lesson-state">
						{{$COURSE_SCHEDULE_STATE_ENUM[item.class_type]}}
					</div>
					<div class="oprate-lesson">
						<span class="colo" v-if="item.class_type === 'TROUBLE_CLASS'" @click="reviewReason(item.id)">reason</span>
						<template v-else>
							<span class="colo" @click="toRoom(item.id)">Playback</span>
							<span class="colo" @click="goHomework(item.id)">Homework</span>
							<span class="colo" @click="goEval(item.id)">summary</span>
						</template>
					</div>
				</div>
			</div>
			<el-row>
				<el-pagination @current-change="handleCurrentChange" :current-page.sync="form.page_no" :page-size="form.page_limit" layout="prev, pager, next, jumper" :total="total">
				</el-pagination>
			</el-row>
    </div>
		<action-event-review 
		:visible.sync="reasonReviewShow" 
		:primaryDataId="curId" 
		:afterState="3" 
		primaryTableName="course_schedule" 
		:actionEventType="1" />
	</div>
</template>

<script>
import { mapState } from "vuex";
import { teacherMyCourseOn, teacherCourseRoom } from "@/api/teacher";
import homework from "./homework";
export default {
  data() {
    return {
      reasonReviewShow: false,
      curId: '',
      form: {
        course_id: this.$route.query.id.toString(),
        page_limit: 10,
        page_no: 1
      },
      total: 0,
      tableData: []
    };
  },
  computed: {
    ...mapState({
      course: state => state.course.course,
      timezone: state => state.userinfo.teacher.timezone
    })
  },
  created() {
    const course_id = this.$route.query.id;
    this.$store.dispatch("COURSE_GET_BY_ID", course_id);
    this.query();
  },
  methods: {
    toRoom(id) {
			window.open(`#/room?id=${id}`)
    },
    handleCurrentChange(page) {
      this.page_no = page;
      this.query();
    },
    query() {
      return teacherMyCourseOn(this.$deleteEmptyProps(this.form)).then(resp => {
        this.tableData = resp.data.objects;
        this.total = resp.data.num_results;
      });
    },
    goHomework(id) {
      this.$router.push({
        path: "/homework",
        query: { course_id: this.$route.query.id, id: id }
      });
    },
    goEval(id) {
      this.$router.push({
        path: "/evaluate",
        query: { course_id: this.$route.query.id, id: id }
      });
    },
    reviewReason(id) {
      this.curId = id;
      this.$nextTick(_=>{
        this.reasonReviewShow = true;
      })
    },
  }
};
</script>

<style scoped>
ul,
li {
  list-style: none;
}
.finish-course {
  width: 800px;
  min-height: 818px;
  background-color: #fff;
  float: right;
}
.top-title {
  width: 740px;
  margin: 30px 30px 25px;
}
.first-line {
  overflow: hidden;
}
.left {
  font-size: 18px;
  color: #333333;
  float: left;
}
.right {
  float: right;
  font-size: 14px;
  color: #333333;
}
.study-time {
  margin-right: 80px;
}
.bottom-line {
  margin-top: 11px;
  font-size: 14px;
  color: #333333;
}
.table {
  width: 740px;
  margin: 0 auto;
}
.tab-bars ul {
  overflow: hidden;
}
.tab-bars {
  width: 740px;
  height: 50px;
  background: #fafafa;
  border: 1px solid #dcdcdc;
}
.tab-bars ul li a {
  float: left;
  width: 150px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  color: #666666;
  cursor: pointer;
  text-decoration: none;
}
.tab-bars ul li a.router-link-active {
  background: #ffffff;
  border-top: 2px solid #ff8200;
}
.table-tit {
  width: 740px;
  height: 38px;
  background: #f5f5f5;
  border: 1px solid #e8e8e8;
  margin-top: 17px;
  overflow: hidden;
}
.table-tit div {
  float: left;
  line-height: 38px;
  height: 38px;
  font-size: 12px;
  color: #333333;
  text-align: center;
}
.course-name {
  width: 337px;
}
.state {
  width: 144px;
}
.oparet {
  width: 205px;
}
.table-list {
  width: 740px;
  background: #ffffff;
  border: 1px solid #bfbfbf;
  height: 100px;
  margin-top: 11px;
}
.list-tit {
  height: 46px;
  width: 739px;
  background: #f5f5f5;
  font-size: 12px;
  color: #333333;
  line-height: 46px;
}
.list-tit span {
  float: right;
  margin-right: 20px;
}
.list-detail {
  overflow: hidden;
  width: 738px;
  height: 53px;
}
.lesson-name {
  float: left;
  text-indent: 20px;
  font-size: 12px;
  color: #333333;
  line-height: 53px;
  border-right: 1px solid #f5f5f5;
  width: 336px;
  height: 53px;
  overflow: hidden;
}
.lesson-state {
  width: 193px;
  height: 53px;
  overflow: hidden;
  text-align: center;
  line-height: 53px;
  float: left;
  border-right: 1px solid #f5f5f5;
  font-size: 12px;
  color: #333333;
}
.oprate-lesson {
  float: left;
  width: 205px;
  height: 53px;
  overflow: hidden;
  line-height: 53px;
  font-size: 12px;
  text-align: center;
}
.colo {
  font-size: 12px;
  color: #ff8244;

  margin-right: 12px;
  cursor: pointer;
}
</style>