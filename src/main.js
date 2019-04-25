import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

import SuppliersList from './components/SuppliersList.vue'
import SuppliersMap from './components/SuppliersMap.vue'
import Supplier from './components/Supplier.vue'


const routes = [
    { path: '/SuppliersList', component: SuppliersList },
    { path: '/SuppliersMap', component: SuppliersMap },
    { path: '/Supplier', component: Supplier }
]

const router = new VueRouter({
    routes
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
