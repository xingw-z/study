<template>
  <div class="edit">
    <el-input v-model="articleTitle" placeholder="请输入标题"></el-input>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4}"
      placeholder="请输入内容"
      v-model="articleContent">
    </el-input>

    <el-button type="primary" @click="submitArticle">提交</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Edit extends Vue {
  private articleTitle :string = '';
  private articleContent :string = '';

  submitArticle() :void{
    this.axios.post('addArticle', {
      articleTitle: this.articleTitle,
      createTime: Date.now(),
      articleContent: this.articleContent
    }).then((res :any) :void => {
      if (res.code === '0000') {
        this.$alert('新增文章成功', '提示').then((res :any) :void => {
          this.$router.push({ name: 'home' })
        })
      } else {
        this.$message({
          message: '新增失败',
          type: 'warning'
        })
      }
    })
  }
}
</script>
