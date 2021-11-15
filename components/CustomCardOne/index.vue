<template>
    <b-card class='card-xl mb-3 mb-sm-0' no-body style="min-height:280px;">
        <div class='card-bg'>
            <div class='card-bg-img bg-cover' :style='{backgroundImage:`url(${imgSrc})`}' ></div>
        </div> 
        <div class='card-body my-auto'>
            <h4 class='mb-0 text-white text-shadow'><b>{{title}}</b></h4>
            <CustomViewButton />
        </div>
    </b-card>
</template>

<script>
export default {
    props:[
        'title',
        'imgSrc'
    ]
}
</script>

<style lang="scss" scoped>
.card-bg-img{ 
}
</style>