<template>
  <div class="songsheet">
    <!-- <div v-for="item in SongSheetData" :key="item" class="songitem">
      <span>{{item.copywriter}}</span>
      <img :src="item.coverImgUrl" alt="">
    </div> -->
    <div v-for="item in SongSheetData" :key="item" class="songitem">
      <el-card class="item" :body-style="{ padding: '0px' }">
        <img :src="item.coverImgUrl" class="image">
        <div style="padding: 14px;" class="itemcontext">
          <span>{{item.copywriter}}</span>
        </div>
      </el-card>
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
  .songitem span {
    width: 220px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>