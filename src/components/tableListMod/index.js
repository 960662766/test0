
import TitleMod1 from '@/components/titleMod1/index.vue';
import fiveBlock from '@/components/fiveBlock.vue';
export default {
    components:{
        TitleMod1,
        fiveBlock
    },
    props:['typeNum'],
    data(){
        return {
            showIndex:0,
            scrollNum:0,
            typeAllBox:[[],[{
                name:'央媒聚焦',
                id:0,
            },{
                name:'行业聚焦',
                id:1,
            }],
            [{
                name:'宣传任务',
                id:0,
            },{
                name:'信息员上报',
                id:1,
            },{
                name:'记者上报',
                id:2,
            },{
                name:'用户爆料',
                id:3,
            },]
            ],
            showInfoBox:[]
        }
    },
    created(){
        if(this.typeNum == 2){
            if(this.showIndex == 0){
                this.getInfoDataTS1();
            } else {
                this.getInfoData();
            }
        } else if(this.typeNum == 3){//选题在线
            this.getInfoDataTS2()
        } else if(this.typeNum == 1){//央媒聚焦or行情聚焦
            if(this.showIndex == 0){//央媒聚焦
                this.getInfoDataTS3();
            } else {//行情聚焦
                this.getInfoDataTS4();
            }
        }


        this.autoActive()
    },
    methods: {
        setActive(item){
            this.showIndex = item;
            if(this.typeNum == 2){ // 三排上1
                if(item == 0){
                    this.getInfoDataTS1();
                } else {
                    this.getInfoData();
                }
            } else if(this.typeNum == 1) {
                if(item == 0){
                    this.getInfoDataTS3();
                } else {
                    this.getInfoDataTS4();
                }
            }
        },
        //央媒聚焦行业聚焦自动切换
        autoActive(){
            setInterval(()=>{
                if(this.showIndex==0){
                    this.showIndex=1;
                    this.setActive(this.showIndex)
                }else {
                    this.showIndex=0;
                    this.setActive(this.showIndex)
                }
            },10000)
        },
        scrollFunc(type){
            if(type == 1){ // 上
                this.scrollNum-= 35;
                if(this.scrollNum <= 0){
                    this.scrollNum = 0;
                }
            } else if(type == 2){ // 下
                this.scrollNum+= 35;
                if(this.scrollNum >= 35 * 8){
                    this.scrollNum = 35 * 8;
                }
            }
            this.$refs.infoScrollBox.scrollTop = this.scrollNum;
        },
        // 获取信息员上报，记者上报，用户爆料数据接口类型1
        getInfoData(){
            this.$http.get(`/api/clueListByType?type=${this.showIndex}&pageNum=${1}&pageSize=${10}`).then(({data}) => {
                if(data.status == 200 && data.list.length){
                    this.showInfoBox = data.list.map(item => {
                        return {
                            title:item.title,
                            reportor:item.reportor,
                            reporttime:item.reporttime
                        }
                    })
                }
                
            })
        },
        // 获取宣传任务数据接口类型2
        getInfoDataTS1(){
            this.$http.get(`/api/getPropagandaTask?pageNum=${1}&pageSize=${10}`).then(({data}) => {
                if(data.status == 200 && data.list.length){
                    this.showInfoBox = data.list.map(item => {
                        return {
                            title:item.title,
                            reportor:item.reportor,
                            reporttime:item.time
                        }
                    })
                }
                
            })
        },
        // 获取选题在线数据
        getInfoDataTS2(){   
            this.$http.get(`/api/getTopicListPage`).then(({data}) => {
                console.log(data,'选题在线')
                if(data.status == 200 && data.list.length){
                    this.showInfoBox = data.list.map(item => {
                        return {
                            title:item.title,
                            reportor:item.charger,
                            reporttime:item.createTime,
                            executorNum:item.num,
                            deptName:item.makejk
                        }
                    })
                }
            })
        },
        // 获取央媒聚焦
        getInfoDataTS3(){   
            this.$http.get(`/api/clueListByType?type=5`).then(({data}) => {
                console.log(data,'央媒聚焦')
                if(data.status == 200 && data.list.length){
                    this.showInfoBox = data.list.map(item => {
                        return {
                            title:item.title,
                            reportor:item.reportor,
                            reporttime:item.reporttime,
                        }
                    })
                }
            })
        },
        // 获取行业聚焦
        getInfoDataTS4(){   
            this.$http.get(`/api/clueListByType?type=10`).then(({data}) => {
                console.log(data,'行业聚焦')
                if(data.status == 200 && data.list.length){
                    this.showInfoBox = data.list.map(item => {
                        return {
                            title:item.title,
                            reportor:item.reportor,
                            reporttime:item.reporttime,
                        }
                    })
                }
            })
        },
        //获取当前新闻的详细
        getItemInfo(index){
            this.$refs.fiveBlock.getInfoDataTS2(index);
        }
    }
}