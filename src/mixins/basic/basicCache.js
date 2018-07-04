export default {
  created() {
    // const sform = this.$getSession(this.$route.fullPath);
    // this.form = JSON.parse(this.$getSession(this.$route.fullPath));
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
