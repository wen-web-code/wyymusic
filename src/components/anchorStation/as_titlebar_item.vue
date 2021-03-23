<template>
  <div class="as_titlebar_item">
    <slot name="icon"></slot>
    <slot name="icon-text"></slot>
  </div>
</template>
<script>
export default {
  name: '',
  
}
</script>
<style scoped>
  .as_titlebar_item {
    margin: 15px 25px;
    cursor: pointer;
  }
  .as_titlebar_item:hover {
    background-color: rgba(0, 0, 0, .1);
  }
</style>