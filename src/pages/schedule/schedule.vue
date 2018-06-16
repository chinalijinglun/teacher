<template>
    <div class="soon">
        <full-calendar :events="fcEvents" locale="en"></full-calendar>
    </div>
</template>
<script>
    var demoEvents = [
        {
            title : 'Sunny Out of Office',
            start : '2016-08-25',
            end : '2017-07-27'
        }
    ]
    export default {
        data () {
            return {
                fcEvents : demoEvents
            }
        },
        components : {
            'full-calendar': require('vue-fullcalendar')
        }
    }
</script>
<style>
    .soon {
        width: 800px;
        min-height: 800px;
        margin-left: 20px;
        float: left;
    }

</style>