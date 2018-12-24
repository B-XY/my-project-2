<template>
  <div id="product">
    <div class="product">
      <!--面包屑-->
      <div class="breadcrumb">
        <Breadcrumb></Breadcrumb>
      </div>
      <!--第一大行-->
      <div class="product_first_part">
        <!--走马灯-->
        <div class="carousel">
          <!--<Carousel style="height:270px;"></Carousel>-->
          <el-carousel style="width: 100%">
            <el-carousel-item v-for="item in pddata1.carouselPics" :key="item.id" style="width: 100%">
              <div style="position:relative;width: 100%;height: 0;padding-bottom: 120%">
                <img :src="item.url" alt="" style="height: 270px;width: 100%">
                <div
                  style="position:absolute;z-indent:2;top:0;font-size:18px;font-weight:bolder;color: white;width: 100%;height:30px;line-height:30px;background-color:rgba(185, 173, 173, 0.5);">
                  {{ item.title}}
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <!--产品简单介绍-->
        <div class="shortintro">
          <table class="shortintro_table">
            <tr class="pdname">
              <!--产品名称-->
              <td class="pdname2" colspan="3" property="pdname">{{pddata1.basic.pdname}}
              </td>
            </tr>
            <tr class="publisher">
              <td class="publisher1">
                　发布单位 :
              </td>
              <td class="publisher2 text-align_left text-indent20" colspan="2">
                {{pddata1.basic.publisher }}
              </td>
            </tr>
            <tr class="pddate">
              <td class="pddate1">
                上架时间 :
              </td>
              <td class="pddate2 text-align_left text-indent20" colspan="2">
                {{pddata1.basic.pddate}}
              </td>
            </tr>
            <tr class="type">
              <td class="type1">
                标签属性 :
              </td>
              <td class="type2 text-align_left text-indent20">
                {{pddata1.basic.bigtype}}
              </td>
              <td class="type3 text-align_left text-indent20">
                {{pddata1.basic.littletype}}
              </td>
            </tr>
            <tr class="shortintro_button">
              <td colspan="2">
                <el-button type="text" icon="el-icon-download" @click="pddownload">
                  <a style="color:steelblue;font-size: 16px;font-weight: 600" :href='pdWhitePaper.path'
                     :download="pdWhitePaper.name">
                    产品白皮书下载
                  </a>
                </el-button>
              </td>
              <td class="pdtest">
                <el-button type="text" icon="el-icon-upload2" @click="dialogFormVisible = true"
                           style="font-weight: 600;font-size: 16px;"
                >
                  <a style="color:steelblue;font-size: 16px;font-weight: 600">
                    产品试用
                  </a>
                </el-button>

              </td>
            </tr>
          </table>
          <el-dialog title="产品试用申请" :visible.sync="dialogFormVisible" width="45%" style="min-width: 1000px;">
            <el-form :model="form">
              <el-form-item label="联系方式" :label-width="formLabelWidth"
              >
                <el-input v-model="form.phone" autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item label="试用需求" :label-width="formLabelWidth"
              >
                <el-input type="textarea"
                          :autosize="{ minRows: 2, maxRows: 10}" v-model="form.demand"
                          autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="success"
              >提 交
              </el-button>
            </div>
          </el-dialog>
        </div>
        <!--星级评价展示-->
        <div class="star_rate">
          <div class="starlevel">
            <div class="star">
              <el-rate
                v-model="value"
                disabled
                text-color="#ff9900"
                score-template="{value}">
              </el-rate>
            </div>
            <div class="levelcount" style="min-width: 50px;">
              {{count}}人评价
            </div>
          </div>
          <div class="star_percent">
            <div class="five_star_percent">
              <el-rate
                v-model="value1"
                disabled
                text-color="#ff9900"
                score-template="{value}">
              </el-rate>
              <div class="percent">
                {{starpercent.fivestar}}
              </div>
            </div>
            <div class="five_star_percent">
              <el-rate
                v-model="value2"
                disabled
                text-color="#ff9900" score-template="{value}">
              </el-rate>
              <div class="percent">
                {{starpercent.fourstar}}
              </div>
            </div>
            <div class="five_star_percent">
              <el-rate
                v-model="value3"
                disabled
                text-color="#ff9900" score-template="{value}">
              </el-rate>
              <div class="percent">
                {{starpercent.threestar}}
              </div>
            </div>
            <div class="five_star_percent">
              <el-rate
                v-model="value4"
                disabled
                text-color="#ff9900" score-template="{value}">
              </el-rate>
              <div class="percent">
                {{starpercent.twostar}}
              </div>
            </div>
            <div class="five_star_percent">
              <el-rate
                v-model="value5"
                disabled
                text-color="#ff9900" score-template="{value}">
              </el-rate>
              <div class="percent">
                {{starpercent.onestar}}
              </div>
            </div>

          </div>
        </div>
      </div>
      <!--相似产品-->
      <div class="similar">
        <div class="similar_line">
          <div class="similar_title com-color">相似产品</div>
          <div class="similar_more">
            <el-button type="text" @click="goSearchType">更多>></el-button>
          </div>
        </div>
        <div class="similarpd">
          <el-row class="carousel-container">
            <el-col class="carousel-tiem" v-for="item in similarData" :key="item.id">
              <el-card :body-style="{ padding: '20px 15px 40px 15px' }">
                <div class="grid-content bg-purple layout" @click="goProduct">
                  <img :src="item.url" class="item_img"/>
                  <div class="item_title"><a>{{ item.title }}</a></div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <div class="clear"></div>
      </div>
      <!--相似产品下面-->
      <div class="contact_pdintro">

        <!--需求对接-->
        <!--<div class="contact">
          <table>
            <tr>
              <td class="contact_title">
                需求对接
              </td>
            </tr>
            <tr>
              <td>
                联系方式
                <div class="pdpublisher_phone">
                  {{pdpublisher_phone}}
                </div>
              </td>
            </tr>
          </table>
        </div>-->
        <!--产品介绍与评价-->
        <div class="pdintro_pdevaluate">
          <div v-show="navBarFixed" :class="navBarFixed == true?'navBarWarp':''">
            <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="产品介绍" name="0">
              </el-tab-pane>
              <el-tab-pane label="产品评价" name="1">
              </el-tab-pane>
              <el-tab-pane label="我要评价" name="2">
              </el-tab-pane>
              <el-tab-pane label="需求对接" name="3">
              </el-tab-pane>
            </el-tabs>
          </div>

          <el-tabs type="border-card" v-model="activeName" >
            <el-tab-pane label="产品介绍" name="0" >
              <!--产品介绍-->
              <div class="scroll-container pdintro">
                <!--采用滚动形式-->
                <!--产品简介-->
                <div class="pdintro1 pdintro_size">
                  <!--<p>产品简介</p>-->
                  <div class="pdintro_size2">
                    <div class="text">
                      {{pddata1.intro.intro1.text}}
                    </div>

                    <div v-for="item in pddata1.intro.intro1.urls" :key="item.id" style="width: 100%">
                      <img v-bind:src="item.url" />
                    </div>

                  </div>
                </div>
                <!--功能简介-->
                <div class="pdintro2 pdintro_size">
                  <!--<p>功能简介</p>-->
                  <div class="pdintro_size2">
                    <div class="text">
                      {{pddata1.intro.intro2.text}}
                    </div>

                    <div v-for="item in pddata1.intro.intro2.urls" :key="item.id" style="width: 100%">
                      <img v-bind:src="item.url" />
                    </div>

                  </div>
                </div>
                <!--性能简介-->
                <div class="pdintro3 pdintro_size">
                  <!--<p>性能简介</p>-->
                  <div class="pdintro_size2">
                    <div class="text">
                      {{pddata1.intro.intro3.text}}
                    </div>

                    <div v-for="item in pddata1.intro.intro3.urls" :key="item.id" style="width: 100%">
                      <img v-bind:src="item.url" />
                    </div>
                  </div>
                </div>
                <!--使用场景-->
                <div class="pdintro4 pdintro_size">
                  <!--<p>使用场景</p>-->
                  <div class="pdintro_size2">
                    <div class="text">
                      {{pddata1.intro.intro4.text}}
                    </div>

                    <div v-for="item in pddata1.intro.intro4.urls" :key="item.id" style="width: 100%">
                      <img v-bind:src="item.url" />
                    </div>
                  </div>
                </div>
                <!--典型案例-->
                <div class="pdintro5 pdintro_size">
                  <!--<p>典型案例</p>-->
                  <div class="pdintro_size2">
                    <div class="text">
                      {{pddata1.intro.intro5.text}}
                    </div>

                    <div v-for="item in pddata1.intro.intro5.urls" :key="item.id" style="width: 100%">
                      <img v-bind:src="item.url" />
                    </div>
                  </div>
                </div>
                <!--售后服务-->
                <div class="pdintro6 pdintro_size">
                  <!--<p>售后服务</p>-->
                  <div class="pdintro_size2">
                    <div class="text">
                      {{pddata1.intro.intro6.text}}
                    </div>

                    <div v-for="item in pddata1.intro.intro6.urls" :key="item.id" style="width: 100%">
                      <img v-bind:src="item.url" />
                    </div>
                  </div>
                </div>
                <!--产品服务商信息-->
                <div class="pdintro7 pdintro_size">
                  <!--<p>产品服务商信息</p>-->
                  <div class="pdintro_size2">
                    <div class="text" v-html="pddata1.intro.intro7.text">

                      <!--{{pddata1.intro.intro7.text}}-->
                    </div>

                    <div v-for="item in pddata1.intro.intro7.urls" :key="item.id" style="width: 100%">
                      <img v-bind:src="item.url" />
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="产品评价" name="1">
              <!--产品评价-->
              <div class="scroll-container pdevaluate">
                <div v-for="item in evaluates1" class="pdevaluate-container">
                  <!--评价人-->
                  <div v-text="item.nameP" class="pdevaluate-user" v-if="item.EvaluateDelete" >
                  </div>

                  <div class="pdevaluate-list" v-if="item.EvaluateDelete" >
                    <!--星级评价和评价时间-->
                    <div class="star_time">

                      <el-rate
                        v-model="item.value"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                      </el-rate>
                      <div v-text="item.time" class="pdevaluate-list_time"></div>
                    </div>
                    <p class="main-content" v-text="item.content"></p>
                    <ul>
                      <li v-for="obj in item.data" :class="obj.type == 'f'?'contentF':'contentP'">
                        <p class="usr-container">
                          <span class="msg-name" v-text="obj.type == 'f'? item.nameP : item.nameF+'回复'"></span>
                          <span class="msg-time" v-text="obj.time"></span>
                        </p>
                        <p class="content-container" v-text="obj.content"></p>
                      </li>
                    </ul>
                    <!--三种操作-->
                    <div>
                      <div class="pdi-evaluate-delete">
                        <el-button type="text" @click="item.EvaluateDelete=false">屏蔽</el-button>
                      </div>
                      <div class="pdi-evaluate-reply">
                        <el-button type="text" @click="item.isReply1=true"
                        > 回复
                        </el-button>
                      </div>
                      <div class="pdi-evaluate-good" style="height: 20px">
                        <img :src="isGoodImg.img2" v-if="item.isGood" @click="item.isGood=!item.isGood;item.isGoodCount=item.isGoodCount-1" style="height: 100%">
                        <img :src="isGoodImg.img1" v-else @click="item.isGood=!item.isGood;item.isGoodCount=item.isGoodCount+1" style="height: 100%">
                        <span style="height: 100%;float: right;">{{item.isGoodCount}}</span>
                        <!--<el-button type="text" @click=""
                        >点赞
                        </el-button>-->
                      </div>
                    </div>
                    <div v-if="item.isReply1" style="margin-top:20px">
                      <el-input
                        type="textarea"
                        :autosize="{ minRows: 3, maxRows: 5}"
                        placeholder="回复内容"
                        v-model="reply">
                      </el-input>
                      <el-button style="float: right;margin:10px 0 10px 10px" @click="item.isReply1=false" type="primary">
                        取消
                      </el-button>
                      <el-button style="float: right;margin:10px 0 10px 10px" @click="item.isReply1=isReply(item.isReply1)" type="primary">
                        确定
                      </el-button >

                    </div>
                  </div>

                </div>
                <!-- <div class="pdi-evaluate form_color" v-for="user in evaluates">
                   <table v-if="user.EvaluateDelete" class="form_border">
                     <tr class="pdi-evaluate-first form_bottom">
                       <td>
                         <div class="username reply_color">
                           {{user.name}}
                         </div>
                         <div class="user-star-level">
                           <el-rate
                             v-model="user.value"
                             disabled
                             show-score
                             text-color="#ff9900"
                             score-template="{value}">
                           </el-rate>
                         </div>
                       </td>
                     </tr>
                     <tr class="pdi-evaluate-second form_bottom">
                       <td>
                         <div class="pdi-evaluate-content form_border">
                           {{user.content}}
                         </div>
                       </td>
                     </tr>
                     <tr class="pdi-evaluate-third">
                       <td>
                         <div class="pdi-evaluate-date">
                           {{user.date}}
                         </div>
                         <div class="pdi-evaluate-delete">
                           <el-button type="text" @click="user.EvaluateDelete=false">屏蔽</el-button>
                         </div>
                         <div class="pdi-evaluate-reply">
                           <el-button type="text" @click="user.isReply1=true"
                           > 回复
                           </el-button>
                         </div>
                         <div class="pdi-evaluate-good">
                           <el-button type="text" @click="user.isGood=true"
                           >点赞
                           </el-button>
                         </div>
                       </td>
                     </tr>
                     <tr v-if="user.isReply1" class="pdi-evaluate-fourth">
                       &lt;!&ndash;回复框&ndash;&gt;
                       <div class="replyform1 form_border">
                         <el-input
                           type="textarea"
                           :autosize="{ minRows: 2, maxRows: 4}"
                           placeholder="回复内容"
                           v-model="user.reply">
                         </el-input>
                         <div>
                           <el-button type="primary" @click="user.isReply1=false">提交</el-button>
                         </div>
                         <div>
                           <el-button type="primary" @click="user.isReply1=false">取消</el-button>
                         </div>
                         <div class="clear"></div>
                       </div>
                     </tr>
                     <tr v-for="reply in user.replys"
                         class="pdi-evaluate-fifth">
                       <div class="reply form_border">
                         &lt;!&ndash;产品发布者已回复内容&ndash;&gt;
                         <div class="publisherreply form_bottom">
                           <div class="replied">{{reply.name}}:{{reply.content}}</div>
                           <div class="reply_date_button">
                             <div class="reply-date">{{reply.date}}</div>
                             <div class="pdi-evaluate-reply">
                               <el-button type="text" @click="reply.isReply2=true"
                               > 回复
                               </el-button>
                             </div>
                           </div>
                           &lt;!&ndash;试用干警回复产品发布者回复框&ndash;&gt;
                           <div class="replyform2" v-if="reply.isReply2">
                             <div class="replyform2_input">
                               <el-input
                                 type="textarea"
                                 :autosize="{ minRows: 2, maxRows: 4}"
                                 placeholder="回复内容"
                                 v-model="reply.userReply">
                                 &lt;!&ndash;userReply.content in reply.userReplys&ndash;&gt;
                               </el-input>
                             </div>
                             <div>
                               <el-button type="primary" @click="reply.isReply2=false">提交</el-button>
                             </div>
                             <div>
                               <el-button type="primary" @click="reply.isReply2=false">取消</el-button>
                             </div>
                             <div class="clear"></div>
                           </div>
                           &lt;!&ndash;试用干警已回复产品发布者内容&ndash;&gt;
                           <div v-for="userReply in reply.userReplys" class="userreply">
                             <div class="replied">{{user.name}}回复{{reply.name}}:{{userReply.content}}</div>
                             <div class="reply-date">{{userReply.date}}</div>
                             <div class="clear"></div>
                           </div>
                           <div class="clear"></div>
                         </div>
                       </div>
                     </tr>
                   </table>
                 </div>-->
                <div class="pdevaluate_pages">
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="20">
                  </el-pagination>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="我要评价" name="2">
              <div class=" scroll-container myevaluate">
                <!--星级评价-->
                <div class="mystarlevel">
                  <el-rate
                    v-model="myvalue"
                    show-text>
                  </el-rate>
                </div>
                <!--文字评价-->
                <div class="mytextlevel">
                  我要评价
                </div>
                <!--提交按钮-->
                <div class="myevaluate_submit">
                  <el-button type="primary">提交</el-button>
                  <el-button type="primary">取消</el-button>
                </div>
              </div>

            </el-tab-pane>
            <el-tab-pane label="需求对接" name="3">
              <div class="pdpublisher_phone">
                联系方式：
                {{pddata1.basic.pdpublisher_phone}}

              </div>
            </el-tab-pane>
          </el-tabs>
        </div>

        <div class="clear"></div>
      </div>

    </div>
  </div>
