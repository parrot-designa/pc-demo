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
                            :checked="item[keyField]===val"
                            @click="handleClick(item)"
                        />
                    </td>
                </tr> 
            </tbody>
        </table>
    </div>
</template>

<script> 
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
        },
        value:{
            type:String
        }
    },
    data(){
        return {
            val:'',
            time:0
        }
    },
    watch:{
        value:{
            handler:function(newval) {
                if(this.time===0){
                    this.val=newval; 
                    this.time++;
                }
            },
            immediate:true
        }
    },
    methods:{
        handleClick:function(item){ 
            this.val=item[this.keyField]; 
            this.$emit('input',this.val)
        }
    }
}
</script>