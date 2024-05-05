<template>
    <!-- <router-link  :to="{name: 'home'}" > -->
        <button @click="home" class="hover:translate-y-1 duration-200">Daily Farm</button>
    <!-- </router-link> -->
</template>

<script>
    import PocketBase from 'pocketbase';

    const pb = new PocketBase('http://127.0.0.1:8090');
    export default {
        methods: {
            home() {
                this.$router.push('/')
                pb.authStore.clear()
                console.log('logged out');
            }
        },
    }
</script>