<template>
    <div class="card card-lg mb-5 border">

        <div class="card-header bg-light">
            <custom-tab :tabs="tabList" v-model="tabIndex" />
        </div>

        <div class="card-body">
            <slot name="first" v-if="tabIndex===0" />
            <slot name="second" v-if="tabIndex===1" />
            <slot name="third" v-if="tabIndex===2" />
        </div>
 

    </div>
</template>

<script>  
export default  {
    data(){
        return {
            tabList:[
                {label:'充值'},
                {label:'提现'},
                {label:'查看账户明细'},
                {label:'查看申请记录'},
            ],
            tabIndex:0
        }
    }
}
</script>

<style lang="scss" scoped>

</style>