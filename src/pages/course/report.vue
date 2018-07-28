<template>
    <div class="finish-course">
        <div class="top-title">
            <div class="first-line">
                <div class="left">
                    ESL英语综合提升中级
                </div>
                <div class="right">
                    <span class="study-time">上课时间：2018.05.25-08.31</span>
                    <span>进度：01/10</span>
                </div>
            </div>
            <div class="bottom-line">
学生：Kira Yuan、Kira Yuan 、Kira Yuan 、Kira Yuan…   
            </div>
        </div>
        <div class="table">
            <div class="tab-bars">
                <ul>
                    <li>
                        <router-link :to="{path: '/finish-course', query: {'id': this.$route.query.id}}">已上课程</router-link>
                    </li>
                    <li>
                        <router-link :to="{path: '/dated-course', query: {'id': this.$route.query.id}}">已约课程</router-link>
                    </li>
                    <li>
                        <router-link :to="{path: '/summary', query: {'id': this.$route.query.id}}">课程总结</router-link>
                    </li>
                    <li>
                        <router-link :to="{path: '/report', query: {'id': this.$route.query.id}}">成绩单</router-link>
                    </li>
                </ul>
            </div>
            <div class="add-report">
                <img src="@/assets/shangchuan.png" alt="">
                添加成绩单
            </div>
            <div class="table-tit">
                <div class="course-name">学生</div>
                <div class="state">成绩单名称</div>
                <div class="timer">时间</div>
                <div class="oparet">操作</div>
            </div>
            <div class="list" v-for="(item, index) in tableData" :key="item.id">
                <div class="course-name">{{item.student_name}}</div>
                <div class="state">{{item.report_card_name}}</div>
                <div class="timer">{{item.start}}-{{item.end}}</div>
                <div class="oparet">
                    <span>查看</span>
                    <span>删除</span>
                </div>
            </div>
            <el-row>
				<el-pagination
					@current-change="handleCurrentChange"
					:current-page.sync="form.page_no"
					:page-size="form.page_limit"
					layout="prev, pager, next, jumper"
					:total="total">
				</el-pagination>
			</el-row>
        </div>
    </div>
</template>
<script>
    import { teacherMyCourseResult } from  '@/api/teacher'
    export default {
        data() {
            return {
                form : {
                    course_id: this.$route.query.id,
                    page_limit: 10,
                    page_no: 1
                },
                total: 0,
                tableData: []
            }
        },
        created() {
            this.query();
        },
        methods: {
            handleCurrentChange(page) {
                this.page_no = page;
                this.query();
            },
            query() {
                return teacherMyCourseResult(this.$deleteEmptyProps(this.form)).then(resp => {
                    this.tableData = resp.data.objects;
                    this.total = resp.data.num_results;
                })
            },
        }
    }
</script>

<style scoped>
ul,li{
    list-style: none;
}
    .finish-course{
        width: 800px;
        min-height: 818px;
        background-color: #fff;
        float: right;
    }
    .top-title{
        width: 740px;
        margin: 30px 30px 25px;
    }
    .first-line{
        overflow: hidden;
    }
    .left{
        font-size: 18px;
        color: #333333;
        float: left;
    }
    .right{
        float: right;
        font-size: 14px;
        color: #333333;
    }
    .study-time{
        margin-right: 80px;
    }
    .bottom-line{
        margin-top: 11px;
        font-size: 14px;
        color: #333333;
    }
    .table{
        width: 740px;
        margin: 0 auto;
    }
    .tab-bars ul{
        overflow: hidden;
    }
    .tab-bars{
        width: 740px;
        height: 50px;
        background: #FAFAFA;
        border: 1px solid #DCDCDC;
    }
    .tab-bars ul li a{
        float: left;
        width: 150px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 16px;
        color: #666666;
        cursor: pointer;
        text-decoration: none;
    }
    .tab-bars ul li a.router-link-active{
        background: #FFFFFF;
        border-top: 2px solid #FF8200;
    }
    .table-tit{
        width: 740px;
        height: 38px;
        background: #F5F5F5;
        border: 1px solid #E8E8E8;
        margin-top: 17px;
        overflow: hidden;
    }
    .table-tit div{
        float: left;
        line-height: 38px;
        height: 38px;
        font-size: 12px;
        color: #333333;
        text-align: center;
    }
    .list{
        width: 740px;
        overflow: hidden;
        background: #FFFFFF;
        border: 1px solid #E8E8E8;
        border-top: none;
    }
    .list div{
        float: left;
        line-height: 38px;
        height: 38px;
        font-size: 12px;
        color: #333333;
        text-align: center;
        border-right: 1px solid #E8E8E8;
    }
    .list div:last-child{
        border: none;
    }
    .course-name{
        width: 178px;
    }
    .state{
        width: 249px;
    }
    .timer{
        width: 161px;
    }
    .oparet{
        width: 143px;
    }
    .add-report{
        background: #FF8200;
        border-radius: 5px;
        width: 140px;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        color: #FFFFFF;
        cursor: pointer;
        margin-top: 19px;
    }
    .add-report img{
        float: left;
        margin: 10px 15px;
    }
    .oparet span{
        font-size: 12px;
        color: #FF8244;
        cursor: pointer;
    }
</style>