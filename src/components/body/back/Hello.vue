<template>
    <div class="helloPage">
      <div v-html="str" class="ql-editor">
        {{this.str}}
      </div>
    </div>
</template>

<script>
     export default {
      created:function f() {
        alert(this.str)
      },
      computed: {
        content: function () {
          return this.$store.state.content
        }
      },
      data(){
        return {
          str:'',
        }
      },
       mounted() {
         let content = this.content;  // 请求后台返回的内容字符串
         this.str = this.escapeStringHTML(content);
       },

       methods:{
         // 转码
         escapeStringHTML(str) {
           str = str.replace(/&lt;/g,'<');
           str = str.replace(/&gt;/g,'>');
           return str;
         },
       }
    }
</script>

<style>
.helloPage{
  width: 100%;
  height: 400px;
}
</style>
