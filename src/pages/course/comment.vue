<template>
    <div class="comment">
        <div class="student-mess">
            <img src="../../assets/logo.png" alt="">
            <span class="student-name">Kira Yuan</span>
            <span class="time">2018.04.30 13:00 - 13:50</span>
        </div>
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
        <div class="dianping-history">
            <div class="dp-tit">
                点评记录
            </div>
            <div class="dp-time">
2018.04.30 13:00:43 
            </div>
            <div class="dp-detail">
                Alex and I practiced writing a narrative story together. I wrote a sentence, and he followed by writing 
the next. I taught him that each sentence, no matter how crazy, needs to logically follow the sentence before. By the end of the story, he was doing that a lot better. Skills the student exhibited well: Good writing!
            </div>
        </div>
        <div class="dp-tit dp-h">
            作业点评
        </div>
        <vue-editor v-model="content"></vue-editor> 
        <div class="btn">
            <div class="submit">
                提交
            </div>
            <div class="back">
                返回
            </div>
        </div>
    </div>
</template>

<script>
    import { VueEditor } from 'vue2-editor'  
  
   export default {  
  
   components: {  
      VueEditor  
   },  
  
   data() {  
       return {  
         content: '<span>请输入内容</sapn>'    
       }  
     }  
   }  
</script>

<style scoped>
    .comment{
        float: right;
        background-color: #fff;
        width: 740px;
        padding: 30px;
        min-height: 880px;
    }
    .student-mess img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        float: left;
        margin-right: 10px;
    }
    .student-name{
        font-size: 14px;
        color: #333333;
    }
    .time{
        font-size: 14px;
        color: #999999;
        margin-left: 44px;
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
    .dowmload{
        overflow: hidden;
    }
    .dianping-history{
        margin-top: 45px;
    }
    .dp-tit{
        font-size: 18px;
        color: #333333;
        margin-bottom: 20px;
    }
    .dp-time{
        font-size: 14px;
        color: #999999;
    }
    .dp-detail{
        font-size: 14px;
        color: #333333;
        line-height: 27px;
    }
    .dp-h{
        margin-top: 47px;
    }
    .btn{
        width: 273px;
        margin: 0 auto;
        overflow: hidden;
        margin-top: 27px;
    }
    .submit{
        width: 120px;
        float: left;
        height: 40px;
        line-height: 40px;
        background: #FF8200;
        border-radius: 5px;
        font-size: 14px;
        color: #FFFFFF;
        text-align: center;
        margin-right: 32px;
    }
    .back{
        width: 118px;
        float: left;
        height: 38px;
        line-height: 40px;
        background: #FFFFFF;
        border: 1px solid #DCDCDC;
        border-radius: 5px;
        font-size: 14px;
color: #333333;
text-align: center
    }
</style>