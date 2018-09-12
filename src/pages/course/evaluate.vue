<template>
    <div class="evaluate">
        <div class="title">
            {{course.course_name}}
        </div>
        <div class="time">
            {{course.course_times}}
        </div>
        <div class="my-student">
            我的学生
        </div>
        <div class="table">
            <ul class="list-tit">
                <li class="student">学生</li>
                <li class="performance">Performance in class</li>
                <li class="list-time">时间</li>
                <li class="oprate">Operate</li>
            </ul>
            <div class="list">
                <ul v-for="(item, index) in tableData" :key="index">
                    <li class="student">{{item.student_name}}</li>
                    <li class="performance">{{item.overall || '等待点评'}}</li>
                    <li class="list-time">{{item.created_at || '——'}}</li>
                    <li class="oprate">
                        <span v-if="!item.overall" @click="dianPing(item.id)">点评</span>
                        <span v-else @click="$router.push(`/view-evaluate?id=${item.id}`)">查看</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import { courseSummary } from  '@/api/course'
    export default {
        data() {
            return {
                course_schedule_id: this.$route.query.id,
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
            this.query();
        },
        methods: {
            handleCurrentChange(page) {
                this.page_no = page;
                this.query();
            },
            query() {
                const filter = this.$json2filter({course_schedule_id:[this.course_schedule_id]})
                return courseSummary({
                    course_schedule_id: this.course_schedule_id,
                    page_limit: 1000,
                    page_no: 1
                }).then(resp => {
                    this.tableData = resp.data.objects.map(item => {
                        const summary = {
                            overall: '',
                            created_at: '--'
                        }
                        if(item.teacher_evaluation) {
                            const evaluationJson = JSON.parse(item.teacher_evaluation);
                            summary.created_at = evaluationJson.created_at;
                            summary.overall = evaluationJson.performace.overall;
                        }
                        return {
                            id: item.study_schedule_id,
                            student_name: item.student_name,
                            ...summary
                        }
                    });
                })
            },
            dianPing(id) {
                this.$router.push({path: '/add-evaluate', query: {'course_id':this.$route.query.course_id,id}});
            }
        }
    }
</script>

<style scoped>
    .evaluate{
        width: 740px;
        padding: 30px;
        background-color: #fff;
        float: right;
        min-height: 818px;
    }
    .title{
        font-size: 18px;
        color: #333333;
    }
    .time{
        font-size: 14px;
        color: #999999;
        margin-top: 11px;
    }
    .my-student{
        margin-top: 32px;
        font-size: 18px;
        color: #333333;
    }
    .table{
        margin-top: 15px;
    }
    .list-tit{
        background: #F5F5F5;
        border: 1px solid #E8E8E8;
        width: 738px;
        height: 38px;
    }
    ul,li{
        list-style: none;
    }
    .list-tit li{
        float: left;
        text-align: center;
        line-height: 38px;
        font-size: 12px;
        color: #333333;
        height: 38px;
        overflow: hidden;
    }
    .student{
        width: 168px;
    }
    .performance{
        width: 209px;
    }
    .list-time{
        width: 207px;
    }
    .oprate{
        width: 147px;
    }
    .list ul{
        height: 52px;
        line-height: 52px;
        background: #FFFFFF;
        border: 1px solid #E8E8E8;
        overflow: hidden;
        border-top: none;
    }
    .list ul li{
        float: left;
        text-align: center;
        line-height: 52px;
        font-size: 12px;
        color: #333333;
        border-right: 1px solid #E8E8E8;
        height: 52px;
        overflow: hidden;
    }
    .list ul li:last-child{
        border: none;
    }
    .list ul li span{
        color: #FF8200;
        cursor: pointer;
    }
</style>