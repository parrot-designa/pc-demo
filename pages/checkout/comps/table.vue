<template>
    <div class="table-responsive mb-6">
        <h6 class="mb-7 d-flex">{{title}}</h6>
        <table class="table table-bordered table-sm table-hover mb-0">
            <tbody>
                <tr v-for="(item,index) in dataSource" :key="index">
                    <td>
                        <CustomRadio 
                            :label="item.label"
                            :text="item.text"
                            :checked="item[keyField]===value"
                            @click="handleClick(item)"
                        />
                    </td>
                </tr> 
            </tbody>
        </table>
    </div>
</template>

<script>
import { savePayType } from '@/server/order'
export default {
    props:{
        title:{
            type:String
        },
        dataSource:{
            type:Array
        }, 
        keyField:{
            type:String
        }
    },
    data(){
        return {
            value:''
        }
    },
    methods:{
        handleClick:function(item){
            this.value=item[this.keyField];
            this.$emit('input',this.value)
        }
    }
}
</script>