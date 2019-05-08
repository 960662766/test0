
import TitleMod1 from '@/components/titleMod1/index.vue';
import pie from '@/components/pie';

export default {
    components:{
        TitleMod1,
        pie
    },
    props:['typeNum'],
    data(){
        return {
            legend:[],
            percent:[],
            showLeftInfo:[],
            showMiddleInfo:[],
            showRightInfo:[],
            colorBox:['#fb497b','#ffc760','#6fe521','#87fffb','#4a7cff','#f8e71e','#dd60d5','#a076fe'],
            colorBoxStr:['#E56772',
                '#E94141',
                '#FFE279',
                '#FFF5AB',
                '#CBFD72',
                '#54c995',
                '#fb497b',
                '#ffc760',
                '#6fe521',
                '#87fffb'],
                colorBoxStr1:['#B91A32',
                '#FDA472',
                '#E66F2B',
                '#CABA0B',
                '#519F31',
                '#54c995',
                '#fb497b',
                '#ffc760',
                '#6fe521',
                '#87fffb'],
        }
    },
    created(){
        this.getInfoData();
        this.getInfoData1();
        this.getInfoData2();
    },
    mounted(){
    },
    methods:{
        // 生产力综合排行
        getInfoData(){
            this.$http.get('/api/findManuscriptTask?type=1').then(({data}) => {
                console.log(data,'生产力综合排行')
                if(data.status && data.list.length){
                    this.showLeftInfo = data.list.map(item => {
                        return {
                            name:item.name,
                            percentage:item.percentage,
                            count:item.count
                        }
                    })
                }
            })
        },
        // 记者任务数量排行
        getInfoData1(){
            this.$http.get('/api/findManuscriptTask?type=2').then(({data}) => {
                console.log(data,'记者任务数量排行')
                if(data.status && data.list.length){
                    this.showMiddleInfo = data.list.map(item => {
                        return {
                            name:item.name,
                            percentage:item.percentage,
                            count:item.count
                        }
                    })
                }
            })
        },
        // 获取各平台数据
        getInfoData2(){
            this.$http.get('/api/getDeptRatio').then(({data}) => {
                console.log(data,'获取各平台数据')
                if(data.status && data.list.length){
                    let arr2=[]
                    arr2 = data.list.map(item => {
                        return {
                            name:item.name,
                            value:item.count
                        }
                    })
                    this.showRightInfo=arr2;
                    let arr=[]
                    let percent1=[]
                    let sum=0
                    data.list.map(item=>{
                        arr.push(item.name)
                        sum+=item.count
                    })
                    data.list.map(item=>{
                        percent1.push((item.count*100/sum).toFixed()+'%')
                    })
                    this.legend=arr
                    this.percent=percent1
                    console.log(this.percent)

                }
            })
        },
        getStyle(item,index){
            return {
                width:item.percentage / 100  * 0.65 + 'rem',
                background:`linear-gradient(to bottom,${this.colorBoxStr[index]} ${item.percentage / 100}%,${this.colorBoxStr1[index]})`
            }
        },
        getStyle1(index){
            return {
                color:this.colorBoxStr[index]
            }
        }
    }
}