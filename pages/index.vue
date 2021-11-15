<template>
  <div>
    <section>
      <CustomCarousel height="550px" title="满2000送100元优惠券" />
    </section>
    <section class="pt-6">
      <b-container fluid class="px-3 px-md-6">
        <b-row>
          <b-col cols="12" sm="4" class="d-flex flex-column px-3">
            <CustomCardOne
              title="服饰鞋帽"
              imgSrc="https://www.chhes.com/assets/img/cat/1.jpg"
            />
          </b-col>
          <b-col cols="12" sm="4" class="d-flex flex-column px-3">
            <CustomCardOne
              title="饰品"
              imgSrc="https://www.chhes.com/img/index/cat9.jpg"
            />
          </b-col>
          <b-col cols="12" sm="4" class="d-flex flex-column px-3">
            <CustomCardOne
              title="配饰"
              imgSrc="https://www.chhes.com/img/index/cat3.jpg"
            />
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="py-12">
      <b-container>
        <b-row align-h="center">
          <b-col cols="12" md="10" lg="8" xl="6">
            <h2 class="mb-4 text-center">Chrome Hearts 2021 ㊣宗克罗心</h2>

            <CustomTab :tabs="tabList" v-model="tabIndex" classname="justify-content-center mb-10" />
          </b-col>
        </b-row>

        <TabContent>
          <!-- <template v-for="(item, index) in tabList">
            <transition name="el-fade-in-linear" :key="index">
              <TabPane v-show="tabList[tabIndex].value === item.value">
                {{ item.label }}
              </TabPane>
            </transition>
          </template> -->
          <TabPane
            v-for="(item, index) in tabList"
            :active="tabList[tabIndex].value === item.value"
            :key="index"
            >{{ item.label }}</TabPane
          >
        </TabContent>
      </b-container>
    </section>

    <section class="bg-light pb-12">
      <b-container fluid>
        <b-row>
          <b-col cols="12" lg="12" class="pt-12 px-9 text-center">
            <span class="iconfont icon-zhaopian h3 mb-6"></span>
            <h2 class="mb-6">照片墙</h2>
            <p class="mb-8 font-size-lg text-muted">
              这里展示了玩家提供的日常生活照片，在日常穿戴搭配等...
            </p>
          </b-col>
          <b-col cols="12" lg="12">
            <b-row class="h-100">
              <HomePic
                :imgSrc="item.url"
                v-for="(item, index) in imageList"
                :key="index"
                :data-index="index"
                :externalIndex="index"
                @click="handleClick(index)"
              />
              
              <el-image
                style="width: 100px; height: 100px; display: none"
                :src="currentImage.url"
                :preview-src-list="imageList.map((item) => item.url)"
                ref="image"
              >
              </el-image>
            </b-row>
          </b-col>
          <b-col cols="12" class="py-5 text-center">
            <CustomLineButton
              title="查看更多照片"
              @click="$router.push({ path: '/pic' })"
            />
          </b-col>
        </b-row>
      </b-container>
    </section>
    <phonealbum ref="phonealbum" :imgsArr="imageList" />
    <GlobalFooterMessage />
  </div>
</template>

<script>
import HomePic from "./comps/HomePic.vue";
import { getBanners } from "@/server/home";
import { mapState, mapMutations } from "vuex";
import { TabContent, TabPane } from "@/components/CustomTabContent";
import phonealbum from '@parrotjs/vue-photoalbum';
import "@parrotjs/vue-photoalbum/dist/vue-photoalbum.css";
export default {
  data() {
    return {
      visible: false,
      imageList: [
        { url: "https://www.chhes.com/pic/IMG_5988.JPG",src: "https://www.chhes.com/pic/IMG_5988.JPG" },
        { url: "https://www.chhes.com/pic/IMG_5987.JPG",src: "https://www.chhes.com/pic/IMG_5987.JPG" },
        { url: "https://www.chhes.com/pic/IMG_5986.JPG",src: "https://www.chhes.com/pic/IMG_5986.JPG" },
        { url: "https://www.chhes.com/pic/IMG_5985.JPG",src: "https://www.chhes.com/pic/IMG_5985.JPG" },
        { url: "https://www.chhes.com/pic/IMG_5984.JPG",src: "https://www.chhes.com/pic/IMG_5984.JPG" },
        { url: "https://www.chhes.com/pic/IMG_5983.JPG",src: "https://www.chhes.com/pic/IMG_5983.JPG" },
        { url: "https://www.chhes.com/pic/IMG_5982.JPG",src: "https://www.chhes.com/pic/IMG_5982.JPG" },
        { url: "https://www.chhes.com/pic/IMG_5981.JPG",src: "https://www.chhes.com/pic/IMG_5981.JPG" },
        { url: "https://www.chhes.com/pic/IMG_5980.JPG",src: "https://www.chhes.com/pic/IMG_5980.JPG" },
        { url: "https://www.chhes.com/pic/IMG_5979.JPG",src: "https://www.chhes.com/pic/IMG_5979.JPG" },
        { url: "https://www.chhes.com/pic/IMG_5978.JPG",src: "https://www.chhes.com/pic/IMG_5978.JPG" },
        { url: "https://www.chhes.com/pic/IMG_5977.JPG",src: "https://www.chhes.com/pic/IMG_5977.JPG" },
      ],
      tabList: [
        { label: "最新发布", value: "new" },
        { label: "热卖商品", value: "hot" },
        { label: "推荐商品", value: "promote" },
      ],
      tabIndex: 0,
      currentImage: {},
    };
  },
  components: {
    HomePic,
    TabContent,
    TabPane,
    phonealbum
  },
  computed: {
    ...mapState("home", {
      goodList: (state) => state.goodList,
    }),
  },
  methods: {
    handleClick(index) {
      console.log("this.$refs.phonealbum",this.$refs.phonealbum)
      this.$refs.phonealbum.show({
        index
      })
      // console.log(this.$refs.image.clickHandler());
      // this.currentImage = { url: this.imageList[index].url };
    },
  },
  mounted: async function () {
    let banners = await getBanners();
    this.$store.dispatch("home/getGoods");
  },
};
</script>

<style lang="scss" scoped>
.sliding-validation-wrapper {
  z-index: 1000;
}
</style>