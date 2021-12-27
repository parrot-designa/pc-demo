<template>
    <div class="table-responsive mb-6">
        <h6 class="mb-7 d-flex">商品包装</h6>
        <table class="table table-bordered table-sm  mb-0">
            <tbody>
                <tr>
                    <th>名称</th>
                    <th>数量</th>
                    <th>价格</th>
                </tr>
                <tr v-for="(item,index) in dataSource" :key="index">
                    <td>
                        <custom-checkbox :label="item.pack_name" />
                    </td>
                    <td>
                        <custom-input-number v-model="num" :initialValue="initialNum" />
                    </td>
                     <td>
                        ¥{{item.pack_fee}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // dataSource:[]
        }
    },
    props:{
        dataSource:{
            type:Array,
            default:()=>[]
        }
    }
}
</script>