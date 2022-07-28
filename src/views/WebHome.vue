<template>
    <div class="web-home">
        <Navbar />
        <router-view />
        <Footer />
    </div>
</template>

<script setup>
    import Navbar from '@/components/Navbar.vue';
    import Footer from '@/components/Footer.vue';
</script>

<style lang="scss" scoped>
.web-home {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>