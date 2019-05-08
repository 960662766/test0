
export default {
    data(){
        return {
            showInfoData:[
                {
                    imageUrl:require('../../assets/images/timg2x.png'),
                    videoUrl:'',
                },{
                    imageUrl:require('../../assets/images/timg copy2x.png'),
                    videoUrl:'',
                },
            ],
        }
    },
    created () {
        this.getInfoData();
    },
    methods: {
        getInfoData(){
            this.$http.get('/api/getLivingState').then(({data}) => {
                console.log(data,'视频直播管理')
                if(data.status == 200 && data.list.length){
                    this.showInfoData = data.list.map(item => {
                        return {
                            imageUrl:item.imageUrl,
                            videoUrl:item.videoUrl
                        }
                    })
                }
            })
        }
    }
}