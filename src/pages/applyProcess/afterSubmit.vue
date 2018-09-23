<template>
<div class="basicinfor">
	<div class="basic-header">
		<div class="step">
			<span class="step1"></span>
			<span class="step2"></span>
			<span class="step3"></span>
		</div>
		<ul>
			<li>Basic Info</li>
			<li>Demo Lesson</li>
			<li>Contract Info</li>
		</ul>
	</div>
	<div class="basic-main">
		<div class="tip-info">
      <p v-if="teacher.state === 3">Thank you for your application!Your data is under checking. Please wait for the result. </p>
      <p v-if="teacher.state === 4">Congratulations, your information is approved. Please wait for the appointment interview. </p>
      <p v-if="teacher.state === 5">Unfortunately, your materials have not been approved. Please revise them before submitting.Reason: {{reason}}。</p>
    </div>
    <div class="basic-info">
      <p class="basic-info-title">Basic Info</p>
      <ul>
        <li class="info-li1">Portraits</li>
        <li class="info-li2">
          <div class="portraits-img">
            <img :src="this.$baseApiUrl+teacher.avatar" alt=""/>
          </div>
        </li>
      </ul>
      <ul>
        <li class="info-li1"><em>*</em>Name</li>
        <li class="info-li2">{{teacher | teacherName}}</li>
      </ul>
      <ul>
        <li class="info-li1"><em>*</em>Contact Email</li>
        <li class="info-li2">{{teacher.email}}</li>
      </ul>
      <ul>
        <li class="info-li1"><em>*</em>Contact Phone Number</li>
        <li class="info-li2">{{teacher.mobile}}</li>
      </ul>
      <ul>
        <li class="info-li1"><em>*</em>Country</li>
        <li class="info-li2">{{country}}</li>
      </ul>
      <ul>
        <li class="info-li1"><em>*</em>Street</li>
        <li class="info-li2">{{teacher.street}}</li>
      </ul>
      <ul>
        <li class="info-li1"><em>*</em> Time Zone</li>
        <li class="info-li2">{{teacher.timezone}}</li>
      </ul>
      <!-- <ul>
        <li class="info-li1"><em>*</em> Education Background</li>
        <li class="info-li2">{{teacher.created_at}}</li>
      </ul>
      <ul>
        <li class="info-li1"><em>*</em>Education Background</li>
        <li class="info-li2">{{teacher.education_history}}</li>
      </ul> -->
    </div> 
    <div class="basic-info experience-info">
      <p class="basic-info-title">Teaching Experience</p>
      <ul>
        <li class="info-li1"><em>*</em>School Currently Teaching</li>
        <li class="info-li2">{{teacher.cur_school}}</li>
      </ul>
      <!-- <ul>
        <li class="info-li1"><em>*</em>Current Teaching Academic Subject</li>
        <li class="info-li2">{{teacher.education_history}}</li>
      </ul> -->
      <ul>
        <li class="info-li1"><em>*</em>Geographical region(s) where you had taught</li>
        <li class="info-li2">{{cur_country}}</li>
      </ul>
      <ul>
        <li class="info-li1"><em>*</em>State(s) where you have taught</li>
        <li class="info-li2">{{cur_province}}</li>
      </ul>
      <!-- <ul>
        <li class="info-li1">Qualified Teaching Academic Subject(s)</li>
        <li class="info-li2">{{teacher.education_history}}</li>
      </ul> -->
      <ul>
        <li class="info-li1"><em>*</em>Total Teaching Years</li>
        <li class="info-li2">{{teacher.teacher_age}}</li>
      </ul>
      <!-- <ul>
        <li class="info-li1"><em>*</em>Most Current Resume</li>
        <li class="info-li2">
          <span>{{teacher.resume_url}}</span>
        </li>
      </ul> -->
      <!-- <ul>
        <li class="info-li1">Credentials</li>
        <li class="info-li2">
          <span>{{teacher.seniority_url}}</span>
        </li>
      </ul> -->
      <ul>
        <li class="info-li1">Please describe any professional highlights</li>
        <li class="info-li2">{{teacher.teaching_history || '--'}}</li>
      </ul>
    </div> 
	</div>
	<div class="next-btn">
		<button @click="$router.push('/basicEdit')">Modify</button>
	</div>
</div>
</template>

