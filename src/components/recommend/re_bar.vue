<template>
  <div class="homebar">
    
      <el-carousel style="width:90%;margin:auto"  type="card" height="300px" initial-index=2>
        <el-carousel-item v-for="item in bardata" :key="item" >
          <el-image class="barimg medium" :src="item.imageUrl" alt=""></el-image>
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
  created() {//03085652
    this.getdata()
  },
  methods:{
    async getdata(){
      return await gethomebar().then(res => {
        this.bardata = res.banners
        // console.log(this.bardata);
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