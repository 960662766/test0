
export default {
    
    props:['videoPoster'],
    data(){
        return {
            InfoData:[],
            name:'',
            name1:'',
            total:0,
            total1:0,
            InfoData1:[]
        }
    },
    created(){
        this.getInfoData();
        this.getInfoData1();
    },
    methods:{
        getInfoData(){
            this.$http.get('/api/tiedaob/getWebReadWeek?type=2').then(({data}) => {
                console.log(data,'铁道网')
                if(data.status == 200){                    
                    this.InfoData = data.data.data;
                    this.initEcharts1(data.data.data)
                    this.name=data.data.appName
                    this.total=data.data.totol
                }
            })
        },
        getInfoData1(){
            this.$http.get('/api/tiedaob/getWxReadWeek?type=2').then(({data}) => {
                console.log(data,'人民铁道微信')
                if(data.status == 200){                    
                    this.InfoData1 = data.data.data
                    this.initEcharts2(data.data.data)
                    this.name1=data.data.name
                    this.total1=data.data.totol
                }
            })
        },
        initEcharts1(data){
            var myChart = this.$echarts.init(document.getElementById('lineType1'));
            let option = {
                color:['#1c76b4'],
                grid:{
                    // top:3
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    show:false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value',
                    show:false
                },
                series: [{
                    data: data,
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    showAllSymbol:true,
                    areaStyle: {
                        normal: {
                            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(0, 185, 214, 0.5)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(137, 189, 27, 0)'
                            }], false),
                            shadowColor: '#FEFFE7',
                            shadowBlur: 10
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#9BFFE4',
                            borderColor: 'rgba(137,189,2,0)',
                            borderWidth: 12

                        }
                    },
                }]
            };
            myChart.setOption(option);
        },
        initEcharts2(data){
            var myChart = this.$echarts.init(document.getElementById('lineType2'));
            let option = {
                color:['#1c76b4'],
                xAxis: {
                    type: 'category',
                    show:false,
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value',
                    show:false
                },
                series: [{
                    data: data,
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    showAllSymbol:true,
                    areaStyle: {
                        normal: {
								color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'rgba(0, 185, 214, 0.5)'
								}, {
									offset: 0.8,
									color: 'rgba(137, 189, 27, 0)'
								}], false),
								shadowColor: '#FEFFE7',
								shadowBlur: 10
							}
                    },
                    itemStyle: {
                        normal: {
                            color: '#9BFFE4',
                            borderColor: 'rgba(137,189,2,0)',
                            borderWidth: 12

                        }
                    },
                }]
            };
            myChart.setOption(option);
        }
    }
}