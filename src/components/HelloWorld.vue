<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <h2>{{mode}}</h2>
    </div>
    我司改改对的对的
    <div><span>{{count}}</span></div>
    <div><button @click="count++">+1</button></div>
    <div>
      我显示{{length}}
    </div>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      mode: process.env.VUE_ENV === "server" ? "server" : "client",
      count: 2,
      length: this.$store.getters.doneTodosCount
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
