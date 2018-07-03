import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      userName: state=>state.auth.userName,
      userId: state => state.auth.userId
    })
  }
};
