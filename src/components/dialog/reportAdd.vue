<template>
  <div class="bgray" v-show="editShow">
    <div id="apps">
      <div class="title">
        <span>Add transcripts</span>
      </div>
      <div class="biaoti">
        <div class="word">
          Student
        </div>
        <el-select v-model="form.student_id">
          <el-option v-for="item in studentLs" :key="item.id" :value="item.id" :label="item.student_name"></el-option>
        </el-select>
      </div>
      <div class="bianji">
        <div class="word">
          Title
        </div>
        <input type="text" class="inp" v-model="form.report_card_name" placeholder="title">
      </div>
      <div class="fujian">
        <div class="word">
          Attachments
        </div>
        <div class="right">
          <div class="up">
            <img src="@/assets/shangchuan.png" alt="">Upload the attachments
            <input type="file" ref="uploadInput" name="file" class="uploadInput" @change="addFile">
          </div>
          <div class="file-list" v-if="form.report_card_url">
            <ul class="file-list-text">
              <li>
                <a :href="$baseApiUrl + form.report_card_url.url" target="_blank">{{form.report_card_url.name}}</a>
                <i class="el-icon-close" @click="removeFile()"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="btn">
        <div class="submit" @click="submit">
          Submit
        </div>
        <div class="back" @click="close">
          Return
        </div>
      </div>
    </div>
  </div>
</template>  
  
<script>
import { VueEditor } from "vue2-editor";
import {
  studyResultPost
} from '@/api/study_result'
import {
  courseStudent
} from '@/api/course'
import { mapState } from 'vuex'

export default {
  components: {
    VueEditor
  },
  watch: {
    show(val, oval) {
      this.editShow = !this.editShow;
    }
  },
  props: ["show", "courseScheduleId"],
	created() {
		const course_id = this.$route.query.id;
		this.form.course_id = course_id;
    this.getStudentLs()
  },
  computed: {
    ...mapState({
      userName: state => state.auth.userName
    })
  },
  data() {
    return {
      form: {
        course_id: '',
        student_id: '',
        report_card_name: '',
        report_card_url: null,
        result_type: 'ACHIEVEMENT'
      },
      studentLs: [],
      fileLs: [],
      editShow: false
    };
  },
  methods: {
    getStudentLs() {
      return courseStudent(this.form.course_id).then(resp => {
        this.studentLs = resp.data.objects;
      })
    },
    addFile(e) {
      const file = e.target.files[0]
      if(!file) {
        return
      }
      const formData = new FormData();
      formData.append('file', file);
      this.$axios.post(this.$baseApiUrl + '/upload', formData).then(resp => {
        this.form.report_card_url = {
          name: resp.data[0].upload_file,
          url: resp.data[0].download_file
        }
        e.target.value = ''
      });
    },
    removeFile() {
      this.form.report_card_url = null
    },
    submit() {
      studyResultPost({
        ...this.form,
        created_at: new Date(),
        updated_by: this.userName,
        report_card_url: JSON.stringify(this.form.report_card_url)
      }).then(resp => {
        this.close()
        this.$emit('on-submit', resp)
        this.$message.success('Successfully added!');
      })
    },
    close() {
      this.fileLs = []
      this.$refs.uploadInput.value = ''
      this.form = {
        course_id: '',
        student_id: '',
        report_card_name: '',
        report_card_url: null,
        result_type: 'ACHIEVEMENT'
      }
      this.editShow = false
    }
  }
};
</script>  
<style scoped>
.bgray {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}
#apps {
  width: 830px;
  padding-bottom: 20px;
  background: #ffffff;
  border-radius: 10px;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -415px;
  margin-top: -300px;
  z-index: 1000;
}
.title {
  height: 86px;
  font-size: 22px;
  color: #333333;
  border-bottom: 1px solid #e8e8e8;
}
.title span {
  margin-left: 55px;
  padding: 33px 0 20px 0;
  border-bottom: 3px solid #ff8200;
  display: block;
  float: left;
}
.biaoti {
  overflow: hidden;
  margin-top: 31px;
}
.word {
  width: 85px;
  text-align: right;
  font-size: 16px;
  color: #333333;
  height: 52px;
  line-height: 52px;
  float: left;
  margin-right: 24px;
}
.inp {
  float: left;
  height: 50px;
  width: 640px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  text-indent: 10px;
  outline: none;
}
.text {
  width: 640px;
  /* height: 220px; */
  float: left;
}
.bianji {
  margin-top: 20px;
  overflow: hidden;
}
.right {
  float: left;
  overflow: hidden;
  width: 640px;
}
.fujian {
  margin-top: 20px;
  overflow: hidden;
}
.up {
  width: 118px;
  height: 38px;
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 5px;
  font-size: 14px;
  color: #333333;
  overflow: hidden;
  line-height: 40px;
  cursor: pointer;
  position: relative;
}
.up .uploadInput {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}
.up img {
  float: left;
  margin: 10px 15px;
}
.right span {
  font-size: 14px;
  color: #ff8200;
  line-height: 40px;
  margin-right: 30px;
  float: left;
}
.btn {
  width: 273px;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 27px;
}
.submit {
  width: 120px;
  float: left;
  height: 40px;
  line-height: 40px;
  background: #ff8200;
  border-radius: 5px;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
  margin-right: 32px;
}
.back {
  width: 118px;
  float: left;
  height: 38px;
  line-height: 40px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  font-size: 14px;
  color: #333333;
  text-align: center;
}
.file-list {
  overflow: hidden;
}
.file-list-text li{
  line-height: 20px;
  padding: 5px;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
}
.file-list-text li:hover{
  background: #fffdf3;
}
.file-list-text li>a{
  font-size: 14px;
  color: #ff8200;
  text-decoration: none;
}
.file-list-text li>a:link{
  color: #ff8200;
}
.file-list-text li>a:visited{
  color: #ff8200;
}
.file-list-text li>a:hover{
  color: #ff8200;
}
.file-list-text li>a:active{
  color: #ff8200;
}
.file-list-text li>i.el-icon-close{
  position: absolute;
  right: 5px;
  top: 5px;
}
</style>
 