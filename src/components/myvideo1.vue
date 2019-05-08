<template>
  <div class="myVideo fl" >
    <img :src="imageUrl" v-if="useState==1" />
    <div class="Video-cmp" :id="'video_'+index" ref="myVideo" v-if="useState==2" ></div>
  </div>
</template>
<script>
export default {
  name: "myvideo1",
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
    },
    useState:{
      type: Number,
      default: ""
    },
    imageUrl:{
      type: String,
      default: ""
    }
  },
  watch: {
    VideoUrl: function(val,oldVal) {
      if (oldVal !== val) {
        this.getVideo();
      }
    }
  },
  mounted() {
    this.getVideo();
  },
  created() {
  },
  methods: {
    getVideo(){
        var self=this;
        let videoObject = {
				container: "#video_" + this.index, //容器的ID或className
				variable: 'player', //播放函数名称
				loop: false, //播放结束是否循环播放
				live:true,
				autoplay: true,//是否自动播放
				poster: '', //封面图片
				preview: { //预览图片
					file: [],
					scale: 2
				},
				flashplayer:true,
				//debug:true,
				// cktrack:'material/zh.vtt',//字幕文件
				video: [
			        [self.VideoUrl, 'video/m3u8', '英文超清', 0]
			    ]
            };
            var player = new ckplayer(videoObject);
    }
    
  }
};
</script>

<style lang="scss">

    .myVideo{
        width: 3.51rem;
        object-fit: fill;
        height: 100%;
    }
    .myVideo+.myVideo{
        margin-left: .25rem;
    }
    .Video-cmp{
        width: 3.51rem;
        object-fit: fill;
        height: 100%;
    }
</style>