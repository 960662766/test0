import TitleMod1 from '@/components/titleMod1/index.vue';
export default {
    components:{
        TitleMod1
    },
    data(){
        return {

        }
    },
    created () {
        this.getInfoData();
    },
    methods:{
        getInfoData(){
            this.$http.get('/api/getMediaStatisticst').then(({data}) => {
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
        initEcharts1(){
            var myChart = this.$echarts.init(document.getElementById('lineType7'));
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
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value',
                    show:false
                },
                series: [{
                    data: [800, 932, 901, 934, 944, 954, 964],
                    type: 'line',
                    areaStyle: {}
                }]
            };
            myChart.setOption(option);
        },
    },
    mounted(){
        this.initEcharts1()
    }
}