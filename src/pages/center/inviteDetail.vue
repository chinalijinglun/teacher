<template>
	<div class="invite-detail">
		<div class="tables">
			<h3>
				Invitation for auditioned class 
				<router-link :to="{path: '/center'}">Back</router-link>
			</h3>
			<div class="tits">
				<ul>
					<li class="li1">#</li>
					<li class="li2">Classes period(Current time zone: {{$TIME_ZONE[timezone] || timezone}})</li>
					<li class="li3">Student</li>
					<li class="li4">Operation</li>
				</ul>
			</div>
			<div class="list-table" v-for="(item, index) in tableData" :key="index">
				<ul>
					<li class="li1">{{parseInt(index+1)}}</li>
					<li class="li2">{{item.start | courseScheduleTime(item.end)}}</li>
					<li class="li3">{{item.student_name}}</li>
					<li class="li4">
						<span v-if="new Date(item.start) <= new Date()" class="has-invite">Expired</span>
						<template v-else>
							<span v-if="item.apply_state === 0" @click="getInvite(item.id)">Accept</span>
							<span v-if="item.apply_state === 0" @click="refusedInvite(item.id)">Reject</span>
							<span v-if="item.apply_state === 1 && item.teacher_id !== +id" class="has-invite">Has been taught by other teachers</span>
							<span v-if="item.apply_state === 1 && item.teacher_id === +id" class="has-invite">Received</span>
						</template>
					</li>
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
import {courseAppointmentPutById} from '@/api/course_appointment';
import {teacherApplyStudents, teacherAcceptStudents} from '@/api/teacher';
import {mapState} from 'vuex'
export default {
  data() {
    return {
			form: {
				page_no: 1,
				page_limit: 10,
			},
			total: 0,
			tableData: []
    };
	},
	created() {
		this.query()
	},
	computed: {
		...mapState({
			id: state => state.auth.id,
			timezone: state => state.userinfo.teacher.timezone
		})
	},
	methods: {
		handleCurrentChange(page) {
			this.form.page_no = page;
			this.query();
		},
		query() {
			return teacherApplyStudents(this.$deleteEmptyProps(this.form)).then(resp => {
				this.tableData = resp.data.objects;
				this.total = resp.data.num_results;
			})
		},
		getInvite(id) {
			teacherAcceptStudents({'course_appointment_id':id}).then(resp => {
				this.$message.success('接受邀请成功!');
				this.query();
			})
		}, 
		refusedInvite(id) {
			courseAppointmentPutById(id,{appointment_state: 'REFUSE'}).then(resp => {
				this.$message.success('拒绝成功!');
				this.query();
			})
		}
	}
};
</script>

<style scoped>
ul,
li {
  list-style: none;
}
.invite-detail {
  width: 800px;
  min-height: 818px;
  background-color: #fff;
  float: right;
}
.tables {
  width: 740px;
  padding: 30px;
}
.tables h3 {
	line-height: 20px;
	font-size: 18px;
	font-weight: normal;
	color: #333;
	margin-bottom: 20px;
}
.tables h3 a {
	display: inline-block;
	line-height: 20px;
	text-decoration: none;
	color: #ff8244;
}
.tits {
  width: 740px;
  background: #f5f5f5;
  border: 1px solid #e8e8e8;
}
.tits ul {
  overflow: hidden;
}
.tits ul li {
  float: left;
  text-align: center;
  line-height: 20px;
	padding: 10px 5px;
  font-size: 12px;
  color: #333333;
	overflow: hidden;
}
.li1 {
  width: 65px;
}
.li2 {
  width: 255px;
}
.li3 {
  width: 180px;
}
.li4 {
  width: 200px;
}
.list-table {
  background: #ffffff;
  border: 1px solid #e8e8e8;
	border-top: 0;
  width: 740px;
	margin-top: 0;
	height: auto;
}
.list-table ul {
  width: 740px;
  overflow: hidden;
}
.list-table ul li {
  float: left;
  text-align: center;
  line-height: 20px; 
	padding: 12px 5px;
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
.list-table .li4 span {
	cursor: pointer;
	color: #ff8244;
}
.list-table .li4 span.has-invite {
	color: #ccc;
}
</style>