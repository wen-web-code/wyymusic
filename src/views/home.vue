<template>
  <div>
    <navbar></navbar>
    <homenav></homenav>
    <router-view></router-view>
  </div>
</template>
<script>
import homenav from 'components/homenav'
import navbar from 'components/navbar'

export default {
  name: '',
  components:{
    homenav,
    navbar
  }
}
</script>
<style scoped>
  * {
    padding: 0;
    margin: 0;
  }
</style>