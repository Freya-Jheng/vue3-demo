<template>
    <div class="admin-home">
        <AdminNavbar />
        <div class="admin-home__content">
            <router-view />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.admin-home {
    width: 100%;
    display: flex;
    flex-direction: row;
    &__content {
      
        width: 84%;
    }
}
</style>


<script setup>
import AdminNavbar from '../components/AdminNavbar.vue';

</script>