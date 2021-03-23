<template>
  <div class="title-box">
    <slot></slot>
    <a class="more">更多></a>
  </div>
</template>
<script>
export default {
  name: ''
}
</script>
<style scoped>
  a {
    color: black;
  }
  a:hover {
    text-decoration: underline;
  }
  .title-box {
    border-bottom: 2px solid red;
    padding-bottom: 3px;
  }
  .more {
    float: right;
    font-size: 10px;
    margin-top: 14px;
  }
</style>