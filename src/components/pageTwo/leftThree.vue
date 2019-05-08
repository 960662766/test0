<template>
  <div class="leftThreeBox">
    <TitleMod1 :typeStr="'媒资产品数量'"></TitleMod1>
    <div class="leftThree" ref="leftThree"></div>
  </div>
</template>
<script>
import TitleMod1 from "@/components/titleMod1/index.vue";
export default {
  name: "leftThree",
  components: {
    TitleMod1
  },
  data() {
    return {
      InfoData:[]
    };
  },
  mounted() {
    
  },
  created() {
    this.getInfoData();
  },

  methods: {
    init(data) {
      let doc = this.$refs.leftThree;
      let myChart = this.$echarts.init(doc);
      let ops = this.getOption(data);
      myChart.setOption(ops);
    },
    getInfoData() {
      this.$http.get("/api/getMediaStatistics").then(({ data }) => {
        console.log(data, "媒资产品数量");
        if (data.status == 200) {
          this.InfoData = data.data;
          this.init(data.data);
        }
      });
    },
    getOption(data) {
      var option = {
        title: {
          // text: '请求数',
          textStyle: {
            fontWeight: "normal",
            fontSize: 16,
            color: "#F1F1F3"
          }
          // left: '6%'
        },
        color: [
          "rgba(63,255,197,1)",
          "rgba(91,235,255,1)",
          "rgba(193,122,255,1)"
        ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "#57617B"
            }
          }
        },
        legend: {
          icon: "circle",
          itemWidth: 15,
          itemHeight: 15,
          itemGap: 35,
          data: [
            {
              name: "图片",
              textStyle: {
                color: "rgba(63,255,197,1)"
              }
            },
            {
              name: "音频",
              textStyle: {
                color: "rgba(91,235,255,1)"
              }
            },
            {
              name: "视频",
              textStyle: {
                color: "rgba(193,122,255,1)"
              }
            }
          ],
          //   left: "2%",
          right: "center",
          bottom: "0%",
          textStyle: {
            fontSize: 10,
            color: "#F1F1F3"
          }
        },
        grid: {
          left: "4%",
          too: "0%",
          right: "4%",
          bottom: "20%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: "#CECACA"
              }
            },
            data: data.time
          },
          {
            axisPointer: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,
              color: "#fff"
            },
            position: "bottom",
            offset: 10
            // data: ['', '', '', '', '', '', '', '', '', '', {
            //     value: '周六',
            //     textStyle: {
            //         align: 'left'
            //     }
            // }, '周日']
          }
        ],
        yAxis: [
          {
            type: "value",
            // name: '单位（%）',
            axisTick: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#57617B"
              }
            },
            axisLabel: {
              show: false,
              margin: 0,
              textStyle: {
                fontSize: 14
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#57617B"
              }
            }
          }
        ],
        series: [
          {
            name: "图片",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 0
              }
            },
            areaStyle: {
              normal: {
                // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //     offset: 0,
                //     color: 'rgba(137, 189, 27, 0.3)'
                // }, {
                //     offset: 0.8,
                //     color: 'rgba(137, 189, 27, 0)'
                // }], false),
                color: "rgba(63,255,197,0.8)"
                // shadowColor: 'rgba(0, 0, 0, 0.1)',
                // shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                // color: 'rgb(137,189,27)',
                // borderColor: 'rgba(137,189,2,0.27)',
                // borderWidth: 12
              }
            },
            data: data.image
          },
          {
            name: "音频",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 0
              }
            },
            areaStyle: {
              normal: {
                // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //     offset: 0,
                //     color: 'rgba(0, 136, 212, 0.3)'
                // }, {
                //     offset: 0.8,
                //     color: 'rgba(0, 136, 212, 0)'
                // }], false),
                color: "rgba(91,235,255,0.8)"
                // shadowColor: 'rgba(0, 0, 0, 0.1)',
                // shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                // color: 'rgb(0,136,212)',
                // borderColor: 'rgba(0,136,212,0.2)',
                // borderWidth: 12
              }
            },
            data: data.audio
          },
          {
            name: "视频",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 0
              }
            },
            areaStyle: {
              normal: {
                // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //     offset: 0,
                //     color: 'rgba(219, 50, 51, 0.3)'
                // }, {
                //     offset: 0.8,
                //     color: 'rgba(219, 50, 51, 0)'
                // }], false),
                color: "rgba(193,122,255,0.8)"
                // shadowColor: 'rgba(0, 0, 0, 0.1)',
                // shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                // color: 'rgb(219,50,51)',
                // borderColor: 'rgba(219,50,51,0.2)',
                // borderWidth: 12
              }
            },
            data: data.video
          }
        ]
      };
      return option;
    }
  }
};
</script>
<style lang="scss">
.leftThreeBox {
  margin-top: 0.37rem;
  .leftThree {
    width: 4.26rem;
    height: 2.3rem;
  }
}
</style>
