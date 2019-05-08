<template>
  <div class="middleThree">
    <div
      class="schedule clearfix"
      v-for="(item,index) in middleThreeArr"
      :key="index"
      v-if="index<3"
    >
      <div class="scheduleLeft fl clearfix">
        <span class="name fl">{{item.name}}</span>
        <p class="title fl">{{item.title}}</p>
      </div>
      <div class="scheduleRight fl clearfix">
        <div class="timeInfo fl">
          <span class="time">{{item.time|fomatertime}}</span>
          <p class="todo">{{item.dowhat}}</p>
        </div>
        <span class="status fr">{{item.state}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "middleThree",
  data() {
    return {
      middleThreeArr: [
        {
          name: "朱克楠",
          title: "物流业跑入新赛道：分工日益精细，数字 化、智能化趋势明显",
          time: "04-23 16：47",
          dowhat: "自派车辆，摄像与写稿",
          state: "待执行"
        },
        {
          name: "朱克楠",
          title: "物流业跑入新赛道：分工日益精细，数字 化、智能化趋势明显",
          time: "04-23 16：47",
          dowhat: "自派车辆，摄像与写稿",
          state: "待执行"
        },
        {
          name: "朱克楠",
          title: "物流业跑入新赛道：分工日益精细，数字 化、智能化趋势明显",
          time: "04-23 16：47",
          dowhat: "自派车辆，摄像与写稿",
          state: "执行中"
        }
      ]
    };
  },
  created() {
    this.getInfoData();
  },
  methods: {
    //获取记者任务
    getInfoData() {
      this.$http.get("/api/taskReportList").then(({ data }) => {
        console.log(data, "获取记者任务");
        if (data.status == 200) {
          this.middleThreeArr = data.listMain.map(item => {
            return {
              name: item.charger,
              title: item.content,
              time: item.begintime,
              dowhat: item.needCar + "," + item.name,
              state: item.state
            };
          });
        }
      });
    }
  }
};
</script>
<style lang="scss">
.middleThree {
  margin-top: 0.38rem;
  width: 7.27rem;
  height: 2.1rem;
  background: rgba(34, 62, 164, 0.6);
  font-size: 0.15rem;
  color: #9bffc2;
  .schedule {
    border-bottom: 1px dashed rgba(139, 186, 224, 0.51);
    padding: 0.12rem 0.1rem;
  }
  .schedule:nth-of-type(3) {
    border: 0;
  }
  .scheduleLeft {
    width: 50%;
    .name {
      width: 20%;
    }
    .title {
      color: #fff;
      width: 80%;
      padding-right: 8%;
    }
  }
  .scheduleRight {
    width: 50%;
    .timeInfo {
      width: 57%;
      .todo {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
    .status {
      width: 30%;
      background-image: url(../../assets/images/loading.png);
      background-repeat: no-repeat;
      background-size: 0.2rem 0.2rem;
      padding-left: 0.4rem;
    }
  }
}
</style>

