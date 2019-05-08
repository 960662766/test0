<template>
    <div class="rightTop">
    <TitleMod1 :typeStr="'铁道要闻'"></TitleMod1>
    <div class="infoBox">
        <div class="infoScrollBox" ref="infoScrollBox">
            <div class="infoListBox" v-for="(item,index) in showInfoData" v-if="index<5">
                <div class="topInfo clearfix">
                    <span class="infoStr fl">{{item.title}}</span>
                </div>
                <div class="botInfo clearfix">
                    <span class="fl otherInfo">{{item.inputTime|fomatertime}}</span>
                    <span class="fr viewsNum">{{item.views}}</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import TitleMod1 from '@/components/titleMod1/index.vue';
export default {
    name:'rightTop',
    components:{
        TitleMod1
    },
    data(){
        return{
            showInfoData:[]
        }
    },
    created () {
    this.getInfoData();  
    },
    methods: {
        getInfoData(){
            this.$http.get('/api/tiedaob/getRailNews').then(({data}) => {
                console.log(data,'铁道要闻')
                if(data.status == 200 && data.list.length){
                    this.showInfoData = data.list.map(item => {
                        return {
                            description:item.description,
                            inputTime:item.inputTime,
                            views:item.views,
                            title:item.title
                        }
                    })
                }
            })
        }
    },
}
</script>
<style lang="scss">
.rightTop{
    width: 3.2rem;
    .titleBox{
        p{
            width: 1.76rem;
            height: 0.5rem;
            line-height: 0.5rem;
            background: url('../../assets/images/Group2x.png') no-repeat;
            background-size: 100% 100%;
            font-size: 0.26rem;
            color: #131c69;
            margin-right: 0.27rem;
            text-align: center;
        }
        .active{
            background-image: url('../../assets/images/Group2xActive.png');
        }
    }
    .titleBox1{
        p{
            width: 1.52rem;
            background:#2dc7ab;
            color: #141b69;
            margin-right: 0.1rem;
            &:nth-last-of-type(1){
                margin-right: 0;
            }
        }
        .active{
            background: #e59b22;
            background-image:url();
        }
    }
    .infoBox{
        text-align: center;
        line-height: 0;
        margin-top: .14rem;
        .btnTop{
            margin-top: 0.23rem;
            margin-bottom: 0.13rem;
        }
        .btnTop,.btnBot{
            width: 0.63rem;
            height: 0.11rem;
            display: inline-block;
            background: url('../../assets/images/Triangle2x.png') no-repeat;
            background-size: 100%;
        }
        .btnBot{
            margin-top: 0.12rem;
            background-image:url('../../assets/images/Triangle2xDown.png');
        }
        .infoScrollBox{
            height: 2.83rem;
            overflow-y: auto;
            border-top: 1px solid #828dba;
            &::-webkit-scrollbar {
                display: none;
            }
        }
        .infoListBox{
            width: 100%;
            border-bottom: 1px dashed #5a7cb9;
            .topInfo{
                font-size: 0.15rem;
                height: 0.24rem;
                margin: 0.03rem 0 0.03rem;
                line-height: 0.24rem;
                color: #fff;
                .pic{
                    width: 0.3rem;
                    height: 0.3rem;
                    line-height: 0.3rem;
                    text-align: center;
                    font-size: 12px;
                    color: #1e3a8e;
                    background:url('../../assets/images/Rectangle2x.png') no-repeat;
                    background-size:100%;
                    margin-right: 0.08rem;
                }
                .infoStr{
                    text-align: left;
                    width: calc(100% - 0.5rem);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
            .botInfo{
                font-size: 0.13rem;
                line-height: 0.2rem;
                margin-bottom: 0.03rem;
                color: #9bffc1;
                .viewsNum{
                    display: inline-block;
                    background-image: url(../../assets/images/see.png);
                    background-repeat: no-repeat;
                    background-size: .17rem .11rem;
                    background-position: left center;
                    padding-left: .25rem;
                }
                .otherName{
                    width: 1.5rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .otherInfoBox{
                    .num{
                        width: 1.3rem;
                    }
                    .otherInfo{
                        width: 1.5rem;
                        padding-left: 0.22rem;
                        background: url('../../assets/images/center2x.png') no-repeat;
                        text-align: left;
                    }

                }
            }
        }
    }
}
</style>

