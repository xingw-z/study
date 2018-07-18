<template>
  <div class="asd">
    {{aaa}}
    <button @click="aad">aad</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Asd',
  props: {
    msg: 'asd'
  },
  data () {
    return {
      aaa: 'asd'
    }
  },
  methods: {
    aad () {
      axios.post('/test').then(res => {
        console.log(res, 'success')
      }).catch(err => {
        console.log(err, 'fail')
      })
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
