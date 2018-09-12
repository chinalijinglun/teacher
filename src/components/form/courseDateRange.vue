<template>
  <div class="course-date-range">
    <el-date-picker
      v-model="form.date"
      type="date"
      size="large">
    </el-date-picker>
    <el-time-picker
      is-range
      size="large"
      v-model="form.timeRange"
      format="HH:mm"
      :default-value="[new Date(2018,1,1,0,0),new Date(2018,1,1,23,59,59)]"
      range-separator="-"
      start-placeholder="Start time"
      end-placeholder="End time">
    </el-time-picker>
  </div>
</template>
<script>
  export default {
    name: 'courseDateRange',
    data() {
      return {
        form: {
          date: '',
          timeRange: null
        }
      };
    },
    props: {
      startDate: {
        type: String,
        default: ''
      },
      endDate: {
        type: String,
        default: ''
      },
      dateFmt: {
        type: String,
        default() {
          return this.$DATE_FMT_DEFAULT
        }
      }
    },
    methods:{
      init(form = {
        date: '',
        timeRange: null
      }) {
        this.form = form;
      }
    },
    watch: {
      form: {
        handler(v, ov) {
          console.log(v)
          if(v.date) {
            const day = this.$dateFmt(v.date, 'YYYY-MM-DD');
            const start = this.$dateFmt(v.timeRange[0], 'HH:mm:ss');
            const end = this.$dateFmt(v.timeRange[1], 'HH:mm:ss');
            this.$emit('update:startDate', new Date(day+' '+start));
            this.$emit('update:endDate', new Date(day+' '+end));
          } else {
            this.$emit('update:startDate', '');
            this.$emit('update:endDate', '');
          }
        },
        deep: true
      }
    }
  }
</script>
