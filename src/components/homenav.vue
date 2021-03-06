<template>
  <div class="homenav">
    <div class="content">
      <el-col :span="12" :offset="6">
        <el-menu 
        default-active="/home/recommend" 
        class="el-menu-demo" 
        mode="horizontal"
        router="true"
        @select="handleSelect">
            <el-menu-item index="/home/recommend">推荐</el-menu-item>
            <el-menu-item index="/home/rankingList">排行榜</el-menu-item>
            <el-menu-item index="/home/songSheet">歌单</el-menu-item>
            <el-menu-item index="/home/anchorStation">主播电台</el-menu-item>
            <el-menu-item index="/home/singer">歌手</el-menu-item>
            <el-menu-item index="/home/newSong">新碟上架</el-menu-item>
        </el-menu>
      </el-col>
    </div>
  </div>
</template>
<script>
export default {
  name: ''
}
</script>
<style scoped>
  .homenav {
    background-color: #c20c0c;
    height: 34px;
  }
  
  .el-menu {
    height: 33px;
    background-color: #c20c0c;
    position: relative;
  }
  .el-menu.el-menu--horizontal {
    border: none;
  }
  
  .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: none;
    border-radius: 30px;
    padding: 1px 10px;
    
    color: white;
  }

  .el-menu--horizontal>.el-menu-item {
    height: 20px;
    line-height: 20px;
    color: white;
    border: none;
    margin-top: 7px;
  }
  
  .el-menu-item:hover {
    background-color: transparent !important;
    color: white !important;
  }
  
</style>