<template>
  <div id="app">
    <headers></headers>
    <div class="main-text">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import headers from '@/components/header'
export default {
  name: 'App',
  components:{
    headers
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
body{
  background: #F3F3F3;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
.main-text{
  min-width: 1200px;
}
</style>
