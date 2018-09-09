<template>
	<!-- 教师详情 -->
	<div class="teacher-detail">
		<el-table
		:data="tableData"
		border
		style="width: 900px">
		<el-table-column
			width="100px"
			label="周">
			<template slot-scope="scope">   
				{{$TEACHER_WEEK_ENUM[scope.row.week]}}
			</template>
		</el-table-column>
		<el-table-column
			label="时间段">
			<template slot-scope="scope">    
				<div class="time-range-contain" v-for="(item, index) in scope.row.timeRanges" :key="index">
					<el-time-picker
						is-range
						format="HH:mm"
						size="mini"
						v-model="item.timeRange"
						placeholder="选择时间范围">
					</el-time-picker>
					<el-button size="mini" v-if="index === scope.row.timeRanges.length-1" @click="handlerAdd(scope.row.timeRanges)">+</el-button>
					<el-button size="mini" @click="handlerRemove(scope.row.timeRanges, index)">-</el-button>
				</div>
				<el-button size="mini" v-if="!scope.row.timeRanges.length" @click="handlerAdd(scope.row.timeRanges)">+</el-button>
			</template>
		</el-table-column>
	</el-table>
	</div>
</template>
<script>
import TeacherTime from '@/model/TeacherTime'

export default {
	data() {
		return {
      tableData: [
				new TeacherTime({week:1}),
				new TeacherTime({week:2}),
				new TeacherTime({week:3}),
				new TeacherTime({week:4}),
				new TeacherTime({week:5}),
				new TeacherTime({week:6}),
				new TeacherTime({week:7})
			]
		}
	},
	methods: {
		handlerAdd(timeRanges) {
			timeRanges.push({
				timeRange: [new Date(2018,1,1,0,0),new Date(2018,1,1,23,59,59)]
			})
		},
		handlerRemove(timeRanges, index) {
			timeRanges.splice(index, 1)
		},
		dateInit(dataStr) {
			return dataStr?new Date(dataStr) : new Date();
		},
		valid() {
			let valid = false;
			for(let item of this.tableData) {
				if(item.timeRanges.length) {
					valid = true;
					break;
				}
			}
			return valid;
		},
		getForm() {
			const addLs = [];
			this.tableData.forEach(week=>{
				week.timeRanges.forEach(item => {
					addLs.push({
						week: week.week,
						start: item.timeRange[0],
						end: item.timeRange[1]
					})
				})
			})
			return addLs
		}
	}
};
</script>
<style>
.detail-container {
	border: 1px #e3e3e3 solid;
	border-radius: 3px;
}
.detail-item {
	border-bottom: 1px #e3e3e3 solid
}
.detail-item:last-of-type {
	border-bottom: none
}
.detail-item-aside {
	background-color: #eee;    
	align-items: center;
	justify-content: center;
	display: flex;
}
.detail-item-width1 {
	width: 100px;
}
.detail-item-width2 {
	width: 205px;
}
.detail-item-width3 {
	width: 310px;
}
.time-range-contain {
	margin-bottom: 5px;
}
</style>