<template>
    <div class="map">
        <h1>Carte des fournisseurs</h1>
        <gmapMap :center="{lat:10, lng:10}" :zoom="7" map-type-id="terrain" style="width: 100%; height: 800px">
            <GmapMarker v-for="supplier in suppliers" :key="supplier.id"
                        :position="{lat:supplier.latitude, lng:supplier.longitude}"></GmapMarker>
        </gmapMap>
    </div>
</template>

<script>
    export default {
        name: 'SuppliersMap',
        props: {
            msg: String,
            latitude: Number,
            longitude: Number,

        },
        data: function () {
            return {
                suppliers: [
                    {
                        id: 1,
                        latitude: 10,
                        longitude: 10
                    },
                    {
                        id: 2,
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
