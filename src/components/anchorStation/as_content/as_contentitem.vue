<template>
  <div class="itembox">
    <slot name="title"></slot>
    <slot name="content"></slot>
  </div>
</template>
<script>
export default {
  name: ''
}
</script>
<style scoped>
  .itembox {
    padding: 20px;
    flex: 1;
  }
</style>