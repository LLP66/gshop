<template>
  <div>
    个人中心
    <span>{{userInfo.name}}</span>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
        name: "Userinfo",
        computed:{
            ...mapState(['userInfo'])
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
