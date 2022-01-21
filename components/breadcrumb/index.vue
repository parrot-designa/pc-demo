<template>
    <nav class='py-5 border-top'>
        <b-container>
            <b-row>
                <b-col cols="12">
                    <ol class='custombreadcrumb mb-0 font-size-xs text-gray-400'> 
                        <li @click="handleClick()">{{fistItem}}</li>
                        <li v-for="(item,index) in restItems" :key="index+1">
                            <i class='iconfont icon-youjiantou1 mx-1 font-size-xxs'></i>{{item}}
                        </li> 
                    </ol>
                </b-col>
            </b-row>
        </b-container>
    </nav>
</template>

<script>
export default {
    name:'Breadcrumb',
    props:['items'],
    computed:{
        restItems(){
            return this.items.slice(1);
        },
        fistItem(){
            return this.items?.slice(0,1)[0];
        }
    },
    methods:{
        handleClick:function(){
            if(this.fistItem==='首页'){
                this.$router.push({path:"/"})
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.custombreadcrumb{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 0;
    margin-bottom: 1.5rem;
    list-style: none;
    background-color: transparent;
    
}
</style>