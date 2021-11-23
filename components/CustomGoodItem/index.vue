<template>
    <div class="card">
        <div class="card-img" @click="$emit('click',info)">
            <div class="card-img-hover">
                <img class="card-img-top card-img-back" :src="backSrc" />
                <img class="card-img-top card-img-front" :src="frontSrc" />
            </div>
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
.card-img-back{
    opacity: 0;
    height:0;
}
.card-img-hover{
    display: grid;
}
.card-img-top{
    transition: opacity .5s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.card-img-hover{
    &:hover{
        .card-img-front{
            opacity: 0; 
             height:0;
        }
        .card-img-back{
            opacity: 1;
            height:auto;
        }
    }
}
</style>