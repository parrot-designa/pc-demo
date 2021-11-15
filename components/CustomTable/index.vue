<template>
    <table class="table table-hover text-gray-500 font-size-xxs">
        <thead>
            <tr>
                <td v-for="(column,index) in columns" :key="index">{{column.name}}</td>
            </tr>
        </thead>
    </table>
</template>

<script>
export default {
    props:[
        "columns"
    ]
}
</script>