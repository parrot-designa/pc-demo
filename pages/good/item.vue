<template>
  <div>
    <b-container>
      <b-row>
        <b-col :cols="12">
          <b-row>
            <b-col cols="12" md="6">
              <b-card class="img-card mb-4">
                <img
                  src="https://www.chhes.com/images/202109/goods_img/1190_P_1632364661941.jpg"
                />
                <div
                  class="badge badge-primary card-badge text-uppercase left-0"
                >
                  {{ tag }}
                </div>
              </b-card>
              <div class="view-actions">
                <div
                  v-for="(item, index) in viewList"
                  :key="index"
                  class="view-actions-item"
                  :class="[{ selected: currentSelectIndex === index }]"
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
                  <font class="font-size-sm text-reset ml-2">评价（0）</font>
                </b-col>
              </b-row>
              <h5 class="mb-2">
                Chrome hearts ㊣宗克罗心 Matty Boy Shoulder
                USA粉字横幅黑色短袖TEE
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
                  >￥4416.0</span
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
                <div class="mb-2">
                  
                </div>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tag: "热度160",
      viewList: [
        {
          src: "https://www.chhes.com/images/202109/goods_img/1190_P_1632364661396.jpg",
        },
        {
          src: "https://www.chhes.com/images/202109/goods_img/1190_P_1632364661941.jpg",
        },
      ],
      currentSelectIndex: 0,
    };
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
      opacity: 1;

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
</style>