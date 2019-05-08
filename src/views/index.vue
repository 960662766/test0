<template>
  <div class="indexMod clearfix">
    <Carousel :autoplay-speed="50000">
      <Carousel-item>
        <div class="demo-carousel">
          <pageOne></pageOne>
        </div>
      </Carousel-item>
      <Carousel-item>
        <div class="demo-carousel">
          <pageTwo></pageTwo>
        </div>
      </Carousel-item>
      <Carousel-item>
        <div class="demo-carousel">
          <img src="../assets/images/p3.jpg"/>
        </div>
      </Carousel-item>
    </Carousel>
  </div>
</template>
<script>
import pageOne from "./pageOne.vue";
import pageTwo from "./pageTwo.vue";
export default {
  name: "index",
  components: {
    pageOne,
    pageTwo
  },
  computed: {},
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss">
.indexMod {
  // width: 200%;
  // height: 100%;
  // height: calc(100vw * 1280 / 6656);
  width: 100%;
  height: 100%;
  background: url("../../static/images/main2x.png") no-repeat;
  background-size: 100% 100%;
  // padding-top: 0.55rem;
  // padding-left: 1.12rem;
  // padding-right: 1.12rem;
  .mod2Box {
    margin: 0 0.93rem;
  }
  .mr80 {
    margin-right: 0.6rem;
  }
  .ivu-carousel {
    width: 100%;
    height: 100%;
  }
  .ivu-carousel-item {
    padding-top: 0.55rem;
    padding-left: 1.12rem;
    padding-right: 1.12rem;
    background: url("../assets/images/bg1.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .ivu-carousel-item:nth-of-type(2) {
    background: url("../assets/images/bg2.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .ivu-carousel-list,.ivu-carousel-track,.ivu-carousel-item{
    height: 100% !important;
  }
  .ivu-carousel-item:nth-of-type(3){
      padding: 0;
  }
}
</style>


