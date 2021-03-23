<template>
  <div class="as_titlebar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: '',
}
</script>
<style scoped>
  .as_titlebar {
    display: flex;
    flex-wrap: wrap;
  }
</style>