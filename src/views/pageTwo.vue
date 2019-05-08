<template>
  <div class="pageTwo">
    <div class="fl mr80">
      <TableListMod1 :typeNum="3" style="margin-bottom:0.4rem;"></TableListMod1>
      <LineMod style="margin-bottom:0.3rem;"></LineMod>
      <LineMod1></LineMod1>
      <leftThree></leftThree>
    </div>
    <div class="fl mr80">
      <MapMod style="margin-bottom:0.25rem;"></MapMod>
      <div class="videoBox clearfix">
        <template v-for="(item,index) in infoData">
          <myVideo :ref="'myVideo'+index" :VideoUrl="item.videoUrl" :useState="item.useState" :imageUrl="item.imageUrl" :index="index"></myVideo>
        </template>
      </div>
      <middleThree></middleThree>
    </div>
    <div class="fl">
      <rightTop></rightTop>
      <rightBottom></rightBottom>
    </div>
  </div>
</template>
<script>
import TableListMod from "@/components/tableListMod/index.vue";
import LeftBotMod from "@/components/leftBotEchartsMod/index.vue";
import StringListMod from "@/components/stringListMod/index.vue";
import SpeedListMod from "@/components/SpeedListMod/index.vue";
import StringListType2Mod from "@/components/stringListType2Mod/index.vue";
import PieMod from "@/components/pieMod/index.vue";
import MapMod from "@/components/mapMod/index.vue";
import VideoMod from "@/components/videoMod/index.vue";
import StringListType3Mod from "@/components/stringListType3Mod/index.vue";
import TableListMod1 from "@/components/tableListMod1/index.vue";
import LineMod from "@/components/lineMod/index.vue";
import LineMod1 from "@/components/lineMod1/index.vue";
import LineMod2 from "@/components/lineMod2/index.vue";
import LineMod3 from "@/components/lineMod3/index.vue";
import NewsMod from "@/components/newsMod/index.vue";
import LineMod4 from "@/components/lineMod4/index.vue";
import AudioMod from "@/components/audioMod/index.vue";
import VideoListMod from "@/components/videoListMod/index.vue";
import GifMod from "@/components/gifMod/index.vue";
import leftThree from "@/components/pageTwo/leftThree.vue";
import middleThree from "@/components/pageTwo/middleThree.vue";
import rightTop from "@/components/pageTwo/rightTop.vue";
import rightBottom from "@/components/pageTwo/rightBottom.vue";
import myVideo from "@/components/myvideo1.vue";
export default {
  name: "pageTwo",
  components: {
    TableListMod,
    LeftBotMod,
    StringListMod,
    SpeedListMod,
    StringListType2Mod,
    PieMod,
    MapMod,
    VideoMod,
    StringListType3Mod,
    TableListMod1,
    LineMod,
    LineMod1,
    LineMod2,
    LineMod3,
    NewsMod,
    LineMod4,
    AudioMod,
    VideoListMod,
    GifMod,
    leftThree,
    middleThree,
    rightTop,
    rightBottom,
    myVideo
  },
  computed: {},
  data() {
    return {
      infoData: [],
      VideoArr: [
        "http://31735.hlsplay.aodianyun.com/TDBSLIVE/stream.m3u8",
        "http://60.30.52.41:80/live/bhtv2/playlist.m3u8"
      ]
    };
  },
  created() {
    this.getInfoData();
  },
  methods: {
    getInfoData() {
      this.$http.get("/api/getLivingState").then(({ data }) => {
        console.log(data, "视频直播管理");
        if (data.status == 200 && data.list.length) {
          this.infoData = data.list.map(item => {
              return {
                  useState:item.useState,//1是图片2是直播
                  imageUrl:item.imageUrl,
                  videoUrl:item.videoUrl
              }
          })
          // let arr = [];
          // data.list.map(item => {
          //   arr.push(item.videoUrl);
          // });
          // this.VideoArr = arr;
        }
      });
    }
  }
};
</script>
<style lang="scss">
.videoBox {
  width: 100%;
  height: 1.92rem;
}
</style>


