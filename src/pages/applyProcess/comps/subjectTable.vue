<template>
  <div class="subject-table">
    <el-table
      :data="subjectTable"
      @selection-change="handlerSelectionChange"
      border
    >    
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="Subject">
        <template slot-scope="{row}">
          <course-type-select v-model="row.subject_id"></course-type-select>
        </template>
      </el-table-column>
      <el-table-column
        width="441px"
        label="Grade">  
        <template slot-scope="{row}">
          <el-radio-group v-model="row.grade">
            <el-row>
              <el-radio class="mini-radio" label="1">Kindergarten</el-radio>
              <el-radio class="mini-radio" label="2">Elementary School</el-radio>
              <el-radio class="mini-radio" label="3">Middle School</el-radio>
            </el-row>
            <el-row>
              <el-radio class="mini-radio" label="4">High School</el-radio>
              <el-radio class="mini-radio" label="5">College</el-radio>
              <el-radio class="mini-radio" label="6">Adults</el-radio>
            </el-row>
          </el-radio-group>
        </template>
      </el-table-column>
    </el-table>
    <div class="table-footer">
      <el-button class="gray" size="mini" @click="add">+ Add Subject</el-button>
      <el-button class="gray" size="mini" @click="remove">- Delete Subject</el-button>
    </div>
    <el-input 
      style="margin-top: 20px"
      :rows="4"
      type="textarea" 
      v-model.trim="other_subject" 
      placeholder="Other Teaching Academic Subject"
    ></el-input>
  </div>
</template>
<script>
  import TeacherSubject from '@/model/TeacherSubject'
  import * as dom from '@/utils/dom'
  export default {
    name: 'subject-table',
    data() {
      return {
        other_subject: '',
        subjectTable: [],
        selectRow: []
      }
    },
    props: ['type', 'require'],
    methods: {
      add() {
        this.subjectTable.push(new TeacherSubject({type: this.type}))
      },
      handlerSelectionChange(e) {
        this.selectRow = e.map(item => this.subjectTable.indexOf(item))
      },
      remove() {
        if(!this.selectRow.length) {
          this.$message.error('请选择要删除的记录！')
        } else {
          const newTable = [...this.subjectTable]
          this.selectRow.forEach(i => newTable[i] = undefined)
          this.subjectTable = newTable.filter(item => item)
        }
      },
      getForm() {
        if(this.other_subject) {
          return [{
            subject_name: this.other_subject,
            type: this.type
          },...this.subjectTable]
        }
        return [...this.subjectTable]
      },
      valid() {
        if(!this.subjectTable.length && !this.other_subject) {
          if(this.require) {
            return {
              msg: 'subject is required',
              status: false
            }
          }
          return {
            msg: 'success',
            status: true
          }
        }
        for(let i in this.subjectTable) {
          const item = this.subjectTable[i]
          let cell
          if(!item.subject_id) {
            return {
              msg: 'subject is required!',
              status: false
            }
          }
          if(!item.grade) {
            return {
              msg: 'grade is required',
              status: false
            }
          }
        }
        return {
          msg: 'success',
          status: true
        }
      }
    }
  }
</script>
<style>
.table-footer {
  width: 100%;
  background: #F5F5F5;
  border: 1px solid #E8E8E8;
  padding: 10px;
  text-align: right;
  border-top: none;
  box-sizing: border-box;
}
.mini-radio .el-radio__label{
  font-size: 12px;
  padding-left: 9px;
  text-align: left;
}
.mini-radio.el-radio+.mini-radio.el-radio {
  margin-left: 0px;
}
.mini-radio.el-radio {
  width: 140px;
  line-height: 20px;
}
.el-table__row td.error_td {
  border-color: red;
}
</style>

