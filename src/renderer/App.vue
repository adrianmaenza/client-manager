<template>
    <div class="container-fluid">
        <div class="row">
            <side-nav class="col-sm-3 d-sm-block bg-light sidebar"></side-nav>
            <router-view class="col-sm-9 ml-sm-auto px-4 py-3"></router-view>
        </div>
    </div>
</template>
<style>
    body {
        font-size: .875rem;
    }

    h1 {
        font-size: 1.5rem
    }

    h2 {
        font-size: 1.4rem
    }

    .feather {
        width: 16px;
        height: 16px;
        vertical-align: text-bottom;
    }

    /*
    * Sidebar
    */

    .sidebar {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 100; /* Behind the navbar */
        box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
    }

    .sidebar-sticky {
        position: relative;
        top: 0;
        padding-top: .5rem;
        overflow-x: hidden;
        overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
    }

    @supports ((position: -webkit-sticky) or (position: sticky)) {
    .sidebar-sticky {
        position: -webkit-sticky;
        position: sticky;
    }
    }

    .sidebar .nav-link {
    font-weight: 500;
    color: #333;
    }

    .sidebar .nav-link .feather {
    margin-right: 4px;
    color: #999;
    }

    .sidebar .nav-link.active {
    color: #007bff;
    }

    .sidebar .nav-link:hover .feather,
    .sidebar .nav-link.active .feather {
    color: inherit;
    }

    .sidebar-heading {
    font-size: .75rem;
    text-transform: uppercase;
    }

</style>
<script>
import SideNav from './views/partials/SideNav.vue'
export default {
    data(){
        return {

        }
    },    
    components: {
        'side-nav': SideNav
    },
}
</script>

