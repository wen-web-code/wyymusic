<template>
  <div class="box">
    <div class="nav">
      <a class="title">全部</a>
      <div class="tab">
        <el-dropdown trigger="click" placement="bottom">
          <span class="el-dropdown-link" placement="top">
            选择分类<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <template #dropdown>
            <div class="drop-box">
              <el-dropdown-menu >
                <div class="drop-title">
                    <span class="drop-link">
                      全部类型
                    </span>
                </div>
                <div class="item-box">
                  <div v-for="( item, index ) in $store.state.playlisttype.categories" :key="item">
                    <div class="item">
                      <span class="item-title">{{item}}</span>
                      <div class="item-context">
                        <a href="#"
                        class="item-txt" 
                        v-for="data in $store.state.playlisttype.sub" 
                        :key="data"
                        v-show="Number(index) == data.category">
                          <!-- {{Number(index) == data.category?data.name + '|':''}}  -->
                          {{data.name}}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </el-dropdown-menu>
            </div>
          </template>
        </el-dropdown>
      </div>
      <div class="more">
        <div class="rm">
          热门
        </div>
      </div>
    </div>
    
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: '',
  mounted() {
    this.$store.dispatch('getplaylisttype')
  }
}
</script>
<style scoped>
a {
  color: #C20C0C;
}
  .box {
    width: 1100px;
    margin: auto;
    padding: 20px;
  }
    .nav {
  width: 1100px;
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
  bottom: 10px;
}
.tab a{
  color: black;
}
.el-dropdown-link {
  padding:5px 10px;
  border: 1px solid rgba(0, 0, 0, .3);
  border-radius: 4px;
  color:#C20C0C;
  cursor: pointer;
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
.rm {
 /* border: 1px solid red;  */
  border-radius: 5px;
  padding: 5px;
  color: white;
  font-size: 12px;
  background-color: #C20C0C;
  cursor: pointer;
}
.link-item {
  display: none;
}

.drop-box {
  /* width: 400px; */
}
.drop-link {
  border: 1px solid rgba(0, 0, 0, .3);
  padding: 4px;
  border-radius: 5px;
}
.drop-title {
  height: 20px;
  padding: 15px 20px;
  border-bottom:1px solid rgba(0, 0, 0, .3);
  cursor: pointer;
}
.item {
  
  display: flex;
  line-height: 40px;
}
.item-title {
  border-right: 1px solid rgba(0, 0, 0, .3);
  padding: 7px;
}
.item-context {
  width: 480px;
}
.item-txt {
  padding:0 6px;
  line-clamp: 2;
  font-size: 12px;
}
</style>