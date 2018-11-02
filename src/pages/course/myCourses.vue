<template>
	<div class="my-course">
		<el-form :inline="true" :model="form" class="demo-form-inline">
			<el-form-item label="Course name">
				<el-input v-model="form.course_name"></el-input>
			</el-form-item>
			<el-form-item label="Time for class">
				<el-date-picker v-model="form.course_time" type="date">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="Student name">
				<el-input v-model="form.student_name"></el-input>
			</el-form-item>
			<el-form-item label="Status of class">
				<el-select v-model="form.course_status" placeholder="All status">
					<el-option label="All status" value=""></el-option>
					<el-option label="Completed" value="1"></el-option>
					<el-option label="In progress" value="2"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="query">Check</el-button>
			</el-form-item>
		</el-form>
		<div class="tables">
			<div class="tits">
				<ul>
					<li class="course-name">Course Pack</li>
					<li class="process">Class taught/ Total classes</li>
					<li class="student">Student</li>
					<li class="state">Status</li>
					<li class="oprate">Operation</li>
				</ul>
			</div>
			<div class="list-table" v-for="(item, index) in tableData" :key="index">
				<div class="list-states">
					<span>Classes period（Current time zone: {{$TIME_ZONE[timezone] || timezone}}）：{{ item.start | courseTime(item.end)}}</span>
				</div>
				<ul>
					<li class="course-name">{{item.course_name}}</li>
					<li class="process">{{item.finish}}/{{item.classes_number}}</li>
					<li class="student">{{item.student_name || '-'}}</li>
					<li class="state under-way">{{item | stateFilter}}</li>
					<li class="oprate check" @click="goDetail(item.id)">detail</li>
				</ul>
			</div>
			<el-row>
				<el-pagination
					@current-change="handleCurrentChange"
					:current-page.sync="form.page_no"
					:page-size="form.page_limit"
					layout="prev, pager, next, jumper"
					:total="total">
				</el-pagination>
			</el-row>
		</div>
	</div>
</template>

<script>
import {teacherMyCourse} from  '@/api/teacher'
import {mapState} from 'vuex'
export default {
	computed: {
		...mapState({
			timezone: state => state.userinfo.teacher.timezone
		})
	},
  data() {
    return {
      form: {
				course_name: '',
				course_status: '',
				course_time: '',
				page_limit: 10,
				page_no: 1,
				student_name: ''
			},
			total: 0,
			tableData: []
    };
	},
	created() {
		this.query()
	},
	filters: {
		stateFilter(item) {
			if(item.finish >= item.classes_number) {
				return 'Finished'
			}
			if(new Date(item.start)>new Date() && item.finish === 0) {
				return 'NotStarted'
			}
			return 'In progress'
		}
	},
	methods: {
		handleCurrentChange(page) {
			this.page_no = page;
			this.query();
		},
		query() {
			let {
				course_name,
				course_status,
				course_time,
				page_limit,
				page_no,
				student_name
			} = this.form;
			if (course_time && course_time instanceof Date) {
				course_time = this.$getISOString(course_time)
			}
			return teacherMyCourse(this.$deleteEmptyProps({
				course_name,
				course_status,
				course_time,
				page_limit,
				page_no,
				student_name
			})).then(resp => {
				this.tableData = resp.data.objects;
				this.total = resp.data.num_results;
			})
		},
		goDetail(id) {
			this.$router.push({path: '/finish-course', query: {'id': id}});
		}
	}
};
</script>

<style scoped>
ul,
li {
  list-style: none;
}
.my-course {
  width: 800px;
  min-height: 818px;
  background-color: #fff;
  float: right;
}
.demo-form-inline {
  padding: 30px;
}
.demo-form-inline button {
  background: #ff8200;
  border: none;
}
.tables {
  width: 740px;
  padding: 30px;
}
.tits {
  width: 740px;
  background: #f5f5f5;
  border: 1px solid #e8e8e8;
  height: 38px;
}
.tits ul {
  overflow: hidden;
}
.tits ul li {
  float: left;
  text-align: center;
  line-height: 38px;
  font-size: 12px;
  color: #333333;
}
.course-name {
  width: 200px;
  text-align: left;
}
.process {
  width: 180px;
}
.student,
.state {    
	width: 119px;
	overflow: hidden;
	text-overflow: ellipsis;
}
.oprate {
  width: 116px;
}
.list-table {
  margin-top: 10px;
  background: #ffffff;
  border: 1px solid #bfbfbf;
  width: 738px;
  height: 100px;
}
.list-states {
  width: 738px;
  height: 46px;
  line-height: 46px;
  background: #f5f5f5;
  font-size: 12px;
  color: #333333;
}
.list-states span {
  float: right;
  margin-right: 20px;
}
.list-table ul {
  width: 738px;
  overflow: hidden;
  height: 53px;
}
.list-table ul li {
  float: left;
  text-align: center;
  line-height: 53px; 
  font-size: 12px;
  color: #333333;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.list-table ul li:first-child {
  text-align: left;
  text-indent: 20px;
}
.list-table ul li.under-way {
  color: #ff4433;
}
.list-table ul li.check {
  color: #ff8244;
  cursor: pointer;
}
</style>