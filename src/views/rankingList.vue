<template>
  <div class="rank-box">
    <rlsonglist></rlsonglist>
  </div>
</template>
<script>
import rlsonglist from 'components/rankinglist/rl_songlist'
export default {
  name: '',
  components: {
    rlsonglist
  }
}
</script>
<style scoped>
  .rank-box {
    width: 1000px;
    height: 100%;
    margin: auto;
  }
</style>