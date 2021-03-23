<template>
  <div class="newsong_box">
    <newsonghot></newsonghot>
  </div>
</template>
<script>
import newsonghot from 'components/newsong/newsong_hot'
export default {
  name: '',
  components: {
    newsonghot
  }
}
</script>
<style scoped>
  .newsong_box {
    width: 980px;
    margin: auto;
  }
</style>