</template>

<script>
  import Breadcrumb from '../resource/Breadcrumb';
  /*import Carousel from "../resource/Carousel";*/
  /*import Layout1 from "../resource/Layout1";*/
  export default {
    name: "Product",
    components: {Breadcrumb},
    data() {
      return {
        //暂时保留四项数据
        /*pddata1:{
          basic:{
            pdname: '公诉智能辅助系统',
            publisher: '浙江省智慧检务实验室',
            pddate: '2018-11-22',
            bigtype: '业务应用类',
            littletype: '公益诉讼',
            pdpublisher_phone: '0000-00000000'
          },
          carouselPics: [
            {url: require('../../assets/img/pd1/1.png'), title: '系统总括', id: 1},
            {url: require('../../assets/img/pd1/2.png'), title: '简案快办', id: 2},
            {url: require('../../assets/img/pd1/3.png'), title: '繁案简办', id: 3},
            {url: require('../../assets/img/pd1/4.png'), title: '证据审查规范', id: 4},
            {url: require('../../assets/img/pd1/5.png'), title: '量刑建议', id: 5},
            {url: require('../../assets/img/pd1/6.png'), title: '文书生成', id: 6},
            {url: require('../../assets/img/pd1/7.png'), title: '互联互通', id: 7},
          ],
          intro: {
            intro1: {text: '产品简介', url: require('../../assets/img/pd1/1.png')},
            intro2: {
              text: '功能简介',
              urls: {
                url1: require('../../assets/img/pd1/2.png'),
                url2: require('../../assets/img/pd1/3.png'),
                url3: require('../../assets/img/pd1/4.png'),
                url4: require('../../assets/img/pd1/5.png'),
                url5: require('../../assets/img/pd1/6.png'),
                url6: require('../../assets/img/pd1/7.png'),
              }
            },
            intro3: {text: '性能简介', url: require('../../assets/img/pd1/8.jpg')},
            intro4: {text: '使用场景', url: require('../../assets/img/pd1/1.png')},
            intro5: {text: '典型案例', url: require('../../assets/img/pd1/1.png')},
            intro6: {text: '售后服务', url: require('../../assets/img/pd1/1.png')},
            intro7: {text: '产品服务商：浙江建达科技股份有限公司\\n\' +\n' +
                '                \'地址：杭州市文三路20号浙江省建工大厦10-12层\\n\' +\n' +
                '                \'电话：0571-88822228/88308771\\n\' +\n' +
                '                \'网址：www.janar.com.cn\\n', url: ''},
          },
        },*/
        /*pddata1:{
          basic:{
            pdname: '检察业务大数据分析平台',
            publisher: '浙江省智慧检务实验室',
            pddate: '2018-11-22',
            bigtype: '业务应用类',
            littletype: '综合业务',
            pdpublisher_phone: '0000-00000000'
          },
          carouselPics: [
            {url: require('../../assets/img/pd2/1.jpg'), title: '系统总括', id: 1},
            {url: require('../../assets/img/pd2/2.jpg'), title: '检务数据一览', id: 2},
            {url: require('../../assets/img/pd2/3.jpg'), title: '检务数据分析', id: 3},
            {url: require('../../assets/img/pd2/4.jpg'), title: '案件特征', id: 4},
          ],
          intro: {
            intro1: {
              text: '产品简介',
              urls:[
                {
                  url: require('../../assets/img/pd2/1.jpg'),
                  id:1
                }
              ]
            },
            intro2: {
              text: '功能简介',
              urls: [
                {url: require('../../assets/img/pd2/2.jpg'),id: 1},
                {url: require('../../assets/img/pd2/3.jpg'),id:2},
                {url: require('../../assets/img/pd2/4.jpg'),id:3},
              ],
            },
            intro3: {
              text: '性能简介',
              urls: [
                {
                  url: require('../../assets/img/pd2/01.jpg'), id: 1
                }
              ],
            },
            intro4: {
                text: '使用场景',
              urls:[
                {
                  url: '',id:1
                }
              ]
            },
            intro5: {
              text: '典型案例',
              urls:[
                {
                  url: '',id:1
                }
              ]
            },
            intro6: {
              text: '售后服务',
              urls:[
                {
                  url: '',id:1
                }
              ]
            },
            intro7: {
              text: '产品服务商：浙江建达科技股份有限公司<br/>' +
                '地址：杭州市文三路20号浙江省建工大厦10-12层<br/>' +
                '电话：0571-88822228/88308771<br/>' +
                '网址：www.janar.com.cn',
              urls:[
                {
                  url: '',id:1
                }
              ]
            },
          },
        },*/
        /* pddata1:{
           basic:{
             pdname: '民航智能辅助办案系统',
             publisher: '浙江省智慧检务实验室',
             pddate: '2018-11-22',
             bigtype: '业务应用类',
             littletype: '综合业务',
             pdpublisher_phone: '0000-00000000'
           },
           carouselPics: [
             {url: require('../../assets/img/pd3/1.jpg'), title: '系统总括', id: 1},
             {url: require('../../assets/img/pd3/2.jpg'), title: '裁判信息一览', id: 2},
             {url: require('../../assets/img/pd3/3.jpg'), title: '证据审查与文书生成', id: 3},
           ],
           intro: {
             intro1: {
               text: '产品简介',
               urls:[
                 {
                   url: require('../../assets/img/pd3/1.jpg'),
                   id:1
                 }
               ]
             },
             intro2: {
               text: '功能简介',
               urls: [
                 {url: require('../../assets/img/pd3/2.jpg'),id: 1},
                 {url: require('../../assets/img/pd3/3.jpg'),id:2},
               ],
             },
             intro3: {
               text: '性能简介',
               urls: [
                 {
                   url: require('../../assets/img/pd3/01.jpg'), id: 1
                 }
               ],
             },
             intro4: {
               text: '使用场景',
               urls:[
                 {
                   url: '',id:1
                 }
               ]
             },
             intro5: {
               text: '典型案例',
               urls:[
                 {
                   url: '',id:1
                 }
               ]
             },
             intro6: {
               text: '售后服务',
               urls:[
                 {
                   url: '',id:1
                 }
               ]
             },
             intro7: {
               text: '产品服务商：浙江建达科技股份有限公司<br/>' +
                 '地址：杭州市文三路20号浙江省建工大厦10-12层<br/>' +
                 '电话：0571-88822228/88308771<br/>' +
                 '网址：www.janar.com.cn',
               urls:[
                 {
                   url: '',id:1
                 }
               ]
             },
           },
         },*/
        pddata1:{
          basic:{
            pdname: '侦监智能辅助办案系统',
            publisher: '浙江省智慧检务实验室',
            pddate: '2018-11-22',
            bigtype: '业务应用类',
            littletype: '综合业务',
            pdpublisher_phone: '0000-00000000'
          },
          carouselPics: [
            {url: require('../../assets/img/pd4/pdxc/1.jpg'), title: '系统总括', id: 1},
            {url: require('../../assets/img/pd4/pdxc/2.jpg'), title: '裁判信息一览', id: 2},
            {url: require('../../assets/img/pd4/pdxc/3.jpg'), title: '证据审查与文书生成', id: 3},
            {url: require('../../assets/img/pd4/pdxc/4.jpg'), title: '证据审查与文书生成', id: 4},
          ],
          intro: {
            intro1: {
              text: '产品简介: 侦监系统时检察机关审查嫌疑人是否批捕的办案系统，对案件的案卡信息、嫌疑人信息、讯问情况、证据审查情况、侦查情况等进行审查。',
              urls:[
                {
                  url: '',
                  id:1
                }
              ]
            },
            intro2: {
              text: '功能简介',
              urls: [
                {url: require('../../assets/img/pd4/pdintro/1.jpg'),id:1},
                {url: require('../../assets/img/pd4/pdintro/2.jpg'),id: 2},
                {url: require('../../assets/img/pd4/pdintro/3.jpg'),id:3},
                {url: require('../../assets/img/pd4/pdintro/4.jpg'),id:4},
              ],
            },
            intro3: {
              text: '性能简介',
              urls: [
                {
                  url: require('../../assets/img/pd4/pdintro/01.jpg'), id: 1
                }
              ],
            },
            intro4: {
              text: '使用场景',
              urls:[
                {
                  url: '',id:1
                }
              ]
            },
            intro5: {
              text: '典型案例',
              urls:[
                {
                  url: '',id:1
                }
              ]
            },
            intro6: {
              text: '售后服务',
              urls:[
                {
                  url: '',id:1
                }
              ]
            },
            intro7: {
              text: '产品服务商：浙江建达科技股份有限公司<br/>' +
                '地址：杭州市文三路20号浙江省建工大厦10-12层<br/>' +
                '电话：0571-88822228/88308771<br/>' +
                '网址：www.janar.com.cn',
              urls:[
                {
                  url: '',id:1
                }
              ]
            },
          },
        },
        //产品白皮书下载路径和文件名字
        pdWhitePaper:{
          name:'产品白皮书.txt',
          path:'../../assets/download/1.txt'
        },
        activeName: '0',
        navBarFixed: false,
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          phone: '',
          demand: ''
        },
        formLabelWidth: '120px',
        reply:'',
        currentPage4: 4,
        isGoodImg:{
          img1:require('../../assets/img/isGood/1.png'),
          img2:require('../../assets/img/isGood/2.png'),
        },
        evaluates1: [
          {
            content: '重建人类与机器之间的相互协作关系',
            nameP: 'Tom欧芭莎',
            nameF: '某某实验室',
            time: '2018-11-22',
            value: 4,
            data: [
              {time: '2018-11.26 12:23:25', content: '这里是一大段文字描述', type: 'f'},
              {time: '2018-11.26 12:25:45', content: '未来式一个人类和机器共存协作完成各类工作的全新时代', type: 'f'},
              {time: '2018-11.26 13:13:05', content: '人工智能技术正在彻底改变人类对机器行为的认知，重建人类与机器之间的相互协作关系。', type: 'p'},
              {time: '2018-11.26 13:35:46', content: '内容444', type: 'f'},
            ],
            EvaluateDelete:true,
            isReply1:false,
            isGood:true,
            isGoodCount:4
          },
          {
            time: '2018-11-23',
            value: 3.5,
            content: '这是复兴的时代，这是发现的时代，这是人工智能的时代  。。重建人类与机器之间的相互协作关系。。。。我们无需担心和惧怕这个时代的到来，应当是尽早认清AI与人类的关系，了解变革的规律，尽早制定更能适应新时代需求的科研战略',
            nameP: 'romantic-J',
            nameF: '某某实验室',
            data: [
              {time: '2018-11.26 12:23:25', content: '这里是一大段文字描述', type: 'f'},
              {
                time: '2018-11.27 13:24:05',
                content: '重建人类与机器之间的相互协作关系。。。。我们无需担心和惧怕这个时代的到来，应当是尽早认清AI与人类的关系，了解变革的规律，尽早制定更能适应新时代需求的科研战略、经济发展布局。。。',
                type: 'p'
              },
              {time: '2018-11.27 08:01:23', content: '未来式一个人类和机器共存协作完成各类工作的全新时代', type: 'f'},
              {time: '2018-11.27 10:13:05', content: '人工智能技术正在彻底改变人类对机器行为的认知，重建人类与机器之间的相互协作关系。', type: 'p'},
              {
                time: '2018-11.27 13:35:46',
                content: '未来式一个人类和机器共存协作完成各类工作的全新时代人工智能技术正在彻底改变人类对机器行为的认知，重建人类与机器之间的相互协作关系',
                type: 'f'
              },
            ],
            EvaluateDelete:true,
            isReply1:false,
            isGood:false,
            change:0,
            isGoodCount:6
          }],
        texts: [
          '极差', '失望', '一般', '满意', '惊喜'
        ],
        myvalue: null,
        count: '5',
        value: 3,
        value1: 5,
        value2: 4,
        value3: 3,
        value4: 2,
        value5: 1,
        starpercent: {
          fivestar: '0%',
          fourstar: '20%',
          threestar: '60%',
          twostar: '20%',
          onestar: '0%'
        },
        similarData: [
          {url: require('../../assets/img/4.png'), title: '检察院线产品', id: 1},
          {url: require('../../assets/img/8.jpg'), title: '人民法院智能辅助办案系统', id: 2},
          {url: require('../../assets/img/6.jpg'), title: '江苏省智能辅助办案系统', id: 3},
          {url: require('../../assets/img/12.jpg'), title: '四川省大数据智能辅助办案平台', id: 4},
          /*{url: require('../../assets/img/15.jpg'), title: '智能辅助办案系统', id: 5},*/
        ],
      }
    },
    methods: {
      watchScroll: function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 930) {
          this.navBarFixed = true;
        } else {
          this.navBarFixed = false;
        }
      },
      handleClick: function () {
        window.pageYOffset = 930;
        document.documentElement.scrollTop = 930;
        document.body.scrollTop = 930;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      goProduct() {
        this.$router.push('/Product')
      },
      pddownload() {
      },
      goSearchType() {
        this.$router.push('/SearchType')
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },
      success() {
        this.dialogFormVisible = false;
        this.$message({
          message: '试用申请提交成功！请等待消息通知',
          type: 'success'
        });
      },
      isReply(isReply){
        isReply=false;
        this.$message({
          message: '回复成功！',
          type: 'success'
        });
        return isReply
      },
      /*open3() {
       this.$prompt('请输入联系方式','产品试用申请', {
       confirmButtonText: '确定',
       cancelButtonText: '取消',
       inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
       inputErrorMessage: '联系方式格式不正确'
       }
       ).then(({ value }) => {
       this.$message({
       type: 'success',
       message: '试用申请已发出，请等待消息通知'
       });
       }).catch(() => {
       this.$message({
       type: 'info',
       message: '取消输入'
       });
       });
       }*/
    },
    mounted() {
      window.addEventListener('scroll', this.watchScroll)
    }
  }
