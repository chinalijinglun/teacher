<template>
	<div class="finish-course">
		<div class="top-title">
			<div class="first-line">
				<div class="left">
					{{course.course_name}}
				</div>
				<div class="right">
					<span class="study-time">Time for class：{{course.course_times}}</span>
					<span>rate of progress：{{course.course_progress}}</span>
				</div>
			</div>
			<div class="bottom-line">
				{{course.student_name}}
			</div>
		</div>
		<div class="table">
			<div class="tab-bars">
				<ul>
					<li>
						<router-link :to="{path: '/finish-course', query: {'id': this.$route.query.id}}">Completed course</router-link>
					</li>
					<li>
						<router-link :to="{path: '/dated-course', query: {'id': this.$route.query.id}}">Booked course</router-link>
					</li>
					<li>
						<router-link :to="{path: '/summary', query: {'id': this.$route.query.id}}">Class summery</router-link>
					</li>
					<li>
						<router-link :to="{path: '/report', query: {'id': this.$route.query.id}}">Transcripts</router-link>
					</li>
				</ul>
			</div>
			<div class="add-report" @click="addSumm">
				<img src="@/assets/shangchuan.png" alt=""> Add class summery
			</div>
			<div class="table-tit">
				<div class="course-name">Student</div>
				<div class="state">Time</div>
				<div class="oparet">Operate</div>
			</div>
			<div class="box" v-for="item in tableData" :key="item.id">
				<div class="student">
					{{item.student_name || '-'}}
				</div>
				<div class="time-oprate">
					<div class="line-one">
						<div class="time">
							{{item.start | courseTime(item.end)}}
						</div>
						<div class="check">
							<span @click="$router.push(`/view-result?id=${item.id}`)">See</span>
						</div>
					</div>
				</div>
			</div>
			<el-row>
				<el-pagination @current-change="handleCurrentChange" :current-page.sync="form.page_no" :page-size="form.page_limit" layout="prev, pager, next, jumper" :total="total">
				</el-pagination>
			</el-row>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
import { teacherMyCourseResult } from "@/api/teacher";
export default {
  data() {
    return {
      form: {
        course_id: this.$route.query.id.toString(),
        page_limit: 10,
        page_no: 1,
        type: "SUMMARY"
      },
      total: 0,
      tableData: []
    };
  },
  computed: {
    ...mapState({
      course: state => state.course.course
    })
  },
  created() {
    const course_id = this.$route.query.id;
    this.$store.dispatch("COURSE_GET_BY_ID", course_id);
    this.query();
  },
  methods: {
    handleCurrentChange(page) {
      this.page_no = page;
      this.query();
    },
    query() {
      return teacherMyCourseResult(this.$deleteEmptyProps(this.form)).then(
        resp => {
          this.tableData = resp.data.objects;
          this.total = resp.data.num_results;
        }
      );
    },
    addSumm() {
      this.$router.push({
        path: "/add-result",
        query: { id: this.$route.query.id }
      });
    }
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
.add-report {
  background: #ff8200;
  border-radius: 5px;
  height: 40px;
  display: inline-block;
  line-height: 40px;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  margin-top: 19px;
  padding: 0 10px;
}
.add-report img {
  float: left;
  margin: 10px 15px;
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
  width: 208px;
}
.state {
  width: 299px;
}
.oparet {
  width: 227px;
}
.box {
  width: 740px;
  overflow: hidden;
  font-size: 12px;
  color: #333333;
  height: 51px;
  border: 1px solid #e8e8e8;
  border-top: none;
}
.student {
  width: 208px;
  float: left;
  text-align: center;
  line-height: 51px;
}
.time-oprate {
  width: 527px;
  float: left;
  min-height: 51px;
  border-left: 1px solid #e8e8e8;
}
.line-one {
  height: 51px;
  overflow: hidden;
  width: 527px;
  border-bottom: 1px solid #e8e8e8;
}
.time {
  width: 299px;
  float: left;
  text-align: center;
  height: 51px;
  line-height: 51px;
  border-right: 1px solid #e8e8e8;
}
.check {
  float: left;
  width: 227px;
  text-align: center;
  font-size: 12px;
  color: #ff8244;
  height: 51px;
  line-height: 51px;
}
.check span {
  cursor: pointer;
}
</style>