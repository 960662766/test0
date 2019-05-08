import TitleMod1 from '@/components/titleMod1/index.vue';
export default {
    components:{
        TitleMod1
    },
    data(){
        return {
            showDataBox:{},
            showEventData:[]
        }
    },
    created () {
      this.getInfoData(); 
      this.getInfoData1(); 
    },
    methods:{
        //获取折现数据
        getInfoData(){
            this.$http.get('/api/yanqing/findDynamicDataCount?type=1').then(({data}) => {
                if(data.status == 200 && data.list.length){
                    this.showDataBox = {
                        name:data.list[0].channel,
                        value:data.list[0].sumCount,
                        dataBox:data.list[0].timeAndCount
                    }
                }
                this.initEcharts1();
            })
        },
         // 获取列表数据
        getInfoData1(){
            this.$http.get('/api/yanqing/findHotEvent?type=1&pageNum=1&pageSize=10').then(({data}) => {
                if(data.status == 200 && data.list.length){
                    this.showEventData = data.list.map(item => {
                        return {
                            title:item.title,
                            similarCount:item.similarCount
                        }
                    })
                    
                }
            })
        },
        initEcharts1(){
            var myChart = this.$echarts.init(document.getElementById('lineType5'));
            let option = {
                color:['#1c76b4'],
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisTick:{
                        show:false 
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#7d81a4'
                        }
                    },
                    axisLabel:{
                        color:'#fff'
                    },
                    splitLine:{
                        color:['#fff']
                    },
                    data: Object.keys(this.showDataBox.dataBox)
                },
                yAxis: {
                    type: 'value',
                    show:false
                },
                series: [{
                    data: Object.values(this.showDataBox.dataBox),
                    type: 'line',
                    areaStyle: {}
                }]
            };
            myChart.setOption(option);
        },
    },
    // mounted(){
    //     this.initEcharts1()
    // }
}