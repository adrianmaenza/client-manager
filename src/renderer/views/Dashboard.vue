<template>
    <div>
        <h1 class="mb-3">Dashboard</h1>
        <div class="row">
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">4</div>
                        <div class="card-text">
                            <router-link :to="{path: '/orders'}">Orders</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">10</div>
                        <div class="card-text">
                            <router-link :to="{path: '/customers'}">Customers</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    
</style>

