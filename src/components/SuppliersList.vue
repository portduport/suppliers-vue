<template>
    <div class="supplier">
        <h1>Liste des fournisseurs</h1>
        <div v-for="supplier of suppliers" :key="supplier.id">
            <Supplier v-bind:name="supplier.name" v-bind:status="supplier.status" v-bind:checkedAt="supplier.checkedAt"></Supplier>
        </div>
    </div>
</template>

<script>

    import Supplier from './Supplier.vue'
    import { mapState } from 'vuex'


    export default {
        name: 'SuppliersList',
        props: {
            msg: String,
        },
        components: {
            Supplier
        },
        computed: mapState([
            'suppliers'
        ]),
        mounted: function () {
            this.$store.dispatch('LOAD_SUPPLIERS')
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
