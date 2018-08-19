<template>
	<div class="my-course">
		<el-form :inline="true" :model="form" class="demo-form-inline">
			<el-form-item label="课程名称">
				<el-input v-model="form.course_name"></el-input>
			</el-form-item>
			<el-form-item label="上课时间">
				<el-date-picker v-model="form.course_time" type="date">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="学生名称">
				<el-input v-model="form.student_name"></el-input>
			</el-form-item>
			<el-form-item label="课程状态">
				<el-select v-model="form.course_status" placeholder="所有状态">
					<el-option label="待付款" value="shanghai"></el-option>
					<el-option label="已付款" value="beijing"></el-option>
					<el-option label="已取消" value="beijing"></el-option>
					<el-option label="申请退款" value="beijing"></el-option>
					<el-option label="已退款" value="beijing"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item>
				<el-button type="primary">查询</el-button>
			</el-form-item>
		</el-form>
		<div class="tables">
			<div class="tits">
				<ul>
					<li class="course-name">课程包名称</li>
					<li class="process">课程进度</li>
					<li class="student">学生</li>
					<li class="state">状态</li>
					<li class="oprate">操作</li>
				</ul>
			</div>
			<div class="list-table" v-for="(item, index) in tableData" :key="index">
				<div class="list-states">
					<span>上课时间：{{ item.start | courseTime(item.end)}}</span>
				</div>
				<ul>
					<li class="course-name">{{item.course_name}}</li>
					<li class="process">{{item.finish}}/{{item.classes_number}}</li>
					<li class="student">{{item.student_name}}</li>
					<li class="state under-way">进行中</li>
					<li class="oprate check" @click="goDetail(item.id)">查看详情</li>
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
export default {
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
	methods: {
		handleCurrentChange(page) {
			this.page_no = page;
			this.query();
		},
		query() {
			return teacherMyCourse(this.$deleteEmptyProps(this.form)).then(resp => {
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
  width: 256px;
  text-align: left;
}
.process {
  width: 118px;
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