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
    import axios from 'axios'


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
                suppliers: [],
                loading: false,
                error: null,
            }
        },
        // Fetches posts when the component is created.
        created() {
            axios.get(`https://api-suppliers.herokuapp.com/api/suppliers`)
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.suppliers = response.data
                })
                .catch(error => {
                    console.log(error)
                    this.error = true
                })
                .finally(() => this.loading = false)

            // async / await version (created() becomes async created())
            //
            // try {
            //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
            //   this.posts = response.data
            // } catch (e) {
            //   this.errors.push(e)
            // }
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
