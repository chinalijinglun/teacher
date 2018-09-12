<template>
<div class="complete-info">
  <div class="basic-header">
    <step :steps="steps"></step>
  </div>
  <div class="form-container">
    <p class="red-tips">Complete the archives will help us match your child efficiently </p>
    <el-form label-position="top" :model="form" :rules="rules" ref="basicForm">
      <el-row :gutter="40">
        <el-col :span="12">
          <el-form-item label="Skype ID" prop="skype_account">
            <el-input v-model="form.skype_account"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="Available Time Slots to Teach（Monday -----Sunday）" prop="time">
			  <teacher-time-edit ref="teacherTimeEdit"></teacher-time-edit>
      </el-form-item>
      <el-form-item label="Brief Professional Bio" prop="about_me">
        <el-input v-model="form.about_me" type="textarea" :rows="4"></el-input>
      </el-form-item>
      <el-form-item label="Video">
        <el-input v-model="form.video_url"></el-input>
      </el-form-item>
      <el-form-item label="Award Recei" prop="award_url">
        <upload-button
          v-model="form.award_url"
          :max-length="3"
        />
      </el-form-item>
      <el-form-item label="Other Working Experience">
        <el-input v-model="form.teaching_history" type="textarea" :rows="4"></el-input>
      </el-form-item>
    </el-form>
		<div class="next-btn">
			<el-button @click="submit" type="primary">Submit</el-button>
		</div>
  </div>
</div>
</template>
<script>
  import teacherTimeEdit from './comps/time'
  import {
    teacherTimePost
  } from '@/api/teacher_time';
  import {
    teacherPutByTeacherid
  } from '@/api/teacher'
  import { userinfo } from '@/mixins';
  export default {
    mixins: [userinfo],
    created() {
      console.log(this.userId)
    },
    data() {
      const timeValid = (a, b, cb) => {
        if(this.$refs.teacherTimeEdit.valid()) {
          cb()
        } else {
          cb(new Error('Available Time Slots to Teach is required'))
        }
      }
      return {
        steps: ['Basic Info', 'Demo Lesson', 'Contract Info'],
        form: {
          skype_account: '',
          time: '1',
          about_me: '',
          video_url: '',
          award_url: [],
          teaching_history: ''
        },
        rules: {
          skype_account: [
            { required: true, message: 'Skype ID is required', trigger: 'blur'}
          ],
          time: [
            { required: true, message: 'Available Time Slots to Teach is required', trigger: 'change'},
            { validator: timeValid }
          ],
          about_me: [
            { required: true, message: 'Brief Professional Bio', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submit() {
        this.$refs.basicForm.validate().then(_=> {
          Promise.all([...this.postTime(), this.postTeacher()]).then(resp => {
            this.$message.success('success!')
            this.$router.push("/center");
          })
        })
      },
      postTeacher() {
        const {
          skype_account,
          about_me,
          video_url,
          award_url,
          teaching_history
        } = this.form;
        return teacherPutByTeacherid(this.userId, {
          skype_account,
          about_me,
          video_url,
          award_url: JSON.stringify(award_url),
          teaching_history,
          updated_by: this.userId,
          updated_at: new Date()
        })
      },
      postTime() {
        const times = this.$refs.teacherTimeEdit.getForm()
        return times.map(item => teacherTimePost({
          ...item,
          teacher_id: this.userId,
          delete_flag: 1,
          created_at: new Date(),
          updated_at: new Date(),
          updated_by: this.userId
        }))
      }
    },
    components: {
      teacherTimeEdit
    }
  }
</script>
<style>
  .complete-info {
    width: 1000px;
    min-height: 800px;
    margin: 0 auto 30px;
    overflow: hidden;
    margin-top: 20px;
    background: #ffffff;
    padding-bottom: 30px;
  }
  .basic-header {
    height: 100px;
    margin: 30px 70px;
    border: 1px solid #d8d8d8;
    border-top: none;
  }
  .red-tips {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #FF4433;
    margin-bottom: 30px;
  }
  .form-container {
    width: 860px;
    margin: auto;
  }
  .next-btn {
    text-align: center;
  }
</style>
