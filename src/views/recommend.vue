<template>
  <div>
    <rebar></rebar>
    <resongsheet></resongsheet>
    <renewsong></renewsong>
    <retoplist></retoplist>
  </div>
</template>
<script>
import rebar from 'components/recommend/re_bar'
import resongsheet from 'components/recommend/re_SongSheet'
import renewsong from 'components/recommend/re_NewSong'
import retoplist from 'components/recommend/re_TopList'

export default {
  name: '',
  components: {
    rebar,
    resongsheet,
    renewsong,
    retoplist
  }
}
</script>
<style scoped>
  
</style>