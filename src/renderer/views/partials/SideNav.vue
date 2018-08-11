<template>
    <nav>
        <div class="sidebar-sticky">
            <ul class="nav flex-column">

                <li v-for="(item, index) in menuItems" class="nav-item" v-bind:key="index">
                    <router-link class="nav-link" :to="{path: item.path}">
                    <span class="label">{{ item.label }}</span> 
                    </router-link>
                </li>
            
            </ul>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Administration</span>
            <a class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
            </a>
            </h6>
            <ul class="nav flex-column mb-2">
                <li class="nav-item">
                    <a class="nav-link add-customer" href="#">
                    <span data-feather="file-text"></span>
                        Add new customer
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                        Add new service
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
    data(){
        return{
            menuItems: [
                { label: 'Dashboard', path: '/' , icon: 'dashboard'},
                { label: 'Orders', path: '/orders', icon: 'info' },
                { label: 'Customers', path: '/customers', icon: 'people' },
                { label: 'Services', path: '/services', icon: 'attach_money' },
                { label: 'About', path: '/about', icon: 'info' },
            ],
        }
    },
    methods: {
        addCustomerDialog(){

        }
    }
}
</script>
<style>
.router-link-exact-active{
    color: blue!important;
}
</style>


