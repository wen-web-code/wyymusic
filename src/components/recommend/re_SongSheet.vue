<template>
  <div class="songbox" style="margin-top:30px">
    <div class="nav">
      <a class="title">热门推荐</a>
      <div class="tab">
        <a href="">华语</a>
        <span class="line">|</span>
        <a href="">流行</a>
        <span class="line">|</span>
        <a href="">摇滚</a>
        <span class="line">|</span>
        <a href="">民谣</a>
        <span class="line">|</span>
        <a href="">电子</a>
      </div>
      <div class="more">
        <a href="#">更多></a>
      </div>
    </div>
    <div class="songsheet">
      <div v-for="item in SongSheetData" :key="item" class="songitem">
        <el-card class="item" :body-style="{ padding: '0px' }">
          <div class="imgbox"  >
            <img :src="item.coverImgUrl" class="image">
            <div class="bottom" >
              <div class="bottom-box">
                <span class="iconfont icon-bofang"></span>
                <p>{{item.playCount >= 10000 ? (item.playCount/10000).toFixed(0)+'万' : item.playCount}}</p>
              </div>
            </div>
          </div>
          <div style="padding: 14px;" class="itemcontext">
            <span class="itemtxt">{{item.copywriter}}</span>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script>
import {gethomeSongSheet} from 'api/home'
export default {
  name: '',
  data() {
    return {
      SongSheetData: {}
    }
  },
  created() {
    this.getSongSheetdata()
  },
  methods: {
    getSongSheetdata() {
      return gethomeSongSheet().then(res => {
        // console.log(res.playlists);
        this.SongSheetData = res.playlists
      })
    }
  }
}
</script>
<style scoped>
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
.songsheet {
  display: flex;
  width: 1200px;
  overflow: hidden;
  flex-wrap: wrap;
  margin: auto;
  justify-content: space-between;
}
  .songitem .item{
    width: 220px;
    flex: 1;
    margin-top: 20px;
  }
  .songitem img{
    width: 220px;
    height: 220px;
  }
  .imgbox {
    position: relative;
  }
  .bottom {
    display: none;
    width: 100%;
    height: 98%;
    position: absolute;
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .3);
    
  }
  .bottom-box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .bottom span {
    color: rgba(255, 255, 255, .7);
    font-size: 50px;
    
  }
  .bottom p {
    color:red;
  }
  .imgbox:hover .bottom {
    display: block;
    
  }
  .songitem .itemtxt {
    width: 200px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>