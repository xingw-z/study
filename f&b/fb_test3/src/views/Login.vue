<template>
  <div class="login">
    <el-container>
      <el-header>{{ status ? '登录' : '注册' }}</el-header>
      <el-main>
        <el-button class="button" type="primary" @click="status = !status">{{ status ? '切换成注册' : '切换成登录' }}</el-button>
        <div class="input-container" v-if="status">
          <el-input placeholder="请输入账号" v-model="loginUsername" clearable></el-input>
          <el-input placeholder="请输入密码" v-model="loginPassword" show-password></el-input>
        </div>
        <div class="input-container" v-else>
          <el-input placeholder="请输入账号" v-model="regUsername" clearable></el-input>
          <el-input placeholder="请输入密码" v-model="regPassword" show-password></el-input>
        </div>
        <el-button type="primary" @click="submit">{{ status ? '登录' : '注册' }}</el-button>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  @Prop() private msg!: string;
  private loginUsername: string = '';
  private loginPassword: string = '';
  private regUsername: string = '';
  private regPassword: string = '';
  private status: boolean = true;


  mounted() {
  }
  
  submit () :void {
    if (this.status) {
      this.axios.post('signin', {
        username: this.loginUsername,
        password: this.loginPassword
      }).then((res :any) => {
        console.log(res);
      })
    } else {
      this.axios.post('signup', {
        username: this.regUsername,
        password: this.regPassword
      }).then((res :any) => {
        console.log(res);
      })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.input-container{
  width: 500px;
  margin: 50px auto;
}
.button{
  position: relative;
  right: -210px;
}
</style>
