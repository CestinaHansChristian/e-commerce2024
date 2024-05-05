<script setup>
    import HeaderMain from '@/components/HeaderMain.vue';
</script>
<template>
    <HeaderMain :loginBtnDisable="false" :createBtnDisable='true' :LogoutBtnDisable="false" />
    
    <div class="signup-wrapper flex sm:h-screen items-center justify-center">
        <div class="container-wrapper m-1 grid place-content-center p-2">
            <div class="card sm:flex sm:grid-cols-2 grid grid-rows-2 rounded-lg shadow-lg shadow-neutral-500">
                <div class="relative">
                    <div class="status-wrapper relative top-0 " v-show="failedLogin">
                        <h1 class="text-orange-700 bg-red-100 rounded-lg p-1 absolute font-serif text-xl">
                            Wrong Credentials
                        </h1>
                    </div>
                    <div class="img-container ">
                        <img :src="cow" alt="" srcset="" class="cow-img rounded-t-xl shrink h-72 sm:max-h-max w-full object-cover sm:rounded-tr-none sm:rounded-s-lg sm:h-72 sm:w-72">
                    </div>
                </div>
                <div class="bg-lime-500 h-auto rounded-b-md sm:rounded-br-lg sm:rounded-tr-lg sm:rounded-bl-none delay-500 duration-200 transition ease-in-out sm:bg-lime-600">
                    <div class="form-container flex justify-center m-2 px-2 pt-10">
                        <form action="" @submit.prevent="loginUserCred">
                            <div class="form-wrapper space-y-3 px-4">
                                <div class="form-field space-y-3 grid justify-items-center text-wrap">
                                    <div class="form-title">
                                        <h1 class="font-semibold text-center">
                                            Login
                                        </h1>
                                    </div>
                                    <div class="username-field">
                                        <input v-model="usernamE" type="text" placeholder="Username / Email" class="input-field w-full ps-2">
                                    </div>
                                    <div class="password-field">
                                        <input v-model="passworD" type="password" placeholder="Password" class="input-field w-full ps-2">
                                    </div>
                                </div>
                                <div class="form-container">
                                    <div class="flex place-content-center">
                                        <!-- <router-link :to="{name: 'products'}" class="w-full"> -->
                                            <button class="bg-neutral-300 btn-font w-full  rounded-lg font-semibold hover:bg-slate-400 hover:-translate-y-px delay-150 duration-200">Login</button>
                                        <!-- </router-link> -->
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import PocketBase from 'pocketbase';

    const pb = new PocketBase('http://127.0.0.1:8090');
    export default {
        data() {
            return {
                cow: '../../public/cowCTAbg.jpg',
                usernamE: '',
                passworD: '',
                emaiL: '',
                isValid: false,
                failedLogin: false
            }
        },
        methods: {
            async loginUserCred() {
                try {
                    await pb.collection('users').authWithPassword(this.usernamE,this.passworD)
                    this.$router.push('/products')
                    console.log('login',pb.authStore.model.id)
                } catch (error) {
                    this.failedLogin = !this.failedLogin
                }
            }
        },
        computed: {
            
        },
    }
</script>

<style scoped>
.font-semibold {
    font-weight: bold;
    font-size: 25px;
}

img {
    cursor: not-allowed;
}

.input-field {
    border-radius: 6px;
}

.btn-font {
    font-family: 'Trebuchet MS';
}
</style>