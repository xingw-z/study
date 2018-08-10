<template>
  <div id="Signin">
    <Input v-model="username" placeholder="username" style="width: 300px" />
    <br />
    <Input v-model="password" placeholder="password" style="width: 300px" />
    <br />
    <Button @click="submit">登录</Button>
  </div>
</template>

<script>

export default {
  name: 'Signin',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submit () {
      this.$axios.post(this.$store.state.host + 'signup', {
        username: this.username,
        password: this.password
      }).then(res => {
        console.log(res, 'ok')
      }).catch(err => {
        console.log(err, 'fail')
      })
    }
  },
  components: {}
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
</style>
