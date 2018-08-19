<template>
    <div class="finish-course">
        <div class="top-title">
            <div class="first-line">
                <div class="left">
                    {{course.course_name}}
                </div>
                <div class="right">
                    <span class="study-time">上课时间：{{course.course_times}}</span>
                    <span>进度：{{course.course_progress}}</span>
                </div>
            </div>
            <div class="bottom-line">
                {{course.student_name}}
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
            <div class="table-tit">
                <div class="course-name">课程名称</div>
                <div class="state">状态</div>
                <div class="oparet">操作</div>
            </div>
            <div class="table-list" v-for="item in tableData" :key="item.id"> 
                <div class="list-tit">
                    <span>上课时间(当前时区：Hawaii)：{{item.start}} — {{item.end}}</span>
                </div>
                <div class="list-detail">
                    <div class="lesson-name">
                        {{item.name || '未命名'}}
                    </div>
                    <template v-if="item.class_type == 3">
                        <div class="lesson-state">
                            异常课（系统原因）
                        </div>
                        <div class="oprate-lesson">
                            原因：XXXXXXXXXXXXXXXXXXXX
                        </div>
                    </template>
                    <template v-if="item.class_type == 2">
                        <div class="lesson-state">
                            取消课
                        </div>
                        <div class="oprate-lesson"></div>
                    </template>
                    <template v-else>
                        <div class="lesson-state" v-if="item.class_type == 4">
                            补偿课<img src="../../assets/shuoming.png" alt="">
                        </div>
                        <div class="lesson-state" v-if="item.class_type == 1">
                            正常课
                        </div>
                        <div class="oprate-lesson">
                            <span class="colo">回放 </span>
                            <span class="colo" @click="goHomework(item.id)">作业</span>
                            <span class="colo" @click="goEval(item.id)">课后小结</span>
                        </div>
                    </template>
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
    import { mapState } from 'vuex';
    import { teacherMyCourseOn } from  '@/api/teacher';
    import homework from './homework'
    export default {
        data() {
            return {
                form : {
                    course_id: this.$route.query.id.toString(),
                    page_limit: 10,
                    page_no: 1
                },
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
            const course_id = this.$route.query.id;
            this.$store.dispatch('COURSE_GET_BY_ID', course_id);
            this.query();
        },
        methods: {
            handleCurrentChange(page) {
                this.page_no = page;
                this.query();
            },
            query() {
                return teacherMyCourseOn(this.$deleteEmptyProps(this.form)).then(resp => {
                    this.tableData = resp.data.objects;
                    this.total = resp.data.num_results;
                })
            },
            goHomework(id) {
                this.$router.push({path: '/homework', query: {'course_id': this.$route.query.id, 'id': id}});
            },
            goEval(id) {
                this.$router.push({path: '/evaluate', query: {'course_id': this.$route.query.id, 'id': id}});
            }
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
    .course-name{
        width: 337px;
    }
    .state{
        width: 144px;
    }
    .oparet{
        width: 205px;
    }
    .table-list{
        width: 740px;
        background: #FFFFFF;
        border: 1px solid #BFBFBF;
        height: 100px;
        margin-top: 11px;
    }
    .list-tit{
        height: 46px;
        width: 739px;
        background: #F5F5F5;
        font-size: 12px;
        color: #333333;
        line-height: 46px;
    }
    .list-tit span{
        float: right;
        margin-right: 20px;
    }
    .list-detail{
        overflow: hidden;
        width: 738px;
        height: 53px;
    }
    .lesson-name{
        float: left;
        text-indent: 20px;
        font-size: 12px;
        color: #333333;
        line-height: 53px;
        border-right: 1px solid #F5F5F5;
        width: 336px;
        height: 53px;
        overflow: hidden;
    }
    .lesson-state{
        width: 193px;
        height: 53px;
        overflow: hidden;
        text-align: center;
        line-height: 53px;
        float: left;
        border-right: 1px solid #F5F5F5;
        font-size: 12px;
        color: #333333;
    }
    .oprate-lesson{
        float: left;
        width: 205px;
        height: 53px;
        overflow: hidden;
        line-height: 53px;
        font-size: 12px;
        text-align: center;
    }
    .colo{
        font-size: 12px;
        color: #FF8244;
        
        margin-right: 12px;
        cursor: pointer;
    }
</style>