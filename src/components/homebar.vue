<template>
  <div>
    <div  v-for="item in bardata" :key="item">
      <img :src="item.imageUrl" alt="">
    </div>
    
  </div>
</template>
<script>
import {gethomebar} from 'api/home'
export default {
  name: '',
  data(){
    return {
      bardata: []
    }
  },
  created() {
    this.getdata()
  },
  methods:{
    getdata(){
      return gethomebar().then(res => {
        this.bardata = res.banners
        console.log(this.bardata);
      })
      
    }
  }
}
</script>
<style scoped>
  
</style>