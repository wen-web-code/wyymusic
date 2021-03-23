<template>
  <div class="newsong_box">
    <div class="newsong_hot">
      <div class="nav">
        <a class="title">新歌上架</a>
        <div class="tab">
        </div>
      </div>
      <div class="bottom">
        <ul>
          <li v-for="item in $store.state.albumlistdata" :key="item">
            <img :src="item.coverUrl" alt="">
            <div class="item_text">
              <a href="">{{item.albumName}}</a>
              <a href="">{{item.artistName}}</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    
    <div class="newsong_all">
      <div class="nav">
        <a class="title">新歌上架</a>
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
      </div>

      <div class="bottom">
        <ul>
          <li v-for="item in albumnewdata" :key="item">
            <img :src="item.picUrl" alt="">
            <div class="item_text">
              <a href="">{{item.name}}</a>
              <p>
                <a v-for="(value, index) in item.artists" :key="value" >
                  {{value.name}}{{item.artists.length-1 === index?'':'/'}}
                </a>
              </p>
            </div>
          </li>
        </ul>
        <el-pagination
          class="pagination"
          :page-size="20"
          :pager-count="11"
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import {getalbumnew} from 'api/newsong'
export default {
  name: '',
  data() {
    return {
      albumnewdata: []
    }
  },
  mounted() {
    this.$store.dispatch('getalbumlist', 12)
    this.getalbumnewdata('ALL', 36)
  },
  methods: {
    async getalbumnewdata(area, limit) {
      let data = await getalbumnew(area, limit)
      this.albumnewdata = data.albums
    }
  }
}
</script>
<style scoped>
.newsong_box {
  padding: 40px;
}
.nav {
  width: 980px;
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
.tab a:hover {
  text-decoration: underline;
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
.bottom ul{
  margin-top: 20px;
 display: flex;
 flex-wrap: wrap;
 justify-content: space-between;
}
.bottom ul li {
  width: 140px;
  padding-right: 10px;
  margin-bottom: 20px;
}
.bottom ul li img{
  width: 150px;
  height: 150px;
}
.item_text {
  display: flex;
  flex-direction: column;
}
.item_text a {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item_text a:hover {
  text-decoration: underline;
}
.item_text a:nth-child(2) {
 margin-top: 5px;
 color: #8c8c8c;
 font-size: 12px;
}
.item_text p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
}
.item_text p a {
  margin-top: 5px;
  color: #8c8c8c;
  font-size: 12px;
}
.newsong_all {
  margin-top: 20px;
}
.pagination {
  display: flex;
  justify-content: center;
}
</style>