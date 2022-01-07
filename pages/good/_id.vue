<template>
  <div>
    <b-container>
      <b-row>
        <b-col :cols="12">
          <b-row>
            <b-col cols="12" md="6">
              <b-card class="img-card mb-4">
                <img :src="headPhoto" />
                <div
                  class="badge badge-primary card-badge text-uppercase left-0"
                >
                  {{ tag }}
                </div>
              </b-card>
              <div class="view-actions mb-10">
                <div
                  v-for="(item, index) in viewList"
                  :key="index"
                  class="view-actions-item"
                  :class="[{ selected: currentSelectIndex === index }]"
                  @click="switchPhoto(item, index)"
                >
                  <img :src="item.src" />
                </div>
              </div>
            </b-col>
            <b-col cols="12" md="6" class="pl-lg-10">
              <b-row class="mb-1">
                <b-col>
                  <a class="text-muted">Chrome Hearts</a>
                </b-col>
                <b-col :auto="true">
                  <custom-rate />
                  <font class="font-size-sm text-reset ml-2"> 评价(0) </font>
                </b-col>
              </b-row>
              <h5 class="mb-2">
                Chrome hearts ㊣宗克罗心 拱形FK横幅连帽拉链卫衣
              </h5>
              <div class="mb-7">
                <span class="ml-1 font-size-h5 font-weight-bolder text-primary">
                  <font id="goods_amount">￥3680.0</font>
                </span>
                <span
                  class="
                    font-size-lg font-weight-bold
                    text-gray-350 text-decoration-line-through
                  "
                  >￥6696.0</span
                >
                <span class="font-size-sm ml-1">(含税价)</span>
              </div>
              <div class="form-group">
                <div class="mb-5">
                  <p class="text-gray-500">
                    <strong class="text-body">尺寸帮助</strong>
                    ：我们的女模特是身高163cm，体重47千克和穿着S
                    <br />
                    我们的男模特是身高178cm，体重75千克身穿着L
                  </p>
                  <p class="text-gray-500">
                    <strong class="text-body">产地</strong>
                    ：美国制造
                  </p>
                  <p class="text-gray-500">
                    <strong class="text-body">商品描述</strong>
                    ：美国制造
                    <br />
                    100％纯棉
                  </p>
                  <p class="text-gray-500">
                    <small>不支持7天无理由</small>
                    <br />
                    <small>收货后30天内真假问题负责到底</small>
                    <small>正品保障 假一赔三</small>
                  </p>
                  <p class="text-gray-500">
                    海外代购 预计11月20日至12月03日送达
                  </p>
                </div>
              </div>
              <div class="form-group">
                <goods-size />
                <input type="hidden" name="spec_list" value="4" />
                <p class="mb-8">
                  <img
                    src="	https://www.chhes.com/assets/img/icons/icon-ruler.svg"
                    alt="..."
                    class="img-fluid"
                  />
                  <a class="text-reset text-decoration-underline ml-3"
                    >尺码表</a
                  >
                </p>

                <div
                  id="goodschima"
                  class="modal fade"
                  tabindex="-1"
                  role="dialog"
                  aria-hidden="true"
                ></div>

                <div class="form-row mb-7">
                  <div class="col-12 col-lg-auto">
                    <CustomInputNumber className="mb-2" />
                  </div>
                  <div class="col-12 col-lg"> 
                       <normal-button :block="true" @click="handleAddCart">
                          加入购物车 
                        </normal-button> 
                  </div>
                  <div class="col-12 col-lg-auto">
                     <normal-button :dark="false">
                      添加收藏  
                      </normal-button>
                  </div>
                </div>
                <p>
                  <span class="text-gray-500">商品缺货?</span>
                  <a
                    class="text-reset text-decoration-underline"
                    href="user-add_booking_1283.html"
                    >点击提交缺货通知!</a
                  >
                </p>
                <p class="mb-0">
                  <span class="mr-4">分享到:</span>
                  <a
                    class="
                      btn btn-xxs btn-circle btn-light
                      font-size-xxxs
                      text-gray-350
                    "
                    href="javascript:;"
                    title="分享到新浪微博"
                    target="_blank"
                  >
                    <i class="fab fa-weibo"></i>
                  </a>
                  <a
                    class="
                      btn btn-xxs btn-circle btn-light
                      font-size-xxxs
                      text-gray-350
                    "
                    href="javascript:;"
                    title="分享到QQ空间"
                    target="_blank"
                  >
                    <i class="fas fa-star"></i>
                  </a>
                  <a
                    class="
                      btn btn-xxs btn-circle btn-light
                      font-size-xxxs
                      text-gray-350
                    "
                    href="javascript:window.open('http://twitter.com/home?status='+encodeURIComponent(document.location.href)+' '+encodeURIComponent(document.title));void(0)"
                    title="分享到Twitter"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a
                    class="
                      btn btn-xxs btn-circle btn-light
                      font-size-xxxs
                      text-gray-350
                    "
                    href="javascript:window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(document.location.href)+'&t='+encodeURIComponent(document.title));void(0)"
                    title="分享到Facebook"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a
                    class="
                      btn btn-xxs btn-circle btn-light
                      font-size-xxxs
                      text-gray-350
                    "
                    href="javascript:window.open('http://www.google.com/bookmarks/mark?op=add&bkmk='+encodeURIComponent(document.location.href)+'&title='+encodeURIComponent(document.title));void(0)"
                    title="分享到谷歌书签"
                  >
                    <i class="fab fa-google"></i>
                  </a>
                </p>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <section class="pt-11">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="border-bottom">
              <CustomTab
                :tabs="tabList"
                v-model="tabIndex"
                classname="justify-content-center"
              />
            </div>
            <div
              class="tab-pane fade active"
              :class="tabIndex == 0 ? 'show' : ''"
              v-if="tabIndex == 0"
              id="descriptionTab"
            >
              <div class="row justify-content-center py-9">
                <div class="col-12 col-lg-12 col-xl-10">
                  <div class="col-12">
                    <p class="text-gray-500">
                      <b class="text-body">尺寸帮助</b
                      >：我们的男模特是身高177cm，体重75公斤，身穿M号。<br />我们的女模特是身高164cm，体重47公斤，身穿S号。
                    </p>
                    <p class="text-gray-500">
                      <b class="text-body">产地</b>：美国制造
                    </p>
                    <p class="text-gray-500">
                      <b class="text-body">商品描述</b>：100%纯棉
                    </p>
                  </div>
                  <div class="col-12">
                    <p style="text-gray-500">
                      此商品为免运费商品，计算配送金额时将不计入配送费用
                    </p>

                    <a href="user-affiliate_1283.html"></a>

                    <b></b> <b>商品货号：</b>CH001283
                    <li style="height: 30px; padding-top: 4px">
                      此商品为免运费商品，计算配送金额时将不计入配送费用<br />
                    </li>
                  </div>
                  <div class="col-12 pt-6">
                    <p id="ECS_TAGS"></p>
                  </div>
                  <div class="col-12">
                    <form
                      name="tagForm"
                      action="javascript:;"
                      onsubmit="return submitTag(this)"
                      id="tagForm"
                    >
                      <div class="row form-row">
                        <div class="col">
                          <input
                            class="form-control form-control-sm"
                            type="text"
                            name="tag"
                            id="tag"
                            size="35"
                            placeholder="此处可添加商品搜索名称"
                          />
                        </div>
                        <div class="col">
                          <button
                            class="btn btn-sm btn-dark"
                            type="submit"
                            value="添加名称"
                          >
                            添加名称
                          </button>
                          <input
                            class="form-control form-control-sm"
                            type="hidden"
                            name="goods_id"
                            value="1283"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="col-12"></div>
                </div>
              </div>
              <section class="pt-7 pb-12">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-12 col-lg-12 col-xl-10">
                      <h6 class="mb-7 p-5 alert alert-warning">常见问题</h6>
                      <ul class="list-group list-group-flush-x mb-9">
                        <li class="list-group-item">
                          <a
                            class="dropdown-toggle d-block text-reset"
                            data-toggle="collapse"
                            href="#faq-1"
                          >
                            1. 如何确保正品?
                          </a>
                          <div class="collapse" id="faq-1" data-parent="#faq-1">
                            <div class="mt-5">
                              <p class="mb-0 font-size-xs text-gray-500">
                                本店所售商品都来源于克罗心专柜，大部分商品在美国专柜采购，我们发货前会先验货再发货，正品保证！<br />
                                所有饰品的外观、刻字假货是无法模仿的。克罗心的饰品都是手工打磨，与机器制作出来的有明显差别！
                                <br />所有衣服都有防伪标识和序列号。防伪码位于刺绣标条形码的上方。使用放大镜或手机放大拍摄可以看到防伪字体，这是假货无法模仿的！<br />所有商品都可以提供对应的专柜发票，小票上有买手信息及商品详情，可以打电话到对应的专柜查询订单号和商品信息。<br />
                                商品均佩戴防盗扣，支持到货后验货，支持Get 得物
                                奢易拍等各大平台鉴定。<br />
                                所有商品都会提供第三方机构鉴定证书，商品我们会鉴定至少2次以上，确保正品。<br />收货后30天内真假问题负责到底
                                正品保障 假一赔三
                              </p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <a
                            class="dropdown-toggle d-block text-reset"
                            data-toggle="collapse"
                            href="#faq-2"
                          >
                            2. 为何衣服没有吊牌?
                          </a>
                          <div class="collapse" id="faq-2" data-parent="#faq-2">
                            <div class="mt-5">
                              <p class="mb-0 font-size-xs text-gray-500">
                                克罗心服饰在专柜结账时，所有美国专柜都会回收吊牌。亚洲专柜除国内基本都会回收。
                              </p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <a
                            class="dropdown-toggle d-block text-reset"
                            data-toggle="collapse"
                            href="#faq-3"
                          >
                            3.关于包装?
                          </a>
                          <div class="collapse" id="faq-3" data-parent="#faq-3">
                            <div class="mt-5">
                              <p class="mb-0 font-size-xs text-gray-500">
                                克罗心的服饰包装是无任何图案的透明塑料袋。<br />
                                克罗心的饰品包装是黑色专柜麓皮袋，没有专柜首饰盒。
                                <br />
                                克罗心的箱包包装是专柜丝绸袋。 <br />
                                克罗心的手提袋，买手去专柜采购一次专柜仅能提供一个手提袋，不会每件商品给一个手提袋。
                                <br />
                                如需包装可在配饰分类里或提交订单页面选购包装。
                              </p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <a
                            class="dropdown-toggle d-block text-reset"
                            data-toggle="collapse"
                            href="#faq-4"
                          >
                            4. 关于专柜小票?
                          </a>
                          <div class="collapse" id="faq-4" data-parent="#faq-4">
                            <div class="mt-5">
                              <p class="mb-0 font-size-xs text-gray-500">
                                专柜不支持每件商品单独开具一张小票，需要提供小票的可以联系我们索取。<br />
                                由于原件买手需要留底，小票仅提供扫描件或复印件。
                              </p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <a
                            class="dropdown-toggle d-block text-reset"
                            data-toggle="collapse"
                            href="#faq-5"
                          >
                            5. 关于产品工艺?
                          </a>
                          <div class="collapse" id="faq-5" data-parent="#faq-5">
                            <div class="mt-5">
                              <p class="mb-0 font-size-xs text-gray-500">
                                克罗心的饰品为手工打造的产品。刻字有可能会有模糊不清，划痕、黑点、小坑等现象，均为该品牌正常现象，并产品非质量问题。<br />
                                克罗心的服装有可能会有面料不一样、衣服里面有线头、图案印花不清晰的、走线不整齐、印花开裂，水洗掉色等，均为该品牌正常现象，并产品非质量问题。
                              </p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <a
                            class="dropdown-toggle d-block text-reset"
                            data-toggle="collapse"
                            href="#faq-6"
                          >
                            6. 什么是买手店?
                          </a>
                          <div class="collapse" id="faq-6" data-parent="#faq-6">
                            <div class="mt-5">
                              <p class="mb-0 font-size-xs text-gray-500">
                                买手店是与海外职业买手和实体店进行合作。<br />
                                我们的专业买手遍布于全球各地，大部分在美国。买手为我们提供一手货源，大部分买手在国内有仓库。
                                <br />
                                我们为了确保正品，所有商品统一发到我们发货点，验货无误后打包发货。
                              </p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <a
                            class="dropdown-toggle d-block text-reset"
                            data-toggle="collapse"
                            href="#faq-7"
                          >
                            7. 代购与买手店的区别？
                          </a>
                          <div class="collapse" id="faq-7" data-parent="#faq-7">
                            <div class="mt-5">
                              <p class="mb-0 font-size-xs text-gray-500">
                                代购是个体进行采购销售，能力和精力有限，仅限于单个个体。<br />
                                买手店是由职业买手团队以及海外的实体店提供货源，不限于地域和人员或店铺数量，货源比较充足。
                              </p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <a
                            class="dropdown-toggle d-block text-reset"
                            data-toggle="collapse"
                            href="#faq-8"
                          >
                            8. 为什么有的商品不支持退换货？
                          </a>
                          <div class="collapse" id="faq-8" data-parent="#faq-8">
                            <div class="mt-5">
                              <p class="mb-0 font-size-xs text-gray-500">
                                因克罗心专柜所售出的商品均不退不换。
                                所以商品页面注明不支持退换的商品均不能退换。
                              </p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <a
                            class="dropdown-toggle d-block text-reset"
                            data-toggle="collapse"
                            href="#faq-9"
                          >
                            9. 为什么饰品会变黑变黄？
                          </a>
                          <div class="collapse" id="faq-9" data-parent="#faq-9">
                            <div class="mt-5">
                              <p class="mb-0 font-size-xs text-gray-500">
                                纯银饰品都会氧化变黑变黄，纯银在空气中会接触到硫（s）或是二氧化硫（so2），与白银发生化学反应生成了灰黑色粉末且不溶于水的硫化银（Ag2s）。<br />
                                纯银饰品会因个人的体质、周围的环境不同会有所变化。
                                <br />
                                银饰的氧化速度也不一样。平时应避免接触液体，保持干燥。
                                <br />
                                银的化学性质不如铂金和黄金稳定,常因空气中的水或其它化学物质而氧化变黑或变黄并失去光泽。
                                <br />
                                如果氧化变黑变黄，使用擦银布或擦银棒擦拭即可光亮如新。不要用洗银水等清洗。
                                <br />有些的顾客开始戴戒指会掉些黑色，这些是新戒指上多余的银粉，戴一段时间就会消失。
                              </p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <a
                            class="dropdown-toggle d-block text-reset"
                            data-toggle="collapse"
                            href="#faq-10"
                          >
                            10. 同一款戒指的图案为什么有区别？
                          </a>
                          <div
                            class="collapse"
                            id="faq-10"
                            data-parent="#faq-10"
                          >
                            <div class="mt-5">
                              <div class="col-6 col-sm-12 col-md-12 col-lg-6">
                                <img
                                  class="card-img-top"
                                  src="static/picture/1624450938548612.png"
                                  alt="..."
                                />
                              </div>
                              <p class="mb-0 font-size-xs text-gray-500">
                                戒指上的图案和字母是根据不同尺码的戒指而设计的。
                              </p>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <a
                            class="dropdown-toggle d-block text-reset"
                            data-toggle="collapse"
                            href="#faq-11"
                          >
                            11. 为什么银饰上的黑色部分没有那么黑？
                          </a>
                          <div
                            class="collapse"
                            id="faq-11"
                            data-parent="#faq-11"
                          >
                            <div class="mt-5">
                              <div class="col-6 col-sm-12 col-md-12 col-lg-6">
                                <img
                                  class="card-img-top"
                                  src="static/picture/1624450124325836.png"
                                  alt="..."
                                />
                              </div>
                              <p class="mb-0 font-size-xs text-gray-500">
                                因氧化的时间或存放环境下的原因，大部分都没有特别黑，会有点偏灰黑色。<br />
                                如果喜欢特别黑的可以自行购买“银饰氧化剂”使用后会特别黑。
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <!-- 商品评价 -->
            <div
              class="tab-pane fade"
              :class="tabIndex == 1 ? 'show' : ''"
              v-if="tabIndex == 1"
              id="comments"
            >
              <div class="row justify-content-center py-9">
                <div class="col-12 col-lg-12 col-xl-10">
                  <div id="ECS_COMMENT">
                    <section class="pt-9 pb-11" id="reviews">评论</section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import S from '@/spx';
