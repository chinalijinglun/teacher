<template>
    <div class="add-evaluate">
        <div class="student-name">
            ALEX ren
        </div>
        <div class="lesson">
            Lesson 1 Exploring Space and Astronomy
        </div>
        <div class="border"></div>
        <div class="text-tit">
            Lesson Objective (key points, vocabulary, skills, etc.):
        </div>
        <vue-editor v-model="content"></vue-editor> 

        <div class="stat">
            Completion status:
        </div>
        <div class="radio">
           <span> <input type="radio" name="Completed" id=""> Completed </span>
            <span> <input type="radio" name="Completed" id=""> Not Completed </span>
        </div>
        <vue-editor v-model="content"></vue-editor> 
        <div class="stat">
            Performance in class:
        </div>
        <div class="overall">
            <span class="word">Overall:</span> 
            <select name="" id="">
                <option value=""></option>
            </select>
        </div>
        <div class="overall">
            <span class="word">On Time:</span> 
            <input type="radio" name="on" id=""> YES
            <input type="radio" name="on" class="mar"> NO
        </div>
        <div class="overall">
            <span class="word">Missing Time:</span> 
            <input type="text" name="" id="" class="inp"> min
        </div>
        <div class="overall">
            <span class="word">Learning Attitude:</span> 
            <input type="radio" name="on" id=""> Excellent
            <input type="radio" name="on" class="mar"> Good   
            <input type="radio" name="on" class="mar"> Poor                                                     
        </div>
        <div class="overall">
            <span class="word">Positive interaction:</span> 
            <input type="radio" name="on" id=""> Excellent
            <input type="radio" name="on" class="mar"> Good   
            <input type="radio" name="on" class="mar"> Poor                                                         
        </div>
        <div class="stat">
            Summary of the class:
        </div>
        <vue-editor v-model="content"></vue-editor>
        <div class="stat">
            Skills the student exhibited well:
        </div>
        <vue-editor v-model="content"></vue-editor>
        <div class="stat">
            Areas to be improved:
        </div>
        <vue-editor v-model="content"></vue-editor>
        <div class="stat">
            Suggested strategies for improvement:
        </div>
        <vue-editor v-model="content"></vue-editor>
        <div class="btn">
            <div class="submit">
                提交
            </div>
            <div class="back">
                取消
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
    .add-evaluate{
        width: 740px;
        padding: 30px;
        background-color: #fff;
        float: right;
    }
    .student-name{
        font-size: 20px;
        color: #333333;
        line-height: 36px;
    }
    .lesson{
        font-size: 14px;
        color: #666666;
        margin-top: 4px;
    }
    .border{
        border-bottom: 1px solid #DCDCDC;
        margin-top: 26px;
        margin-bottom: 30px;
    }
    .text-tit{
        font-size: 18px;
        color: #333333;
        margin-bottom: 17px;
    }
    .stat{
        font-size: 18px;
        color: #333333;
        margin-top: 30px;
        margin-bottom: 16px;
    }
    .radio{
        font-size: 14px;
        color: #333333;
        margin-bottom: 15px;
    }
    .radio span{
        margin-right: 30px;
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
    .overall{
        font-size: 14px;
        color: #333333;
        line-height: 50px;
    }
    .word{
        display: inline-block;
        width: 150px;
        height: 50px;
        line-height: 50px;
    }
    .overall select{
        background: #FFFFFF;
        border: 1px solid #D8D8D8;
        border-radius: 3px;
        width: 198px;
        height: 40px;
    }
    .mar{
        margin-left:50px;
    }
    .inp{
        background: #FFFFFF;
        border: 1px solid #D8D8D8;
        border-radius: 3px;
        width: 198px;
        height: 40px;
    }
</style>