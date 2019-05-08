<template>
  <div class="rightBottom">
    <TitleMod1 :typeStr="'记者状态'"></TitleMod1>
    <ring :datas="datas" :legend="legend"></ring>

    <TitleMod1 :typeStr="'任务状态'"></TitleMod1>
    <ring :datas="datas1" :legend="legend1"></ring>
  </div>
</template>
<script>
import ring from "@/components/ring";
import TitleMod1 from "@/components/titleMod1/index.vue";
export default {
  name: "rightBottom",
  components: {
    ring,
    TitleMod1
  },
  created() {
    this.getInfoData();
    this.getInfoData1();
  },
  data() {
    return {
      legend: ["工作中的记者 ", "待命记者"],
      datas: [],
      legend1: ["在执行任务数 ", "已完成任务数"],
      datas1: []
    };
  },
  mounted() {},
  methods: {
    //获取记者状态
    getInfoData() {
      this.$http.get("/api/getStatisticsState?type=1").then(({ data }) => {
        console.log(data, "获取记者状态");
        let arr = [];
        if (data.status == 200) {
          arr.push(data.data.working);
          arr.push(data.data.complete);
          this.datas = arr;
        }
      });
    },
    //获取任务状态
    getInfoData1() {
      this.$http.get("/api/getStatisticsState?type=2").then(({ data }) => {
        console.log(data, "获取任务状态");
        if (data.status == 200) {
          let arr = [];
          arr.push(data.data.working);
          arr.push(data.data.complete);
          this.datas1 = arr;
        }
      });
    }
  }
};
</script>
<style lang="scss">
.rightBottom {
  margin-top: 0.38rem;
  .ring {
    margin-top: 0.38rem;
    margin-bottom: 0.38rem;
  }
}
</style>
