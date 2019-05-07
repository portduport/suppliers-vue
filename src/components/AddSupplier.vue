<template>
    <div class="container">
        <div class="row">
            <div class="col s12">
                <h1>Ajouter un fournisseur</h1>
                <div class="card">
                    <div class="card-body" style="padding: 2rem;">
                        <br>
                        <p>{{ $route.params.id }}</p>
                        <form @submit="formSubmit">
                            <div class="input-field col s12">
                                <input placeholder="" id="name" v-model="name" type="text" class="validate">
                                <label for="first_name">Name</label>
                            </div>

                            <div class="input-field col s12">
                                <select v-model="status" style="display: inline-block !important; width: 30%">
                                    <option value="true">OK</option>
                                    <option value="false">KO</option>
                                </select>
                            </div>
                            <div class="input-field col s12">
                                <input placeholder="" id="name" v-model="latitude" type="text" class="validate">
                                <label for="first_name">Latitude</label>
                            </div>
                            <div class="input-field col s12">
                                <input placeholder="" id="name" v-model="longitude" type="text" class="validate">
                                <label for="first_name">Longitude</label>
                            </div>


                            <button class="waves-effect waves-light btn-large">ENVOYER</button>
                        </form>
                        <br>
<!--                        <strong>Output:</strong>-->
<!--                        <pre>-->
<!--                        {{output}}-->
<!--                        </pre>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
                name: '',
                status: '',
                latitude: '',
                longitude: '',
                output: ''
            };
        },
        methods: {
            formSubmit(e) {
                e.preventDefault();
                let currentObj = this;
                axios.post('https://api-suppliers.herokuapp.com/api/suppliers', {
                    name: this.name,
                    status: this.status,
                    latitude: this.latitude,
                    longitude: this.longitude,
                    checkedAt: new Date()
                })
                    .then(function (response) {
                        currentObj.output = response.data;
                    })
                    .catch(function (error) {
                        currentObj.output = error;
                    });
            }
        }
    }
</script>
<style scoped>
    input{
        margin-bottom: 2rem;
    }

    </style>