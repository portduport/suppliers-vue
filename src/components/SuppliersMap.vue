<template>
    <div class="map">
        <h1>Carte des fournisseurs</h1>
        <gmap-map :center="{lat:10, lng:10}" :zoom="7" style="width: 100%; height: 800px">
        </gmap-map>
    </div>


</template>

<script>
    export default {
        name: 'SuppliersMap',
        props: {
            msg: String
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
