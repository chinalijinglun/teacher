<template>
<el-dialog :visible.sync="dialogVisible" @open="handlerOpen" @close="handlerClose" class="ms-dialog no-head" :show-close="false">
  <div class="dialog-body">
    <el-form label-position="top" :model="form" :rules="rules" ref="educationForm">
      <el-form-item label="Degree" prop="degree">
        <el-select v-model="form.degree">
          <el-option value="BA" label="BA"></el-option>
          <el-option value="MA" label="MA"></el-option>
          <el-option value="Ph.D" label="Ph.D"></el-option>
          <el-option value="Post Ph.D" label="Post Ph.D"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Period" prop="start">
        <el-row>
          <el-col :span="6">
            <el-date-picker
              style="width: 100%"
              v-model="form.start"
              type="month">
            </el-date-picker>
          </el-col>
          <el-col :span="1">
            <p style="text-align: center;">-</p>
          </el-col>
          <el-col :span="6">
            <el-date-picker
              style="width: 100%"
              v-model="form.end"
              type="month">
            </el-date-picker>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="School" prop="school">
        <el-row>
          <el-col :span="13">
            <el-input v-model="form.school"></el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="Major" prop="major">
        <el-row>
          <el-col :span="13">
            <el-input v-model="form.major"></el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="Certificate" prop="certificate">
        <el-row>
          <el-col :span="13">
            <upload-button
              v-model="form.certificate"
              :max-length="5"
            />
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <el-row class="btn-center-container">
      <el-button type="primary" @click="onSure">Submit</el-button>
      <el-button @click="toClose">Cancel</el-button>
    </el-row>
  </div>
</el-dialog>
</template>
<script>
import EducationHistory from '@/model/EducationHistory';
export default {
  data() {
    const endRequire = (rule, value, cb) => {
      if(!this.form.end) {
        cb(new Error('Period is required !'))
      }
      cb()
    }
    return {
      dialogVisible: false,
      form: new EducationHistory({}),
      rules: {
        degree: [
          { required: true, message: 'Degree is required !', trigger: 'change' }
        ],
        start: [
          { required: true, message: 'Period is required !', trigger: 'change' }
        ],
        school: [
          { required: true, trigger: 'change' }
        ],
        major: [
          { required: true, trigger: 'change' }
        ], 
        certificate: [
          { required: true, trigger: 'change' }
        ], 
      }
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
  props: ['visible', 'curRow'],
  methods: {
    handlerOpen() {
      this.form = new EducationHistory(this.curRow || {});
    },
    handlerClose() {
      this.form = new EducationHistory({})
      this.$refs.educationForm.resetFields()
      this.$emit('on-close')
    },
    toClose() {
      this.dialogVisible = false;
    },
    async onSure() {
      await this.$refs.educationForm.validate()
      this.$emit('on-sure', this.form)
      this.toClose()
    }
  }
};
</script>
