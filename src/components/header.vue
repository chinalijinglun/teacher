<template>
    <div class="headers">
        <div class="header-top">
            <div class="centers">
                <div class="left">
                    <span class="zh click">中文 </span> | 
                    <span class="en"> English</span>
                </div>
                <div class="right_01">
                    <img src="@/assets/dianhua_s.png" class="tel" alt="">
                    <span class="user">
                        <span>Hi，13520865271</span>    
                        <span>账户设置 </span> 
                        <span>|</span>  
                        <span> 退出</span>
                    </span>
                    <span class="mouseenter">
                        <span class="span">关注美师在线</span>
                        <img src="@/assets/erweima.png" alt="" class="erweima">
                    </span>
                </div>
            </div>
        </div>
        <div class="header-bottom">
            <img src="@/assets/logo1.png" alt="" class="logo">
            <ul class="nav">
                <li>
                    <p>School Staff</p>
                    <p>师资团队</p>
                </li>
                <li>
                    <p>Course System</p>
                    <p>课程体系</p>
                </li>
                <li>
                    <p>Service System</p>
                    <p>教学服务</p>
                </li>
                <li class="mouserover" v-on:mouseover="mouserover()" v-on:mouseout="mouseout()">
                    <p>Admissions</p>
                    <p>招生入学</p>
                </li>
                <li>
                    <p>About US</p>
                    <p>关于我们</p>
                </li>
            </ul>
            <div class="btn-box">
                <div class="login">
                    登录
                </div>
                <div class="regist">
                    注册
                </div>
            </div>
            <div class="tels" v-if="show">
                <img src="@/assets/dianhua_b.png" alt="" class="b_dianhua">
            </div>
        </div>
        <ul class="img-box" v-if="showAdmissions">
            <li>
                <img src="@/assets/zhaosheng01.png" alt="">
                <p>AP</p>
            </li>
            <li>
                <img src="@/assets/zhaosheng02.png" alt="">
                <p>提升GPA</p>
            </li>
            <li>
                <img src="@/assets/zhaosheng03.png" alt="">
                <p>衔接课程</p>
            </li>
            <li>
                <img src="@/assets/zhaosheng04.png" alt="">
                <p>中美学分双认证</p>
            </li>
        </ul>
    </div>
</template>
<script>
    // import $ from 'jquery'
    export default {
        name: 'headers',
        data(){
            return{
                show: false,
                showAdmissions: false
            }
            
        },
        methods:{
            mouserover(){
                this.showAdmissions =true;
            },
            mouseout(){
                this.showAdmissions = false;
            }
        }
    }
</script>

<style scoped>
    ul,li{
        list-style: none;
    }
    .headers{
        height: 140px;
        width: 100%;
        min-width: 1200px;
        border-bottom: 2px solid #FF8200;
        background: #ffffff;
        position: relative;
        z-index: 1;
    }
    .header-top{
        background: #F3F3F3;
        border-bottom: 1px solid #E3E3E3;
    }
    .centers{
        height: 33px;
        margin: 0 auto;
        width: 1400px;
        /* overflow: hidden; */
    }
    .left{
        font-size: 12px;
        color: #2A2A2A;
        line-height: 33px;
        cursor: pointer;
        float: left;
    }
    .left .click{
        color: #FF8200;
    }
    .right_01{
        float: right;
        
    }
    .right_01 img{
        margin: 7px;
    }
    .right_01 .tel{
        margin-right: 71px;
        float: left;
    }
    .right_01 .span{
        display: inline-block;
        font-size: 12px;
        color: #666666;
        line-height: 33px;
        float: right;
        cursor: pointer;
    }
    .wx_h{
        cursor: pointer;
    }
    .mouseenter{
        position: relative;
        background: url(../assets/wx_h.jpg) no-repeat center left;
        display: inline-block;
        width: 100px;
    }
    .erweima{
        position: absolute;
        left: 0;
        top: 33px;
        display: none;
    }
    .mouseenter:hover .erweima{
        display: block;
    }
    .mouseenter:hover .span{
        color: #FF8200;        
    }
    .mouseenter:hover{
        background: url(../assets/weixin.png) no-repeat center left;
    }
    .header-bottom{
        width: 1400px;
        margin: 0 auto;
        height: 104px;
        position: relative;
        /* overflow: hidden; */
    }
    .logo{
        margin-top: 19px;
        float: left;
    }
    .nav{
        overflow: hidden;
        margin-left: 91px;
        margin-top: 28px;
        float: left;
    }
    .nav li{
        float: left;
        height: 56px;
        text-align: center;
        font-size: 18px;
        color: #333333;
        line-height: 28px;
        cursor: pointer;
        margin-right: 40px;
    }
    .nav li:hover{
        color: #FF8200;
    }
    .login{
        background: #FFFFFF;
        border: 1px solid #FF8200;
        border-radius: 100px;
        font-size: 14px;
        color: #FF8200;
        width: 119px;
        height: 40px;
        float: left;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
        margin-right: 15px;
    }
    .regist{
       width: 119px;
        height: 40px;
        float: left;
        text-align: center;
        line-height: 40px;
        cursor: pointer; 
        background: #FF8200;
        border-radius: 100px;
        font-size: 14px;
        color: #FFFFFF;
    }
    .btn-box{
        overflow: hidden;
        float: right;
        margin-top: 25px;
    }
    .img-box{
        position: absolute;
        overflow: hidden;
        width: 1920px;
    }
    .img-box li{
        float: left;
        width: 480px;
        height: 230px;
        position: relative;
        cursor: pointer;
    }
    .img-box li p{
        position: absolute;
        bottom: 0;
        height: 50px;
        width: 480px;
        text-align: center;
        line-height: 50px;
        font-size: 18px;
        color: #FFFFFF;
    }
    .user{
        float: left;
        display: inline-block;
        line-height: 33px;
        font-size: 12px;
        color: #666666;
        margin-right: 71px;
    }
    .user span{
        margin-right: 10px;
        cursor: pointer;
    }
    .b_dianhua{
        margin: 32px 0;
        float: right;
    }
</style>