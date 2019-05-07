<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <h1>Que voulez vous faire ? </h1>
        <router-link to="/SuppliersList" class="waves-effect waves-light btn-large" style="margin-right: 5px"><i class="material-icons left">search</i>Consulter la liste des fournisseurs</router-link>
        <router-link to="/SuppliersMap" class="waves-effect waves-light btn-large" style="margin-right: 5px"><i class="material-icons left">map</i>Afficher la carte</router-link>
        <router-link to="/AddSupplier" class="waves-effect waves-light btn-large"><i class="material-icons left">add</i>Ajouter un Supplier</router-link>

        <br>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        computed: {
            location () {
                return {
                    lat: this.$store.state.geolocation.lat,
                    lng: this.$store.state.geolocation.lng,
                    acc: this.$store.state.geolocation.acc,
                    alt: this.$store.state.geolocation.alt,
                    altAcc: this.$store.state.geolocation.altAcc,
                    head: this.$store.state.geolocation.head,
                    spd: this.$store.state.geolocation.spd,
                    ts: this.$store.state.geolocation.ts
                };
            },
            error () {
                return this.$store.state.geolocation.error;
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

</style>
