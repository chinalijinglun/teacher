<template>
	<div class="uploading-courseware">
		<div class="course-name">
			Course name：{{course.course_name}}
		</div>
		<div class="class-name">
			<span>Lesson name：</span>
			<input type="text" class="inp" v-model="form.course_schedule_name" placeholder="Lesson name">
		</div>
		<div class="upload">
			<span>
				Upload Attachment：
			</span>
			<ware-upload 
				v-model="coursewareLs"
				:schedule-id="form.course_schedule_id"
			/>
		</div>
		<div class="kejian">
			<div class="singal" v-for="(item, index) in coursewareLs" :key="index">
				<div class="left">
					<img src="@/assets/fujian.png" alt="">
				</div>
				<div class="right">
					<div class="rig-tit"> <a :href="item.file_url" target="block">{{item.ware_name}}</a> </div>
					<div class="del" @click="deleteWare(index)">Delete</div>
					<el-radio-group v-model="item.is_view" class="radio-group">
						<el-row>
							<el-radio label="YES">Allow student preview</el-radio>
						</el-row>
						<el-row>
							<el-radio label="NO">Not allowed</el-radio>
						</el-row>
					</el-radio-group>
				</div>
			</div>
		</div>
		<div class="btn-box">
			<div class="submit" @click="updateWare">
				Submit
			</div>
			<div class="close" @click="toBack">
				Close
			</div>
		</div>
	</div>
</template>
<script>
import { mapState } from "vuex";
import { 
	courseScheduleBareGetById,
	courseSchedulePutById,
	courseUpdateName
} from '@/api/course_schedule'
import { 
	getCourseWareBySchedule,
	uploadCourseware,
	coursewareDeleteById
} from '@/api/courseware'
import CourseWare from '@/model/CourseWare'
import wareUpload from '@/components/upload/wareUpload'
export default {
	data() {
		return {
			form: {
				course_schedule_id: '',
				course_schedule_name: ''
			},
			coursewareLs: [],
			oldWareLs: []
		}
	},
  computed: {
    ...mapState({
			course: state => state.course.course,
			userName: state => state.auth.userName
    })
	},
	created() {
		const course_id = this.$route.query.course_id;
		this.$store.dispatch('COURSE_GET_BY_ID', course_id);
		const course_schedule_id = this.$route.query.id;
		this.getCourseSchedule(course_schedule_id)
		this.getCourseWare(course_schedule_id);
	},
	methods: {
		getCourseSchedule(id) {
			courseScheduleBareGetById(id).then(resp => {
				this.form.course_schedule_name = resp.data.name;
				this.form.course_schedule_id = id;
			})
		},
		getCourseWare(id) {
			getCourseWareBySchedule(id).then(resp => {
				this.coursewareLs = resp.data.objects.map(item => new CourseWare({
					...item,
					file_url: item.ware_url
				}))
				this.oldWareLs = resp.data.objects.map(item => item.id)
			})
		},
		deleteWare(index) {
			this.coursewareLs.splice(index, 1);
		},
		toBack() {
			this.$router.back()
		},
		updateWare() {
			const updates = [...this.addWare(), ...this.removeWare(), this.updateSchedule()];
			Promise.all(updates).then(resp => {
				this.$message.success('success！')
				this.toBack()
			}).then(error => {
				this.$message.error(error)
			})
		},
		addWare() {
			return this.coursewareLs.map(item => uploadCourseware(item))
		},
		removeWare() {
			return this.oldWareLs.map(id => coursewareDeleteById(id))
		},
		updateSchedule() {
			return courseUpdateName({
				name: this.form.course_schedule_name,
				course_schedule_id: this.form.course_schedule_id
			})
		}
	},
	components: {
		wareUpload
	}
};
</script>

<style scoped>
.uploading-courseware {
  width: 740px;
  min-height: 818px;
  padding: 30px;
  background-color: #fff;
  float: right;
}
.course-name {
  font-size: 14px;
  color: #333333;
}
.class-name {
  font-size: 14px;
  color: #333333;
  margin-top: 20px;
}
.inp {
  width: 300px;
  height: 36px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  text-indent: 10px;
}
.upload {
  color: #333333;
  font-size: 14px;
  line-height: 36px;
  margin-top: 25px;
}
.uploading {
  display: inline-block;
  width: 120px;
  height: 36px;
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 5px;
  cursor: pointer;
}
.uploading img {
  float: left;
  margin: 8px 15px;
}
.kejian {
  overflow: hidden;
  margin-top: 60px;
}
.singal {
  width: 50%;
  float: left;
  height: 153px;
  overflow: hidden;
}
.left {
  float: left;
}
.right {
  float: left;
  margin-left: 13px;
}
.rig-tit {
  font-size: 14px;
  color: #666666;
}
.del {
  font-size: 14px;
  color: #ff8200;
  text-decoration: underline;
	cursor: pointer;
	line-height: 20px;
	margin-top: 5px;
	margin-bottom: 7px;
}
.radio-group {
  font-size: 12px;
  color: #333333;
}
.radio-group .el-row {
	padding: 6px 0;
}
.btn-box {
  width: 272px;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 20px;
}
.submit {
  width: 120px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background: #ff8200;
  border-radius: 5px;
  font-size: 14px;
  color: #ffffff;
  float: left;
  margin-right: 28px;
}
.close {
  width: 120px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  font-size: 14px;
  color: #333333;
  float: left;
}
</style>