<template>
    <div class="check-homework">
        <div class="main-body">
            <div class="title">{{course.course_name}}</div>
            <div class="time">{{course.course_times}}</div>
            <div class="home-work-name"><img src="../../assets/dian_01.png" alt="">  {{homeworkInfo.question_name || '作业名称'}}</div>
            <div class="desc">{{homeworkInfo.question_text}}</div>
            <div class="dowmload">
                <div class="left">
                    <img src="../../assets/fujian.png" alt="">
                    <div class="detail">
                        <div class="names">Alex and I practiced writing </div>
                        <div class="down-btn">下载附件</div>
                    </div>
                </div>
                <div class="left"> 
                    <img src="../../assets/fujian.png" alt="">
                    <div class="detail">
                        <div class="names">Alex and I practiced writing </div>
                        <div class="down-btn">下载附件</div>
                    </div>
                </div>
            </div>
            <div class="tables">
                <div class="tab-tit">学生完成的作业</div>
                <div class="table-tit">
                    <ul>
                        <li class="student">学生</li>
                        <li class="homework-name">作业名称</li>
                        <li class="describe">描述</li>
                        <li class="times">时间</li>
                        <li class="oprate">操作</li>
                    </ul>
                </div>
                <div class="list">
                    <ul v-for="(item, index) in tableData" :key="item.id">
                        <li class="student">{{item.student_name}}</li>
                        <li class="homework-name">{{item.question_name}}</li>
                        <li class="describe">{{item.question_text}}</li>
                        <li class="times">{{item.created_at}}</li>
                        <li class="oprate dianping">作业点评</li>
                    </ul>
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
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import { courseViewHomework, courseHomeworkTop } from '@/api/course';
    export default {
        data() {
            return {
                form: {
                    course_schedule_id: this.$route.query.course_schedule_id.toString(),
                    homework_id: this.$route.query.id.toString(), 
                    page_limit: 10,
                    page_no: 1
                },
                homeworkId: this.$route.query.id,
                homeworkInfo: {},
                total: 0,
                tableData: []
            }
        },
        computed: {
            ...mapState({
                course: state=>state.course.course
            })
        },
        created() {
            const course_id = this.$route.query.course_id;
            this.$store.dispatch('COURSE_GET_BY_ID', course_id);
            this.queryTop();
            this.query();
        },
        methods: {
            handleCurrentChange(page) {
                this.page_no = page;
                this.query();
            },
            query() {
                return courseViewHomework(this.$deleteEmptyProps(this.form)).then(resp => {
                    this.tableData = resp.data.objects;
                    this.total = resp.data.num_results;
                })
            },
            queryTop() {
                return courseHomeworkTop(this.homeworkId).then(resp => {
                    this.homeworkInfo = resp.data;
                })
            }
        }
    }
</script>

<style scoped>
ul,li{
    overflow: hidden;
}
    .check-homework{
        width: 800px;
        min-height: 818px;
        float: right;
        background-color: #fff;
    }
    .main-body{
        width: 740px;
        padding: 30px;
    }
    .title{
        font-size: 18px;
        color: #333333;
    }
    .time{
        font-size: 14px;
        color: #999999;
        margin-top: 10px;
    }
    .home-work-name{
        font-size: 14px;
        color: #151515;
        line-height: 20px;
        margin-top: 33px;
    }
    .desc{
        font-size: 14px;
        color: #666666;
        line-height: 27px;
        margin-top: 13px;
    }
    .left{
        float: left;
        width: 50%;
        overflow: hidden;
        margin-top: 34px;
    }
    .left img{
        float: left;
        margin-left: 37px;
    }
    .detail{
        float: left;
        margin-left: 13px;
    }
    .names{
        font-size: 14px;
        color: #666666;
    }
    .down-btn{
        font-size: 14px;
        color: #FF8200;
        margin-top: 6px;
    }
    .tab-tit{
        font-size: 18px;
        color: #333333;
    }
    .tables{
        margin-top: 79px;
    }
    .dowmload{
        overflow: hidden;
    }
    .table-tit{
        width: 738px;
        height: 38px;
        background: #F5F5F5;
        border: 1px solid #E8E8E8;
        border-bottom: none;
    }
    .table-tit ul{
        overflow: hidden;
    }
    .table-tit ul li{
        float: left;
        height: 38px;
        line-height: 38px;
        text-align: center;
        font-size: 12px;
        color: #333333;
    }
    .student{
        width: 116px;
    }
    .homework-name{
        width: 195px;
    }
    .describe{
        width: 143px;
    }
    .times{
        width: 167px;
    }
    .oprate{
        width: 107px;
    }
    .list ul{
        overflow: hidden;
        border: 1px solid #E8E8E8;
    }
    .list ul li{
        float: left;
        height: 38px;
        line-height: 38px;
        text-align: center;
        font-size: 12px;
        color: #333333;
        border-right: 1px solid #E8E8E8;
    }
    .list ul li:last-child{
        border: none
    }
    .list ul li.dianping{
        font-size: 12px;
        color: #FF8244;
        cursor: pointer;
    }
</style>