export default {
  data() {
    return {
      tag: "热度160",
      headPhoto:
        "https://www.chhes.com/images/202110/goods_img/1283_P_1633668906273.jpg",
      viewList: [
        {
          src: "https://www.chhes.com/images/202110/goods_img/1283_P_1633668906273.jpg",
        },
        {
          src: "https://www.chhes.com/images/202110/goods_img/1283_P_1633668906200.jpg",
        },
        {
          src: "https://www.chhes.com/images/202110/goods_img/1283_P_1633668906743.jpg",
        },
      ],
      tabList: [
        { label: "商品详情", value: "detail" },
        { label: "商品评价(0)", value: "evaluate" },
        { label: "常见问题", value: "faq" },
        { label: "相关商品", value: "related" },
      ],
      tabIndex: 0,
      currentSelectIndex: 0,
      goodId: 0,
    };
  }, 
  async asyncData ({ app, route, req, params, query }) {
    const { id } = route.params 

    const info = await app.$api.item.detail(id, {
      // distributor_id,
      // is_tdk: 1
    })

    return {
      // info,
      // tdk_data: info.tdk_data,
      // goodsDesc: Array.isArray(info.intro) ? info.intro : resolveLazyLoadImg(info.intro)
    }
  },
  computed: {
    ...mapState("global", {
      path: (state) => state.globalPath,
      query: (state) => state.globalQuery,
    }),
    ...mapState("good", {
      detail: (state) => state.detail,
    }),
  },
  methods: {
    switchPhoto(item, i) {
      this.headPhoto = item.src;
      this.currentSelectIndex = i;
    },
    getDetail() {
      this.$store.dispatch("good/getGoodDetail", { goods_id: this.goodId });
    },
    handleAddCart(){
      if(!S.getAuthToken()){
        this.$router.push({path:'/login'})
        return this.$bvToast.toast('请先登陆', {
          autoHideDelay: 1000,
          title: "错误提示",
        });
      }else{
        this.$store.dispatch("cart/addCart", { gid: this.goodId,num:1,pid:45 });
      }
      
    }
  },
};
</script>

