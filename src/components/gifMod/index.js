export default {
    data(){
        return {
            showInfoData:[],  // 最好栏目
            showInfoData1:[], // 用户行业
            showInfoData2:{}

        }
    },
    created () {
        this.getInfoData();
        this.getInfoData1();
        this.getInfoData2();  
    },
    methods:{
        // 获取最好栏目
        getInfoData(){
            this.$http.get('/api/tiedaob/getBestColumn').then(({data}) =>{
                console.log(data,'最好栏目')
                if(data.status == 200 && data.list.length){
                    this.showInfoData = data.list;
                }
            })
        },
        // 获取用户行业
        getInfoData1(){
            this.$http.get('/api/getUserIndustry').then(({data}) =>{
                console.log(data,'获取用户行业')
                if(data.status == 200 && data.list.length){
                    this.showInfoData1 = data.list;
                }
            })
        },
        // 获取用户性别 年龄
        getInfoData2(){
            this.showInfoData2 = {
                sex:[{
                    name:'男',
                    value:'87.4%'
                },{
                    name:'女',
                    value:'15.3%'
                }],
                age:[{
                   name:'25岁以下',
                   value:'18%' 
                },{
                    name:'25~45岁',
                    value:'27%'
                },{
                    name:'45岁以上',
                    value:'12%'
                }]
            }
            this.$http.get('/api/operationsImageUse').then(({data}) =>{
                console.log(data,'性别年龄占比')      
                if(data.status == 200){
                    this.showInfoData2=data
                }
            })
        },
        
    },
    
}