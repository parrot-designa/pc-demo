
<template>
    <div 
        class="embed-responsive embed-responsive-1by1 bg-cover" 
        :style="{backgroundImage:`url(${img})`}"
    ></div>
</template>

<script>
export default {
    props:['img']
}
</script>