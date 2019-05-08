<template>
  <div class="ring">
    <div class="myechart" ref="echart"></div>
  </div>
</template>
<script>
export default {
  name: "ring",
  props: {
    legend: {
      type: Array
    },
    //      datas:{
    //        type: Object,
    //        // 默认必须返回一个工厂函数
    //        default: function () {
    //          return { message: 'hello' }
    //        }
    //      },
    datas: {
      type: Array
    }
  },
  components: {},
  created() {
  },
  watch: {
    datas: function(val, oldVal) {
      if (val.toString() !== oldVal.toString()) {
        this.init();
      }
    }
  },
  data() {
    return {
      }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var self = this;
      //        this.$nextTick(console.log(this.$refs.echart,'----'))

      let myChart = this.$echarts.init(self.$refs.echart);
      let placeHolderStyle = {
        normal: {
          color: "rgba(0,0,0,0)",
          borderWidth: 0
        }
      };
      let opt = {
        color: ["#FF5B41", "#4DCCB3"],
        grid: {
          left: "5%"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a}:<br/>{b}"
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          right: "3%",
          top: "5%",
          itemWidth: 15,
          itemHeight: 15,
          itemGap: 25,
          icon: "circle",
          textStyle: {
            fontSize: 15
          },
          data: [
            {
              name: self.legend[0],
              textStyle: {
                color: "#FF5B41"
              }
            },
            {
              name: self.legend[1],
              textStyle: {
                color: "#4DCCB3"
              }
            }
          ]
        },
        series: [
          {
            name: self.legend[0],
            type: "pie",
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: ["80%", "80%"],
            center: ["25%", "50%"],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                  textStyle: {
                    fontSize: 24
                  }
                },
                labelLine: {
                  show: false
                },
                borderWidth: 15,
                shadowBlur: 40,
                borderColor: "#FF5B41",
                shadowColor: "rgba(0, 0, 0, 0)" //边框阴影
              }
            },
            data: [
              {
                value: self.datas[0],
                name: self.datas[0]
              },
              {
                value: 4,
                name: "",
                itemStyle: placeHolderStyle
              }
            ]
          },
          {
            name: self.legend[1],
            type: "pie",
            clockWise: false,
            radius: ["40%", "40%"],
            center: ["25%", "50%"],
            hoverAnimation: false,
            itemStyle: {
              normal: {
                label: {
                  show: false,
                  textStyle: {
                    fontSize: 24
                  }
                },
                labelLine: {
                  show: false
                },
                borderWidth: 15,
                shadowBlur: 40,
                borderColor: "#4DCCB3",
                shadowColor: "rgba(0, 0, 0, 0)" //边框阴影
              }
            },
            data: [
              {
                value: self.datas[1],
                name: self.datas[1]
              },
              {
                value: 7,
                name: "",
                itemStyle: placeHolderStyle
              }
            ]
          }
        ]
      };

      myChart.setOption(opt);
    }
  }
};
</script>
<style lang="scss">
.ring {
  .ringtit {
    color: red;
    font-size: 0.32rem;
  }
  .myechart {
    width: 3.21rem;
    height: 1.43rem;
  }
}
</style>
