<template>
  <div class="detail">
    <div>{{ title }}</div>
    <div>{{ time }}</div>
    <div>{{ content }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Detail extends Vue {
  created() {
    let _id = this.$route.query.articleId || this.getParameter('articleId');
    this.axios.post('queryArticle', {
      id: _id
    }).then((res :any) :void => {
      console.log(res, '查询文章详情')
      if (res.code === '0000') {
        const _data = res.data;
        this.title = _data.articleTitle
        this.time = _data.createTime
        this.content = _data.articleContent
      } else {
        this.$message({
          message: res.msg,
          type: 'warning'
        })
      }
    })

    setTimeout(() => {
      this.test = this.test + 'x'
      console.log(this.test);
    }, 1000);
  }

  private title :string = '';
  private content :string = '';
  private time :string = '';
  private test :string = '123';


  getParameter(param :string) :string {
    let query :string = window.location.search
    let iLen :number = param.length
    let iStart :number = query.indexOf(param)
    if (iStart == -1) return ""

    iStart += iLen + 1
    let iEnd :number = query.indexOf("&", iStart)
    if (iEnd == -1) return query.substring(iStart)

    return query.substring(iStart, iEnd)
  }
}
</script>
