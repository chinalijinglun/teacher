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
		<h3>基本信息</h3>
		<div class="full-name">
			<div class="name">
				<label for="">*First Name</label><br/>
				<input type="text" v-model="form.first_name">
			</div>
			<div class="name">
				<label for="">Middle Name</label><br/>
				<input type="text" v-model="form.middle_name">
			</div>
			<div class="name">
				<label for="">Last Name</label><br/>
				<input type="text" v-model="form.last_name">
			</div>
		</div>
		<div class="full-name male">
			<h4>*Gender</h4>  
      <el-radio-group v-model="form.gender">
        <el-radio :label="1">Female</el-radio>
        <el-radio :label="2">Male</el-radio>
        <el-radio :label="3">Prefer not to disclose</el-radio>
      </el-radio-group>
		</div>
		<div class="full-name email">
			<h4>*Contact Email</h4>
			<input v-model="form.email">
		</div>
		<div class="full-name phone">
			<h4>*Contact Phone Number</h4>
			<select>
        <option v-for="(item, key) in $MOBILE_PRE" :value="key" :key="key">{{item}}</option>
			</select>
			<input v-model="form.mobile">
		</div>
		<div class="full-name">
			<div class="street">
				<span class="street-name">*Country</span>
				<span class="street-input">
					<select v-model="form.country" @change="handlerCountryChange">
						<option v-for="(item, index) in countryLs" :value="item.id" :key="index">{{item.name}}</option>
					</select>
				</span>
			</div>
			<div class="street">
				<span class="street-name">*State</span>
				<span class="street-input">
					<select v-model="form.state" @change="handlerStateChange">
						<option v-for="(item, index) in stateLs" :value="item.id" :key="index">{{item.name}}</option>
					</select>
				</span>
			</div>
			<div class="street">
				<span class="street-name">*City</span>
				<span class="street-input">
					<select v-model="form.city">
						<option v-for="(item, index) in cityLs" :value="item.id" :key="index">{{item.name}}</option>
					</select>
				</span>
			</div>
			<div class="street name">
				<span class="street-name">*Street</span>
				<input type="text" v-model="form.street">
			</div>
			<div class="street">
				<span class="street-name">*Time Zone</span>
				<span class="street-input">
					<select name="" v-model="form.timezone">
						<option v-for="(item, key) in $TIME_ZONE" :value="key" :key="key">{{item}}</option>
					</select>
				</span>
			</div>
			<div class="street name">
				<span class="street-name">*Zip Code</span>
				<input type="text" v-model="form.zipone">
			</div>
		</div>
	</div>
	<div class="next-btn">
		<button @click="$router.push('/basic1')">下一步</button>
	</div>
</div>
</template>

<script>
import { userinfo,auth,basicCache } from '@/mixins';
import {
  regionBareGet
} from '@/api/region'

export default {
  name: 'basicInformation',
  data() {
    return {
      form: {
        first_name: '',
        middle_name: '',
        last_name: '',
        gender: '',
        email: '',
        mobile: '',
        country: '',
        state: '',
        city: '',
        street: '',
        zipone: '',
        timezone: ''
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
    async handlerCountryChange(e) {
      const countryId = e.target.value;
      this.stateLs = await this.getAreaByPid(countryId);
      this.cityLs = [];
      this.streetLs = [];
      this.form.state = '';
      this.form.city = '';
      this.form.street = '';
      return;
    },
    async handlerStateChange(e) {
      const countryId = e.target.value;
      this.cityLs = await this.getAreaByPid(countryId);
      this.streetLs = [];
      this.form.city = '';
      this.form.street = '';
      return;
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
</style>