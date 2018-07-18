<template>
  <div id="app">
    <div class="flex">
      <router-link to="/HelloWorld">HelloWorld</router-link>
      <router-link to="/Asd">Asd</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.flex{
  display: flex;
  justify-content: space-around;
}
</style>
