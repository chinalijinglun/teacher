<template>
    <div class="regist">
        <div class="main-contain">
            <div class="title">
                <div class="account-registration">
                    Sign up
                </div>
                <div class="use-phone">
                   Already have an account? 
                   <router-link to="login" class="user-login">Sign in</router-link> 
                </div>
            </div>
            <div class="form">
               <div class="phone">
                   <div class="phone-left">
                       Your name
                   </div>
                   <input type="text" class="register" placeholder="First name">
                   <input type="text" class="register" placeholder="Last name">
               </div>
                  <div class="phone">
                   <div class="phone-left">
                       Email
                   </div>
                   <input type="text" class="inps" placeholder="Email address">
               </div>
               <div class="phone">
                   <div class="phone-left">
                       Verification code
                   </div>
                   <div class="inps">
                       <input type="text" class="yan-num" placeholder="Get code from your Email">
                       <div class="click-btn">
                           Get Code
                       </div>
                   </div>
               </div>
               <div class="phone">
                   <div class="phone-left">
                       Get Code
                   </div>
                   <input type="text" class="inps" placeholder="at least 6 characters">
               </div>
               <div class="phone">
                   <div class="phone-left">
                       Re-enter password
                   </div>
                   <input type="text" class="inps" placeholder="at least 6 characters">
               </div>
               <div class="checkbox">
                  <input type="checkbox">
                  <span>我已阅读并同意<span class="instructor">《UStutor用户注册协议》</span></span>
               </div>
               <button class="regist-now">立即注册</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'phone',
    }
</script>

<style scoped>
    .main-contain{
        width: 830px;
        height: 600px;
        background: #ffffff;
        margin: 0 auto;
        margin-top: 81px;
    }
    .title{
        overflow: hidden;
        height: 86px;
        border: 1px solid #e8e8e8;
    }
    .account-registration{
        padding: 33px 0 20px 0;
        margin-left: 51px;
        float: left;
        border-bottom: 3px solid #FF8200; 
        font-size: 22px;
        color: #333333;
    }
    .user-login{
        color: #FF8200;
    }
    .use-phone{
        font-size: 14px;
        color: #333333;
        float: right;
        margin: 43px 34px 0 0;
        cursor: pointer;
    }
    .phone-left{
        float: left;
        height: 52px;
        width: 225px;
        text-align: right;
        line-height: 52px;
    }
    .register{
        width: 185px;
        height: 52px;
        background: #FFFFFF;
        border: 1px solid #DCDCDC;
        border-radius: 5px;
        float: left;
        margin-left: 20px;
        text-indent: 30px;
        outline: none;
    }
    .inps{
        background: #FFFFFF;
        border: 1px solid #DCDCDC;
        border-radius: 5px;
        width: 392px;
        height: 52px;
        float: left;
        margin-left: 20px;
        text-indent: 30px;
        outline:none;
    }
    .phone{
        overflow: hidden;
        margin-top: 20px;
    }
    .yan-num{
        float: left;
        border: none;
        height: 50px;
        width: 278px;
        text-indent: 30px;
        outline:none;
    }
    .click-btn{
        float: right;
        width: 108px;
        height: 44px;
        background: #F5F5F5;
        font-size: 14px;
        color: #666666;
        text-align: center;
        line-height: 44px;
        text-indent: 0;
        margin: 3px;
        cursor: pointer;
    }
    .instructor{
        font-size: 14px;
        color: #FF8200;
        line-height: 20px;
    }
    .checkbox{
        font-size: 14px;
        color: #666666;
        margin-top: 20px;
        text-align: center;
    }
    .regist-now{
        background: #FF8200;
        border-radius: 5px;
        width: 392px;
        height: 52px;
        margin: 0 25%;
        margin-top: 36px;
        font-size: 18px;
        color: #FFFFFF;
        outline:none;
        cursor: pointer;
    }
    .login{
        font-size: 14px;
        color: #333333;
        text-align: center;
        margin-top: 20px;
    }
</style>