<template>
    <div class="h-screen grid place-content-center ">
        <div class="grid grid-cols-2 shadow-lg shadow-gray-500">
            <div class="img-wrapper">
                <img :src="bugs" alt="" class="h-96">
            </div>
            <div class="information grid place-content-center gap-10">
                <h1 class="font-bold text-xl">
                    The page you are visiting does not exist
                </h1>
                <div class="flex justify-center">
                    <button @click="goToHome" class="bg-green-400 p-2 rounded-xl text-lg font-medium hover:-translate-y-1 duration-200 delay-200">Return</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                bugs: '../../public/bugs.jpg'
            }
        },
        methods: {
            goToHome() {
                this.$router.push('/')
            }
        },
    }
</script>