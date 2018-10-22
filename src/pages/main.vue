<template>
	<div class="main-contain">
		<asides></asides>
		<router-view></router-view>
	</div>
</template>

<script>
import asides from "../components/aside";
export default {
  name: "mainContain",
  components: {
    asides
  },
  created() {
    const teacher_id = this.$store.state.auth.id;
    this.$store.dispatch("TEACHER_GET_BY_ID", teacher_id);
  }
};
</script>

<style scoped>
.main-contain {
  width: 1000px;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>