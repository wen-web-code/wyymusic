<template>
  <div class="box">
    <ascontentitem>
      <template #title>
        <asitemtitle>
          <span class="title">推荐节目</span>
        </asitemtitle>
      </template>
      <template #content>
        <asitemcontent>
          <ul class="content-box">
            <li v-for="item in $store.state.pgrecommenddata" :key="item">
              <img :src="item.blurCoverUrl"/>
              <div class="text">
                <a href="#">{{item.name}}</a>
                <a href="#">{{item.dj.brand}}</a>
              </div>
              <a class="sign">{{item.radio.category}}</a>
            </li>
          </ul>
        </asitemcontent>
      </template>
    </ascontentitem>
    <!-- ------------------------------- -->
    <ascontentitem>
      <template #title>
        <asitemtitle>
          <span class="title">节目排行榜</span>
        </asitemtitle>
      </template>
      <template #content>
        <asitemcontent>
          <ul class="content-box">
            <li v-for="item in $store.state.djtoplistdata" :key="item">
              <img :src="item.program.blurCoverUrl"/>
              <div class="text">
                <a href="#">{{item.program.name}}</a>
                <a href="#">{{item.program.radio.name}}</a>
              </div>
              <span class="hot">
                <i class="hot-rd">
                </i>
              </span>
            </li>
          </ul>
        </asitemcontent>
      </template>
    </ascontentitem>
    <!-- ---------------- -->
    
  </div>
</template>
<script>
import ascontentitem from 'components/anchorStation/as_content/as_contentitem'
import asitemcontent from 'components/anchorStation/as_content/as_itemcontent'
import asitemtitle from 'components/anchorStation/as_content/as_itemtitle'

export default {
  name: '',
  components: {
    ascontentitem,
    asitemcontent,
    asitemtitle
  },
  mounted() {
    this.$store.dispatch('getpgrecommend')
    this.$store.dispatch('getdjtoplist')
  }
}
</script>
<style scoped>
  .box {
    display: flex;
  }
  .title {
    font-size: 24px;
    cursor: pointer;
  }
  .title:hover {
    text-decoration: underline;
  }
  .content-box img{
    width: 48px;
    height: 48px;
  }
  .content-box {
    border: 1px solid #e2e2e2;
  }
  .content-box li {
    display: flex;
    padding: 10px;
  }
  .content-box li:nth-child(2n) {
    background-color: #e6e6e6;
  }
  .content-box li:hover {
    background-color: rgba(0, 0, 0, .2);
  }
  
  .content-box .text {
    display: flex;
    flex-direction: column;
    width: 254px;
    margin-left: 10px;
  }
  .content-box .text a {
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .content-box .text a:nth-child(1) {
    padding-bottom: 15px;
  }
  .content-box .text a:nth-child(2) {
    color: #b3b3b3;
  }
  .sign {
    margin-top: 12px;
    margin-left: 15px;
    border:1px solid rgba(0, 0, 0, .2);
    font-size: 12px;
    height: 16px;
    padding:2px 4px;
    line-height: 16px;
  }
  .hot {
    width: 100px;
    height: 10px;
    background-color: darkgray;
    margin-top: 16px;
    margin-left: 10px;
    border-radius: 3px;
    position: relative;
  }
  
</style>