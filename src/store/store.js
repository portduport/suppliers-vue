import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VuexGeolocation from 'vuex-geolocation';


Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        suppliers: [],
    },
    actions: {
        LOAD_SUPPLIERS: function ({commit}) {
            axios.get('https://api-suppliers.herokuapp.com/api/suppliers').then((response) => {
                commit('SET_SUPPLIERS', {list: response.data})
            }, (err) => {
                console.log(err)
            })
        }
    },
    mutations: {
        SET_SUPPLIERS: (state, {list}) => {
            state.suppliers = list
        }
    },
    getters: {
        statusKO: state => state.suppliers.filter(supplier => supplier.status === false),
        statusOK: state => state.suppliers.filter(supplier => supplier.status === true)
    },
    methods:{
        createSupplier(supplier){

            const url = `${API_URL}/api/suppliers/`;
            return axios.post(url,supplier);
        }
    }
})


const vuexGeolocation = VuexGeolocation.sync(store);
Vue.use(vuexGeolocation)
