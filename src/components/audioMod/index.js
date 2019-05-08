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
            this.$http.get('/api/yanqing/getNewestVideo').then(({data}) => {
                console.log(data)
            })
            
        },
       
    },
    mounted(){

    }
}