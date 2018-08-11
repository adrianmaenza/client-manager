<template>
    <div class="container-fluid">
        <div class="row">
            <side-nav class="col-sm-3 d-sm-block bg-light sidebar"></side-nav>
            <router-view class="col-sm-9 ml-sm-auto px-4 py-3"></router-view>
        </div>
        <add-customer-dialog></add-customer-dialog>
    </div>
</template>
<script>
import SideNav from './views/partials/SideNav.vue'
import AddCustomerDialog from './views/partials/AddCustomerDialog.vue'
export default {
    data(){
        return {

        }
    },    
    components: {
        'side-nav': SideNav,
        'add-customer-dialog': AddCustomerDialog,
    },
}
</script>

