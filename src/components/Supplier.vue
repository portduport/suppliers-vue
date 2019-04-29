<template>
    <div id="Supplier">
        <h1>{{ name }}</h1>
        <h3 v-if="status" style="color: green;">A de stock : OK</h3>
        <h3 v-else style="color: red;">A de stock : KO</h3>
        <h5 style="color: grey">{{checkedAt}}</h5>
    </div>
</template>

<script>
    export default {
        name: "Supplier",
        props: {
            id: Number,
            name: String,
            status: Boolean, // est ce qu'il y a du stock
            checkedAt: String // date de la dernière mise à jour du stock
        },
    }
</script>

<style scoped>
    #Supplier {
        margin-top: 2em;
        border: 2px solid darkred;
    }
</style>