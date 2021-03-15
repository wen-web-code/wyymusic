<template>
  <div class="bottom-box">
    <div class="bt_item" v-for="item in $store.state.highqualitydata" :key="item">
      <el-card :body-style="{ padding: '0px' }">
        <img :src="item.coverImgUrl" class="image">
        <div class="item_message" style="padding: 14px;">
          <span class="item_title">{{item.name}}</span>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <span><span>by:</span>{{item.creator.nickname}}</span>
          </div>
        </div>
      </el-card>
      <!-- {{item}} -->
    </div>

    <el-pagination
      class="pagination"
      :page-size="20"
      :pager-count="11"
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: '',
  mounted() {
    this.$store.dispatch('gethighquality', {before:'', limit:12})
  }
}
</script>
<style scoped>
    li {
      color: black !important;
    }
  .bottom-box {
    margin-top: 20px;
    width: 1110px;
    /* border: 1px solid red; */
    display: flex;
    flex-wrap: wrap;
  }
  .bt_item {
    /* flex: 1; */
    padding: 10px;
    width: 200px;
  }
  .bt_item img {
    width: 200px;
    height: 200px;
  }
  .item_message .item_title {
    display: block;
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .pagination {
    margin: auto;
    
  }
</style>