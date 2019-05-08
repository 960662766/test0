<template>
  <div class="fiveBlock">
    <div class="title">{{showInfoBox.title}}</div>
    <span class="sname">基本信息</span>
    <div class="jbxx">
      <p>负责人：{{showInfoBox.charger}}</p>
      <div class="description">
        <p v-html="showInfoBox.description"></p>
      </div>
      <p>起止时间：{{showInfoBox.createTime|fomatertime}} —— {{showInfoBox.endtime|fomatertime}}</p>
    </div>

    <span class="sname">任务信息</span>
    <div class="rwxx">
      <div class="taskDescs">
        <p>{{showInfoBox.taskDescs}}</p>
      </div>
      <p>协同人：{{showInfoBox.executors}}</p>
    </div>

    <span class="sname">采访说明</span>
    <div class="reportPlan">
      <p>{{showInfoBox.reportPlan.content}}</p>
    </div>
    <img ref="point" src="../assets/images/Group11.png">
  </div>
</template>
<script>
export default {
  name: "fiveBlock",
  data() {
    return {
      showInfoBox: {
        title: "国内领先的“大数据+AI”提供商百分点集团 将在我市设立",
        charger: "李建荣",
        description:
          "在各电商企业频频秀出物流新技术的同时，传统物流企业也没闲着。顺丰正着手打造智慧物流地图，专为物流服务，实现高精定位。聚焦大件物流的日日顺，宣布7、8月份位…",
        createTime: "2019-03-28 18:26:16",
        endtime: "2019-03-28 23:59:59",
        reportPlan: [
          {
            content: "采访说明"
          }
        ],
        executors: "第四次", //协同人
        //任务说明
        taskDescs:
          "在各电商企业频频秀出物流新技术的同时，传统物流企业也没闲着。顺丰正着手打造智慧物流地图，专为物流服务，实现高精定位。聚焦大件物流的日日顺，宣布7、8月份位…"
      }
    };
  },
  created() {
    this.getInfoDataTS2(0);
  },
  methods: {
    // 获取选题在线第一条数据
    getInfoDataTS2(index) {      
      this.$http.get(`/api/getTopicListPage`).then(({ data }) => {
        console.log(data, "获取选题在线当前条数据");
        if (data.status == 200 && data.list.length) {
          this.showInfoBox = data.list[index];
        }
      });
      this.pointChange(index)
    },
    //移动指针样式
    pointChange(index){
      // debugger;
      this.$refs.point.style.top=(0.13+0.5*index)+'rem'
    }
  }
};
</script>
<style lang="scss">
.fiveBlock {
  position: absolute;
  width: 4.68rem;
  height: 5.3rem;
  background: url("../assets/images/Group14.png") no-repeat;
  background-size: 100% 100%;
  margin-top: 1rem;
  padding: 0.3rem 0.36rem 0.3rem;
  left: 6.5rem;
  top: -.5rem;
  .jbxx {
    border-bottom: 1px dashed rgba(155, 230, 255, 1);
    padding-bottom: 0.1rem;
    .description {
      height: 0.8rem;
      overflow-y: auto;
      margin-bottom: 0.1rem;
    }
    .description::-webkit-scrollbar {
      display: none;
    }
  }
  .rwxx {
    border-bottom: 1px dashed rgba(155, 230, 255, 1);
    padding-bottom: 0.1rem;
    .taskDescs {
      height: 0.5rem;
      overflow-y: auto;
    }
    .taskDescs::-webkit-scrollbar {
      display: none;
    }
  }
  .reportPlan {
    height: 0.5rem;
    overflow-y: auto;
  }
  .reportPlan::-webkit-scrollbar {
      display: none;
    }
  .title {
    font-size: 0.16rem;
    color: rgba(132, 255, 233, 1);
    line-height: 20px;
  }
  .sname {
    font-size: 0.16rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    margin-top: 0.25rem;
    display: inline-block;
  }
  div {
    p {
      font-size: .15rem;
      font-weight: 400;
      color: rgba(155, 230, 255, 1);
      line-height: 0.26rem;
    }
  }
  img {
    width: 0.84rem;
    position: absolute;
    left: -0.88rem;
    top: 0.13rem;
  }
}
</style>
