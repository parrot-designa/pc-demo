<template>
    <b-row>
        <b-col cols="6" md="4">
            <FavoriteCard />
        </b-col>
        <b-col cols="12" md="9" lg="8" offset-lg="1"></b-col>
    </b-row>
</template>

<script>

import FavoriteCard from './comps/FavoriteCard.vue';
export default {
    components:{
        FavoriteCard
    }
}
</script>