<style lang="scss" scoped>
.img-card {
  img {
    width: 100%;
  }
}
.view-actions {
  display: flex;
  &-item {
    width: 113px;
    height: 113px;
    opacity: 0.8;

    &.selected {
      position: relative;
      opacity: 1;
      transition: opacity 1s;
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        padding: inherit;
        background-color: #111;
        background-clip: content-box;
      }
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
}
.list-group-flush .list-group-item {
  border-right-width: 0;
  border-left-width: 0;
}

.list-group-flush .list-group-item:first-child {
  border-top-width: 0;
}

.list-group-flush:last-child .list-group-item:last-child {
  border-bottom-width: 0;
}
.list-group-flush .list-group-item {
  border: 0;
}

.list-group-flush .list-group-item + .list-group-item {
  border-top: 1px solid #e5e5e5;
}

.list-group-flush-y .list-group-item:first-child {
  padding-top: 0;
  border-top: none;
}

.list-group-flush-y .list-group-item:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.list-group-flush-x .list-group-item {
  padding-left: 0;
  padding-right: 0;
  border-left: none;
  border-right: none;
}
a {
  color: #ff6f61;
  text-decoration: none;
  background-color: transparent;
}
.dropdown-toggle::after,
.dropright-toggle::after {
  float: right;
  margin-left: 0.255em;
  font-family: Feather;
  border: 0;
}
.dropdown-toggle[data-toggle="collapse"]::after {
  transition: all 0.1s ease-in-out;
  transform-origin: center center;
}
</style>
