import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap'
import './sass/app.scss'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import App from './App.vue'
import $ from 'jquery'

Vue.use(VueRouter)

// Import components
import Dashboard from './views/Dashboard.vue'
import Customers from './views/Customers.vue'
import Services from './views/Services.vue'
import About from './views/About.vue'
import Orders from './views/Orders.vue'

const routes = [
    { path: '/', component: Dashboard },
    { path: '/orders', component: Orders },
    { path: '/customers', component: Customers },
    { path: '/services', component: Services },
    { path: '/about', component: About },
]

// Init
const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    router,
    render(h){
        return h(App);
    },
});

$('.add-customer').on('click', () => $('#addCustomerDialog').modal())