<template>
    <div class="form">
        <div class="form-group">
            <label>标题</label>
            <custom-input2 placeholder="请输入需要留言的标题" />
        </div>
        <div class="form-group">
            <label>内容</label>
            <custom-textarea  />
        </div>
        <div class="form-group">
            <input class="form-control-file" type="file" />
        </div>
         <div class="form-group">
            <NormalButton>提交留言</NormalButton>
        </div>
    </div>
</template>

<script>
import CustomButton from '~/components/CustomButton.vue'
export default {
  components: { CustomButton },
    
}
</script>

<style lang="scss" scoped>

</style>