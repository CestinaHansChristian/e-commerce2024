<script setup>
    import DailyFarmlogo from '@/icons/DailyFarmlogo.vue';
</script>
<template>
    <div>
        <header>
            <div class="header-point header-container border-2 border-amber-7000 pt-2 bg-amber-700 rounded-md">
                <div class="flex grid-col-2 justify-between ">
                    <div class="logo p-3 px-4">
                            <DailyFarmlogo />
                    </div>
                    <div class="option-btns flex flex-row-reverse gap-x-2 p-2 px-4 ">
                        <div class="sign-up-btn">
                            <router-link :to="{name:'create'}"><button v-show="createBtn" class="SignUpBtn sign-in fill btn-header hover:translate-y-0 duration-200">SIGN UP</button></router-link>
                         </div>
                        <div class="login-btn">
                            <div>
                                <router-link  :to="{name:'login'}"><button v-show="loginBtn" class="SignUpBtn log btn-header fill bg-slate-500 hover:translate-y-0 duration-200">LOGIN</button></router-link>
                            </div>
                        </div>
                        <div class="logout-btn">
                            <!-- <router-link :to="{name: 'home'}"> -->
                                <button @click="logoutBtn" v-show="LogoutBtnDisable" class="btn-header LogoutBtn bg-red-500 hover:text-white hover:translate-y-1 duration-200">Logout</button>
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
        padding: 5px 20px;
        font-size: 20px;
        font-weight: 600;
        font-family: "Arimo", sans-serif;
        font-optical-sizing: auto;
        font-size: 1.25vw;
        font-weight: 500;
        letter-spacing: 0.2px;
        border-radius: 16px;
    }

    .logo {
        width: 17%;
    }

    .header-point {
        background-color: #d88334;
        border-style: none;
        border-radius: 0;
        justify-content: center;
        padding: 7px 20px 7px 20px;
        box-shadow: 0px 0px 25px 0px #0000007a;  
    }

    .option-btns {
        align-items: center;
    }

    .SignUpBtn {
        background-color: #2d8d0b;
        color: #f6f9fd;
        border-radius: 8px;
        height: 9%;
        width: 12.25vw;
        padding: 15px;
        margin: 0px 10px 0px 10px;
    }

    .LogoutBtn {
        color: #f6f9fd;
        border-radius: 8px;
        height: 9%;
        width: 12.25vw;
        padding: 15px;
        margin: 0px 10px 0px 10px;
    }

    .fill {
        position: relative;
        overflow: hidden;
    }
    
    .log:before {
        content: "";
        position: absolute;
        background: #f4f6f3;
        bottom: 0;
        left: 0;
        right: 100%;
        top: 0;
        z-index: -1;
        transition: right 0.2s ease-out;
    }
    
    .fill:hover {
        scale: 1.06;
        font-weight: 700;
        letter-spacing: 7px;
        color: #d26805;
    }
    
    .sign-in:before {
        content: "";
        position: absolute;
        background: #f4f6f3;
        bottom: 0;
        left: 100%;
        right: 0;
        top: 0;
        z-index: -1;
        transition: left 0.2s ease-out;
    }
    
    .log:hover:before {
        right: 0;
    }

    .sign-in:hover:before {
        left: 0;
    }

    .fill:active {
        scale: 0.98;
        filter: brightness(0.95);
    }
</style>