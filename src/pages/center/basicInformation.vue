<template>
<div class="basicinfor">
  <div class="basic-header">
    <step :steps="steps"></step>
  </div>
  <div class="basic-main">
    <el-form label-position="top" :model="form" :rules="rules" ref="basicForm">
      <el-form-item label="Portraits" prop="avatar">
        <avatar-upload v-model="form.avatar"></avatar-upload>
      </el-form-item>
      <el-row :gutter="40">
        <el-col :span="6">
          <el-form-item label="First Name" prop="first_name">
            <el-input v-model="form.first_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Middle Name" prop="middle_name">
            <el-input v-model="form.middle_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Last Name" prop="last_name">
            <el-input v-model="form.last_name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="Gender" prop="gender">
        <el-radio-group v-model="form.gender">
          <el-radio :label="1">Female</el-radio>
          <el-radio :label="2">Male</el-radio>
          <el-radio :label="3">Prefer not to disclose</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-row :gutter="40">
        <el-col :span="12">
          <el-form-item label="Contact Email" prop="email">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="12">
          <el-form-item label="Contact Phone Number" prop="mobile">
            <el-input v-model="form.mobile">
							<el-select slot="prepend" v-model="form.nation" style="width: 150px;">
								<el-option v-for="(item, index) in $NATIONAL_CODE" :value="item.code" :key="index" :label="item.name"></el-option>
							</el-select>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="6">
          <el-form-item label="Country" prop="country">
            <el-select v-model="form.country" @change="handlerCountryChange">
              <el-option v-for="(item, index) in countryLs" :value="item.id" :key="index" :label="item.name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="State" prop="province">
            <el-select v-model="form.province" @change="handlerStateChange">
              <el-option v-for="(item, index) in stateLs" :value="item.id" :key="index" :label="item.name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="City" prop="city">
            <el-select v-model="form.city">
              <el-option v-for="(item, index) in cityLs" :value="item.id" :key="index" :label="item.name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="12">
          <el-form-item label="Street" prop="street">
            <el-input v-model="form.street"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="6">
          <el-form-item label="Time Zone" prop="timezone">
            <el-select v-model="form.timezone" filterable>
              <el-option v-for="(item, key) in $TIME_ZONE" :value="key" :key="key" :label="item"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-form-item label="Education Background" prop="education_history">
          <el-col :span="8">
            <el-button @click="editEducation()">+ Add Education Background</el-button>
            <el-input class="hidden-input" :value="form.education_history"></el-input>
          </el-col>
          <el-col :span="16">
            <p class="education-background tips">Please Start With your highest academic degree obtained</p>
          </el-col>
        </el-form-item>
      </el-row>
      <table class="education-table">
        <tbody>
          <tr v-for="(item, index) in educationLs" :key="index">
            <td width="90px"><span>{{item.school}}</span></td>
            <td width="190px">
              <span>{{item.start | monthFmt}}-{{item.end | monthFmt}}</span>
            </td>
            <td width="130px">
              <span>{{item.major}}</span>
            </td>
            <td width="130px">
              <span>{{item.degree}}</span>
            </td>
            <td width="130px">
              <span class="link-span" v-if="item.certificate[0]" @click="openLink(item.certificate[0].url)">{{item.certificate[0].name}}</span>
            </td>
            <td width="90px">
              <div class="education-oprate">
                <i class="el-icon-edit-outline" @click="editEducation(index)"></i>
                <i class="el-icon-delete" @click="deleteEducation(index)"></i>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </el-form>
  </div>
	<div class="next-btn">
    <el-button type="primary" @click="continues">Next</el-button>
	</div>
  <educations :visible.sync="educationsShow" @on-sure="getEducation" @on-close="cleanCur" :cur-row="curEducation"></educations>
</div>
</template>

<script>
import { userinfo,auth } from '@/mixins';
import {
  regionBareGet,
  getCountry
} from '@/api/region'
import {
  teacherGetByTeacherid
} from '@/api/teacher'
import avatarUpload from '@/components/upload/avatar'
import educations from '@/components/dialog/educations'

