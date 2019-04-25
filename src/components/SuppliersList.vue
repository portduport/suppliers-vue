<template>
    <div class="supplier">
        <h1>Liste des fournisseurs</h1>
        <Supplier></Supplier>
    </div>
</template>

<script>

    import Supplier from './Supplier.vue'


    export default {
        name: 'SuppliersList',
        props: {
            msg: String
        },
        components:{
            Supplier
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
