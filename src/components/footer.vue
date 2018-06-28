<template>
    <div class="footers">
        <div class="center">
            <span>关于我们</span>
            <span>|</span> 
            <span>联系我们</span>
            <span>|</span>
            <span>加入我们</span>
            <span>|</span>     
            <span>常见问题</span>
            <div class="right">
                京ICP备15062105号-1     京公网安备 11010802020457号
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .footers{
        width: 100%;
        height: 55px;
        background: #06060B;
    }
    .center{
        width: 1400px;
        margin: 0 auto;
        height: 55px;
        line-height: 55px;
    }
    .center span{
        margin-right: 10px;
        font-size: 14px;
        color: #FFFFFF;
        cursor: pointer;
    }
    .right{
        float: right;
        font-size: 14px;
        color: #FFFFFF;
    }
</style>