export default {
  name: 'basicInformation',
  data() {
    const nationRequire = (rule, value, cb) => {
      if(!this.form.nation) {
        cb(new Error('the nation code is required'))
      }
      cb()
    }
    const emptyJSONStr = (rule, value, cb) => {
      if(this.form.education_history === '[]') {
        cb(new Error('The Education Background is required'))
      }
      cb()
    }
    return {
      educationsShow: false,
      steps: ['Basic Info', 'Demo Lesson', 'Contract Info'],
      form: {
        avatar: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        gender: '',
        email: '',
        nation: '',
        mobile: '',
        country: '',
        province: '',
        city: '',
        street: '',
        timezone: '',
        education_history: ''
      },
      rules: {
        avatar: [
          {required: true, trigger: 'change'}
        ],
        first_name: [
          {required: true, trigger: 'blur'}
        ],
        last_name: [
          {required: true, trigger: 'blur'}
        ],
        gender: [
          {required: true, trigger: 'blur'}
        ],
        email: [
          {required: true, trigger: 'blur'}
        ],
        mobile: [
          {required: true, trigger: 'blur'},
          {validator: nationRequire, trigger: 'blur' }
        ],
        country: [
          {required: true, trigger: 'change'}
        ],
        province: [
          {required: true, trigger: 'change'}
        ],
        city: [
          {required: true, trigger: 'change'}
        ],
        street: [
          {required: true, trigger: 'blur'}
        ],
        timezone: [
          {required: true, trigger: 'change'}
        ],
        education_history: [
          {required: true, message: 'The Education Background is required', trigger: 'change'},
          {validator: emptyJSONStr, trigger: 'change'}
        ]
      },
      countryLs: [],
      stateLs: [],
      cityLs: [],
      curEducation: {},
      curIndex: -1,
      streetLs: []
    };
  },
  computed: {
    educationLs() {
      return JSON.parse(this.form.education_history || '[]');
    }
  },
  mixins: [userinfo, auth],
  created() {
    const editForm = this.$getSession('basicInfoEdit')
    if(editForm) {
      this.form = JSON.parse(editForm);
        this.getCountry();
    } else {
      this.getTeacherInfo().then(resp => {
        this.getCountry()
      }) 
    }
  },
  watch: {
    form: {
      handler(v) {
        this.$setSession('basicInfoEdit', JSON.stringify(v))
      },
      deep: true
    }
  },
  methods: {
    getTeacherInfo() {
      return teacherGetByTeacherid(this.userId).then(resp => {
        let {
          avatar,
          first_name,
          middle_name,
          last_name,
          gender,
          email,
          nation,
          mobile,
          country,
          province,
          city,
          street,
          timezone,
          education_history
        } = resp.data;
        this.form = {
          avatar,
          first_name,
          middle_name,
          last_name,
          gender: +gender,
          email,
          nation,
          mobile,
          country,
          province,
          city,
          street,
          timezone,
          education_history
        }
        return this.form
      });
    },
    cleanCur() {
      this.curIndex = -1;
      this.curEducation = {};
    },
    openLink(url) {
      window.open(this.$baseApiUrl + url)
    },
    editEducation(index = -1) {
      this.curIndex = index;
      if(index !== -1) {
        const educations = [...this.educationLs];
        this.curEducation = educations[index];
      }
      this.educationsShow = true
    },
    deleteEducation(index) {
      const education_history_str = this.form.education_history || '[]'
      const education_history = JSON.parse(education_history_str);
      education_history.splice(index, 1);
      this.form.education_history = JSON.stringify(education_history);
    },
    getEducation(education) {
      const education_history_str = this.form.education_history || '[]'
      const education_history = JSON.parse(education_history_str);
      if(this.curIndex !== -1) {
        education_history[this.curIndex] = education;
      } else {
        education_history.push(education);
      }
      this.form.education_history = JSON.stringify(education_history);
    },
    async continues() {
      await this.$refs.basicForm.validate()
      this.$router.push('/experienceEdit')
    },
    getCountry() {
      return getCountry().then(data => {
        this.countryLs = data;
        if(this.form.country) {
          this.form.country = +this.form.country;
          this.getAreaByPid(this.form.country).then(stateLs => {
            this.stateLs = stateLs
            if(this.form.province) {
              this.form.province = +this.form.province;
              this.getAreaByPid(this.form.province).then(cityLs => {
                this.cityLs = cityLs;
                this.form.city = +this.form.city;
              })
            }
          })
        }
      })
    },
    getAreaByPid(pid) {
      const filter = this.$json2filter({
        pid: [pid]
      })
      return regionBareGet(filter).then(resp => {
        return resp.data.objects;
      })
    },
    async handlerCountryChange(countryId) {
      this.stateLs = await this.getAreaByPid(countryId);
      this.cityLs = [];
      this.streetLs = [];
      this.form.province = '';
      this.form.city = '';
      this.form.street = '';
      return;
    },
    async handlerStateChange(stateId) {
      this.cityLs = await this.getAreaByPid(stateId);
      this.streetLs = [];
      this.form.city = '';
      this.form.street = '';
      return;
    },
    addAvatar() {
      const input = document.createElement('input');
      input.type = 'file';
      input.name = 'file';
      input.onchange = (e) => {
        const file = e.target.files[0]
        this.upload(file)
      }
      input.click()
    },
    upload(file) {
      const formData = new FormData();
      formData.append('file', file);
      this.$axios.post(this.$baseApiUrl + '/upload', formData).then(resp => {
        this.form.avatar = resp.data[0].download_file;
      });
    }
  },
  components: {
    avatarUpload,
    educations
  }
};
</script>

