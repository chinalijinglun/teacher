<template>
    <div class="main-contain">
        <asides></asides>
        <router-view></router-view>
    </div>
</template>

<script>
    import asides from '../components/aside'
    export default {
        name: 'mainContain',
        components:{
            asides
        }
    }
</script>

<style scoped>
    .main-contain{
        width: 1000px;
        margin: 0 auto;
        overflow: hidden;
        margin-top: 20px;
    }
</style>