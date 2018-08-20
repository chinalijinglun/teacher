<template>
  <el-dialog :visible.sync="dialogVisible" class="ms-dialog no-head" :show-close="false">
    <div class="pop-up">
      <div class="pop-content">
        <div class="title">
          (REF. ATT. 1)
        </div>
        <table class="contract-table">
          <thead>
            <tr>
              <th width="245">SCHEUDLE</th>
              <th width="245">CLASS SCHEDULE UPDATED</th>
              <th width="245">CHECK SEND TO THE CONTRACTOR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>12/25/2017 - 01/07/2018</th>
              <th>01/08/2018</th>
              <th>01/08/2018</th>
            </tr>
          </tbody>
        </table>
        <div class="contract-tip">
          <span>* IF THE PAYOUT DAY FALLS INTO A HOLIDAY, THE CHECK WILL BE ISSUE ON THE NEXT FOLLOWING WORKING DAY.</span>
          <span>* THE PAYOUT WILL BE ISSUE ONLY THE CLASS (50 MINS TEACHING + 10 MINS WRITTEN CONSTRUCTIVE FEEDBACK TO THE STUDENT) MARKED AS “COMPLETED” ON THE UPDATE.</span>
        </div>
        <div class="contract-sure">
          <button @click="onSure">确定</button>
        </div>
      </div>
    </div>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  mixins: [],
  watch: {
    dialogVisible(v) {
      this.$emit("update:visible", v);
    },
    visible(v) {
      this.dialogVisible = v;
    }
  },
  props: ["visible"],
  methods: {
    toClose() {
      this.dialogVisible = false;
    },
    onSure() {
      this.toClose()
      this.$emit('on-sure')
    }
  }
};
</script>
<style>
.ms-dialog .el-dialog {
  border-radius: 10px;
}
.no-head .el-dialog__header {
  height: 0;
}
.title {
  text-align: center;
  font-size: 14px;
  color: #333333;
}
.contract-tip {
  font-size: 12px;
  color: #222222;
  line-height: 17px;
}
.contract-tip span {
  display: block;
  margin-bottom: 25px;
}
.contract-table {
  border: 1px solid #d8d8d8;
  width: 100%;
  margin-bottom: 30px;
}
.contract-table thead tr {
  background-color: #f5f5f5;
  height: 45px;
  font-size: 12px;
}
.contract-table tbody tr {
  height: 45px;
  font-size: 12px;
}
.contract-table tbody tr th {
  font-weight: 100;
}
.contract-sure {
  text-align: center;
}
.contract-sure button {
  color: #ffffff;
  font-size: 14px;
  background: #ff8200;
  border-radius: 5px;
  width: 120px;
  height: 40px;
  line-height: 40px;
  border: none;
  outline: none;
}
</style>
