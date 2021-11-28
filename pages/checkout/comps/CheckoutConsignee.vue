<template>
    <div class="table-responsive mb-6">
        <h6 class="mb-7 d-flex">{{info.title||"收货人信息"}} <span class="primary-color ml-auto" @click="$emit('edit')" >修改</span></h6>
        <table class="table table-bordered table-sm table-hover mb-0">
            <tbody>
                <tr>
                    <td>
                        <b>{{info.consignee}}</b>
                        <span>{{info.mobile}}</span>
                    </td>
                    <td>
                        {{info.address}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default ({
    props:{
        info:{
            type:Object,
            default:()=>{}
        }, 
    }
})
</script>
