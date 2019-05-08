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
        this.getInfoData1();   
    },
    methods:{
         // 获取稿件数排名前五的选题
        getInfoData1(){
            this.$http.get('/api/findManuscriptTask?type=3').then(({data}) => {
                console.log(data,'稿件排名前五')
                if(data.status == 200 && data.list.length){
                    this.showEventData = data.list.map(item => {
                        return {
                            title:item.name,
                            similarCount:item.count
                        }
                    })
                    
                }
            })
        },
        
    },
    // mounted(){
    //     this.initEcharts1()
    // }
}