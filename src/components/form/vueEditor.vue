<template>
  <vue-editor useCustomImageHandler @imageAdded="handleImageAdded" v-bind="$attrs" v-on="$listeners"></vue-editor>
</template>
<script>
import { VueEditor } from "vue2-editor";
export default {
  methods: {
		handleImageAdded (file, Editor, cursorLocation, resetUploader) {
				var formData = new FormData();
        formData.append('file', file);
        return this.$axios.post(this.$baseApiUrl + '/upload', formData).then(resp => {
          let url = this.$baseApiUrl + resp.data[0].download_file // Get url from response
          Editor.insertEmbed(cursorLocation, 'image', url);
          resetUploader();
        }).catch((err) => {
          console.log(err);
        });
		}
  },
  components: {
    VueEditor
  }
}
</script>
<style>

</style>
