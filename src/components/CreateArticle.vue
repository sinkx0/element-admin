<template>
  <div>
    <!-- 当一个 form 元素中只有一个输入框时，在该输入框中按下回车应提交该表单。如果希望阻止这一默认行为，可以在 <el-form> 标签上添加 @submit.native.prevent -->
    <el-form @submit.native.prevent="saveArticle" ref="form" :model="article" label-width="100px">
      <el-form-item label="文章标题">
        <el-input v-model="article.title"></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <el-input type="textarea" v-model="article.body"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      article: {}
    }
  },
  methods: {
    saveArticle () {
      this.$http.post('articles', this.article).then(res => {
        this.$message({
          message: '文章创建成功',
          type: 'success'
        })
      })
      //  跳转回文章列表页
      this.$router.push('/articles/index')
    }
  }
}
</script>

<style scoped>
</style>
