<template>
    <div class="evaluate">
        <div class="title">
            Lesson 1 Exploring Space and Astronomy
        </div>
        <div class="time">
            2018.04.30 13:00 - 13:50
        </div>
        <div class="my-student">
我的学生
        </div>
        <div class="table">
            <ul class="list-tit">
                <li class="student">学生</li>
                <li class="performance">Performance in class</li>
                <li class="list-time">时间</li>
                <li class="oprate">操作</li>
            </ul>
            <div class="list">
                <ul>
                    <li class="student">ALEX ren</li>
                    <li class="performance">等待点评</li>
                    <li class="list-time">——</li>
                    <li class="oprate">点评</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
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
    }
    .list ul li:last-child{
        border: none;
    }
</style>