<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
  

  header {
    background: lightgoldenrodyellow;
    padding: 10px 20px;
  }
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
  ul li {
    padding: 0 10px;
    border: 1px solid #ccc;
  }
  a {
    text-decoration: none;
  }

  footer {
    width: 100%;
    height: 10%;
    background: lightgray;
  }
</style>
