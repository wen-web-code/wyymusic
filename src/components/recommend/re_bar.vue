<template>
  <div class="homebar">
    
      <el-carousel style="width:90%;margin:auto"  type="card" height="300px">
        <el-carousel-item v-for="(item) in bardata" :key="item" >
          <img class="barimg medium" :src="item.imageUrl" alt="">
        </el-carousel-item>
      </el-carousel>
      
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
  mounted() {//03085652
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
  .homebar {
    margin: auto;
    margin-top: 30px;
  }
  .barimg{
    width: 100%;
    height: 100%;
  }
</style>