<template>
    <div class="table-responsive mb-6">
        <h6 class="mb-7 d-flex">{{title}}</h6>
        <table class="table table-bordered table-sm table-hover mb-0">
            <tbody>
                <tr v-for="(item,index) in dataSource" :key="index">
                    <td>
                        <CustomRadio 
                            :label="item.label"
                            :text="item.label"
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
        }
    }
}
</script>