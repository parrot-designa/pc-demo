<template>
    <h1 class="text-align">登陆成功</h1>
</template>

<script>
export default {
    mounted:function(){
        setTimeout(()=>{
            this.$router.push({path:'/user'})
        },3000)
    }
}
</script>