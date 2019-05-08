
import TitleMod1 from '@/components/titleMod1/index.vue';

export default {
    components:{
        TitleMod1
    },
    data(){
        return {
            showIndex:0,
            showDataBox:[],
            topData:[{
                name:'全部',
                value:'102840'
            },{
                name:'网络视频',
                value:'102840'
            },{
                name:'政府机关',
                value:'102840'
            },{
                name:'全部',
                value:'102840'
            },{
                name:'全部',
                value:'102840'
            },{
                name:'全部',
                value:'102840'
            },{
                name:'全部',
                value:'102840'
            },{
                name:'全部',
                value:'102840'
            },{
                name:'全部',
                value:'102840'
            },{
                name:'全部',
                value:'102840'
            },{
                name:'全部',
                value:'102840'
            },{
                name:'全部',
                value:'102840'
            },{
                name:'全部',
                value:'102840'
            }]
        }
    },
    created(){
        this.getInfoData();
    },
    // mounted(){
    //     this.initEcharts();
    // },
    methods:{
        setActive(index){
            this.showIndex = index;
        },
        getInfoData(){
            this.$http.get('/api/yanqing/findDynamicDataCount?type=3').then(({data}) => {
                if(data.status == 200 && data.list.length){
                    this.showDataBox = data.list.map(item => {
                        return {
                            name:item.channel,
                            value:item.sumCount,
                            dataBox:item.timeAndCount
                        }
                    })
                }
                this.initEcharts();
            })
        },
        initEcharts(){
            var myChart = this.$echarts.init(document.getElementById('echartsBox'));
            let legendData = this.showDataBox.map(item => item.name);
            let colorData = ['#fe504f','#ff814f','#ffb973','#feed79','#b6ff7a','#42d44d','#5aebfe','#3fffc4'];
            
            let option = {
                tooltip : {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    icon:'circle',
                    data:legendData.map((item,index) => {
                        return {
                            name:item,
                            textStyle:{
                                color:colorData[index]
                            }
                        }
                    })
                },
                color:colorData,
                toolbox: {
                    
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
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
                        data : Object.keys(this.showDataBox[0].dataBox)
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        nameTextStyle:{
                            color:'transparent'
                        },
                        axisTick:{
                           show:false 
                        },
                        splitLine: {     //网格线
                            "show": true,
                            lineStyle:{
                                color:'#7d81a4'
                            }
                        },
                        axisLabel:{
                            show:false
                        },
                        axisLine:{
                            show:false,
                            lineStyle:{
                            }
                        },
                    }
                ],
                series : this.showDataBox.map((item,index) => {
                    return {
                        name:item.name,
                        type:'line',
                        symbol:'none',
                        smooth:true,
                        areaStyle: {},
                        zlevel:(this.showDataBox.length - index),
                        data:Object.values(item.dataBox)
                    }
                })
            };
            myChart.setOption(option);
        }
    }
}