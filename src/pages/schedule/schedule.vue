<template>
  <Calendar 
    class="schedule"
    :startDate="startDate" 
    :dateData="dateData.Object" 
    :firstDay="1"
    :onMonthChange="getSchedule"
    mode="week"
  >
    <div slot-scope="item">
      <div class="calendar-item-date" :class="{'today': isToday(item.date.full)}">
        <span class="calendar-item-date-span">{{item.date.date}}</span>
        <span>{{item.date.day | weekDay_EN}}</span>
      </div>
      <div class="agenda-container" v-for="(item2, index) in item.data[0]" :key="index" @click="toCourseDetail(item2.id)">
        <span class="agenda-item" :class="{'end': isEnd(item2.end)}">{{item2.title}}</span>
        <span class="time agenda-item" :class="{'end': isEnd(item2.end)}">{{item2.time}}</span>
      </div>
    </div>
  </Calendar>
</template>
<script>
import {
  mySchedule
} from '@/api/teacher'
export default {
  data() {
    return {
      dateData: {},
      startDate: new Date()
    };
  },
  filters: {
    weekDay_EN(weekNum) {
      return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][weekNum]
    }
  },
  methods: {
    toCourseDetail(id) {
			window.open(`#/room?id=${id}`)
    },
    isToday(day) {
      return this.$dateFmt(new Date(day), 'yyyy-MM-dd') === this.$dateFmt(new Date(), 'yyyy-MM-dd');
    },
    isEnd(end) {
      return new Date() > new Date(end)
    },
    getSchedule({startDay, endDay}) {
      this.query(new Date(startDay.full), new Date(endDay.full))
    },
    query(start, end) {
      mySchedule({
        start,
        end,
        page_no: 1,
        page_limit: 1000
      }).then(resp => {
        const schedules = resp.data.objects;
        const ArrayData = schedules.map(item => ({
          title: item.class_name,
          id: item.course_schedule_id,
          time: this.$dateFmt(new Date(item.start), 'hh:mm') + '-' + this.$dateFmt(new Date(item.end), 'hh:mm'),
          date: this.$dateFmt(new Date(item.start), 'yyyy-MM-dd'),
          start: item.start,
          end: item.end
        }))
        let ObjectData = {}
        ArrayData.forEach(item => {
          if(ObjectData[item.date]) {
            ObjectData[item.date].push({ ...item })
          } else {
            ObjectData[item.date] = [{ ...item }]
          }
        })
        this.dateData = {
          Array: ArrayData,
          Object: ObjectData
        }
      })
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
  padding: 5px;
  background: #7ED321;
  color: #333;
  display: block;
  cursor: pointer;
  font-size: 14px;
  word-break: normal;
}
.agenda-container .agenda-item.time {
  font-size: 10px;
}
.agenda-container .agenda-item.end {
  background: #F5A623;
}
</style>