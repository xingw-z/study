<template>
  <div class="llink">
    <a
      v-bind:href="url"
      class="nav-link"
    >
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: 'llink',
  props: {
    url: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
