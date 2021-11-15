
<template>
    <StockTable 
        :columns="columns"
    />
</template>

<script>
import StockTable from './comps/StockTable.vue'
export default {
    components:{
        StockTable
    },
    data(){
        return {
            columns:[
                {name:'订购商品名'},
                {name:'数量'},
                {name:'登记时间'},
                {name:'处理备注'},
                {name:'操作'},
            ]
        }
    }
}
</script>