<script setup>
    import Footer from '@/components/Footer.vue';
</script>
<template>
    <div class="">
        <router-view/>
        <Footer />
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

    .ctaBtn {
        font-family: 'Trebuchet MS';
        color: rgb(215, 210, 210);
    }
</style>