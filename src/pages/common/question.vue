<template>
    <div class="common">
        <div class="question-box">
            <div class="q">
                <img src="@/assets/Q.png" alt="">
                <div class="detail">
                    <p>What if I do not speak Chinese?</p>
                </div>
            </div>
            <div class="a">
                <img src="@/assets/A.png" alt="">
                <div class="detail">
                    <p>You are not required to speak Chinese. Student choosing your course will have required English skill level.</p>
                </div>
                
            </div>
        </div>
        <div class="question-box">
            <div class="q">
                <img src="@/assets/Q.png" alt="">
                <div class="detail">
                    <p>Can I apply if I am not an on-the-job teacher?</p>
                </div>
            </div>
            <div class="a">
                <img src="@/assets/A.png" alt="">
                <div class="detail">
                    <p>Yes. Besides on-the-job teachers, we welcome retired teachers who worked in the schools and college 
students majoring in education and with some type of teaching experience.</p>
                </div>
                
            </div>
        </div>
        <div class="question-box">
            <div class="q">
                <img src="@/assets/Q.png" alt="">
                <div class="detail">
                    <p>I cannot apply on the website! What should I do?</p>
                </div>
            </div>
            <div class="a">
                <img src="@/assets/A.png" alt="">
                <div class="detail">
                    <p>Here are some things you can try:</p>
                    <p>Refresh the page</p>
                    <p>Clear your web browser cache.</p>
                    <p>Switch browsers. Our website should work optimally on Chrome, but it can be picky. Try with other browsers.</p>
                    <p>Try to connect to the internet from another server or another computer.</p>
                </div>
                
            </div>
        </div>
        <div class="question-box">
            <div class="q">
                <img src="@/assets/Q.png" alt="">
                <div class="detail">
                    <p>What equipment do I need?</p>
                </div>
            </div>
            <div class="a">
                <img src="@/assets/A.png" alt="">
                <div class="detail">
                    <p>A desktop or a laptop with a webcam (for now our platform does not work on phones or tablets).</p>
                    <p>Chrome browser</p>
                    <p>ABOUT TEACHING</p>
                </div>
            </div>
        </div>
         <div class="question-box">
            <div class="q">
                <img src="@/assets/Q.png" alt="">
                <div class="detail">
                    <p>How many students do I teach in each class?</p>
                </div>
            </div>
            <div class="a">
                <img src="@/assets/A.png" alt="">
                <div class="detail">
                    <p>All PEC classes are one-on-one to ensure we meet 100% of each student's needs. Other classes may be 
larger groups; information on those classes will follow.</p>
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
    .common{
        width: 740px;
        background-color: #fff;
        float: right;
        padding: 30px;
    }
    .q,.a{
        overflow: hidden;
       
    }
    .a{
         margin-top: 15px; 
    }
    .q img,.a img{
        float: left;
        width: 24px;
        height: 24px;
        margin: 7px 0;
        margin-right: 9px;
    }
    .detail{
        width: 692px;
        font-size: 16px;
        color: #FF8200;
        line-height: 38px;
        float: left;
    }
    .a .detail{
        font-size: 14px;
        color: #2A2A2A;
        line-height: 38px;
    }
    .question-box{
        margin-bottom: 30px;
    }
</style>