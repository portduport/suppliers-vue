<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <h1>Que voulez vous faire ?</h1>
        <button type="button" class="btnhome" id="liste" @click="onSuppliersListClick">Consulter la liste des fournisseurs</button>
        <button type="button" class="btnhome" id="carte" @click="onMapClick">Afficher la carte</button>
    </div>
</template>

<script>
    import SuppliersList from './components/SuppliersList.vue'
    import SuppliersMap from './components/SuppliersMap.vue'

    export default {
        name: 'app',
        components: {
            SuppliersList,
            SuppliersMap
        },
        methods:{
            onSuppliersListClick: function () {
                window.alert("Clicked!!");
            },
            onMapClick: function () {
                window.alert("Clicked!!");
            }

        }

    }

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .btnhome{
        background-color: green;
        padding: 15px 15px;
        margin: 0 5px;
        color: white;
        font-weight: 900;
        font-size: 0.8em;
        cursor: pointer;
    }

</style>
