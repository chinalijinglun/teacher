<template>
    <div class="uploading-courseware">
        <div class="course-name">
            课包名称：ESL英语综合提升中级
        </div>
        <div class="class-name">
            <span>课节名称：Lesson 3</span>
            <input type="text" class="inp" placeholder="请输入作业的标题">
        </div>
        <div class="upload">
            <span>
                上传附件：
            </span>
            <div class="uploading">
                <img src="@/assets/shangchuan.png" alt="">
                本地上传
            </div>
        </div>
        <div class="kejian">
            <div class="singal">
                <div class="left">
                    <img src="@/assets/fujian.png" alt="">
                </div>
                <div class="right">
                    <div class="rig-tit">Alex and I practiced writing </div>
                    <div class="del">删除</div>
                    <div class="radio"><input type="radio" name="allow" id=""> 允许学生预习</div>
                    <div class="radio"><input type="radio" name="allow" id=""> 不允许</div>
                </div>
            </div>
            <div class="singal">
                <div class="left">
                    <img src="@/assets/fujian.png" alt="">
                </div>
                <div class="right">
                    <div class="rig-tit">Alex and I practiced writing </div>
                    <div class="del">删除</div>
                    <div class="radio"><input type="radio" name="allow" id=""> 允许学生预习</div>
                    <div class="radio"><input type="radio" name="allow" id=""> 不允许</div>
                </div>
            </div>
            <div class="singal">
                <div class="left">
                    <img src="@/assets/fujian.png" alt="">
                </div>
                <div class="right">
                    <div class="rig-tit">Alex and I practiced writing </div>
                    <div class="del">删除</div>
                    <div class="radio"><input type="radio" name="allow" id=""> 允许学生预习</div>
                    <div class="radio"><input type="radio" name="allow" id=""> 不允许</div>
                </div>
            </div>
            <div class="singal">
                <div class="left">
                    <img src="@/assets/fujian.png" alt="">
                </div>
                <div class="right">
                    <div class="rig-tit">Alex and I practiced writing </div>
                    <div class="del">删除</div>
                    <div class="radio"><input type="radio" name="allow" id=""> 允许学生预习</div>
                    <div class="radio"><input type="radio" name="allow" id=""> 不允许</div>
                </div>
            </div>
        </div>
        <div class="btn-box">
            <div class="submit">
                提交
            </div>
            <div class="close">
                关闭
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .uploading-courseware{
        width: 740px;
        min-height: 818px;
        padding: 30px;
        background-color: #fff;
        float: right;
    }
    .course-name{
        font-size: 14px;
        color: #333333;
    }
    .class-name{
        font-size: 14px;
        color: #333333;
        margin-top: 20px;
    }
    .inp{
        width: 300px;
        height: 36px;
        background: #FFFFFF;
        border: 1px solid #DCDCDC;
        border-radius: 5px;
        text-indent: 10px;
    }
    .upload{
        color: #333333;
        font-size: 14px;
        line-height: 36px;
        margin-top: 25px;
    }
    .uploading{
        display: inline-block;
        width: 120px;
        height: 36px;
        background: #FFFFFF;
        border: 1px solid #999999;
        border-radius: 5px;
        cursor: pointer;
    }
    .uploading img{
        float: left;
        margin: 8px 15px;
    }
    .kejian{
        overflow: hidden;
        margin-top: 60px;
    }
    .singal{
        width: 50%;
        float: left;
        height: 153px;
        overflow: hidden;
    }
    .left{
        float: left;
    }
    .right{
        float: left;
        margin-left: 13px;
    }
    .rig-tit{
        font-size: 14px;
        color: #666666;
    }
    .del{
        font-size: 14px;
        color: #FF8200;
        text-decoration:underline;
        cursor: pointer;
    }
    .radio{
        font-size: 12px;
        color: #333333;
        margin-top: 14px;
    }
    .btn-box{
        width: 272px;
        margin: 0 auto;
        overflow: hidden;
        margin-top: 20px;
    }
    .submit{
        width: 120px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        background: #FF8200;
        border-radius: 5px;
        font-size: 14px;
        color: #FFFFFF;
        float: left;
        margin-right: 28px;
    }
    .close{
        width: 120px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        background: #FFFFFF;
        border: 1px solid #DCDCDC;
        border-radius: 5px;
        font-size: 14px;
        color: #333333;
        float: left;
    }
</style>