<template>
    <nav class="d-flex pb-5 nav-overflow">
        <b-container>
            <b-row class="align-items-center">
                <b-col :cols="3" class="text-left align-items-center d-flex">
                    <div class="h3 text-dark  align-items-center d-flex my-3">
                        <span class="iconfont icon-xiangzuo1"></span>
                    </div>
                </b-col>
                <b-col :cols="6" class="text-center">
                    <div>第{{page}}页，共30页</div>
                </b-col>
                <b-col class="text-right align-items-center d-flex justify-content-end">
                    <div class="h3 text-dark   align-items-center d-flex my-3">
                        <span class="iconfont icon-xiangyou"></span>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </nav>
</template>

<script>
export default {
    props:{
        page:{
            default:1,
            type:Number
        }
    }
}
</script>

<style lang="scss" scoped>
.iconfont{
    line-height: 1;
    font-size:22px;
}
</style>