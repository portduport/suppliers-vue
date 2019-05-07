import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { store } from './store/store.js';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCdzsL-0R6AbmGXcz0r7-VHML1hi1XpDzc',
        libraries: 'places',
    }
})


Vue.use(VueRouter)
Vue.config.productionTip = false

import SuppliersList from './components/SuppliersList.vue'
import SuppliersMap from './components/SuppliersMap.vue'
import Supplier from './components/Supplier.vue'
import AddSupplier from "./components/AddSupplier";


const routes = [
    {path: '/SuppliersList', component: SuppliersList},
    {path: '/SuppliersMap', component: SuppliersMap},
    {path: '/Supplier', component: Supplier},
    {path: '/AddSupplier/:id', name: 'addsupplier', component: AddSupplier}
]

const router = new VueRouter({
    mode: 'history',
    routes
})

console.log(store)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')



