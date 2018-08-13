<template>
	<div class="soon">
		<div class="appoint-class">
			<p class="title">试听课邀请</p>
			<p class="content">
				您有<span class="class-num">3</span>节试听课上课邀请
				<el-button type="text">查看详情</el-button>
			</p>
		</div>
		<div class="soon-come">
			<div class="title">
				<span>即将开课</span>
				<span>更多 >></span>
			</div>
			<div class="soon-stage">
				<div class="stage-head">
					<span>ESL英语综合提升中级</span>
					<span>2018-06-08 13：00-13：50</span>
				</div>
				<div class="stage-line stage-color">
					<span>Lesson 1 Exploring Space and Astronomy</span>
					<span>Kira Yuan</span>
				</div>
				<div class="stage-line stage-color">
					<span>Exploring Space and Astronomy</span>
					<span>预览课件</span>
				</div>
			</div>
		</div>
		<div class="soon-stage soon-come">
			<div class="title">
				<span>待审批的作业</span>
				<span>更多 >></span>
			</div>
			<div class="soon-stage">
				<div class="soon-approval">
					<span>Lesson 1 Exploring Space and Astronomy</span>
					<span>2018-06-08 13：00-13：50</span>
				</div>
				<div class="soon-approval-btn stage-color">
					<span>查看作业</span>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.soon {
  width: 800px;
  min-height: 800px;
  margin-left: 20px;
  float: left;
}
.appoint-class {
	background: #FFFBED;
	padding: 18px 30px;
	margin-bottom: 22px;
}
.appoint-class>p.title {
	font-family: PingFangSC-Medium;
	font-size: 18px;
	color: #333333;
	line-height: 34px;
	font-weight: bolder;
	margin-bottom: 0;
}
.appoint-class>p.content {
	font-family: PingFangSC-Regular;
	font-size: 14px;
	color: #2A2A2A;
	line-height: 34px;
}
.appoint-class>p.content>span.class-num {
	font-family: PingFangSC-Regular;
	font-size: 14px;
	color: #FF8200;
	line-height: 34px;
	margin: 0 5px;
}
.appoint-class>p.content>.el-button {
	margin-left: 20px;
}
.soon-come {
  background-color: #ffffff;
  margin-bottom: 25px;
  padding: 30px;
}
.title {
  margin-bottom: 25px;
}

.stage-head,
.soon-approval {
  height: 60px;
  line-height: 60px;
  background: #ffeca7;
}
.stage-head span,
.soon-approval span {
  display: inline-block;
}
.stage-head span:first-child {
  background: #ffffff;
  border-radius: 5px;
  width: 170px;
  height: 40px;
  margin: 10px 20px;
  line-height: 40px;
  float: left;
  text-align: center;
}
.stage-head span:last-child {
  margin-right: 20px;
  font-size: 14px;
  color: #666666;
  float: right;
}
.stage-color {
  background: #fffbed;
}
.stage-line {
  padding: 0 30px;
  height: 60px;
  line-height: 60px;
}
.stage-line span {
  display: inline-block;
}
.stage-line span:first-child,
.soon-approval span:first-child {
  float: left;
}
.stage-line span:last-child,
.soon-approval span:last-child,
.title span:last-child {
  float: right;
}
.soon-approval {
  padding: 0 20px;
}
.soon-approval-btn {
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 25px auto;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
}
</style>