<template>
  <div class="avatar upload-avatar">
    <div class="upload-avatar-img">
      <img :src="viewImg" alt=""/>
    </div>
    <p class="tips">Click and set your avatar</p>
    <el-input class="hidden-input" :value="value"></el-input>
  </div>
</template>
<script>
  export default {
    name: 'avatar',
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    computed: {
      viewImg() {
        return this.value ? this.$baseApiUrl + this.value : ''
      }
    }
  }
</script>
<style>
.upload-avatar-img {
  width: 108px;
  height: 108px;
  border: 5px solid #FFDF77;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
}
.upload-avatar-img img{
  width: 100%;
  height: 100%;
  border: 1px solid #fff;
  border-radius: 50%;
  overflow: hidden;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.tips {
  color: #999;
  font-size: 14px;
}
</style>
