<template>
    <div class="card">
        <div class="card-img" @click="$emit('click',info)">
            <a class="card-img-hover">
                <img class="card-img-top card-img-back" :src="backSrc" />
                <img class="card-img-top card-img-front" :src="frontSrc" />
            </a>
            <div class="card-actions">
                <span class="card-action">
                    <a class="btn btn-xs btn-circle btn-white-primary">
                        <span class="iconfont icon-keshi"></span>
                    </a>
                </span>
                <span class="card-action">
                    <a class="btn btn-xs btn-circle btn-white-primary">
                        <span class="iconfont icon-keshi"></span>
                    </a>
                </span>
                <span class="card-action">
                    <a class="btn btn-xs btn-circle btn-white-primary">
                        <span class="iconfont icon-shoucang"></span>
                    </a>
                </span>
            </div>
        </div>
        <div class="card-body px-0">
            <div class="font-size-xs"></div>
            <div class="font-weight-bold">
                <div class="text-body">{{goodName}}</div>
            </div>
            <div class="font-weight-bold text-muted">¥{{price}}</div>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        frontSrc:{
            default:''
        },
        backSrc:{
            default:''
        },
        goodName:{
            default:''
        },
        price:{
            default:''
        },
        info:{
            default:''
        }
    }
}
</script>

<style lang="scss" scoped> 
</style>