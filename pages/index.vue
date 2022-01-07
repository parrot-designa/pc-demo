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

            <CustomTab
              :tabs="tabList"
              v-model="tabIndex"
              classname="justify-content-center mb-10"
            />
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
            :active="activeTabValue === item.value"
            :key="index"
          >
            <template>
              <b-row>
                <b-col
                  :col="6"
                  :lg="4"
                  v-for="(item, index) in goodList[activeTabValue]"
                  :key="index"
                >
                  <CustomGoodItem
                    :frontSrc="item.img.middle_url"
                    :backSrc="item.img.thumb_url"
                    :goodName="item.goods_name"
                    :price="item.shop_price"
                    :info="item"
                    @click="handleClickGood"
                  />
                </b-col>
              </b-row>
              <b-row>
                <b-col :col="12">
                  <div class="mt-7 text-center">
                    <CustomLineButton
                      title="查看更多..."
                      @click="$router.push({ path: '/good/list' })"
                    />
                  </div>
                </b-col>
              </b-row>
            </template>
          </TabPane>
        </TabContent>
      </b-container>
    </section>

    <section class="bg-light pb-12">
      <b-container fluid>
        <b-row>
          <b-col cols="12" lg="12" class="pt-12 px-9 text-center">
            <span class="iconfont icon-zhaopian h3 mb-6"></span>
            <h2 class="mb-6">{{ photo.name }}</h2>
            <p class="mb-8 font-size-lg text-muted">
              {{ photo.brief }}
            </p>
          </b-col>
          <b-col cols="12" lg="12">
            <b-row class="h-100">
              <HomePic
                :imgSrc="item.pic"
                v-for="(item, index) in photo.data"
                :key="index"
                :data-index="index"
                :externalIndex="index"
                @click="handleClick(index)"
              />
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
    <phonealbum ref="phonealbum" :imgsArr="photoList" />
    <GlobalFooterMessage />
  </div>
</template>

<script>
import HomePic from "./comps/HomePic.vue";
import { getBanners } from "@/server/home";
import { mapState, mapMutations } from "vuex";
import { TabContent, TabPane } from "@/components/CustomTabContent";
import phonealbum from "@parrotjs/vue-photoalbum";
import "@parrotjs/vue-photoalbum/dist/vue-photoalbum.css";
export default {
  data() {
    return {
      visible: false,
      tabList: [
        { label: "最新发布", value: "new" },
        { label: "热卖商品", value: "hot" },
        { label: "推荐商品", value: "promote" },
      ],
      tabIndex: 0,
      currentImage: {},
      info:{}
    };
  },
  components: {
    HomePic,
    TabContent,
    TabPane,
    phonealbum,
  },
  computed: {
    ...mapState("home", {
      goodList: (state) => state.goodList,
      photo: (state) => state.photo,
    }), 
    activeTabValue: function () {
      return this.tabList[this.tabIndex].value;
    },
    photoList: function () {
      if (!this.photo.data) return [];
      return this.photo.data.map((item) => ({ ...item, src: item.pic }));
    },
  },
  methods: {
    handleClick(index) { 
      this.$refs.phonealbum.show({
        index,
      });
    },
    handleClickGood(item){ 
      this.$router.push({
        path:`/good/${item.id}`
      })
    }
  },
  mounted: async function () {
    let banners = await getBanners();
    this.$store.dispatch("home/getGoods");
    this.$store.dispatch("home/getPhoto");
  },
};
</script>

<style lang="scss" scoped>
.sliding-validation-wrapper {
  z-index: 1000;
}
</style>