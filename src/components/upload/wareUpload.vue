<template>
  <div class="uploading" @click="openFile">
    <img src="@/assets/shangchuan.png" alt=""> 本地上传
  </div>
</template>
<script>
  import CourseWare from '@/model/CourseWare'
  export default {
    name: 'wareUpload',
    props: ['value', 'scheduleId'],
    methods: {
      openFile() {
        const file = document.createElement('input');
        file.type = 'file';
        file.name = 'file';
        file.onchange = this.upload.bind(this);
        file.click();
      },
      upload(e) {
        const form = document.createElement('form');
        form.appendChild(e.target);
        const formData = new FormData(form);
        this.$axios.post(this.$baseApiUrl + '/upload', formData).then(resp => {
          const value = [...this.value]
          value.push(new CourseWare({
            ware_name: resp.data[0].upload_file,
            file_url: this.$baseApiUrl + resp.data[0].download_file,
            course_schedule_id: this.scheduleId,
            is_view: 'YES'
          }))
          console.log(value)
          this.$emit('input', value);
        });
      }
    }
  }
</script>
<style scoped>
.uploading {
  display: inline-block;
  width: 120px;
  height: 36px;
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 5px;
  cursor: pointer;
}
.uploading img {
  float: left;
  margin: 8px 15px;
}
</style>
