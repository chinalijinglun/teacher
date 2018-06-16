<template>
    <div class="aside">
        <div class="teacher-header">
            <div class="teacher-header-img"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529042088081&di=3b2dcc0ce07472e0065ce84835a24814&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D2408925581%2C6212506%26fm%3D214%26gp%3D0.jpg" alt=""></div>
            <div class="teacher-header-name">Alexander</div>
            <div class="teacher-header-btn">个人中心</div>
        </div>
        <div class="select-bar">
            <ul class="bars">
                <li class="active">
                    <img class="imgs" src="@/assets/kechengbiao_h.png" alt="">
                    <span>课程表</span>
                </li>
                <li class="active">
                    <img class="imgs" src="@/assets/kecheng_h.png" alt="">
                    <span>我的课程</span>
                </li>
                <li class="active">
                    <img class="imgs" src="@/assets/chengzhang_h.png" alt="">
                    <span>成长报告</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'asides'
    }
</script>

<style scoped>
    .aside{
        width: 180px;
        float: left;
    }
    .select-bar{
        background: #fff;
        border: 1px solid #DCDCDC;
        border-top: none;
    }
    .bars{
        padding-top: 10px;
    }
    .bars li{
        height: 60px;
        font-size: 16px;
        color: #333333;
        line-height: 60px;
        cursor: pointer;
    }
    .imgs{
        float: left;
        margin: 20px;
    }
    .teacher-header{
        height: 240px;
        background: #FFFDF3;
        border: 1px solid #DCDCDC;
    }
    .teacher-header-img{
        width: 96px;
        height: 96px;
        margin-top: 35px;
        padding: 0 42px;
    }
    .teacher-header-img img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .teacher-header-name{
        margin: 10px 0;
        font-size: 24px;
        color: #333333;
        font-weight: bold;
        text-align: center;
    }
    .teacher-header-btn{
        width: 127px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: #FF8200;
        border-radius: 3px;
        font-size: 14px;
        color: #FFFFFF;
        margin-left: 21px;
    }
</style>