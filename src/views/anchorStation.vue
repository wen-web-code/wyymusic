<template>
  <div class="as_box">
    <astitle></astitle>
    <ascontent></ascontent>
    <asrecommend></asrecommend>
  </div>
</template>
<script>
import astitle from 'components/anchorStation/as_title'
import ascontent from 'components/anchorStation/as_content/as_content'
import asrecommend from 'components/anchorStation/as_recommend/as_recommend'
export default {
  name: '',
  components: {
    astitle,
    ascontent,
    asrecommend
  }
}
</script>
<style scoped>
  .as_box {
    width: 1000px;
    margin: auto;
    /* border: 1px solid red; */
  }
</style>