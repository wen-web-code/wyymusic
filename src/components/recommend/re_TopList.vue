<template>
  <div>
    <div class="nav">
      <a class="title">榜单</a>
      <div class="tab">
      </div>
      <div class="more">
        <a href="#">更多></a>
      </div>
    </div>

    <div class="toplist_box">
      <div class="toplist_item" >
        <el-card class="box-card" v-for="item in toplistdata" :key="item">
          <div class="clearfix">
            <img :src="item.playlist.coverImgUrl" alt="">
            <div class="title">
              <p>{{item.playlist.name}}</p>
              <div class="icon">
                <a href="#"><i class="iconfont icon-bofang"></i></a>
                <a href="#"><i class="iconfont icon-shoucang"></i></a>
              </div>
            </div>
          </div>
          <div v-for="(data,index) in item.playlist.tracks.slice(0, 11)" :key="data" class="text item">
            <span >{{index + 1}}</span>
            <a href="#">{{data.name}}</a>
          </div>
        </el-card>
      </div>
    </div>

  </div>
</template>
<script>
import { gettoplist, gettoplistsong} from "api/home";
export default {
  name: '',
  data() {
    return {
      toplistdata: [],
    }
  },
  created() {
    this.gettoplistdata()
  },
  methods: {
    async gettoplistdata () {
      let {list} = await gettoplist()
      for (let item of list.slice(0, 4)) {
        this.toplistdata.push(await gettoplistsong(item.id))
      }
      console.log(this.toplistdata);
    },
  }
}
</script>
<style scoped>
a{
  color: black;
}
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
li a{
color: blue;
}
.toplist_box {
  width: 1200px;
  margin: auto;
  margin-top: 20px;
  
}
.toplist_item {
  display: flex;
}
.box-card {
  width: 200px;
  flex: 1;
}
.clearfix {
  display: flex;
}
.clearfix img{
  width: 100px;
  height: 100px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  border: 1px solid #EBEEF5;
}
.title {
  margin-left: 30px;
}
.title .icon {
  margin-top: 10px;
}
.title .icon .iconfont{
  font-size: 30px;
  color: rgba(0,0,0,.5);
  padding: 10px;
}
.text {
  height: 30px;
  margin-top: 10px;
}
.text a{
  color: black;
  padding-left: 10px;
}
.text a:hover {
  text-decoration: red underline;
  color: red;
}
</style>