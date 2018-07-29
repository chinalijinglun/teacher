<template>
  <div class="bgray" v-show="editShow">
    <div id="apps">
      <div class="title">
        <span>添加作业</span>
      </div>
      <div class="biaoti">
        <div class="word">
          标题
        </div>
        <input type="text" class="inp" placeholder="请输入作业的标题">
      </div>
      <div class="bianji">
        <div class="word">
          描述
        </div>
        <vue-editor v-model="content" class="text"></vue-editor>
      </div>
      <div class="fujian">
        <div class="word">
          附件
        </div>
        <div class="right">
          <!-- <div class="up">
            <img src="@/assets/shangchuan.png" alt="">上传附件
          </div> -->
          <el-button icon="ms-add-file-upload">
            上传附件
          </el-button>
          <span>AP心理学第一课作业.docx</span>
        </div>
      </div>
      <div class="btn">
        <div class="submit">
          提交
        </div>
        <div class="back">
          返回
        </div>
      </div>
    </div>
  </div>
</template>  
  
<script>
import { VueEditor } from "vue2-editor";

export default {
  components: {
    VueEditor
  },
  watch: {
    show(val, oval) {
      this.editShow = !this.showEdit;
    }
  },
  props: ["show"],
  data() {
    return {
      content: "<h1>Some initial content</h1>",
      editShow: false
    };
  }
};
</script>  
<style>
i.ms-add-file-upload {
  width: 20px;
  height: 20px;
  font-size: 20px;
  line-height: 1;
  vertical-align: baseline;
  display: inline-block;
  background-image: url(../assets/shangchuan.png);
  background-repeat: no-repeat;
  background-size: contain;
} 
</style>
<style scoped>
.bgray {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}
#apps {
  width: 830px;
  height: 650px;
  background: #ffffff;
  border-radius: 10px;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -415px;
  margin-top: -300px;
  z-index: 1000;
}
.title {
  height: 86px;
  font-size: 22px;
  color: #333333;
  border-bottom: 1px solid #e8e8e8;
}
.title span {
  margin-left: 55px;
  padding: 33px 0 20px 0;
  border-bottom: 3px solid #ff8200;
  display: block;
  float: left;
}
.biaoti {
  overflow: hidden;
  margin-top: 31px;
}
.word {
  width: 85px;
  text-align: right;
  font-size: 16px;
  color: #333333;
  height: 52px;
  line-height: 52px;
  float: left;
  margin-right: 24px;
}
.inp {
  float: left;
  height: 50px;
  width: 640px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  text-indent: 10px;
  outline: none;
}
.text {
  width: 640px;
  /* height: 220px; */
  float: left;
}
.bianji {
  margin-top: 20px;
  overflow: hidden;
}
.right {
  float: left;
  overflow: hidden;
  width: 640px;
}
.fujian {
  margin-top: 20px;
  overflow: hidden;
}
.up {
  width: 118px;
  height: 38px;
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 5px;
  font-size: 14px;
  color: #333333;
  overflow: hidden;
  line-height: 40px;
  cursor: pointer;
  float: left;
}
.up img {
  float: left;
  margin: 10px 15px;
}
.right span {
  font-size: 14px;
  color: #ff8200;
  line-height: 40px;
  margin-left: 30px;
  float: left;
}
.btn {
  width: 273px;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 27px;
}
.submit {
  width: 120px;
  float: left;
  height: 40px;
  line-height: 40px;
  background: #ff8200;
  border-radius: 5px;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
  margin-right: 32px;
}
.back {
  width: 118px;
  float: left;
  height: 38px;
  line-height: 40px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  font-size: 14px;
  color: #333333;
  text-align: center;
}
</style>
 