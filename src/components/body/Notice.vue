<template>
  <!--公告详情页-->
  <div id="notice">
    <!--面包屑-->
    <div class="breadcrumb">
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="notice_name">
      <span>{{notice.name}}</span>
    </div>
    <div class="message-info">
      <span v-text="notice.org"></span>
      <span v-text="notice.author"></span>
      <span v-text="notice.time"></span>
    </div>
    <!--<div class="notice_content">{{notice.content}}</div>-->
    <div style="    text-align: left;    padding-left: 10%;">
      <span v-for="(ob,index) in (notice.content.split('\n'))" >{{ob}}<br/></span>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from '../resource/Breadcrumb';
  export default {
    name: "Notice",
    components: {Breadcrumb},
    data(){
      return {
        notice: {
          name: '2018年度最高人民检察院检察理论研究所互联网刑事法律研究中心课题立项公告',
          org: 'XXX人民检察院',
          author: '徐某某',
          time: '2018-11-26 10:02:36',
          content: '　　经研究决定，2018年度最高人民检察院检察理论研究所互联网刑事法律研究中心课题立项13项。现予公布：\n' +
          '\n' +
          '1.[GJ2018HX01]互联网金融产品的法律性质研究——以互联网众筹为例：浙江省杭州市人民检察院　郭志平\n' +
          '\n' +
          '2.[GJ2018HX02]互联网金融行为行政监管与刑事规制的界限：重庆市人民检察院第五分院　陈卫民\n' +
          '\n' +
          '3.[GJ2018HX03]互联网金融领域消费者权益保护：最高人民检察院　张幼平\n' +
          '\n' +
          '4.[GJ2018HX04]互联网金融犯罪风险防范研究：最高人民检察院　王松苗\n' +
          '\n' +
          '5.[GJ2018HX05]互联网风险账户刑事规制研究：北京师范大学　廖明\n' +
          '\n' +
          '6.[GJ2018HX06]涉众型互联网金融犯罪主体范围界定政策研究：最高人民检察院　韩成军\n' +
          '\n' +
          '7.[GJ2018HX07]新型互联网证券犯罪的刑事规制：上海市人民检察院　徐燕平\n' +
          '\n' +
          '8.[GJ2018HX08]涉互联网非法集资类犯罪证据标准研究：浙江省台州市人民检察院　孔璋\n' +
          '\n' +
          '9.[GJ2018HX09]网络犯罪证据的审查与运用：华东政法大学叶青；上海市虹口区人民检察院　曾国东\n' +
          '\n' +
          '10.[GJ2018HX10]网络实施损害商业信誉、商品声誉犯罪实证研究：中国人民大学法学院　刘品新\n' +
          '\n' +
          '11.[GJ2018HX11]大数据开发利用的合理界限研究：最高人民检察院　赵志刚\n' +
          '\n' +
          '12.[GJ2018HX12]金融、电信和互联网企业数据协查规则研究：最高人民检察院　劳娃\n' +
          '\n' +
          '13.[GJ2018HX13]中国互联网金融犯罪典型案例评析：最高人民检察院　陈鸷成\n' +
          '\n' +
          '各课题组需在2018年8月31日前完成中期报告，中期报告需要形成1万字以上的初步研究成果。结题研讨会拟定于12月中下旬举行。\n' +
          '\n' +
          '最高人民检察院检察理论研究所\n' +
          '\n' +
          '2018年5月8日\n' +
          '\n' +
          '[责任编辑： 王媛]2018年度最高人民检察院检察理论研究所互联网刑事法律研究中心课题立项公告\n' +
          '\n' +
          '经研究决定，2018年度最高人民检察院检察理论研究所互联网刑事法律研究中心课题立项13项。现予公布：\n' +
          '\n' +
          '1.[GJ2018HX01]互联网金融产品的法律性质研究——以互联网众筹为例：浙江省杭州市人民检察院　郭志平\n' +
          '\n' +
          '2.[GJ2018HX02]互联网金融行为行政监管与刑事规制的界限：重庆市人民检察院第五分院　陈卫民\n' +
          '\n' +
          '3.[GJ2018HX03]互联网金融领域消费者权益保护：最高人民检察院　张幼平\n' +
          '\n' +
          '4.[GJ2018HX04]互联网金融犯罪风险防范研究：最高人民检察院　王松苗\n' +
          '\n' +
          '5.[GJ2018HX05]互联网风险账户刑事规制研究：北京师范大学　廖明\n' +
          '\n' +
          '6.[GJ2018HX06]涉众型互联网金融犯罪主体范围界定政策研究：最高人民检察院　韩成军\n' +
          '\n' +
          '7.[GJ2018HX07]新型互联网证券犯罪的刑事规制：上海市人民检察院　徐燕平\n' +
          '\n' +
          '8.[GJ2018HX08]涉互联网非法集资类犯罪证据标准研究：浙江省台州市人民检察院　孔璋\n' +
          '\n' +
          '9.[GJ2018HX09]网络犯罪证据的审查与运用：华东政法大学叶青；上海市虹口区人民检察院　曾国东\n' +
          '\n' +
          '10.[GJ2018HX10]网络实施损害商业信誉、商品声誉犯罪实证研究：中国人民大学法学院　刘品新\n' +
          '\n' +
          '11.[GJ2018HX11]大数据开发利用的合理界限研究：最高人民检察院　赵志刚\n' +
          '\n' +
          '12.[GJ2018HX12]金融、电信和互联网企业数据协查规则研究：最高人民检察院　劳娃\n' +
          '\n' +
          '13.[GJ2018HX13]中国互联网金融犯罪典型案例评析：最高人民检察院　陈鸷成\n' +
          '\n' +
          '各课题组需在2018年8月31日前完成中期报告，中期报告需要形成1万字以上的初步研究成果。结题研讨会拟定于12月中下旬举行。\n' +
          '\n' +
          '最高人民检察院检察理论研究所\n' +
          '\n' +
          '2018年5月8日\n' +
          '\n' +
          '[责任编辑： 王媛]'
        }
      }
    }
  }
</script>

<style scoped>
  #notice {
    width: 90%;
    margin: 0px 5% 0px 5%;
    min-height: 600px;
    font-size: 18px;
    background-color: #fff;
    padding: 10px;
  }

  .notice_name {
    width: 80%;
    margin-top: 50px;
    margin-right: 10%;
    margin-left: 10%;
    text-align: center;
    font-size: 22px;
    font-weight: bolder;
  }

  .notice_content {
    width: 80%;
    margin-top: 50px;
    margin-right: 10%;
    margin-left: 10%;
    text-align: left;
    font-size: 18px;
  }

  .message-info {
    display: flex;
    color: rgb(148, 144, 144);
    justify-content: space-around;
    width: 50%;
    margin: 0 auto;
    padding: 20px 0;
  }
</style>
