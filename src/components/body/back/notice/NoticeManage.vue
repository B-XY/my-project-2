<template>
  <!--事务管理-->
  <div id="noticemanage">
    <!--检索-->
    <div class="noticemanage_search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="">
          <el-input placeholder="公告标题" v-model="formInline.title"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input placeholder="发布人" v-model="formInline.user"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-date-picker
            v-model="value7"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="发布日期（始）"
            end-placeholder="发布日期（终）"
            :picker-options="pickerOptions2">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="goSearchNotice" class="float-left">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--作用于列表的功能-->
    <div class="noticeMenu">
      <el-button type="primary" @click="noticeAdd">新增</el-button>
      <el-button type="primary" @click="noticeNoUse">停用</el-button>
      <el-button type="primary" @click="goDelete">删除</el-button>
      <el-button type="primary" @click="clearFilter">列表重置</el-button>
    </div>
    <!--列表-->
    <div style="clear: both;padding-top: 20px">
      <el-table
        ref="filterTable"
        :data="noticeData"
        :default-sort="{prop: 'date', order: 'descending'}"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="50">
        </el-table-column>
        <el-table-column
          type="index"
          width="70px" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column
          prop="title"
          label="公告标题" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="name"
          width="100px"
          label="发布人" show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="organization"
          label="发布单位"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
          prop="date"
          sortable
          width="120px"
          label="发布日期"
          column-key="date"
        >
          <!--<template slot-scope="scope">{{ scope.row.date }}</template>-->
        </el-table-column>
        <el-table-column
          prop="state"
          width="100px"
          label="状态"
          :filters="noticeStateList"
          :filter-method="filterHandler"
          :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <el-tag
              :type="typeTag(scope.row.state)"
              disable-transitions>{{scope.row.state}}
            </el-tag>
          </template>
        </el-table-column>

        <!--<el-table-column-->
        <!--prop="content"-->
        <!--label="公告内容" show-overflow-tooltip-->
        <!--&gt;-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
        <!--prop="file"-->
        <!--label="附件" show-overflow-tooltip-->
        <!--&gt;-->
        <!--</el-table-column>-->

        <el-table-column
          width="150px"
          label="操作" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button @click="noticeShow(scope.row)" type="text" size="medium">查看</el-button>
            <el-button @click="noticeChange(scope.row)" type="text" size="medium">修改</el-button>
            <el-button @click="noticeDelete(scope.row)" type="text" size="medium">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>

    </div>
    <!--查看弹窗-->
    <el-dialog title="公告"
               :visible.sync="dialogVisibleshow"
               width="70%">
      <div class="noticeshow" :data="noticeshowdata">
        <el-form label-width="150px" style="text-align: left;">
          <el-form-item label="公告标题：">
            {{noticeshowdata.title}}
          </el-form-item>
          <el-form-item label="发布人：">
            {{noticeshowdata.name}}
          </el-form-item>
          <el-form-item label="发布单位：">
            {{noticeshowdata.organization}}
          </el-form-item>

          <el-form-item label="发布日期：">
            {{noticeshowdata.date}}
          </el-form-item>
          <el-form-item label="附件：">
            <el-upload
              class="upload-demo"
              action=""
              multiple
              :file-list="noticeshowdata.fileList"
              style="width: 50%"
              disabled="false">
              <el-button size="small" type="primary" disabled="false">点击上传</el-button>
              <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
            </el-upload>
          </el-form-item>
          <el-form-item label="公告内容：">
            <!--<el-input type="textarea" placeholder="公告内容"  v-model="noticeadddata.content" :autosize="{ minRows: 6, maxRows: 100}" ></el-input>-->
            <div v-html="str" class="ql-editor" style="min-height: 100px;border: 1px solid darkgray;">
              {{this.str}}
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="dialogVisibleshow = false">
              返回
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
    <!--公告修改弹窗-->
    <el-dialog title="修改"
               :visible.sync="dialogVisiblechange"
               width="70%">
      <div class="noticechange">
        <el-form label-width="150px" style="text-align: left;" ref="form" :model="noticechangedata">
          <el-form-item label="公告标题：">
            <el-input v-model="noticechangedata.title"></el-input>
          </el-form-item>
          <el-form-item label="发布人：">
            <el-input v-model="noticechangedata.name"></el-input>
          </el-form-item>
          <el-form-item label="发布单位：">
            <el-select v-model="noticechangedata.organization" placeholder="请选择发布单位">
              <el-option label="最高人民检察院" value="shanghai"></el-option>
            </el-select>
          </el-form-item>

          <!--<el-form-item label="发布日期：">-->
          <!--{{noticeshowdata.date}}-->
          <!--</el-form-item>-->
          <el-form-item label="附件：">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :file-list="noticechangedata.fileList"
              style="width: 50%">
              <el-button size="small" type="primary">点击上传</el-button>
              <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
            </el-upload>
          </el-form-item>
          <el-form-item label="公告内容：">
            <!--<el-input type="textarea" placeholder="公告内容"  v-model="noticeadddata.content" :autosize="{ minRows: 6, maxRows: 100}" ></el-input>-->
            <quill-editor
              v-model="noticechangedata.content"
              ref="myQuillEditor"
              :options="editorOption1"
              @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
              @change="onEditorChange($event)">
            </quill-editor>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSaveChange">保存</el-button>
            <el-button type="primary" @click="onSubmitChange">修改</el-button>
            <el-button type="primary" @click="dialogVisiblechange = false">
              返回
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
    <!--公告新增弹窗-->
    <el-dialog title="新增"
               :visible.sync="dialogVisibleadd"
               width="70%">
      <div class="noticeadd">
        <el-form label-width="150px" style="text-align: left;" ref="form" :model="noticeadddata">
          <el-form-item label="公告标题：">
            <el-input v-model="noticeadddata.title"></el-input>
          </el-form-item>
          <el-form-item label="发布人：">
            <el-input v-model="noticeadddata.name"></el-input>
          </el-form-item>
          <el-form-item label="发布单位：">
            <el-select v-model="noticeadddata.organazation" placeholder="请选择发布单位">
              <el-option label="最高人民检察院" value="shanghai"></el-option>
            </el-select>
          </el-form-item>

          <!--<el-form-item label="发布日期：">
            {{noticeshowdata.date}}
          </el-form-item>-->
          <el-form-item label="附件：">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-change="handleChange"
              :file-list="fileList3">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="公告内容：">
            <!--<el-input type="textarea" placeholder="公告内容"  v-model="noticeadddata.content" :autosize="{ minRows: 6, maxRows: 100}" ></el-input>-->
            <quill-editor
              v-model="noticeadddata.content"
              ref="myQuillEditor"
              :options="editorOption1"
              @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
              @change="onEditorChange($event)">
            </quill-editor>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSave">保存</el-button>
            <el-button type="primary" @click="onSubmit">发布</el-button>
            <el-button type="primary" @click="dialogVisibleadd = false">
              返回
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {quillEditor} from 'vue-quill-editor' //调用编辑器
  export default {
    name: "NoticeManage",
    components: {quillEditor},
    computed: {
      // content: function () {
      //   return this.$store.state.content
      // }

      editor() {
        return this.$refs.myQuillEditor.quill;
      },

    },
    // mounted() {
    //   let content = '';  // 请求后台返回的内容字符串
    //   this.str = this.escapeStringHTML(content);
    // },

    data() {
      return {
        noticeshowdata: {
          title: '国家检察官学院第一批课程研发申报公告',
          name: '林辛',
          organization: '最高人民检察院',
          /*state:'已发布',*/
          content: '<h1 class="ql-align-center">Hello word</h1><p class="ql-align-center"><br></p><h2 class="ql-align-center">The word is very good!!!</h2>',
          fileList:[
            {
              name:'1.txt',
              url:''
            }
          ] ,
          date: '2018-11-23'
        },
        noticechangedata: {
          title: '国家检察官学院第一批课程研发申报公告',
          name: '林辛',
          organization: '最高人民检察院',
          // state:'已发布',
          content: '<h1 class="ql-align-center">Hello word</h1><p class="ql-align-center"><br></p><h2 class="ql-align-center">The word is very good!!!</h2>',
          fileList:[
            {
              name:'1.txt',
              url:''
            }
          ] ,
          date: '2018-11-23'
        },
        noticeadddata: {
          title: '',
          name: '',
          organization: '',
          content: '',
          fileList3: [
            {
            name: 'food.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          }, {
            name: 'food2.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          }],
          date: ''
        },
        dialogVisibleshow: false,
        dialogVisiblechange: false,
        dialogVisibleadd: false,
        currentPage4: 4,
        formInline: {
          user: '',
          title: '',
          date: '',
        },
        noticeStateList: [{text: '已保存', value: '已保存'}, {text: '已发布', value: '已发布'}, {text: '已停用', value: '已停用'}],
        noticeData: [
          {
            title: '国家检察官学院第一批课程研发申报公告',
            name: '林辛',
            organization: '最高人民检察院',
            state: '已发布',
            content: '国家检察官学院第一批课程研发申报公告',
            file: 'url:123456',
            date: '2018-11-23'
          },
          {
            title: '全国检察机关第九次“双先”评选表彰活动拟表彰对象公示',
            name: '林辛',
            organization: '最高人民检察院',
            state: '已发布',
            content: '全国检察机关第九次“双先”评选表彰活动拟表彰对象公示',
            file: 'url:123456',
            date: '2018-10-15'
          },
          {
            name: '林辛',
            organization: '最高人民检察院',
            content: '关于最高人民检察院第二批法律实习生报到的通知',
            file: 'url:123456',
            title: '关于最高人民检察院第二批法律实习生报到的通知',
            state: '已停用',
            date: '2018-08-29',
          },
          {
            name: '林辛',
            organization: '最高人民检察院',
            content: '关于中国检察出版社负责人2015年至2017年任期激励情况的通告',
            state: '已保存',
            file: 'url:123456',
            title: '关于中国检察出版社负责人2015年至2017年任期激励情况的通告',
            date: '2018-07-27',
          },
          {
            name: '林辛',
            organization: '最高人民检察院',
            content: '全国检察机关第九次“双先”评选表彰活动拟表彰对象公示',
            file: 'url:123456',
            title: '全国检察机关第九次“双先”评选表彰活动拟表彰对象公示',
            date: '2018-04-26',
            state: '已发布',
          }, {
            name: '林辛',
            organization: '最高人民检察院',
            content: '最高人民检察院关于童建明同志为中华人民共和国大检察官的公告',
            file: 'url:123456',
            title: '最高人民检察院关于童建明同志为中华人民共和国大检察官的公告',
            date: '2018-07-18',
            state: '已发布',
          },
        ],

        editorOption:'',
        editorOption1: {
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              [{'font':[]}],
              [{'size': ['small', false, 'large', 'huge']}],
              [{'color':[]},{'background':[]}],
              [{'direction': 'rtl'}],                                   //文字方向：从左往右、从右往左
              ['clean'],                                                //清楚文本样式
              [{'header': 1},{'header': 2}],                       //标题
              [{'list': 'ordered'}, {'list': 'bullet'}],                //列表：排序、点状
              [{'indent': '+1'}],                                       //缩进
              ['image'],
              [{'align': []}],                                          //文本对齐方式
            ]
          }
        }
      }
    },
    mounted() {
      this.str = this.escapeStringHTML(this.noticeshowdata.content);
    },
    methods: {
      typeTag(type) {
        if (type !== null) {
          if (type === '已保存') {
            return 'primary'
          } else {
            if (type === '已停用') {
              return 'danger'
            } else {
              if (type === '已发布') {
                return 'success'
              } else {
                return ''
              }
            }
          }
        } else {
          return ''
        }
      },
      handleChange(file, fileList) {
        this.fileList3 = fileList.slice(-3);
      },
      // back(){
      //   this.$router.push({name:'PdAdd'})
      // },
      onEditorReady(editor) { // 准备编辑器
      },
      onEditorBlur() {//失去焦点事件
      },
      onEditorFocus() {//获得焦点事件
      },
      onEditorChange() {//内容改变事件
        // let textLength = text.length
        this.$emit('getValue', this.content)
        this.$store.state.content = this.content
      },
      // 转码
      escapeStringHTML(str) {
        str = str.replace(/&lt;/g,'<');
        str = str.replace(/&gt;/g,'>');
        return str;
      },

      onSave() {
        this.$store.state.tableData = this.tableData
      },
      onSubmit(data) {
        console.log('submit!');
        this.$emit('getValue', this.noticeadddata.content)
        this.$store.state.content = this.noticeadddata.content
        this.$router.push('Hello')
      },
      onSaveChange() {
        this.$store.state.tableData = this.tableData
      },
      onSubmitChange() {
        console.log('submit!');
        this.$emit('getValue', this.noticechangedata.content)
        this.$store.state.content = this.noticechangedata.content
        this.$router.push('Hello')
      },
      //搜索列表所需函数
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      goStart() {
      },
      goDelete() {
      },
      noticeShow() {
        this.dialogVisibleshow = true;
      },
      noticeChange() {
        this.dialogVisiblechange = true;
      },
      noticeAdd() {
        this.dialogVisibleadd = true;
      },
      noticeNoUse() {
      },
      /*resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },*/
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      /*formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },*/
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      filterTag(value, row) {
        return row.state === value;
      },
      /*changeRole(){
        this.$router.push({path: '/Back/UsersManage/ChangeUserRole'})
      }*/
    },

    // 页码计算
    /* computed: {
       tableData: function () {
         return this.$store.state.tableData
       },
       currentPage: function () {
         return this.$store.state.currentPage
       },
       pageSize: function () {
         return this.$store.state.pageSize
       }
     }*/
  }
</script>

<style scoped>
  #noticemanage {
    margin: 0 5%;
    width: 90%;
    min-height: 400px;
  }

  /*.generalSearch-input{
    width: 60%;
    float: left;
  }*/
  .noticemanage_search {
    width: 100%;
    text-align: left;
  }

  .search_fields {
    width: 100%;
  }

  .search_field {
    /*margin-right: 20px;*/
    /*margin-bottom: 20px;*/
  }

  .float-left {
    float: left;
  }

  .float-right {
    float: right;
  }

  .noticeRoleSelect {
    width: 25%;
  }

  .noticeMenu {
    clear: both;
  }

  .noticeMenu .el-button {
    float: left;
  }

  .pagination {
    margin-top: 20px;
  }

  .noticeadd .el-input, .noticechange .el-input {
    width: 60%;
  }




  .ql-snow .ql-editor img {
    max-width: 100px;
  }

  .ql-editor .ql-video {
    max-width: 480px;
  }
</style>
