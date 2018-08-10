import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import App from './App.vue'

Vue.use(VueRouter)

// Import components
import Dashboard from './views/Dashboard.vue'
import Customers from './views/Customers.vue'
import Services from './views/Services.vue'
import About from './views/About.vue'

const routes = [
    { path: '/', component: Dashboard },
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
