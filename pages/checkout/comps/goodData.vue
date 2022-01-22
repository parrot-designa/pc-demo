
<template>
    <div class="">
        <h6 class="mb-7 d-flex">商品列表</h6>
        <hr class="my-7" />
        <ul class="list-group list-group-lg list-group-flush-y list-group-flush-x mb-7">
            <li class="list-group-item" v-for="(item,index) in data" :key="index">
                <b-row class="align-items-center">
                    <div class="col-4">
                        <img :src="item.product_thumb" />
                    </div>
                    <div class="col">
                        <p class="mb-4 font-size-sm font-weight-bold">
                            <a class="text-body">{{item.product_name}}</a>
                            <br />
                            <span class="text-primary">{{item.price}}</span>
                            x{{item.goods_num}}
                        </p>
                    </div>
                </b-row>
            </li>
        </ul>
    </div>
</template>

<script> 
export default ({
    props:['data']
})
</script>
