<template>
<div>
    <div class="d-flex flex-wrap w-700 justify-content-between border-top pt-4">
        <h6>
            <b>这个有吗</b>
        </h6>
        <small class='text-muted mb-2'>
            <i class='iconfont icon-shijian1 align-middle mr-2'></i>(2021-06-02 13:58:59)
        </small>
    </div>
    <p class="font-size-sm font-weight-normal text-body">这个有吗</p>
    <b-col cols="12" md="3">
        <normal-picture src="https://www.chhes.com/data/message_files/436_20210602zjpkxl.jpg" />
    </b-col>
    <custom-alert title="管理员回复" />
    <div class="border-top pt-4"></div>
    <custom-pagination />
    <message-form />
</div>
</template>

<script>
import MessageForm from './comps/MessageForm.vue'
export default {
    components:{
        MessageForm
    }
}
</script>