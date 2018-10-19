<template>
  <div class="avatar upload-avatar">
    <div class="upload-avatar-img" @click="choseFile">
      <img :src="viewImg" alt=""/>
    </div>
    <p class="tips">Please select picture,support format: png/jpg/gif, file less than 5M</p>
    <el-input class="hidden-input" :value="value"></el-input>
  </div>
</template>
<script>
  import add from '@/assets/add.png'
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
        return this.value ? this.$baseApiUrl + this.value : add
      }
    },
    methods: {
      choseFile() {
        const input = document.createElement('input');
        input.type = 'file';
        input.name = 'file';
        input.onchange = (e) => {
          const file = e.target.files[0]
          this.upload(file)
        }
        input.click()
      },
      upload(file) {
        if(file.type.indexOf('image/') === -1) {
          this.$message.error('file type error!')
          return;
        }
        const formData = new FormData();
        formData.append('file', file);
        this.$axios.post(this.$baseApiUrl + '/upload', formData).then(resp => {
          this.$emit('input', resp.data[0].download_file)
        });
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
  line-height: 18px;
  margin-top: 5px;
}
</style>
