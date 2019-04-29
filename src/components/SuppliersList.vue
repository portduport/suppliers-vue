<template>
    <div class="supplier">
        <h1>Liste des fournisseurs</h1>
        <div v-for="supplier of suppliers" :key="supplier.id">
            <Supplier v-bind:name="supplier.name" v-bind:status="supplier.status" v-bind:checkedAt="supplier.checkedAt"
                      v-bind:longitude="supplier.longitude" v-bind:latitude="supplier.latitude"></Supplier>
        </div>
    </div>
</template>

<script>

    import Supplier from './Supplier.vue'
    import {format} from 'timeago.js'


    export default {
        name: 'SuppliersList',
        props: {
            msg: String,
        },
        components: {
            Supplier
        },
        data: function () {
            return {
                suppliers: [
                    {
                        id: 1,
                        name: "Fournisseur 1",
                        status: true,
                        checkedAt: format(new Date().toLocaleString(), 'fr_FR'),
                        latitude: 10,
                        longitude: 10
                    },
                    {
                        id: 2,
                        name: "Fournisseur 2",
                        status: false,
                        checkedAt: new Date().toLocaleString(),
                        latitude: 11,
                        longitude: 9.6
                    }
                ]
            }
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
