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
								<el-option v-for="(item, key) in $MOBILE_PRE" :value="key" :key="key" :label="item"></el-option>
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
          <el-form-item label="State" prop="state">
            <el-select v-model="form.state" @change="handlerStateChange">
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
            <el-select v-model="form.timezone">
              <el-option v-for="(item, key) in $TIME_ZONE" :value="key" :key="key" :label="item"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
	<div class="next-btn">
		<button @click="continues">Continue</button>
	</div>
</div>
</template>

<script>
import { userinfo,auth,basicCache } from '@/mixins';
import {
  regionBareGet
} from '@/api/region'
import avatarUpload from '@/components/upload/avatar'

export default {
  name: 'basicInformation',
  data() {
    const nationRequire = (rule, value, cb) => {
      if(!this.form.nation) {
        cb(new Error('the nation code is required'))
      }
      cb()
    }
    return {
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
        state: '',
        city: '',
        street: '',
        zipone: '',
        timezone: ''
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
        state: [
          {required: true, trigger: 'change'}
        ],
        city: [
          {required: true, trigger: 'change'}
        ],
        street: [
          {required: true, trigger: 'blur'}
        ],
        timezone: [
          {required: true, trigger: 'blur'}
        ]
      },
      countryLs: [],
      stateLs: [],
      cityLs: [],
      streetLs: []
    };
  },
  mixins: [ userinfo, auth, basicCache ],
  created() {
    this.getCountry();
  },
  methods: {
    async continues() {
      await this.$refs.basicForm.validate()
      this.$router.push('/basic1')
    },
    getCountry() {
      const filter = this.$json2filter({
        id: this.$COUNTRY_IDS
      })
      return regionBareGet(filter).then(resp => {
        this.countryLs = resp.data.objects;
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
      this.form.state = '';
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
    avatarUpload
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
</style>