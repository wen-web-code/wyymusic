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
    color: black;
    font-size: 14px;
    text-decoration: none;
  }
  li {
    list-style: none;
    color: black;
  }
  body {
    background-color: #f5f5f5;
  }
</style>