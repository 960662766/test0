export default {
    data(){
        return {
            videoMockData:[]
        }
    },
    created () {
        this.getInfoData();
    },
    methods: {
        getInfoData(){
            this.$http.get('/api/yanqing/getReportUrl').then(({data}) => {
            })
        }
    }
}