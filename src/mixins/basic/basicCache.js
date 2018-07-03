export default {
  created() {
    this.form = JSON.parse(this.$getSession(this.$route.fullPath));
  },
  watch: {
    form: {
      handler(v) {
        this.$setSession(this.$route.fullPath, JSON.stringify(v));
      },
      deep: true
    }
  }
};
