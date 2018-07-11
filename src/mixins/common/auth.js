import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      userName: state => state.auth.userName,
      userId: state => state.auth.id,
      authorization: state => state.auth.authorization
    })
  },
  created() {
    // if(!this.userName || !this.userId || !this.authorization) {
    //   this.$loginOut();
    // }
  }
};
