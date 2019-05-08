
import TitleMod1 from '@/components/titleMod1/index.vue';
export default {
    components:{
        TitleMod1
    },
    data(){
        return {
            scrollNum:0,
            showInfoData:[]
        }
    },
    created () {
    this.getInfoData();  
    },
    methods: {
        getInfoData(){
            this.$http.get('/api/tiedaob/getPartyMedia').then(({data}) => {
                console.log(data,'党媒平台')
                if(data.status == 200 && data.list.length){                    
                    this.showInfoData = data.list.map(item => {
                        return {
                            time:item.time,
                            num:item.num,
                            title:item.title,
                            place:item.place
                        }
                    })
                }
            })
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
        }
    },
}