<script>
import {
	actionEventBareGet
} from '@/api/action_event';
import {
  getCountry,
  regionBareGetById
} from '@/api/region'
import { mapState } from "vuex";
export default {
  name: 'afterSubmit',
  data() {
    return {
      reason: '',
      country: '',
      cur_country: '',
      cur_province: ''
    };
  },
  computed: {
    ...mapState({
      teacher: state => state.userinfo.teacher
    })
  },
  created() {
    const teacher_id = this.$store.state.auth.id;
    this.$store.dispatch("TEACHER_GET_BY_ID", teacher_id).then(resp => {
      if(resp.state === 5) {
        this.getReason(teacher_id)
      }
      this.getCountry(resp.country).then(country => this.country = country)
      this.getCountry(resp.cur_country).then(country => this.cur_country = country)
      this.getRegionName(resp.cur_province).then(cur_province => this.cur_province = cur_province)
    })
  },
  methods: {
    getReason(id) {
			const filter = this.$json2filter({
				action_event_type: [this.$ACTION_EVENT_TYPE.TEACHER_CHECK],
				primary_table_name: ['teacher'],
				after_state: [5],
				primary_data_id: [id]
			})
			actionEventBareGet(filter).then(resp=>{
				this.reason = resp.data.objects[0] ? resp.data.objects[0].action_event_desc : 'unknown';
			})
    },
    getCountry(id) {
      return getCountry().then(data => {
        const countrys = data.filter(item => item.id === +id);
        return countrys[0] ? countrys[0].name : 'unknown'
      })
    },
    getRegionName(id) {
      return regionBareGetById(id).then(resp => {
        return resp.data.name
      })
    }
  } 
};
</script>

<style scoped>
.basicinfor {
  width: 1000px;
  min-height: 800px;
  margin: 0 auto 30px;
  overflow: hidden;
  margin-top: 20px;
  background: #ffffff;
}

.basic-header {
  height: 100px;
  margin: 30px 70px 20px;
  border: 1px solid #d8d8d8;
  border-top: none;
}

.step span {
  width: 33.333%;
  display: block;
  height: 5px;
  background: #d8d8d8;
  z-index: 99999;
  float: left;
  position: relative;
}

.step {
  width: 100%;
  border-bottom: 5px solid #ff8200;
}

.step1 {
  background: #ff8200 !important;
}

.step1::after,
.step2::after,
.step3::after {
  content: "";
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: -9px;
  margin-left: -12px;
}

.step1::after {
  background-color: #ff8200;
}

.step2::after,
.step3::after {
  background-color: #d8d8d8;
}

.basic-header ul {
  list-style: none;
}

.basic-header ul li {
  float: left;
  width: 33.333%;
  height: 90px;
  line-height: 90px;
  text-align: center;
  font-size: 18px;
  color: #666666;
}

.basic-header ul li:first-child {
  color: #ff8200;
  font-weight: bold;
}

.basic-main {
  margin: 0 70px;
}
.tip-info{
  padding: 10px 20px;
  background: #FEF7EF;
  font-size: 14px;
  color: #666666;
  line-height: 26px;
  margin-bottom: 40px;
}
.basic-info-title{
  font-family: PingFangSC-Regular;
  font-size: 18px;
  color: #333333;
  text-align: left;
  line-height: 24px;
  margin-bottom: 30px;
}
.basic-info ul {
  margin-bottom: 30px;
}
.basic-info ul,.basic-info li {
  list-style: none;
  overflow: hidden;
  line-height: 20px;
  color: #333;
  font-size: 14px;
  word-break: break-word;
}
.basic-info .info-li1{
  width: 160px;
  float: left;
  font-family: ArialMT;
  color: #151515;
  padding-right: 30px;
}
.basic-info .info-li1 em{
  color: #ff8200;
  position: relative;
  top: 3px;
  margin-right: 5px;
}
.basic-info .info-li2{
  width: 660px;
  float: left;
}
.basic-info .info-li2 span{
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #4A90E2;
}
.portraits-img {
  width: 108px;
  height: 108px;
  border: 5px solid #FFDF77;
  border-radius: 50%;
  overflow: hidden;
}
.portraits-img img{
  width: 100%;
  height: 100%;
  border: 1px solid #fff;
  border-radius: 50%;
  overflow: hidden;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.experience-info {
  margin-top: 80px;
}
.next-btn {
  text-align: center;
  padding: 20px 0 50px;
}

.next-btn button {
  width: 150px;
  height: 40px;
  font-size: 18px;
  color: #ffffff;
  background: #ff8200;
  border-radius: 5px;
  outline: none;
  border: none;
}
</style>