</script>

<style scoped>
  #product {
    min-height: 600px;
    width: 84%;
    margin: 0 8%;
    font-size: 18px;
    background-color: #fff;
    padding: 30px 0;
    /*box-sizing: border-box;*/
  }
  .product {
    margin: 0 5%;
    width: 90%;
  }
  #product .product_first_part {
    width: 100%;
    height: 270px;
    padding-bottom: 30px;
  }
  /*轮播图*/
  #product .carousel {
    float: left;
    width: 30%;
    height: 100%;
    /*margin-left: 2%;*/
    /* background-color: mediumblue;*/
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  /*产品简介*/
  #product .product_first_part .shortintro {
    float: left;
    width: 38%;
    min-width: 280px;
    height: 100%;
    margin: 0 30px;
  }
  #product .product_first_part .shortintro table {
    table-layout: fixed;
    height: 100%;
    width: 100%;
  }
  #product .product_first_part .shortintro td {
    height: 30px;
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  #product .product_first_part .shortintro .pdname {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  #product .product_first_part .shortintro .publisher2 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .text-align_left {
    text-align: left;
  }
  .text-indent20 {
    text-indent: 20px;
  }
  .text-align_right {
    text-align: right;
  }
   /*#product .product_first_part .shortintro .pdtest {
     !*text-align: center;*!
     overflow: hidden;
     text-overflow: ellipsis;
     white-space: nowrap;
   }*/
  /*星级评价*/
  #product .product_first_part .star_rate {
    float: right;
    width: 20%;
    min-width: 180px;
    height: 100%;
    /* margin-left: 2%;*/
  }
  #product .product_first_part .star_rate .starlevel {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #b9d1e6;
    padding-top: 12px;
    padding-left: 5px;
  }
  #product .product_first_part .star_rate .el-rate {
    float: left;
  }
  /*相似产品*/
  #product .similar {
    clear: both;
    display: block;
    /*padding-bottom: 20px;*/
    margin: 0;
    width: 100%;
    /*height: 200px;*/
  }
  #product .similar_line {
    border-bottom: 1px solid #abcce8;
    -webkit-box-shadow: 0 7px 13px #bedcf4;
    box-shadow: 0 7px 13px #bedcf4;
    height: 50px;
    padding: 0 30px;
  }
  #product .similar_line .similar_title {
    margin-left: 15px;
    float: left;
    line-height: 46px;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 3px;
    /*position: relative;
    left: 5px;*/
  }
  #product .similar_line .similar_more {
    float: right;
    margin-right: 5px;
  }
  #product .similarpd {
    clear: both;
    width: 100%;
    height: 100%;
    margin:20px 0 0 0;
    /*padding-top: 10px;
    padding-bottom: 20px;*/
  }
  #product .el-row {
    /*float: left;*/
    display: block;
    /*margin: 0px !important;*/
    /*height: 250px;*/
    width: 100%;
  }
  .el-col {
    /* height: 250px;*/
    width: calc(25% - 20px);
    margin: 0px 10px 15px 10px;
    /*圆角边框*/
    /*border-radius: 4px;*/
  }
  #product .item_img {
    /*width: 200px;*/
    width: 100%;
    /* height: 220px;*/
    /*min-height: 200px;*/
    /*min-width: 200px;*/
    height: 100%;
    display: block;
    position: absolute;
  }
  #product .item_title {
    /*width: 100%;*/
    width: 100%;
    display: block;
    height: 30px;
    margin: 0px !important;
    text-align: center;
    vertical-align: middle;
    font-size: 16px;
    /*padding: 10px 5px;*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    bottom: -30px;
    position: absolute;
    /*background-color: #a0cfff;*/
  }
  #product .layout{
    width: 100%;
    height: 0;
    padding-bottom: 120%;
    position: relative;
  }
  /*相似产品下面*/
  #product .contact_pdintro {
    margin: 20px 0 20px 0;
    width: 100%;
    min-height: 600px;
  }
  /*产品介绍和评价*/
  .pdintro_pdevaluate {
    float: left;
    margin-bottom: 30px;
    border: 1px solid #5b7d96;
    min-height: 550px;
    /*width: calc(85% - 34px);*/
    width: 100%;
  }
  /*需求对接*/
  .pdpublisher_phone {
    border: 1px solid #5b7d96;
    width: 100%;
    height: 100%;
    min-height: 500px;
    vertical-align: middle;
  }
  /*产品介绍*/
  .pdintro_pdevaluate .pdintro {
    /*width: 90%;*/
    /*    margin: 20px;
        border: 1px solid #5b7d96;*/
    padding: 10px;
  }
  .pdintro_size {
    /*min-height: 300px;*/
    width: 100%;
    /*border: 1px solid #5b7d96;*/
    margin-bottom: 10px;
    text-align: left;
    /*padding: 10px;*/
  }
  .pdintro_size img {
    width: 100%;
  }
  /*.pdintro_size p {
    font-size: 20px;
    font-weight: bolder;
    margin: 10px;
  }*/
  .pdintro_size2 {
    margin: 10px;
  }
  .pdintro_size2 .text{
    text-indent: 1cm;
  }
  /*产品评价*/
  .pdevaluate {
    width: 100%;
    min-height: 550px;
    /* background-color: #8cc5ff;*/
  }
  .pdevaluate-list .star_time .el-rate {
    float: left;
  }
  /*某一产品所有评论框不包含页码*/
  .pdevaluate .pdi-evaluate {
    margin: 20px;
    /*background-color: #e6a23c;*/
  }
  /*所有评论框的样式*/
  .form_border {
    border: 1px solid #eee;
  }
  .form_bottom {
    border-bottom: 1px solid #eee;
  }
  .form_background {
    background-color: #f7f7f7;
  }
  .form_color {
    color: #666;
  }
  .reply_color {
    color: #005ea7;
  }
  .pdevaluate .pdi-evaluate table {
    min-height: 200px;
    width: 100%;
    padding: 10px;
    /*min-width: 500px;*/
    margin-bottom: 20px;
    /*background-color: #fbc4c4;*/
    font-size: 16px;
  }
  /*评论框第一行*/
  .pdi-evaluate-first {
    height: 50px;
  }
  .pdevaluate td {
    /*border-bottom: 1px solid black;*/
  }
  .pdi-evaluate-first .username {
    float: left;
    margin-left: 10px;
  }
  .pdi-evaluate-first .user-star-level {
    float: left;
    margin-left: 30px;
  }
  /*评论框第二行*/
  .pdi-evaluate-second {
    /*height:140px ;*/
  }
  .pdi-evaluate-content {
    margin: 10px;
    min-height: 100px;
    text-align: left;
    padding: 5px;
  }
  /*评论框第三行*/
  .pdi-evaluate-third {
    height: 30px;
    line-height: 30px;
  }
  /*发布日期*/
  .pdi-evaluate-date {
    float: left;
    margin-left: 20px;
  }
  /*屏蔽*/
  .pdi-evaluate-delete {
    float: right;
    margin-right: 20px;
  }
  .pdi-evaluate-delete .el-button {
    /*color:black;*/
    padding: 0 !important;
  }
  /*回复*/
  .pdi-evaluate-reply {
    float: right;
    margin-right: 20px;
  }
  .pdi-evaluate-reply .el-button {
    /*color:black;*/
    padding: 0 !important;
  }
  /*点赞*/
  .pdi-evaluate-good {
    float: right;
    margin-right: 20px;
    vertical-align: middle;
  }
  .pdi-evaluate-good .el-button {
    /* color:black;*/
    padding: 0 !important;
  }
  /*回复框*/
  .replyform1 {
    padding: 10px;
    /*border: 1px solid black;*/
  }
  .replyform1 .el-put {
    margin: 10px;
  }
  .replyform1 .el-button {
    float: right;
    margin: 10px 20px 0 20px;
  }
  /*产品发布者已回复内容*/
  .reply {
    padding: 10px;
    /*border: 1px solid black;*/
  }
  .reply .publisherreply {
    padding: 10px;
    border: 1px solid #5b7d96;
  }
  .reply .replied {
    margin: 10px;
    border: 1px solid #5b7d96;
    text-align: left;
  }
  .reply .reply_date_button {
    height: 30px;
    line-height: 30px;
  }
  .reply .reply-date {
    float: left;
    margin-left: 20px;
  }
  .reply .pdi-evaluate-reply {
    float: right;
    margin: 10px 20px 0 20px;
  }
  /*试用干警回复产品发布者回复框与上面回复框相同*/
  /*试用干警已回复产品发布者内容*/
  .reply .userreply {
    padding: 10px;
    /* border: 1px solid black;*/
    border: 1px solid #a4b7ca;
    background: rgba(119, 119, 106, 0.1);
  }
  .reply .reply-date {
    height: 30px;
    line-height: 30px;
    float: left;
    margin-left: 20px;
  }
  /*我要评价*/
  .myevaluate {
    min-height: 400px;
    margin: 20px;
    padding: 20px;
  }
  .mytextlevel {
    margin-top: 50px;
    margin-left: 20px;
    margin-right: 20px;
    min-height: 200px;
    border: 1px solid #5b7d96;
    padding: 10px;
    text-align: left;
  }
  .myevaluate_submit {
    margin-top: 50px;
  }
  .five_star_percent {
    padding: 11px 5px;
  }
  .percent,
  .levelcount {
    color: steelblue;
  }
  .carousel-container .carousel-tiem {
    /*width: 17.6%;*/
  }
  .carousel-container .carousel-tiem:first-child {
    margin-left: 0;
  }
  .carousel-container .carousel-tiem:last-child {
    margin-right: 0;
  }
  .pdname1 {
    width: 200px;
  }
  /*第一行星级评价*/
  .el-rate {
    /*padding-left: 20px;*/
  }
  .star_rate .percent,
  .star_rate .levelcount {
    /*padding-right: 15px;*/
    text-align: right;
    font-size: 16px
  }
  .pdevaluate-container {
    display: flex;
    /*margin-top: 20px;*/
    /*margin-bottom: 20px;*/
    /*border-top: 1px dotted #67aecc;*/
    /*border-bottom: 1px dotted #67aecc;*/
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .pdevaluate-container:first-child {
    border-top: 0;
    padding-top: 20px;
  }
  .pdevaluate-user {
    width: 200px;
    border: 1px solid #4682b4;
    height: 160px;
    line-height: 71px;
  }
  .pdevaluate-list {
    margin-left: 40px;
    width: calc(100% - 100px);
    border-bottom: 1px dotted #67aecc;
    padding-bottom: 20px;
  }
  .main-content {
    text-align: left;
    width: 100%;
    background: rgb(70, 130, 180);
    padding: 10px;
    color: #fff;
  }
  .pdevaluate-container ul {
    margin-left: 40px;
    width: calc(100% - 100px)
  }
  .pdevaluate-container ul,
  .pdevaluate-container ul li {
    list-style: none;
    text-align: left;
  }
  .pdevaluate-container ul li {
    margin: 25px 0;
  }
  .msg-name {
    display: inline-block;
    width: 200px;
  }
  .contentP {
    color: rgb(70, 130, 180);
  }
  .usr-container {
    background: rgba(0, 0, 0, .05);
    padding: 5px;
  }
  .content-container {
    padding: 5px;
  }
  .pdevaluate_pages {
    margin-top: 10px;
  }
</style>
<style>
  #product .el-carousel__container {
    height: 270px !important;
  }
  i.el-icon-download,
  i.el-icon-upload2 {
    font-size: 22px;
  }
  .el-tabs--border-card > .el-tabs__header .el-tabs__item {
    font-size: 16px;
    color: #2c3e50;
  }
  .navBarWarp {
    position: fixed;
    top: 0px;
    z-index: 9999;
    width: calc(65% + 26px);
  }
  .navBarWarp .el-tabs--border-card > .el-tabs__content {
    padding: 0;
  }
  /*.navBarWarp .scroll-container {
    height:calc(100vh - 420px);
    overflow-y: auto;
  }*/
</style>
