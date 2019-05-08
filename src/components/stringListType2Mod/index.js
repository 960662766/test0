
import TitleMod1 from '@/components/titleMod1/index.vue';
export default {
    components:{
        TitleMod1
    },
    data(){
        return {
            showInfoData:[]
        }
    },
    created () {
        this.getInfoData();  
    },
    methods: {
        // 获取稿件前5数据
        getInfoData(){
            this.$http.get('/api/yanqing/findManuscriptTask?type=3').then(({data}) => {
                if(data.status && data.list.length){
                    this.showInfoData = data.list.map(item => {
                        return {
                            name:item.name,
                            count:item.count
                        }
                    })
                }
            })
        }
    }
}