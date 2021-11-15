<template>
  <b-carousel
    :id="id"
    :img-height="height"
    v-model="slide"
    :interval="interval"
    controls
  >
    <b-carousel-slide>
      <template slot="img">
        <div class="bg-cover w-100 custom_img" :style="{ height: height }">
          <div class="bg-dark-20 h-100">
            <b-container class="d-flex flex-column h-100">
              <b-row align-v="center" align-h="end" class="h-100">
                <b-col cols="12" class="text-center text-white">
                  <h4 class="mb-0 text-shadow"></h4>
                  <h1 class="display-2 text-shadow">{{ title }}</h1>
                  <p class="mb-0">
                    <CustomLineButton title="服饰鞋帽" />
                    <CustomLineButton title="饰品" />
                  </p>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </div>
      </template>
    </b-carousel-slide>
    <b-carousel-slide>
      <template slot="img">
        <div class="bg-cover w-100 custom_img" :style="{ height: height }">
          <div class="bg-dark-20 h-100">
            <b-container class="d-flex flex-column h-100">
              <b-row align-v="center" align-h="end" class="h-100">
                <b-col cols="12" class="text-center text-white">
                  <h4 class="mb-0 text-shadow"></h4>
                  <h1 class="display-2 text-shadow">{{ title }}</h1>
                  <p class="mb-0">
                    <CustomLineButton title="服饰鞋帽" />
                    <CustomLineButton title="饰品" />
                  </p>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </div>
      </template>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
    };
  },
  props: {
    height: {
      type: [Number,String],
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    interval:{
      type:Number,
      default:10000
    }
  },
};
</script>

<style scoped lang="scss">
.custom_img {
  background-image: url("https://www.chhes.com/img/2.jpg");
  left: 0%;
  opacity: 1;
}
</style>