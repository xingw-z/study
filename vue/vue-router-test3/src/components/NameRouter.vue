<template>
  <div class="NameRouter">
    NameRouter
    <br/>
    <router-link :to="{ name: 'HelloWorld' }">Helloworld</router-link>
  </div>
</template>

<script>
export default {
  name: 'NameRouter',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
