<template>
  <div class="box">
    <div class="top">
      <img :src="$store.state.songdata.coverImgUrl" alt="">
      <div class="top_content">
        <div>
          <p>{{$store.state.songdata.name}}</p>
        </div>
        <div>最近更新：月日（）</div>
        <div>
          <el-button  type="primary" size="small" icon="el-icon-video-play" >播放</el-button>
          <el-button size="small" icon="el-icon-position">{{$store.state.songdata.shareCount}}</el-button>
          <el-button size="small" icon="el-icon-download">下载</el-button>
          <el-button size="small" icon="el-icon-s-comment">{{$store.state.songdata.subscribedCount}}</el-button>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-title">
        <div>
          <span class="h">歌曲列表</span>
          <span class="h-text">100首歌</span>
          <span class="bf">播放：<a class="play">{{$store.state.songdata.playCount}}</a>次</span>
        </div>
      </div>
      <!-- <div class="song-item" v-for="item in $store.state" :key="item">
        <p v-for="data in item.tracks" :key="data">
          {{data.name}}
        </p>
      </div> -->
      <div>
        <el-table
          :data="$store.state.song"
          stripe
          style="width: 100%">
          <el-table-column
            type="index"
            :index="indexMethod">
          </el-table-column>
          
          <el-table-column width="40">
            <i class="el-icon-video-play"></i>
          </el-table-column>
          <el-table-column
            prop="name"
            label="标题"
          >
          </el-table-column>
          <el-table-column
            prop="dt"
            label="时长"
            :formatter="formatdata"
            >
          </el-table-column>
          <el-table-column
            prop="ar[0].name"
            label="歌手">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      songdata: []
    }
  },
  computed: {
    forname(row) {
      return row.name
    }
  },
  methods: {
    formatdata(row) {
      // console.log(row);
      let minutes = parseInt(row.dt % (1000 * 60 * 60) / (1000 * 60));
      let seconds = parseInt(row.dt % (1000 * 60) / 1000);
      return minutes + '.' + seconds 
    }
  }
}
</script>
<style scoped>
.box {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.top {
  /* border: 1px solid red; */
  height: 180px;
  padding: 40px;
  display: flex;
}
.top img{
    width: 150px;
    height: 150px;
    padding: 3px;
    border: 1px solid #ccc;
  }
.top_content {
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.top_content div {
  margin-bottom: 20px;
}
.bottom {
  padding: 40px;
}
.bottom .bottom-title{
  border-bottom: 2px solid #c20c0c;
  height: 35px;
}
.bottom .bottom-title .h {
  font-size: 20px;
}
.bottom .bottom-title .h-text {
  font-size: 10px;
  margin-left: 6px;
}
.bf {
  float: right;
  font-size: 14px;
}
.play {
  color: red;
  font-size: 12px;
}
</style>