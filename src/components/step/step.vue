<template>
  <table class="steps step-table">
    <tr>
      <step-item v-for="(item, index) in steps" :key="index" :is-cur="index === curSteps" :text="item"></step-item>
    </tr>
  </table>
</template>
<script>
  import stepItem from './stepItem'
  export default {
    name: 'step',
    props: {
      steps: {
        type: Array,
        default: () => []
      },
      curSteps: {
        type: Number,
        default: 0
      }
    },
    components: {
      stepItem
    }
  }
</script>
<style>
.step-table {
  width: 100%;
  border-collapse:collapse;
  border: none;
  table-layout: fixed;
}
</style>
