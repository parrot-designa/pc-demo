<template>
    <b-row>
        <b-col cols="12" class="text-center">
            <h3 class="mb-4">{{title}}</h3>
            <p class="mb-10">{{subtitle}}</p>
        </b-col>
    </b-row>
</template>

<script> 

export default ({
    name:'PageTop',
    data(){
        return {
             
        }
    },
    props:['title','subtitle']
})
</script>
