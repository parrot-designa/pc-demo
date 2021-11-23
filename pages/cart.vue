<template>
    <div class="pt-7 pb-12">
        <b-container>
            <b-row>
                <b-col :cols="12">
                    <h3 class="mb-10 text-center">我的购物车</h3>
                </b-col>
            </b-row>
            <b-row>
                <b-col :cols="12" :md="7">
                    <ul class="list-group list-group-lg list-group-flush-x mb-6">
                        <CartItem />
                    </ul>
                    <div class="row align-items-end justify-content-between mb-10 mb-md-0">
                        <div cols="12" md="auto">
                            <NormalButton :dark="false">
                                清空购物车
                            </NormalButton>
                              <NormalButton>
                                更新购物袋
                            </NormalButton>
                        </div>
                    </div>
                </b-col>
                <b-col :cols="12" :md="5" :lg="4"></b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import CartItem from './comps/CartItem.vue';
export default {
    components:{
        CartItem
    }
}
</script>

<style lang="scss" scoped>

</style>