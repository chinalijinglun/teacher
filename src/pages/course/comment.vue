<template>
	<div class="comment">
		<div class="student-mess">
			<img :src="$baseApiUrl + detail.student_avatar" alt="">
			<span class="student-name">{{detail.student_name}}</span>
			<span class="time">{{detail.created_at | noTime}}</span>
		</div>
		<div class="home-work-name">{{detail.question_name}}</div>
		<div class="desc" v-html="detail.answer_text"></div>
		<div class="dowmload">
			<div class="left" v-for="(item,index) in detail.answer_attachment_url" :key="index">
				<img src="../../assets/fujian.png" alt="">
				<div class="detail">
					<div class="names">{{item.upload_file}}</div>
					<div class="down-btn"><a :href="item.download_file" target="block">Download the attachments</a></div>
				</div>
			</div>
		</div>
		<div class="dianping-history">
			<div class="dp-tit">
				Comment record 
			</div>
			<div v-for="(item, index) in detail.evaluations" :key="index">
				<div class="dp-time">
					{{item.time | hasTime}}
				</div>
				<div class="dp-detail" v-html="item.evaluation"></div>
			</div>
		</div>
		<div class="dp-tit dp-h">
			Comment of homework
		</div>
		<vue-editor v-model="content"></vue-editor>
		<div class="btn">
			<div class="submit" @click="submit">
				Submit
			</div>
			<div class="back" @click="goBack">
				Return
			</div>
		</div>
	</div>
</template>
<script>
import { VueEditor } from "vue2-editor";
import { homeworkGetByhomeworkid, homeworkPutByhomeworkid } from '@/api/homework';
import { studyScheduleBareGetById } from '@/api/study_schedule'
import { studentBareGetById } from '@/api/student';
import HomeworkEvaluation from '@/model/HomeworkEvaluation';
import {mapState} from 'vuex';

export default {
  components: {
    VueEditor
	},
	computed: {
		...mapState({
			userId: state => state.auth.id
		})
	},
  data() {
    return {
			content: '',
			detail: {
				student_name: '',
				student_avatar: '',
				created_at: '',
				question_name: '',
				answer_text: '',
				answer_attachment_url: [],
				evaluations: []
			}
    };
  },
	created() {
		this.getHomeWork(this.$route.query.id)
	},
	methods: {
    goBack() {
      this.$router.back()
    },
		getHomeWork(id) {
			return homeworkGetByhomeworkid(id).then(resp => {
				this.detail.created_at = resp.data.created_at;
				this.detail.question_name = resp.data.question_name;
				this.detail.answer_text = resp.data.answer_text;
				if(resp.data.answer_attachment_url) {
					this.detail.answer_attachment_url = JSON.parse(resp.data.answer_attachment_url)
				}
				if(resp.data.evaluation) {
					const evaluation = JSON.parse(resp.data.evaluation)
					this.detail.evaluations = evaluation.map(item => new HomeworkEvaluation(item))
				}
				return studyScheduleBareGetById(resp.data.study_schedule_id)
			}).then(resp => {
				return studentBareGetById(resp.data.student_id)
			}).then(resp => {
				this.detail.student_name = resp.data.first_name;
				this.detail.student_avatar = resp.data.avatar;
			})
		},
		submit() {
			this.detail.evaluations.push(new HomeworkEvaluation({evaluation: this.content}))
			homeworkPutByhomeworkid(this.$route.query.id, {
				evaluation: JSON.stringify(this.detail.evaluations),
				updated_at: new Date(),
				updated_by: this.userId
			})
		}
	}
};
</script>

<style scoped>
.comment {
  float: right;
  background-color: #fff;
  width: 740px;
  padding: 30px;
  min-height: 880px;
}
.student-mess img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  float: left;
  margin-right: 10px;
}
.student-name {
  font-size: 14px;
  color: #333333;
}
.time {
  font-size: 14px;
  color: #999999;
  margin-left: 44px;
}
.home-work-name {
  font-size: 14px;
  color: #151515;
  line-height: 20px;
  margin-top: 33px;
}
.desc {
  font-size: 14px;
  color: #666666;
  line-height: 27px;
  margin-top: 13px;
}
.left {
  float: left;
  width: 50%;
  overflow: hidden;
  margin-top: 34px;
}
.left img {
  float: left;
  margin-left: 37px;
}
.detail {
  float: left;
  margin-left: 13px;
}
.names {
  font-size: 14px;
  color: #666666;
}
.down-btn {
  font-size: 14px;
  color: #ff8200;
  margin-top: 6px;
}
.dowmload {
  overflow: hidden;
}
.dianping-history {
  margin-top: 45px;
}
.dp-tit {
  font-size: 18px;
  color: #333333;
  margin-bottom: 20px;
}
.dp-time {
  font-size: 14px;
  color: #999999;
}
.dp-detail {
  font-size: 14px;
  color: #333333;
  line-height: 27px;
}
.dp-h {
  margin-top: 47px;
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
</style>