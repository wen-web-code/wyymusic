<template>
  <div>
    <navbar></navbar>
    <homenav></homenav>
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>
<script>
import homenav from 'components/homenav'
import navbar from 'components/navbar'
import bottom from 'components/bottom'

export default {
  name: '',
  components:{
    homenav,
    navbar,
    bottom
  }
}
</script>
<style scoped>
  * {
    padding: 0;
    margin: 0;
  }
</style>