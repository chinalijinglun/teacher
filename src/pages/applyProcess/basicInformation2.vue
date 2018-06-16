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
        <div class="basic-main basic2">
            <h3>教学经历</h3>
            <small>如果是已经退休的教师或目前不在学校任职，请填写最新一段教学经历</small>
            <div class="full-name email">
                <h4>
                    Current School Teaching At
                </h4>
                <input type="text" placeholder="please input">
            </div>
            <div class="full-name">
                <div class="street">
                    <span class="street-name">*Current Teaching Location</span>
                    <span class="street-input">
                        <select name="">
                            <option value=""></option>
                        </select>
                    </span>
                </div>
                <div class="street">
                    <span class="street-name">* Current Teaching State </span>
                    <span class="street-input">
                        <select name="">
                            <option value=""></option>
                        </select>
                    </span>
                </div>
            </div>
            <div class="full-name">
                <h4>*Current Teaching Academic Subject</h4>
                <div class="street">
                    <span class="street-input">
                        <select name="">
                            <option value=""></option>
                        </select>
                    </span>
                </div>
                <div class="street">
                    <span class="street-input">
                        <select name="">
                            <option value=""></option>
                        </select>
                    </span>
                </div>
                <div class="street basic2-input">
                    <input type="text">
                </div>
            </div>
            <div class="full-name">
                <div class="street">
                    <span class="street-name">*Current Teaching Grade</span>
                    <span class="street-input">
                        <select name="">
                            <option value="">12</option>
                        </select>
                    </span>
                </div>
                <div class="basic2-checkbox">
                        <span>
                            <input type="checkbox">
                            Kindergarten幼儿园
                        </span>
                    <span>
                            <input type="checkbox">
                            Elementary School小学
                        </span>
                    <span>
                            <input type="checkbox">
                            Kindergarten幼儿园
                        </span>
                    <span>
                            <input type="checkbox">
                            Kindergarten幼儿园
                        </span>
                    <span>
                            <input type="checkbox">
                            Kindergarten幼儿园
                        </span>
                    <span>
                            <input type="checkbox">
                            Kindergarten幼儿园
                        </span>
                </div>
            </div>
            <div class="full-name">
                <h4>*Other Teaching Academic Subject</h4>
                <div class="street">
                    <span class="street-input">
                        <select name="">
                            <option value=""></option>
                        </select>
                    </span>
                </div>
                <div class="street">
                    <span class="street-input">
                        <select name="">
                            <option value=""></option>
                        </select>
                    </span>
                </div>
                <div class="street basic2-input">
                    <input type="text">
                </div>
            </div>
            <div class="full-name">
                <div class="street">
                    <span class="street-name">*Current Teaching Grade</span>
                    <span class="street-input">
                        <select name="">
                            <option value=""></option>
                        </select>
                    </span>
                </div>
            </div>
            <div class="full-name">
                <div class="street">
                    <span class="street-name">*Current Teaching Grade</span>
                    <span class="street-input">
                        <select name="">
                            <option value=""></option>
                        </select>
                    </span>
                </div>
            </div>
            <div class="full-name basic2-resume">
                <span>上传简历</span>
                <span>已上传\预览</span>
            </div>
        </div>
        <div class="next-btn">
            <button>确定</button>
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

    .step1 {
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

    .step1::after {
        background-color: #ff8200;
    }

    .step2::after,
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

    .basic-header ul li:first-child {
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

    .full-name{
        font-size: 14px;
        overflow: hidden;
        margin: 25px 0;
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
    .full-name h4{
        margin-bottom: 10px;
        font-weight: normal;
    }
    .street{
        width: 210px;
        margin-bottom: 10px;
        float: left;
    }
    .street span{
        display: block;
    }
    .street span select{
        appearance:none;
        -moz-appearance:none;
        -webkit-appearance:none;
        width: 198px;
        height: 40px;
        border: 1px solid #d8d8d8;
        text-align: center;
        padding: 0 2%;
        background-color: #ffffff;
    }
    .street-name{
        margin-bottom: 12px;
    }
    .street-input{
        position: relative;
    }
    .street-input::after{
        position: absolute;
        content: "";
        border-left:6px solid transparent;
        border-right: 6px solid transparent;
        border-top:10px solid #999999;
        width: 0;
        height: 0;
        left: 175px;
        top:16px;
        pointer-events: none;
    }
    .email input{
        width: 418px;
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
        border-radius: 3px;
        border: 1px solid #d8d8d8;
        outline: none;
    }
    .basic2-input input{
        width: 188px;
        height: 38px;
        background: #FFFFFF;
        border: 1px solid #D8D8D8;
        border-radius: 3px;
        outline: none;
        padding-left: 10px;
    }
    .basic2-checkbox{
        width: 80%;
        overflow: hidden;
    }
    .basic2-checkbox span{
        display: inline-block;
        width: 200px;
        text-align: left;
    }
    .basic2-checkbox span input {
        margin-right: 7px;
    }
    .basic2-resume{

    }
    .basic2-resume span{
        display: inline-block;
        width: 198px;
        height: 38px;
        background: #F7F7F7;
        border: 1px solid #D8D8D8;
        border-radius: 3px;
        line-height: 38px;
        text-align: center;
    }
    .basic2-resume span:first-child{
        margin-right: 200px;
    }
</style>