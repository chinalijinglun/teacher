<template>
    <div class="my-course">
       <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="订单编号">
                <el-input v-model="formInline.order_id"></el-input>
            </el-form-item>
            <el-form-item label="上课时间">
                <el-date-picker
                v-model="formInline.value6"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="课程名称">
                <el-input v-model="formInline.course"></el-input>
            </el-form-item>
            <el-form-item label="课程状态">
                <el-select v-model="formInline.region" placeholder="所有状态">
                <el-option label="待付款" value="shanghai"></el-option>
                <el-option label="已付款" value="beijing"></el-option>
                <el-option label="已取消" value="beijing"></el-option>
                <el-option label="申请退款" value="beijing"></el-option>
                <el-option label="已退款" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">查询</el-button>
            </el-form-item>
        </el-form>
        <div class="tables">
            <div class="tits">
                <ul>
                    <li class="course-name">课程包名称</li>
                    <li class="process">课程进度</li>
                    <li class="student">学生</li>
                    <li class="state">状态</li>
                    <li class="oprate">操作</li>
                </ul>
            </div>
            <div class="list-table">
                <div class="list-states">
                    <span>上课时间(当前时区：Hawaii)：2018.02.27 — 04.28</span>
                </div>
                <ul>
                    <li class="course-name">ESL英语综合提升中级</li>
                    <li class="process">09/45</li>
                    <li class="student">Kira Yuan</li>
                    <li class="state under-way">进行中</li>
                    <li class="oprate check">查看详情</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formInline: {
                    order_id: '',
                    course: '',
                    region: '',
                    value6: '',
                    updated_at: {
                        gt: '',
                        lt: ''
                    }
                },
                
            }
        }
    }
</script>

<style scoped>
    ul,li{
        list-style: none;
    }
    .my-course{
        width: 800px;
        min-height: 818px;
        background-color: #fff;
        float: right;
    }
    .demo-form-inline{
        padding: 30px;
    }
    .demo-form-inline button{
        background: #FF8200;
        border: none;
    }
    .tables{
        width: 740px;
        padding: 30px;
    }
    .tits{
        width: 740px;
        background: #F5F5F5;
        border: 1px solid #E8E8E8;
        height: 38px;
    }
    .tits ul{
        overflow: hidden;
    }
    .tits ul li{
        float: left;
        text-align: center;
        line-height: 38px;
        font-size: 12px;
        color: #333333;
    }
    .course-name{
        width: 256px;
        text-align: left;
    }
    .process{
        width: 118px;
    }
    .student,.state{
        width: 119px;
    }
    .oprate{
        width: 116px;
    }
    .list-table{
        margin-top: 10px;
        background: #FFFFFF;
        border: 1px solid #BFBFBF;
        width: 738px;
        height: 100px;
    }
    .list-states{
        width: 738px;
        height: 46px;
        line-height: 46px;
        background: #F5F5F5;
        font-size: 12px;
        color: #333333;
    }
    .list-states span{
        float: right;
        margin-right: 20px;
    }
    .list-table ul{
        width: 738px;
        overflow: hidden;
        height: 53px;
    }
    .list-table ul li{
        float: left;
        text-align: center;
        line-height: 53px;
        font-size: 12px;
        color: #333333;
    }
    .list-table ul li:first-child{
        text-align: left;
        text-indent: 20px;
    }
    .list-table ul li.under-way{
        color: #FF4433;
    }
    .list-table ul li.check{
        color: #FF8244;
        cursor: pointer;
    }
</style>