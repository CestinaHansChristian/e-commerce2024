<script setup>
    import DailyFarmlogo from '@/icons/DailyFarmlogo.vue';
</script>
<template>
    <div>
        <header>
            <div class="header-container border-2 border-amber-7000 pt-2 bg-amber-700 mt-2 rounded-md mx-3">
                <div class="flex grid-col-2 justify-between ">
                    <div class="logo p-3 px-4">
                        <h1 class="title-header">
                            <DailyFarmlogo />
                        </h1>
                    </div>
                    <div class="option-btns flex flex-row-reverse gap-x-2 p-2 px-4 ">
                        <div class="sign-up-btn">
                            <router-link :to="{name:'create'}"><button v-show="createBtn" class="btn-header hover:translate-y-1 duration-200">Sign-Up</button></router-link>
                         </div>
                        <div class="login-btn">
                            <div>
                                <router-link  :to="{name:'login'}"><button v-show="loginBtn" class="btn-header bg-slate-500 hover:translate-y-1 duration-200">Login</button></router-link>
                            </div>
                        </div>
                        <div class="logout-btn">
                            <!-- <router-link :to="{name: 'home'}"> -->
                                <button @click="logoutBtn" v-show="LogoutBtnDisable" class="btn-header bg-red-500 hover:translate-y-1 duration-200">Logout</button>
                            <!-- </router-link> -->
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
    import PocketBase from 'pocketbase';

    const pb = new PocketBase('http://127.0.0.1:8090');
    export default {
        
        props: {
            createBtnDisable: Boolean,
            loginBtnDisable: Boolean,
            LogoutBtnDisable: Boolean
        },
        data() {
            return {
                createBtn: this.createBtnDisable,
                loginBtn: this.loginBtnDisable,
            }
        },
        methods: {
            logoutBtn() {
                pb.authStore.clear()
                this.$router.push('/')
                console.log('logged out');
            }
        },
    }
</script>

<style scoped>
    .btn-header {
        border: 2px solid;
        padding: 5px 20px;
        font-size: 20px;
        font-weight: 600;
        font-family: 'lumanisomo';
        border-radius: 16px;
    }

    .title-header {
        font-family: 'lumanisomo';
        font-weight: bolder;
        font-size: 30px;
    }

    .title-header,.btn-header, .sign-up-btn, .login-btn {
        color: whitesmoke;
    }
</style>