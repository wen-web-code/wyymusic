<template>
  <div class="as_recommend">
    <div v-for="value in 6" :key="value">
      <asitemtitle>
        <span class="title"><a href="#">{{}}</a><span>·</span>电台</span>
      </asitemtitle>
      <div class="content_box" >
          <div class="content_item" v-for="item in $store.state.djrecommenddata.slice(0, 4)" :key="item">
            <img style="width:120px;" :src="item.picUrl" alt="">
            <div class="item_txt">
              <a href="#">{{item.name}}</a>
              <p>{{item.rcmdtext}}</p>
            </div>
          </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import asitemtitle from 'components/anchorStation/as_content/as_itemtitle'
export default {
  name: '',
  mounted() {
    this.$store.dispatch('getdjrecommend', {type:2,limit:4})
  },
  components: {
    asitemtitle
  }
}
</script>
<style scoped>
  .title {
      font-size: 24px;
      cursor: pointer;
  }
  .title a {
    font-size: 24px;
  }
  .title a:hover {
    text-decoration: underline;
  }
  .as_recommend {
    padding:20px
  }
  .content_box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .content_item {
    display: flex;
    width: 470px;
    margin: 20px 0;
  }
  .item_txt {
    padding: 20px;
  }
  .item_txt a {
    font-size: 20px;
  }
  .item_txt a:hover {
    text-decoration: underline;
  }
  .item_txt p {
    margin-top: 10px;
    color: #666666;
    font-size: 14px;
  }
</style>