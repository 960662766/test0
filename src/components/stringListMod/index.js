import GlobuleUtil from '@/utils/Globule.js';
let classArr = ['#9bffe3','#f5a623','#e6da4a','#ff716f','#dcd026','#f1bebd']


export default {
    data(){
        return {
            dataBox:[
                {
                    name:'保监会',
                    type:1
                },{
                    name:'红日药业',
                    type:2
                },{
                    name:'美联储',
                    type:3
                },{
                    name:'吹嘘',
                    type:4
                },{
                    name:'测试1',
                    type:5
                },{
                    name:'测试2',
                    type:6
                },{
                    name:'测试3',
                    type:2
                },{
                    name:'测试4',
                    type:3
                },{
                    name:'测试5',
                    type:4
                },{
                    name:'测试6',
                    type:2
                },{
                    name:'测试7',
                    type:1
                },{
                    name:'测试8',
                    type:2
                },{name:'测试9',type:0
                },{name:'测试9',type:0},{name:'测试9',type:0},{name:'测试9',type:0},{name:'测试9',type:1},{name:'测试9',type:0},{name:'测试9',type:0},{name:'测试9',type:2},{name:'测试9',type:0},{name:'测试9',type:0},{name:'测试9',type:1},{name:'测试9',type:0},{name:'测试9',type:2},{name:'测试9',type:0},{name:'测试9',type:0},{name:'测试9',type:2},{name:'测试9',type:0},
            ]
        }
    },
    created(){
        this.getInfoData1();
    },
    methods:{
        getClassName(item){
            return classArr[item.type]
        },
        getStyleColor(item){
            return {
                color:classArr[item.type]
            }
        },
        //获取热词列表数据
        getInfoData1(){
            this.$http.get('/api/findHotWords').then(({data}) => {
                console.log(data,'获取热词列表')
                if(data.status == 200 && data.list.length){
                    // this.dataBox = data.list;
                    const max = 0;
                    // data.list.forEach(item => {
                    //     if (item.heat > max) max = item.heat;
                    // })
                    this.dataBox = data.list.map(item => Object.assign(item,{
                        name: item.word,
                        type: Math.floor(Math.random() * classArr.length),
                    }))
                    GlobuleUtil.init(document.getElementById('stringListMod')) 
                    // GlobuleUtil.init(document.getElementById('stringListMod'))
                }
            })
        },
    },
    mounted(){
        // GlobuleUtil.init(document.getElementById('stringListMod'))
    }
}