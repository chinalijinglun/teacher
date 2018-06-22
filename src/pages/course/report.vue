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
                    <li>已上课程</li>
                    <li>已约课程</li>
                    <li>课程总结</li>
                    <li class="click">成绩单</li>
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
            <div class="list">
                <div class="course-name">Jesse Chen</div>
                <div class="state">名称1</div>
                <div class="timer">2018.5.1-2018.6.1</div>
                <div class="oparet">
                    <span>查看</span>
                    <span>删除</span>
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
        color: #FF8200 
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