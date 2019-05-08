<template>
  <div class="pie" ref="pie"></div>
</template>
<script>
export default {
  name: "pie",
  props: {
    data: {
      type: Array
    },
    legend: {
      type: Array
    },
    percent:{
      type:Array
    }
  },
  watch:{
    data:function(val,oldVal){
      if (val.toString() !== oldVal.toString()) {
        this.init();
      }
    },
    legend:function(val,oldVal){
      if (val.toString() !== oldVal.toString()) {
        this.init();
      }
    },
    percent:function(val,oldVal){
      if (val.toString() !== oldVal.toString()) {
        this.init();
      }
    }
  },
  data() {
    return {};
  },
  created(){
    // console.log(this.percent,'===')
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let doc = this.$refs.pie;
      let myChart = this.$echarts.init(doc);
      let opt = this.getOpt(this.data, this.legend,this.percent);
      myChart.setOption(opt);
    },
    getOpt(data, legend,percent) {
      let self = this;
      let opt = {
        color: [
          
          {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#7E64FF" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#7E64FF" // 100% 处的颜色
              }
            ],
            globalCoord: false // 缺省为 false
          },
          
          {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#FAD961" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#F76B1C" // 100% 处的颜色
              }
            ],
            globalCoord: false // 缺省为 false
          },
          {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#B4EC51" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#429321" // 100% 处的颜色
              }
            ],
            globalCoord: false // 缺省为 false
          },
          {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#4D7BF3" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#4D7BF3" // 100% 处的颜色
              }
            ],
            globalCoord: false // 缺省为 false
          },
          {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#FF3030" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#B60000" // 100% 处的颜色
              }
            ],
            globalCoord: false // 缺省为 false
          },
        ],
        title: {
          text: "",
          left: "center",
          top: 20,
          textStyle: {
            color: "#fff"
          }
        },

        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          x: "right",
          y: "center",
          icon: "circle",
          align: "left",
          itemGap: 15,
          textStyle: {
            color: "#",
            fontSize: 13,
            fontWeight: 400
          },
          orient: "vertical",

          data: legend,
          // formatter: function(name,data) {
          //   let sum=0;
          //   data.map(item=>{
          //     sum+=item.value
          //   })
          //   return name + item.value/sum
          //   // return name + ((item.value/sum)*100).toFixed()+'%';
          // }
          formatter: function(name,percent) {
            return name + ' ';
          }
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: "90%",
            center: ["30%", "50%"],
            data: data.sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "angle",
            label: {
              normal: {
                show: false,
                textStyle: {
                  color: "rgba(255, 255, 255, 0.3)"
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: "rgba(255, 255, 255, 0.3)"
                },
                smooth: 0.2,
                length: 10,
                length2: 20
              }
            }
          },
          {
            name: "",
            type: "pie",
            radius: "20%",
            center: ["30%", "50%"],
            hoverAnimation: false,
            color: "#8BBAE0",
            emphasis: {
              show: false
            },
            data: [
              {
                value: 0,
                name: "",
                tooltip: {
                  show: false
                },
                labelLine: {
                  show: true,
                  length: 0,
                  length2: -600,
                  lineStyle: {
                    color: "transparent"
                  }
                },
                label: {
                  show: true,
                  color: "red",
                  verticalAlign: "middle",
                  align: "left",
                  width: 500,
                  height: 350
                }
              },
              {
                value: 1,
                // name: "年龄",
                tooltip: {
                  show: false
                },
                label: {
                  show: true,
                  position: "inside",
                  color: "#FFFFFF",
                  fontSize: 13,
                  padding: [-18, 0, 0, 0],
                  width: 200,
                  fontFamily: "微软雅黑"
                }
              }
            ],
            itemStyle: {
              color: "#8BBAE0"
              //   borderWidth: 5,
              // borderColor: '#415DB5',
            }
          }
        ]
      };
      return opt;
    }
  }
};
</script>
<style lang="scss">
.pie {
  width: 4rem;
  height: 1.9rem;
  margin-top: 0.38rem;
}
</style>


