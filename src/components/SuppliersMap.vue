<template>
    <div id="map">
        <h1>Carte des fournisseurs</h1>
        <gmapMap :center="{lat:this.$store.state.geolocation.lat, lng:this.$store.state.geolocation.lng}" :zoom="9" class="maps">
            <GmapMarker v-for="supplier in suppliers" :key="supplier.id" :position="{lat:parseFloat(supplier.latitude), lng:parseFloat(supplier.longitude)}"></GmapMarker>
        </gmapMap>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'SuppliersMap',

        computed: mapState([
            'suppliers'
        ]),

        mounted: function () {
            this.$store.dispatch('LOAD_SUPPLIERS')
        }
    }

    // import axios from 'axios'
    //
    // export default {
    //     name: 'SuppliersMap',
    //     props: {
    //         msg: String,
    //         id: Number,
    //         latitude: Number,
    //         longitude: Number,
    //
    //     },
    //     data: function () {
    //         return {
    //             suppliers: [],
    //             loading: false,
    //             error: null,
    //         }
    //     },
    //     // Fetches posts when the component is created.
    //     created() {
    //         axios.get(`https://api-suppliers.herokuapp.com/api/suppliers`)
    //             .then(response => {
    //                 // JSON responses are automatically parsed.
    //                 this.suppliers = response.data
    //             })
    //             .catch(error => {
    //                 console.log(error)
    //                 this.error = true
    //             })
    //             .finally(() => this.loading = false)
    //     }
    //
    // }
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