<style scoped>
.basic-avatar {
  margin-top: 20px;
}
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
  margin: 30px 70px;
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

.basic-main h3 {
  font-size: 18px;
  font-weight: normal;
}

.full-name {
  font-size: 14px;
  overflow: hidden;
  margin: 25px 0;
}

.name {
  display: inline-block;
  margin-right: 40px;
}

.name label {
  font-size: 14px;
  color: #151515;
  line-height: 16px;
}

.name input {
  width: 188px;
  height: 40px;
  border: 1px solid #d8d8d8;
  border-radius: 3px;
  outline: none;
  margin-top: 10px;
  padding-left: 10px;
}

.next-btn {
  text-align: center;
  padding-bottom: 30px;
}

.full-name h4 {
  margin-bottom: 10px;
  font-weight: normal;
}
.male span * {
  margin: 0 5px;
}
.email input {
  width: 418px;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  border-radius: 3px;
  border: 1px solid #d8d8d8;
  outline: none;
}
.phone {
  position: relative;
}
.phone select {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  width: 150px;
  height: 40px;
  background: #f3f3f3;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  border: 1px solid #d8d8d8;
  text-align: center;
  padding: 0 7%;
}
.phone::after {
  content: "";
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 10px solid #999999;
  width: 0;
  height: 0;
  position: absolute;
  left: 125px;
  top: 45px;
  pointer-events: none;
}
.phone select::-ms-expand {
  display: none;
}
.phone input {
  display: inline-block;
  margin-left: -5px;
  width: 277px;
  height: 36px;
  outline: none;
}
.street {
  width: 210px;
  margin-bottom: 30px;
  float: left;
}
.street span {
  display: block;
}
.street span select {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  width: 198px;
  height: 40px;
  border: 1px solid #d8d8d8;
  text-align: center;
  padding: 0 2%;
  background-color: #ffffff;
}
.street-name {
  margin-bottom: 12px;
}
.street-input {
  position: relative;
}
.street-input::after {
  position: absolute;
  content: "";
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 10px solid #999999;
  width: 0;
  height: 0;
  left: 175px;
  top: 16px;
  pointer-events: none;
}
.street.name {
  margin-right: 0;
}
.street.name input {
  margin-top: 0;
}
.portraits-img {
  width: 108px;
  height: 108px;
  border: 5px solid #FFDF77;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
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
.education-background.tips {
  line-height: 40px;
  margin-top: 0;
  margin-left: 12px;
}
.education-oprate i {
  margin-right: 20px;
  cursor: pointer;
}
.education-oprate i:last-of-type {
  margin-right: 0;
}
.education-table {
  margin-bottom: 40px;
}
.education-table td span {
  padding: 5px;
  line-height: 20px;
  font-size: 14px;
  color: #666666;
}
.education-table td span.link-span {
  color: #66b1ff;
  cursor: pointer;
}
.education-table td span.link-span:hover,.link-span:focus {
  color: #409EFF;
}
</style>