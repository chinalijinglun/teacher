<template>
  <div id="app">
    <headers v-if="$route.path !== '/room'"></headers>
    <div class="main-text">
      <router-view/>
    </div>
    <footers v-if="$route.path !== '/room'"></footers>
  </div>
</template>

<script>
import headers from '@/components/header'
import footers from '@/components/footer'
export default {
  name: 'App',
  created () {
    console.log(this.$route)
  },
  components:{
    headers,
    footers
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
  position: relative;
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
