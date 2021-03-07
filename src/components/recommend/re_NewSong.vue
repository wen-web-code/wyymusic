<template>
  <div>
    
  </div>
</template>
<script>
import { gethomeNewSong } from "api/home";
export default {
  name: '',
  created() {
    this.getnewsongdata()
  },
  methods: {
    getnewsongdata () {
      gethomeNewSong().then(res => {
        console.log(res);
      })
    }
  }
}
</script>
<style scoped>
  
</style>