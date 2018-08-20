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
		<div class="basic-main reservation">
			<small>
				Dear Mr. / Ms, Mr. Jack Baron, our personnel director, has asked me to acknowledge your application for the post of accountant and to ask you to come to see him on Friday afternoon, 5th July, at half past two.
			</small>

			<table class="reservation-table">
				<thead>
					<tr>
						<th width="160">课节名称</th>
						<th width="220">面试时间</th>
						<th width="120">面试人</th>
						<th>
							操作
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>面试</td>
						<td>2017年12月38日下午</td>
						<td>Ann</td>
						<td class="reservation-operate">
							<span>进入教师</span>
							<span>上传课件</span>
							<span>查看课件</span>
							<span>回放</span>
						</td>
					</tr>
				</tbody>
			</table>

			<div class="reservation-success">
				<img src="" alt=""> 恭喜，你通过面试，稍后我们会发送合同。
			</div>
			<div class="reservation-fail">
				很遗憾，您没有通过面试，原因： </div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      data1: []
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
        .then(function(data) {});
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

.step2 {
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

.step2::after {
  background-color: #ff8200;
}

.step1::after,
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

.basic-header ul li:nth-child(2) {
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

.reservation small {
  line-height: 35px;
}
.reservation-table {
  width: 100%;
  border: 1px solid #d8d8d8;
}
.reservation-table thead {
  font-size: 12px;
  font-weight: normal;
  background-color: #f5f5f5;
}
.reservation-table thead tr {
  height: 45px;
  font-size: 14px;
}
.reservation-table tbody tr {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 12px;
}
.reservation-operate {
  color: #ff8200;
}
.reservation-operate span {
  margin: 0 15px;
}
.reservation-success {
  font-size: 18px;
  color: #ff4433;
}
.reservation-fail {
  font-size: 18px;
  color: #333333;
}
</style>