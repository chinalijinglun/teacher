<template>
  <td class="step-item step-item-td">
    <div :class="{cur: isCur}">
      {{text}}
    </div>
  </td>
</template>
<script>
  export default {
    name: 'step-item',
    props: ['text', 'isCur']
  }
</script>
<style>
.step-item-td {
  border: none;
}
.step-item-td div.cur {
  color: #FF8200;
  font-weight: bold;
}
.step-item-td div {
  border-top: 5px #D8D8D8 solid;
  width: 100%;
  line-height: 80px;
  font-size: 18px;
  text-align: center;
  position: relative;
}
.step-item-td div::before {
  content: '';
  width: 24px;
  height: 24px;
  background: #D8D8D8;
  border-radius: 50%;
  position: absolute;
  top: -15.5px;
  left: 50%;
  margin-left: -12px;
  box-sizing:border-box;
}
.step-item-td div.cur {
  border-top: 5px #FF8200 solid;
}
.step-item-td div.cur::before {
  background: #FF8200;
}
</style>

