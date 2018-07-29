<template>
    <div class="homework">
        <div class="main-body">
            <div class="describe">
                <div class="top">
                    <span class="left">Lesson 1 Exploring Space and Astronomy</span>
                    <span class="right"><img src="../../assets/fanhui.png" alt=""> 返回</span>
                </div>
                <div class="mid">
                    2018.04.30 13:00 - 13:50
                </div>
            </div>
            <div class="add-homework">
                <img src="../../assets/shangchuan.png" alt="">添加作业
            </div>
            <div class="table">
                <div class="tab-tit">
                    <ul>
                        <li class="homework-name">作业名称</li>
                        <li class="desc">描述</li>
                        <li class="time">时间</li>
                        <li class="oprate">操作</li>
                    </ul>
                </div>
                <div class="line">
                    <div class="homework-name">
                        Lesson 3 Exploring Space and Astronomy
                    </div>
                    <div class="desc">
                        Homework
                    </div>
                    <div class="time">
                        2018.04.27  13:00
                    </div>
                    <div class="oprate">
                        <span>查看</span>
                        <span>删除</span>
                    </div>
                </div>
                <div class="line">
                    <div class="homework-name">
                        Lesson 3 Exploring Space and Astronomy
                    </div>
                    <div class="desc">
                        Homework
                    </div>
                    <div class="time">
                        2018.04.27  13:00
                    </div>
                    <div class="oprate">
                        <span>查看</span>
                        <span>删除</span>
                    </div>
                </div>
            </div>
        </div>
        <edit></edit>
    </div>
</template>

<script>
    import edit from '@/components/editor'
    export default {
        data(){
            return {
                
            }
        },
        components:{
            edit
        }   
    }
</script>

<style scoped>
ul,li{
    list-style: none;
}
    .homework{
        width: 800px;
        min-height: 818px;
        float: right;
        background-color: #fff;
    }
    .main-body{
        width: 740px;
        padding: 30px;
    }
    .top{
        overflow: hidden;
    }
    .left{
        float: left;
        font-size: 18px;
        color: #333333;
    }
    .right{
        float: right;
        font-size: 14px;
        color: #333333;
        overflow: hidden;
    }
    .right img{
        float: left;
        margin-right: 10px;
    }
    .mid{
        font-size: 14px;
        color: #999999;
        margin-top: 11px;
    }
    .add-homework{
        width: 140px;
        height: 40px;
        background: #FF8200;
        border-radius: 5px;
        font-size: 16px;
        color: #FFFFFF;
        line-height: 40px;
        overflow: hidden;
        cursor: pointer;
        margin-top: 23px;
    }
    .add-homework img{
        float: left;
        margin: 10px 17px;
    }
    .tab-tit{
        height: 38px;
        width: 740px;
        background: #F5F5F5;
        border: 1px solid #E8E8E8;
        margin-top: 20px;
    }
    .tab-tit ul{
        overflow: hidden;
    }
    .tab-tit ul li{
        text-align: center;
        line-height: 38px;;
        font-size: 12px;
        color: #333333;
        float: left;
    }
    .homework-name{
        width: 282px;
    }
    .desc{
        width: 173px;
    }
    .time{
        width: 151px;
    }
    .oprate{
        width: 125px;
    }
    .line{
        width: 740px;
        height: 52px;
        overflow: hidden;
        border-left: 1px solid #E8E8E8;
        border-right: 1px solid #E8E8E8; 
        border-bottom: 1px solid #E8E8E8; 
    }
    .line div{
        float: left;
        font-size: 12px;
        color: #333333;
        line-height: 52px;
        text-align: center;
        border-right: 1px solid #E8E8E8;
    }
    .line div.homework-name{
        text-indent: 15px;
    }
    .line div.oprate span{
        cursor: pointer;
        font-size: 12px;
        color: #FF8244;
    }
    .line div.oprate span:first-child{
        margin-right: 20px;
    }
    .line div:last-child{
        border: none;
    }
</style>