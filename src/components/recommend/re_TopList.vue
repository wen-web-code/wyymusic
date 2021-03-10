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

    <div>
      
    </div>

  </div>
</template>
<script>
import { gettoplist } from "api/home";
export default {
  name: '',
  data() {
    return {
      toplistdata: [],
      listId: []
    }
  },
  created() {
    this.gettoplistdata()
  },
  methods: {
    async gettoplistdata () {
      await gettoplist().then(res => {
        console.log(res.list.slice(0, 3));
      })
    },
  }
}
</script>
<style scoped>
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
</style>