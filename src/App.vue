<template>
    <div id="app">
        <h1>vue-ssr</h1>
        <router-view class="view"></router-view>
        <router-link to='/com1' >quni</router-link>
    </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>