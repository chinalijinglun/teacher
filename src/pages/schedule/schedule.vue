<template>
  <Calendar 
    class="schedule"
    startDate="2018-07-31" 
    :dateData="dateData.Object" 
    :firstDay="1"
    :onPrev="getSchedule"
    :onNext="getSchedule"
    mode="week"
  >
    <div slot-scope="item">
      <div class="calendar-item-date" :class="{'today': isToday(item.date.full)}">
        <span class="calendar-item-date-span">{{item.date.date}}</span>
        <span>{{item.date.day | weekDay_EN}}</span>
      </div>
      <div class="agenda-container" v-for="(item, index) in item.data[0]" :key="index">
        <span class="agenda-item">{{item.title}}</span>
      </div>
    </div>
  </Calendar>
</template>
<script>
import dateData from './data' 
export default {
  data() {
    return {
      dateData
    };
  },
  filters: {
    weekDay_EN(weekNum) {
      return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][weekNum]
    }
  },
  methods: {
    isToday(day) {
      return this.$dateFmt(new Date(day), 'yyyy-MM-dd') === this.$dateFmt(new Date(), 'yyyy-MM-dd');
    },
    getSchedule() {
      console.log(arguments)
    }
  }
};
</script>
<style>
.schedule {
  width: 800px;
  min-height: 800px;
  margin-left: 20px;
  margin-bottom: 20px;
  float: left;
}
.schedule .vue-calendar-week-title-item {
  height: 0;
  overflow: hidden;
}
.schedule .calendar-item-date {
  padding: 5px;
  line-height: 20px;
  font-size: 14px;
  background: #f7f7f7;
  border-bottom: 1px #d9d9d9 solid;
  text-align: center;
  font-family: "Microsoft YaHei";
  color: #333;
}
.calendar-item-date .calendar-item-date-span {
  display: inline-block;
  height: 20px;
  line-height: 20px;
  width: 20px;
  border-radius: 10px;
}
.calendar-item-date.today .calendar-item-date-span {
  background: #ff3b00;
  color: #fff;
}
.agenda-container {
  padding: 5px 2px;
}
.agenda-container .agenda-item {
  padding: 10px;
  background: #F5A623;
  color: #333;
  display: block;
  cursor: pointer;
  font-size: 14px;
  word-break: normal;
}
</style>