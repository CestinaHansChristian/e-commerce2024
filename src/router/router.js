// vue router instance
import { createRouter,createWebHistory } from 'vue-router'

// // pocketbase instance
import PocketBase from 'pocketbase';
const pb = new PocketBase('https://ecom2024.pockethost.io/')

// view import
import SignupForm from '@/views/SignupForm.vue';
import LoginForm from '@/views/LoginForm.vue';
import HomewithCta from '@/views/HomewithCta.vue'
import Products from '@/views/Products.vue';
import ErrorPage from '@/views/ErrorPage.vue';
import Analytics from '@/views/Analytics.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomewithCta
        },
        {
            path: '/create',
            name: 'create',
            component: SignupForm,
        },
        {
            path: '/login',
            name: 'login',
            component: LoginForm
        },
        {
            path: '/products',
            name: 'products',
            component: Products,
            beforeEnter(to) {
                if (to.name === 'products' && !pb.authStore.isValid ) {
                    console.log('failed to access using url no token');
                    return {name: 'errorPage'}
                } else {
                    return true
                }
            }
            
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'errorPage',
            component: ErrorPage
        },
        {
            path: '/analytics',
            name: 'analytics',
            component: Analytics
        }
    ]
})

export default router