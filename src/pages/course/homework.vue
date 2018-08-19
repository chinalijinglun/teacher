<template>
	<div class="homework">
		<div class="main-body">
			<div class="describe">
				<div class="top">
					<span class="left">{{course.course_name}}</span>
					<span class="right" @click="goBack"><img src="../../assets/fanhui.png" alt=""> 返回</span>
				</div>
				<div class="mid">
					{{course.course_times}}
				</div>
			</div>
			<div class="add-homework" @click="addWork">
				<img src="../../assets/shangchuan.png" alt="">添加作业
			</div>
			<div class="table">
				<div class="tab-tit">
					<ul>
						<li class="homework-name">作业名称</li>
						<li class="time">时间</li>
						<li class="oprate">操作</li>
					</ul>
				</div>
				<div class="line" v-for="item in tableData" :key="item.id">
					<div class="homework-name">
						{{item.question_name}}
					</div>
					<div class="time">
						{{item.created_at | noTime}}
					</div>
					<div class="oprate">
						<span @click="goDetail(item.id)">查看</span>
						<span @click="toDelete(item.id)">删除</span>
					</div>
				</div>
			</div>
			<el-row>
				<el-pagination @current-change="handleCurrentChange" :current-page.sync="form.page_no" :page-size="form.page_limit" layout="prev, pager, next, jumper" :total="total">
				</el-pagination>
			</el-row>
		</div>
		<edit :show="showEdit" :course-schedule-id="form.course_schedule_id"></edit>
	</div>
</template>

<script>
import { mapState } from "vuex";
import edit from "@/components/editor";
import { teacherViewHomework } from "@/api/teacher";
import {
  homeworkDeleteByhomeworkid
} from '@/api/homework'
export default {
  data() {
    return {
      form: {
        course_schedule_id: this.$route.query.id.toString(),
        page_limit: 10,
        page_no: 1
      },
      total: 0,
      tableData: [],
      showEdit: false
    };
  },
  computed: {
    ...mapState({
      course: state => state.course.course
    })
  },
  created() {
    const course_id = this.$route.query.course_id;
    this.$store.dispatch("COURSE_GET_BY_ID", course_id);
    this.query();
  },
  methods: {
    toDelete(id) {
      this.$confirm('确认删除？').then(_=>{
        homeworkDeleteByhomeworkid(id).then(resp => this.query())
      })
    },
    handleCurrentChange(page) {
      this.page_no = page;
      this.query();
    },
    query() {
      return teacherViewHomework(this.$deleteEmptyProps(this.form)).then(
        resp => {
          this.tableData = resp.data.objects;
          this.total = resp.data.num_results;
        }
      );
    },
    addWork() {
      this.showEdit = !this.showEdit;
    },
    goDetail(id) {
      this.$router.push({
        path: "/check-homework",
        query: {
          course_id: this.$route.query.course_id,
          course_schedule_id: this.$route.query.id,
          id: id
        }
      });
    },
    goBack() {
      this.$router.push({
        path: "/finish-course",
        query: { id: this.$route.query.course_id }
      });
    }
  },
  components: {
    edit
  }
};
</script>

<style scoped>
ul,
li {
  list-style: none;
}
.homework {
  width: 800px;
  min-height: 818px;
  float: right;
  background-color: #fff;
}
.main-body {
  width: 740px;
  padding: 30px;
}
.top {
  overflow: hidden;
}
.left {
  float: left;
  font-size: 18px;
  color: #333333;
}
.right {
  float: right;
  font-size: 14px;
  color: #333333;
  overflow: hidden;
  cursor: pointer;
}
.right img {
  float: left;
  margin-right: 10px;
}
.mid {
  font-size: 14px;
  color: #999999;
  margin-top: 11px;
}
.add-homework {
  width: 140px;
  height: 40px;
  background: #ff8200;
  border-radius: 5px;
  font-size: 16px;
  color: #ffffff;
  line-height: 40px;
  overflow: hidden;
  cursor: pointer;
  margin-top: 23px;
}
.add-homework img {
  float: left;
  margin: 10px 17px;
}
.tab-tit {
  height: 38px;
  width: 740px;
  background: #f5f5f5;
  border: 1px solid #e8e8e8;
  margin-top: 20px;
}
.tab-tit ul {
  overflow: hidden;
}
.tab-tit ul li {
  text-align: center;
  line-height: 38px;
  font-size: 12px;
  color: #333333;
  float: left;
}
.homework-name {
  width: 282px;
}
.desc {
  width: 173px;
}
.time {
  width: 151px;
}
.oprate {
  width: 125px;
}
.line {
  width: 740px;
  height: 52px;
  overflow: hidden;
  border-left: 1px solid #e8e8e8;
  border-right: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
}
.line div {
  float: left;
  font-size: 12px;
  color: #333333;
  line-height: 52px;
  text-align: center;
  border-right: 1px solid #e8e8e8;
  height: 52px;
  overflow: hidden;
}
.line div.homework-name {
  text-indent: 15px;
}
.line div.oprate span {
  cursor: pointer;
  font-size: 12px;
  color: #ff8244;
}
.line div.oprate span:first-child {
  margin-right: 5px;
}
.line div:last-child {
  border: none;
}
</style>