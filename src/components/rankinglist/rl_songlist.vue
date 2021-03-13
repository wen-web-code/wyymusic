<template>
  <div class="box">
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        router="true"
        @close="handleClose">
        <div>
          <p class="title">云音乐特色榜</p>
          <el-menu-item 
          class="nav-item" 
          v-for="item in $store.state.data.slice(0, 4)" 
          :key="item" 
          :index="'/home/rankingList/'+item.id "
          @click="getitemid(item.id)"
          >
            <img :src="item.coverImgUrl" alt="">
            <div class="itemtxt">
              <span>{{item.name}}</span>
              <span>{{item.updateFrequency}}</span>
            </div>
          </el-menu-item>
        </div>
        <div>
          <p class="title">全球媒体榜</p>
          <el-menu-item 
          class="nav-item" 
          v-for="item in $store.state.data.slice(4)" 
          :key="item"
          :index="'/home/rankingList/'+item.id "
          >
            <img :src="item.coverImgUrl" alt="">
            <div class="itemtxt">
              <span>{{item.name}}</span>
              <span>{{item.updateFrequency}}</span>
            </div>
          </el-menu-item>
        </div>
      </el-menu>
      <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: '',
  data() {
    
  },
  mounted() {
    this.$store.dispatch('getrlsonglist')
  },
  methods: {
    getitemid(id) {
      this.$store.commit('setid', id)
      this.$store.dispatch('gettoplistsong', this.$store.state.id)
      console.log(this.$store.state.id);
    }
  }
}
</script>

<style scoped>
.box {
  display: flex;
}
  .nav-item {
    display: flex;
  }
  .nav-item img {
    width: 40px;
    height: 40px;
  }
  .el-menu {
    width: 240px;
  }
  .el-menu .title{
    font-size: 18px;
    padding: 0 20px;
    margin: 30px 0;
  }
  .el-menu-item {
    line-height: 0 !important;
  }
  .itemtxt {
    height: 56px;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  .itemtxt span {
    padding: 10px 0;
    font-size: 12px;
  }
</style>