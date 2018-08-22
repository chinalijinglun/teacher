<template>
  <iframe width="100%" :height="frameHeight" ref="roomFrame" :src="fileUrl" frameborder="0" />
</template>
<script>
  import { viewCoureware } from '@/api/live'
  import { teacherCourseRoom } from "@/api/teacher";
  import { mapState } from 'vuex';
  export default {
    data() {
      return {
        fileUrl: '',
        frameHeight: window.innerHeight
      }
    },
    computed: {
      ...mapState({
        userId: state => state.auth.id,
        userName: state => state.auth.userName
      })
    },
    created() {
      this.getFileUrl(this.$route.query.id)
    },
    methods: {
      getFileUrl(ware_uid) {
        viewCoureware({
          username: this.userName,
          ware_uid: ware_uid
        }).then( resp=> {
          console.log(resp)
          this.fileUrl = resp.data.ware_url
        })
      }
    }
  }
</script>
