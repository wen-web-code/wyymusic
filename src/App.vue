<template>
  <div>
    <home/>
  </div>
</template>
<script>
import home from 'views/home'
export default {
  name: 'app',
  components: {
    home
  }
}
</script>
<style>
  * {
    padding: 0;
    margin: 0;
  }
  a {
    color: white;
    font-size: 14px;
    text-decoration: none;
  }
  li {
    list-style: none;
    color: white;
  }
</style>