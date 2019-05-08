import TitleMod1 from '@/components/titleMod1/index.vue';
export default {
    components:{
        TitleMod1
    },
    data(){
        return {
            firstNews:'',
            otherNews:[]
        }
    },
    created () {
        this.getInfoData();
    },
    methods:{
       getInfoData(){
           this.$http.get('/api/epaperList').then(({data}) => {
                this.firstNews = data.list[0].img,
                data.list.unshift()
                this.otherNews = data.list;
            })
       }
    },
    mounted(){
    }
}