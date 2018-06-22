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
                    <li class="click">已上课程</li>
                    <li>已约课程</li>
                    <li>课程总结</li>
                    <li>成绩单</li>
                </ul>
            </div>
            <div class="table-tit">
                <div class="course-name">课程名称</div>
                <div class="state">状态</div>
                <div class="oparet">操作</div>
            </div>
            <div class="table-list">
                <div class="list-tit">
                    <span>上课时间(当前时区：Hawaii)：2018.04.27  13:00 - 13:50</span>
                </div>
                <div class="list-detail">
                    <div class="lesson-name">
                        Lesson 3 Exploring Space and Astronomy
                    </div>
                    <div class="lesson-state">
                        补偿课 <img src="../../assets/shuoming.png" alt="">
                    </div>
                    <div class="oprate-lesson">
                        <span class="colo">回放 </span>
                        <span class="colo">作业</span>
                        <span class="colo">课后小结</span>
                    </div>
                </div>
            </div>
            <div class="table-list">
                <div class="list-tit">
                    <span>上课时间(当前时区：Hawaii)：2018.04.27  13:00 - 13:50</span>
                </div>
                <div class="list-detail">
                    <div class="lesson-name">
                        Lesson 3 Exploring Space and Astronomy
                    </div>
                    <div class="lesson-state">
                        异常课（系统原因）
                    </div>
                    <div class="oprate-lesson">
                        原因：XXXXXXXXXXXXXXXXXXXX
                    </div>
                </div>
            </div>
            <div class="table-list">
                <div class="list-tit">
                    <span>上课时间(当前时区：Hawaii)：2018.04.27  13:00 - 13:50</span>
                </div>
                <div class="list-detail">
                    <div class="lesson-name">
                        Lesson 3 Exploring Space and Astronomy
                    </div>
                    <div class="lesson-state">
                        正常课
                    </div>
                    <div class="oprate-lesson">
                        <span class="colo">回放 </span>
                        <span class="colo">作业</span>
                        <span class="colo">课后小结</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
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
    .tab-bars ul li{
        float: left;
        width: 150px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 16px;
        color: #666666;
        cursor: pointer;
    }
    .tab-bars ul li.click{
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
        width: 194px;
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
    }
    .lesson-state{
        width: 193px;
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