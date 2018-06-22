<template>
    <div class="check-homework">
        <div class="main-body">
            <div class="title">Lesson 1 Exploring Space and Astronomy</div>
            <div class="time">2018.04.30 13:00 - 13:50</div>
            <div class="home-work-name"><img src="../../assets/dian_01.png" alt="">  Exploring Space and Astronomy 作业名称</div>
            <div class="desc">Alex and I practiced writing a narrative story together. I wrote a sentence, and he followed by writing 
the next. I taught him that each sentence, no matter how crazy, needs to logically follow the sentence before. By the end of the story, he was doing that a lot better. Skills the student exhibited well: Good writing!</div>
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
                    <ul>
                        <li class="student">ALEX ren</li>
                        <li class="homework-name">EL D作业</li>
                        <li class="describe">Homework</li>
                        <li class="times">2018.04.27  13:00</li>
                        <li class="oprate dianping">作业点评</li>
                    </ul>
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