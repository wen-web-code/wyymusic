<template>
  <div class="navbar">
    <div class="context">
      <!-- <el-col :span="18" :offset="3"> -->
      <div class="nav">
        <span class="logo">网易云音乐</span>
        <el-menu 
        default-active="1" 
        class="el-menu-demo" 
        mode="horizontal"
        background-color="#242424"
        active-text-color="#ffffff" 
        @select="handleSelect">
            <el-menu-item index="1">发现音乐</el-menu-item>
            <el-menu-item index="2">我的音乐</el-menu-item>
            <el-menu-item index="3">朋友</el-menu-item>
            <el-menu-item index="4">商城</el-menu-item>
            <el-menu-item index="5">音乐人</el-menu-item>
            <el-menu-item index="6">下载客户端</el-menu-item>
        </el-menu>

        <el-input class="navinput" size="small" v-model="input" placeholder="音乐/商品/电台/用户"></el-input>
        <el-button round size="small">创作者中心</el-button>
        <a href="#" >登录</a>
        </div>
      <!-- </el-col> -->
    </div>
  </div>
</template>
<script>
export default {
  name: ''
}
</script>
<style scoped>
.navbar {
  width: 100%;
}
  .context {
    background-color: #242424;
    height: 66px;
  }
  .nav {
    width: 1200px;
    margin: auto;
  }
  .logo {
    float: left;
    width: 200px;
    font-size: 25px;
    color: white;
    line-height: 65px;
  }
  .el-menu {
    height: 65px;
    float: left;
  }
  .el-menu.el-menu--horizontal {
    border: none;
  }
  .el-menu-item.is-active {
    background-color: #000000 !important;
    border-bottom: 2px solid #c20c0c !important;
  }
  .el-menu--horizontal>.el-menu-item {
    height: 66px;
    line-height: 66px;
  }
  .navinput {
    width: 150px;
    line-height: 67px;
    margin-left: 30px;
  }
  .el-input__inner {
    border-radius: 40%;
  }
  .el-button {
    background-color: transparent;
    color: white;
    margin-left: 20px;
    margin-right: 10px;
  }
</style>