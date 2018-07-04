export default {
  created() {
    const formStr = this.$getSession(this.$route.fullPath);
    if(formStr) {
      const form = JSON.parse(this.$getSession(this.$route.fullPath));
      for(let k in form) {
        if(form[k] !== undefined&&this.form[k]!==undefined) {
          this.form[k] = form[k];
        }
      }
    }
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
