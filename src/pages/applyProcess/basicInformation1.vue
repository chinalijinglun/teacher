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
		<div class="basic-main basic2">
			<h3>教育背景 <small class="tishi"> Please Start With your highest academic degree obtained</small></h3>
			

			<div class="full-name basic1-degree">
				<h4><span class="tishi">*</span>Degree</h4>
				<el-radio-group v-model="form.degree">
					<el-radio :label="1">本科</el-radio>
					<el-radio :label="2">硕士</el-radio>
					<el-radio :label="3">博士</el-radio>
					<el-radio :label="4">博士后</el-radio>
				</el-radio-group>
			</div>
      <h3 class="xueli">学历 1</h3>
			<div class="full-name">
				<div class="street">
					<span class="street-name"><span class="tishi">*</span>Period</span>
					<span class="street-input">
						<select name="">
							<option value=""></option>
						</select>
					</span>
				</div>
				<div class="street">
					<span class="street-name none"><span class="tishi">*</span>Period</span>
					<span class="street-input">
						<select name="">
							<option value=""></option>
						</select>
					</span>
				</div>
			</div>
			<div class="full-name email">
				<h4>
					<span class="tishi">*</span>School 
				</h4>
				<input type="text" placeholder="please input">
			</div>
			<div class="full-name email">
				<h4>
					<span class="tishi">*</span>Major
				</h4>
				<input type="text" placeholder="please input">
			</div>
			<div class="full-name">
        <h4>
					<span class="tishi">*</span>Certificate
				</h4>
				<div class="full-name basic2-resume">
					<span>上传学历证明</span>
					<span>已上传\预览</span>
				</div>
			</div>
      <h3 class="xueli">学历 1</h3>
			<div class="full-name">
				<h4><span class="tishi">*</span>Period</h4>
				<div class="street">
					<span class="street-input">
						<select name="">
							<option value=""></option>
						</select>
					</span>
				</div>
				<div class="street">
					<span class="street-input">
						<select name="">
							<option value=""></option>
						</select>
					</span>
				</div>
			</div>
			<div class="full-name email">
				<h4>
					<span class="tishi">*</span>School 
				</h4>
				<input type="text" placeholder="please input">
			</div>
			<div class="full-name email">
				<h4>
					<span class="tishi">*</span>Major
				</h4>
				<input type="text" placeholder="please input">
			</div>
      <h4 class="h4">
        <span class="tishi">*</span>Certificate
      </h4>
			<div class="full-name basic2-resume">
				<span>上传学历证明</span>
				<span>已上传\预览</span>
			</div>
		</div>
		<div class="next-btn">
      <button class="adds">增加教育背景</button>
			<button>下一步</button>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        first_name: '',
        middle_name: '',
        last_name: '',
        degree: '',
        email: '',
        mobile: '',
        country: '',
        state: '',
        city: '',
        street: '',
        zipone: '',
        timezone: ''
      }
    };
  },
  created() {
    //            this.sendAjax();
  },
  methods: {
    sendAjax() {
      var _that = this;
      this.baseAxios
        .post("/auth/smsverify", {
          country_code: "86",
          mobile_no: "15510591359"
        })
        .then(function(data) {
          console.log(data);
        });
    }
  }
};
</script>

<style scoped>
.basicinfor {
  width: 1000px;
  min-height: 800px;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 20px;
  background: #ffffff;
}

.street .tishi{
  display: inline;
}
.tishi{
  margin: 0!important;
  font-size: 12px;
  color: #FF4433;
}
.none{
  visibility: hidden;
}
.xueli{
  font-size: 14px!important;
  color: #333333;
}
.h4{
  font-size: 14px;
  color: #151515;
  line-height: 16px;
  font-weight: normal;
}
.next-btn button.adds{
  font-size: 18px;
  color: #FF8200;
  background: #FFFFFF;
  border: 1px solid #FF8200;
  border-radius: 5px;
  margin-right: 40px;
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

.next-btn {
  text-align: center;
  margin: 60px 0;
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

.street {
  width: 210px;
  margin-bottom: 10px;
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

.email input {
  width: 418px;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  border-radius: 3px;
  border: 1px solid #d8d8d8;
  outline: none;
}

.basic2-input input {
  width: 188px;
  height: 38px;
  background: #ffffff;
  border: 1px solid #d8d8d8;
  border-radius: 3px;
  outline: none;
  padding-left: 10px;
}

.basic2-checkbox {
  width: 80%;
  overflow: hidden;
}

.basic2-checkbox span {
  display: inline-block;
  width: 200px;
  text-align: left;
}

.basic2-checkbox span input {
  margin-right: 7px;
}

.basic2-resume {
}

.basic2-resume span {
  display: inline-block;
  width: 198px;
  height: 38px;
  background: #f7f7f7;
  border: 1px solid #d8d8d8;
  border-radius: 3px;
  line-height: 38px;
  text-align: center;
}

.basic2-resume span:first-child {
  margin-right: 200px;
}

.basic1-degree span {
  margin-left: 1px;
  margin-right: 30px;
}

.basic1-degree span input {
  margin-right: 5px;
}
</style>