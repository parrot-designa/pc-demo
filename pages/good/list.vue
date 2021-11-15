<template>
    <div>
        <Input />

        <b-container>
            <b-row class="pt-8 m-3">
                <b-col :cols="6" :lg="4">
                    <CustomGoodItem 
                        class="mb-7" 
                        backSrc="https://www.chhes.com/images/202110/thumb_img/1283_thumb_P_1633668906462.jpg"    
                        frontSrc="https://www.chhes.com/images/202110/thumb_img/1283_thumb_G_1633668906573.jpg"   
                        goodName="Chrome hearts ㊣宗克罗心 拱形FK横幅连帽拉链卫衣"
                        price="5580" 
                    />
                </b-col>
                <b-col :cols="6" :lg="4">
                    测试
                </b-col>
                <b-col :cols="6" :lg="4">
                    测试
                </b-col>
            </b-row>
        </b-container>
        
        <CustomPagination />
    </div>
</template>

<script>
import Input from './coms/Input.vue';

export default {
    components:{
        Input
    }
}
</script>

<style  lang="scss" scoped>

</style>