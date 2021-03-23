<template>
  <div>
    <astitlebar>
      <astitlebaritem v-for="item in $store.state.catelistdata.categories" :key="item">
        <template #icon>
          <div class="icon" :style="`background-image: url(${item.picWebUrl});`"></div>
        </template>
        <template #icon-text>
          <p>{{item.name}}</p>
        </template>
      </astitlebaritem>
    </astitlebar>
  </div>
</template>
<script>
import astitlebar from 'components/anchorStation/as_titlebar'
import astitlebaritem from 'components/anchorStation/as_titlebar_item'
export default {
  name: '',
  data() {
    
  },
  components: {
    astitlebar,
    astitlebaritem
  },
  mounted() {
    this.$store.dispatch('getdjcatelist')
  }
}
</script>
<style scoped>
.as_titlebar_item {
  width: 70px;
  height: 70px;
}
  .as_titlebar_item div  {
    height: 48px;
    width: 48px;
    margin: 2px auto 0;
  }
  .as_titlebar_item p {
    font-size: 12px;
    text-align: center;
    background-image: url();
  }
  .icon {
    width: 48px;
    height: 48px;
  }

</style>