<template>
    <div id="Supplier">
               <div class="row" style="display: flex;">
            <div class="col s12 m6" style="margin: auto">
                <div class="card">
                    <div class="card-content black-text" >
                        <span class="card-title" style="font-size: 3rem">{{ name }}</span>
                        <h3 v-if="status" style="color: green; font-size: 2rem">A de stock : OK</h3>
                        <h3 v-else style="color: red;; font-size: 2rem">A de stock : KO</h3>
                        <h5 style="color: grey; font-size: 1rem">{{checkedAt}}</h5>
                    </div>
                    <div class="card-action">
                        <a class="waves-effect waves-light btn-small" style="margin-right: 5px"><i class="material-icons left">create</i>EDIT</a>
                        <a class="waves-effect waves-light btn-small"><i class="material-icons left">delete</i>REMOVE</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Supplier",
        props: {
            id: Number,
            name: String,
            status: Boolean, // est ce qu'il y a du stock
            checkedAt: String // date de la dernière mise à jour du stock
        },
    }
</script>

<style scoped>
    #Supplier {
        margin-top: 2em;
    }
</style>