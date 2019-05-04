
<template>
  <div class="home">
    <div>home</div>
    <div class="cbl">
      <router-link to="homePage1">homePage1</router-link>
      <br>
      <router-link to="homePage2">homePage2</router-link>
      <br>
      <router-link to="homePage3">homePage3</router-link>
    </div>
    <div class="nav">
      <router-link v-for="(item, index) in tags" :to="item.path" :key="index"
      class="nav-item">{{ item.name }}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */ 
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
      tags: []
    }
  },
  created() {
    this.set(this.$route)
  },
  methods: {
    set(route) {
      const scunzai = this.tags.some(item => {
        return item.path === route.fullPath
      })
      const ttt = this.$route.matched[1].components.default;
      let _t = '';
      for(let item in ttt) {
        if (item === 'name') {
          _t = ttt[item];
        }
      }
      if (!scunzai) {
        this.tags.push({
          title: route.meta.title,
          path: route.fullPath,
          name: _t
        })
      }
    }
  },
  watch: {
    /* eslint-disable */
    $route(newVal, oldVal) {
      // console.log('newVal', newVal, 'oldVal', oldVal);
      this.set(this.$route)
    }
  }
}
</script>

<style lang="less">
.cbl{
  width: 200px;
  height: 500px;
  background-color: greenyellow;
  position: fixed;
  left: 0;
  top: 100px;
}
.nav{
  width: 750px;
  height: 100px;
  margin-left: 200px;
  display: flex;
  .nav-item{
    display: block;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border: 1px solid #000;
  }
}
</style>