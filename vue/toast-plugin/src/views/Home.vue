<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="jntm" @click="jjj"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    jjj() {
      this.$toast('asd')
    }
  },
}
</script>

<style lang="less" scoped>
.jntm{
  width: 100px;
  height: 100px;
  background-color: aqua;
  position: absolute;
}
</style>
