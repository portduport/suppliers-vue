<template>
    <div class="supplier">
        <h1>Liste des fournisseurs</h1>
        <div class="input-field col s12">
            <select v-model="select">
                <option value="suppliers">All</option>
                <option value="statusOK">OK</option>
                <option value="statusKO">KO</option>
            </select>
        </div>
        <div v-for="supplier of filterSuppliers()" :key="supplier.id">
            <Supplier v-bind:name="supplier.name" v-bind:status="supplier.status" v-bind:id="supplier.id"
                      v-bind:checkedAt="supplier.checkedAt"></Supplier>
        </div>
    </div>

</template>

<script>

    import Supplier from './Supplier.vue'
    import {mapState} from 'vuex'
    import {mapGetters} from 'vuex'


    export default {
        name: 'SuppliersList',
        props: {
            msg: String,
        },
        data: function () {
            return {
                select: 'suppliers'
            }
        },
        components: {
            Supplier
        },
        computed: {
            ...mapState([
                'suppliers'
            ]),
            ...mapGetters([
                'statusOK',
                'statusKO'
            ])
        },
        methods: {
            filterSuppliers: function () {
                if (this.select === 'suppliers') {
                    return this.suppliers;
                } else if (this.select === 'statusOK') {
                    return this.$store.getters.statusKO;
                } else if (this.select === 'statusKO') {
                    return this.$store.getters.statusKO;
                }

            }
        },
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

    select {
        display: inline-block !important;
        width: 150px;
    }
</style>
