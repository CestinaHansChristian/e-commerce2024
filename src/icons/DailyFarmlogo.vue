<template>
    <!-- <router-link  :to="{name: 'home'}" > -->
        <button @click="home" @mouseenter="scaleIn" @mouseleave="scaleOut" class="">
            <img :src="header_logo" class="rounded-lg">
        </button>
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
            }, 
            scaleIn(event) {
                event.target.style.transform = 'scale(1.1)'; // Increase the scale to 1.1 on hover
                event.target.style.transition = 'transform 0.2s ease'; // Add transition for smoothness
            },
            scaleOut(event) {
                event.target.style.transform = 'scale(1)'; // Reset the scale to 1 when mouse leaves
            }
        },
        data() {
            return {
                header_logo: '../../public/DailyFarm_Logo.png'
            }
        }
    }


    
</script>

<style scoped>
    img {
        filter:drop-shadow(1px 1px 3px rgba(102, 31, 1, 0.534));
        -webkit-user-drag: none;
    }
</style>