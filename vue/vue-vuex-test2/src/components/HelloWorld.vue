<template>
  <div class="hello">
    HelloWorld
    <router-link to="/Nanshou">Nanshou</router-link>
    <div>{{ count }}</div>
    <button @click="add">store.state.count++</button>
    <div>{{ this.$store.getters.doneTodos }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  props: {
    msg: String
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    add () {
      this.$store.commit('increment')
    }
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
