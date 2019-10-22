<template>
  <div class="home">
    <router-link :to="{ name: 'edit' }">新增文章</router-link>
    <ul>
      <li v-for="item in articleList" :key="item.id">
        <router-link :to="{ name: 'detail', query: { articleId: item.id } }">{{ item.articleTitle }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private articleList :Array<any> = [];
  created() {
    this.axios.get('articleList').then((res :any) :void => {
      console.log(res, '查询文章列表')
      if (res.code === '0000') {
        this.articleList = res.data
      } else {
        this.$message({
          message: res.msg,
          type: 'warning'
        })
      }
    })
  }
}
</script>
