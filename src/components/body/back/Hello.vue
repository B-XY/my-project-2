<template>
    <div class="helloPage">
        <!--<Editor id="tinymce" v-model="tinymceHtml" :init="init"></Editor>-->
        <div v-html="this.tinymceHtml"></div>
    </div>
</template>

<script>
  import tinymce from 'tinymce/tinymce'
  import 'tinymce/themes/modern/theme'
  import Editor from '@tinymce/tinymce-vue'
  import 'tinymce/plugins/image'
  import 'tinymce/plugins/link'
  import 'tinymce/plugins/code'
  import 'tinymce/plugins/table'
  import 'tinymce/plugins/lists'
  import 'tinymce/plugins/contextmenu'
  import 'tinymce/plugins/wordcount'
  import 'tinymce/plugins/colorpicker'
  import 'tinymce/plugins/textcolor'
     export default {
       components: {Editor},
      created:function f() {
        alert(this.tinymceHtml)
      },
      computed: {
        tinymceHtml: function () {
          return this.$store.state.tinymceHtml
        }
      },
      data(){
        return {
          str:'',
          init: {
            language_url: '/static/tinymce/zh_CN.js',
            language: 'zh_CN',
            skin_url: '/static/tinymce/skins/lightgray',
            height: 200,
            plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
            toolbar: 'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
            branding: false
          },
        }
      },
       mounted() {
         // let content = this.content;  // 请求后台返回的内容字符串
         // this.str = this.escapeStringHTML(content);
           tinymce.init({})// 特别注意这个空对象的存在，如果这个初始化空对象不存在依旧会报错
       },

       methods:{
         // 转码
         // escapeStringHTML(str) {
         //   str = str.replace(/&lt;/g,'<');
         //   str = str.replace(/&gt;/g,'>');
         //   return str;
         // },
       }
    }
</script>

<style>
.helloPage{
  margin: 0 5%;
  width: 90%;
  min-height: 400px;
}
</style>
