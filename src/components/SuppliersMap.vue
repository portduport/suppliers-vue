<template>
    <div id="map">
        <h1>Carte des fournisseurs</h1>
        <gmapMap :center="{lat:10, lng:10}" :zoom="2" class="maps">
            <GmapMarker v-for="supplier in suppliers" :key="supplier.id" :position="{lat:parseFloat(supplier.latitude), lng:parseFloat(supplier.longitude)}"></GmapMarker>
        </gmapMap>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'SuppliersMap',
        props: {
            msg: String,
            id: Number,
            latitude: Number,
            longitude: Number,

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

    .maps{
        margin: auto;
        width: 95%;
        height: 600px;
    }
</style>
