<script setup>
    import HeaderMain from '@/components/HeaderMain.vue';
    import ProductCard from '@/components/ProductCard.vue';
</script>
<template>
    <HeaderMain :loginBtnDisable="true" :createBtnDisable="true" :LogoutBtnDisable="false"/>
    <div class="">
        <div class="rounded-lg grid md:grid-rows-1 ">
            <div class="grid md:grid-rows-1">
                <div class=" rounded-lg ">
                    <div class="cta-bg-img object-cover h-svh grid w-full md:h-full justify-center md:w-full">
                        <div class="flex place-content-center relative grid-cols-2 shadow-xl">
                            <router-link :to="{name: 'login'}" class="flex place-content-center">
                                <button class="ctaBtn bg-emerald-500 absolute border-2 shadow-2xl shadow-neutral-800 border-emerald-900 top-1/2 p-5 w-60 rounded-2xl font-semibold text-4xl hover:-translate-y-1 hover:text-white duration-300 delay-300">Shop now!</button>    
                            </router-link>    
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid md:grid-rows-2 gap-y-2">
                <div class="grid grid-row-2 justify-stretch about-container rounded-bl-lg">
                    <div class="flex wrapper-mission-vision shadow-gray-500 grid-cols-2 gap-x-1 h-auto">
                        <div class="mission shadow-lg shadow-neutral-400 bg-white m-2 rounded-md  delay-150 duration-500 hover:bg-lime-200">
                            <div class="content p-2 grid gap-y-2 m-2">
                                <div class="heading-wrapper flex justify-center">
                                    <h1 class="font-semibold text-ellipsis">ABOUT US</h1>
                                </div>
                                <div class="content lg:text-xl ">
                                    <p>
                                        We are a dairy farm that promotes sustainable processes for our products and provide healthy produce at an affordable price! Daily Farm's commitment to providing the people with nutritious dairy produce is our top priority for our customers' satisfaction. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex grid-row-2 justify-stretch about-container rounded-bl-lg ">
                    <div class="flex wrapper-mission-vision shadow-gray-500 grid-cols-2 gap-x-1 h-auto">
                        <div class="mission shadow-lg shadow-neutral-400 bg-white m-2 rounded-md  delay-150 duration-500 hover:bg-lime-200">
                            <div class="content p-2 grid gap-y-2 m-2">
                                <div class="heading-wrapper flex justify-center">
                                    <h1 class="font-semibold text-ellipsis">Mission</h1>
                                </div>
                                <div class="content lg:text-xl ">
                                    <p>
                                        Our mission is to commit to organic farming practices that ensure our products are not not only good for you, but also good for the environment. So come, join us as we create a healthier world with one organic product at a time.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="m-2 vision shadow-lg shadow-neutral-400 bg-white rounded-md  delay-150 duration-500 hover:bg-lime-200">
                            <div class="content p-2 grid gap-y-2">
                                <div class="heading-wrapper flex justify-center">
                                    <h1 class="font-semibold text-lg text-ellipsis">Vision</h1>
                                </div>
                                <div class="content lg:text-xl">
                                    <p>
                                        Our vision is for the daily farm to reach new heights in expanding the coverage of new customers through more accessible means in selecting and purchasing local dairy produce, allowing us to extend our reach in providing fresh and nutritious dairy goods. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mx-1 about-container grid grid-cols-4 delay-100 duration-500 rounded-s-xl gap-1">
                    <div class="map-wrapper grid grid-cols-2 col-span-2 m-1">
                        <div class="map-header bg-gradient-to-b from-slate-500 to-green-300 grid place-content-center rounded-s-xl">
                            <h1 class="font-semibold location-heading px-4 text-lime-800 hover:text-blue-500 delay-100 duration-300">WE ARE LOCATED AT!</h1>
                        </div>
                        <div class="map-container rounded-e-xl">
                            <iframe src="https://www.google.com/maps/embed/v1/place?q=Malilipot,+Albay,+Philippines&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" class="aspect-auto w-full h-full rounded-e-xl" frameborder="0"></iframe>
                        </div>
                    </div>
                    <div class="grid">
                        <div class="m-1 rounded-xl bg-white gap-y-2 ps-5">
                            <div class="quick-links-heading pt-2">
                                <h1 class="font-bold text-xl">
                                    Connect with us
                                </h1>
                            </div>
                            <div class="quick-link-grid grid-rows-4 space-y-3 py-2">
                                <div class="facebook-link">
                                    <a href="#" class="space-x-2 hover:bg-red-300 p-2 rounded-lg">
                                        <i class="fa-brands fa-facebook"></i>
                                        <span class="">Facebook</span>
                                    </a>
                                </div>
                                <div class="instagram-link">
                                    <a href="#" class="space-x-2 hover:bg-red-300 p-2 rounded-lg">
                                        <i class="fa-brands fa-instagram"></i>
                                        <span class="">Instagram</span>
                                    </a>
                                </div>
                                <div class="youtube-link">
                                    <a href="#" class="space-x-2 hover:bg-red-300 p-2 rounded-lg">
                                        <i class="fa-brands fa-youtube"></i>
                                        <span class="">Youtube</span>
                                    </a>
                                </div>
                                <div class="tiktok-link">
                                    <a href="#" class="space-x-2 hover:bg-red-300 p-2 rounded-lg">
                                        <i class="fa-brands fa-tiktok"></i>
                                        <span class="">Tiktok</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" grid">
                        <div class="m-1 rounded-xl bg-white gap-y-2 ps-5">
                            <div class="quick-links-heading pt-2">
                                <h1 class="font-bold text-xl">
                                    Store Hours <i class="fa-sharp fa-solid fa-clock"></i>
                                </h1>
                            </div>
                            <div class="quick-link-grid grid-rows-4 space-y-3 pt-2">
                                <div class="facebook-link">
                                    <a href="#" class="space-x-2 hover:bg-red-300 p-2 rounded-lg">
                                        <i class="fa-sharp fa-solid fa-calendar-days"></i>
                                        <span class="">Monday - Friday : 6am - 4pm</span>
                                    </a>
                                </div>
                                <div class="instagram-link">
                                    <a href="#" class="space-x-2 hover:bg-red-300 p-2 rounded-lg">
                                        <i class="fa-sharp fa-solid fa-calendar-days"></i>
                                        <span class="">Saturday : 9am - 3pm</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.cta-bg-img {
    background-image: url(/public/cowCTAbg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: center;
    height: 31.8vw;
    margin: 8vh 0px 8vh 0px;
}

.location-heading {
    font-family: 'lumanisomo';
}

.wrapper-mission-vision {
    user-select: none;
}

.mission, .vision {
    letter-spacing: 2px;
    line-height: 200%;
}

</style>