<template>
  <div class="newsong" style="margin-top:30px">
    <div class="nav">
      <a class="title">新歌上架</a>
      <div class="tab">
      </div>
      <div class="more">
        <a href="#">更多></a>
      </div>
    </div>
    <div class="newsong-item">
      <div class="itemsbox">
        <div class="item" v-for="item in newsongdata" :key="item">
          <img :src="item.coverUrl" alt="">
          <p>{{item.albumName}}</p>
          <p>{{item.artistName}}</p>
        </div>
      </div>
      <!-- <button class="btn" @click="removeitem">111</button> -->
    </div>
  </div>
</template>
<script>
import { gethomeNewSong } from "api/home";
export default {
  name: '',
  data () {
    return {
      newsongdata: [],
      left: 0
    }
  },
  created() {
    this.getnewsongdata()
  },
  mounted(){
    this.removeitem()
	},
  methods: {
    async getnewsongdata () {
      await gethomeNewSong().then(res => {
        this.newsongdata = res.products
      })
    },
    removeitem() {
      const itembox = document.getElementsByClassName('itemsbox')[0]
      setInterval(() => {
        itembox.style.left = -this.left + 'px'
          if(this.left == -850) {
            this.left = 0
          }
        this.letf += -170
      },1000)
    }
  }
}
</script>
<style scoped>
/* @import 'swiper/dist/css/swiper.css'; */
  .nav {
  width: 1200px;
  border-bottom: 2px solid red;
  padding-bottom: 5px;
  margin: auto;
  display: flex;
  position: relative;
}
.nav .title {
  font-size: 24px;
  color: black;
}
.tab {
  margin-left: 40px;
  position: absolute;
  left: 80px;
  bottom: 5px;
}
.tab a{
  color: black;
}
.line {
  margin: 0 10px;
  font-size: 10px;
}
.more {
  position: absolute;
  right: 0;
  bottom: 5px;
  margin-right: 20px;
}
.more a{
  color: black;
}
.newsong-item {
  width: 1200px;
  margin: auto;
  margin-top: 30px;
  position: relative;
  height: 250px;
  overflow: hidden;
}
.itemsbox {
  display: flex;
  position: absolute;
  /* left: -400px; */
  /* overflow: hidden; */
}
.newsong-item .item {
  flex: 1;
  margin-right: 10px;
}
.newsong-item .item img {
  width: 160px;
  height: 160px;
}
.newsong-item .item p{
  width: 200px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.btn {
  position: absolute;

}
</style>