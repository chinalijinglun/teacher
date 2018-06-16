<template>
    <div class="basicinfor">
        <div class="basic-header">
            <div class="step">
                <span class="step1"></span>
                <span class="step2"></span>
                <span class="step3"></span>
            </div>
            <ul>
                <li>Basic Info</li>
                <li>Demo Lesson</li>
                <li>Contract Info</li>
            </ul>
        </div>
        <div class="basic-main reservation">
            <small>Dear Mr. / Ms,<br/>
                Mr. Jack Baron, our personnel director, has asked me to acknowledge your application for the post of accountant and to ask you to come to see him on Friday afternoon, 5th July, at half past two.<br/>
                I will appreciate your letting me know whether you will be able to come.<br/>
                Yours faithfully<br/>
            </small>

            <div class="full-name">
                <h4>
                    请选择一个合适的面试时间：
                </h4>
                <h4>
                    Your Time Zone：America/Adak
                </h4>
                <div class="reservation-span">
                    <span><input type="radio">2018.04.27  13:00 - 13:50</span>
                    <span><input type="radio">2018.04.27  13:00 - 13:50</span>
                    <span><input type="radio">2018.04.27  13:00 - 13:50</span>
                </div>
                <h4>其他时间</h4>
                <span class="reservation-time">
                    我方便的时间：<input type="text" placeholder="First Name"><input type="text" placeholder="Middle Name">
                </span>
                <br />
                <span class="reservation-reason">
                    原因：
                    <textarea>

                    </textarea>
                </span>
            </div>
        </div>
        <div class="next-btn">
            <button>submit</button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                data1:[]
            }
        },
        created(){
//            this.sendAjax();
        },
        methods:{
            sendAjax(){
                var _that = this;
                this.baseAxios
                    .post("/auth/smsverify",{
                        "country_code": "86",
                        "mobile_no": "15510591359"
                    })
                    .then(function(data) {
                        console.log(data)
                    });
            }
        }
    }
</script>

<style scoped>
    .basicinfor {
        width: 1000px;
        min-height: 800px;
        margin: 0 auto;
        overflow: hidden;
        margin-top: 20px;
        background: #ffffff;
    }

    .basic-header {
        height: 100px;
        margin: 30px 70px;
        border: 1px solid #d8d8d8;
        border-top: none;
    }

    .step span {
        width: 33.333%;
        display: block;
        height: 5px;
        background: #d8d8d8;
        z-index: 99999;
        float: left;
        position: relative;
    }

    .step {
        width: 100%;
        border-bottom: 5px solid #ff8200;
    }

    .step2 {
        background: #ff8200 !important;
    }

    .step1::after,
    .step2::after,
    .step3::after {
        content: "";
        display: block;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: -9px;
    }

    .step2::after {
        background-color: #ff8200;
    }

    .step1::after,
    .step3::after {
        background-color: #d8d8d8;
    }

    .basic-header ul {
        list-style: none;
    }

    .basic-header ul li {
        float: left;
        width: 33.333%;
        height: 90px;
        line-height: 90px;
        text-align: center;
        font-size: 18px;
        color: #666666;
    }

    .basic-header ul li:nth-child(2) {
        color: #ff8200;
        font-weight: bold;
    }

    .basic-main {
        margin: 0 70px;
    }

    .basic-main h3{
        font-size: 18px;
        font-weight: normal;
    }

    .next-btn {
        text-align: center;
        margin: 60px 0;
    }

    .next-btn button {
        width: 150px;
        height: 40px;
        font-size: 18px;
        color: #ffffff;
        background: #ff8200;
        border-radius: 5px;
        outline: none;
        border: none;
    }

    .reservation small{
        line-height: 35px;
    }

    .full-name {
        font-size: 14px;
        overflow: hidden;
        margin: 25px 0;
    }
    .full-name h4 {
        margin-bottom: 20px;
        font-weight: normal;
    }
    .reservation-time{
        display: block;
    }
    .reservation-time input{
        width: 188px;
        height: 38px;
        border: 1px solid #d8d8d8;
        border-radius: 3px;
        margin-right: 40px;
        padding-left: 10px;
    }
    .reservation-reason{
        display: block;
    }
    .reservation-reason textarea{
        width: 752px;
        height: 120px;
        background: #FFFFFF;
        border: 1px solid #D8D8D8;
        border-radius: 3px;
        vertical-align: top;
        outline: none;
    }
    .reservation-span{
        margin-left: 1px;
        margin-bottom: 20px;
    }
    .reservation-span *{
        margin-right:15px;
    }
</style>