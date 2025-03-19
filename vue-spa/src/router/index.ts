import isAuthenticateGuard from "@/modules/auth/guards/is-authenticated.guard";
import NotFound404 from "@/modules/common/pages/NotFound404.vue";
import HomePage from "@/modules/landing/pages/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

//createWebHostpry
//createHasWebHostpry,


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'landing',
            component:()=> import('@/modules/landing/layouts/LandingLayout.vue'),
            children:[
                {
                    path:'/',
                    name:'home',
                    component: HomePage
                },
                {
                    path:'/features',
                    name:'features',
                    component: ()=> import('@/modules/landing/pages/FeaturesPages.vue')
                },
                {
                    path:'/pricing',
                    name:'pricing',
                    component: ()=> import('@/modules/landing/pages/PricingPage.vue')
                },
                {
                    path:'/contact',
                    name:'contact',
                    component: ()=> import('@/modules/landing/pages/ContactPage.vue')
                },

                {
                    path:'/pokemon/:id',
                    name:'pokemon',
                    beforeEnter: [
                        isAuthenticateGuard
                    ],
                    props: (route) => {
                        
                        const id = +route.params.id;

                        //si se le manda por el url algo que no es un numero
                        //se regresa , por default un id de 1 
                        return isNaN(id) ? { id:1} : {id}

                        
                    },

                    component: ()=> import('@/modules/pokemon/pages/PokemonPage.vue')
                }
            ]  
            
        },
//@/modules/auth/pages/LoginPage.vue
        //auth
        {
            path:'/auth',
            redirect: {name:"login"},  //'/login',
            name:'auth',
            component: ()=> import('@/modules/auth/layouts/AuthLayout.vue'),
            children:[
                {
                    path: 'login',
                    name:'login',
                    component: ()=> import('@/modules/auth/pages/LoginPage.vue'),
                },
                {
                    path: 'register',
                    name:'register',
                    component: ()=> import('@/modules/auth/pages/RegisterPage.vue'),
                },
            ],
        },
        //not found
        {
            path: '/:pathMatch(.*)*',
            //redirect:'/'
            component: NotFound404
        },


    ]
})

export default router