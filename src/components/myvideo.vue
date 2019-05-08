<template>
  <div class="myVideo fl" :VideoUrl="GetVideoUrl">
    <div class="Video-cmp" :id="'video_'+index" ref="myVideo"></div>
  </div>
</template>
<script>
export default {
  name: "myvideo",
  components: {},
  data() {
    return {
      player: null
    };
  },
  props: {
    VideoUrl: {
      type: String,
      default: ""
    },
    index: {
      type: Number,
      default: ""
    }
  },
  watch: {
    VideoUrl: function(val,oldVal) {
      if (oldVal !== val) {
        console.log('999999999999999999999999999999999999999999999999999999999999999999999999999999')
        this.GetVideoUrl();
      }
    }
  },
  computed: {
    GetVideoUrl() {
      this.VideoUrl && this.starPage(this.VideoUrl);
      return this.VideoUrl;
    }
  },
  created() {
    window.loadedHandler = function loadedHandler() {
      console.log("loadedHandler");
    };
  },
  methods: {
    starPage(VideoUrl) {
      var self = this;
      let myVideo = this.$refs.myVideo;
      if (myVideo) {
        let videoObject = {
          container: "#video_" + this.index, //容器的ID或className
          variable: "player", //播放函数名称
          autoplay: true,
          debug: false,
          video: [[VideoUrl, "video/m3u8", "中文标清", 0]]
        };
        this.player = new ckplayer(videoObject);
      } else {
        console.log("未检测到 myVideo 重新检测:video_" + this.index);
        setTimeout(res => {
          this.starPage(VideoUrl);
        }, 100);
      }
    },
    GetPlayer() {
      return this.player;
    }
  }
};
</script>

<style lang="scss">
.myVideo {
  width: 3.51rem;
  object-fit: fill;
  height: 100%;
}
.myVideo + .myVideo {
  margin-left: 0.25rem;
}
.Video-cmp {
  width: 3.51rem;
  object-fit: fill;
  height: 100%;
}
</style>