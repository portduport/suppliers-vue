<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <h1>Que voulez vous faire ?</h1>
        <router-link to="/SuppliersList" class="btnhome">Consulter la liste des fournisseurs</router-link>
        <router-link to="/SuppliersMap" class="btnhome">Afficher la carte</router-link>
        <br>
        <router-view></router-view>
    </div>
</template>

<script>



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
