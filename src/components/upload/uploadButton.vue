<template>
  <span class="ms-upload-button" @click="openFile">
    {{text}}
  </span>
</template>
<script>
  export default {
    name: 'uploadButton',
    props: ['text', 'value'],
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
          this.$emit('input', resp.data[0].download_file);
        });
      }
    }
  }
</script>
<style>
span.ms-upload-button {
  position: relative;
  display: inline-block;
  width: 198px;
  height: 38px;
  background: #f7f7f7;
  border: 1px solid #d8d8d8;
  border-radius: 3px;
  line-height: 38px;
  text-align: center;
}
span.ms-upload-button .upload-input {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
}
</style>

