<template>
  <el-dialog
    :visible.sync="dialogVisible"
    @close="handlerClose"
    @open="handlerOpen"
    width="840px">
    <embed :src="src" frameborder="0" width="800px" height="500px" />
  </el-dialog>
</template>
<script>
  import dialogContainer from '../mixins/dialogContainer'
  export default {
    name: 'iframeDialog',
    props: ['src'],
    methods: {
      handlerOpen() {
      },
      handlerClose() {
      }
    },
    mixins: [dialogContainer]
  }
</script>
<style scoped>
  .btn-container{
    text-align: center;
  }
</style>
