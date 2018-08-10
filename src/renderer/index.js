import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'

Vue.use(VueRouter)

// Import components
import Dashboard from './views/Dashboard.vue'

const routes = [
    { path: '/', component: Dashboard },
]

// Init
const router = new VueRouter({
    routes
})

const app = new Vue({
    el: '#app',
    router,
    render(h){
        return h(App);
    },
});
