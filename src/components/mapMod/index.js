import { Z_BLOCK } from "zlib";

export default {
    name:'mapbox',  
    data () {
        return {
            center: {lng:116.48124097670243, lat:39.921828885312027},
            zoom:14,    
            markers:[{lng:116.48124097670243,lat:39.921828885312027},{lng:116.48124097670244,lat:39.921828885312028}],
            showInfoData:[],
            connurl:'',
            // style:{
            //     color: '#fff',
            //      fontSize : '15px',
            //      backgroundColor:'transparent',
            //      border:0,
            //      top:50,
            //      left:0,
            //      margin:auto,
            //      display:block,
            //      width:'50px'

            // }
        }
    },  
    mounted:function () {
        // this.enableScrollWheelZoom(true); 
     },  
     created () {
        this.getInfoData()
        this.getConnectUrl()
     },
     methods: {
         handler ({BMap, map}) {
        },    
        getClickInfo (e) {
            this.center.lng = e.point.lng      
            this.center.lat = e.point.lat    
        },
        getInfoData(){
            this.$http.get('/api/reportMap').then(({data}) => {
                console.log(data,'记者地图')
                if(data.status == 200 && data.list.length){
                    this.markers = data.list.map(item => {
                        return {
                            lng:item.position.split(',')[0],
                            lat:item.position.split(',')[1],
                            headimg:item.headimg,
                            username:item.username
                        }
                    })
                    console.log(this.markers)
                }
            })
        },
        //获取记者连线地址
        getConnectUrl(){
            this.$http.get('/api/getReportUrl').then(({data}) => {
                console.log(data,'记者连线地址')
                if(data.status == 200){
                    
                    this.connurl=data.connurl
                }
            })
        }
    }
}

