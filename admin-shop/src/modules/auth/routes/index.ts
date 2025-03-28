import type { RouteRecordRaw } from "vue-router";
import isAuthenticatedGuard from "../guards/is-not-authenticated.guard";

export const authRoutes: RouteRecordRaw ={
    path:'/auth',
    name:'auth',
    beforeEnter: [ isAuthenticatedGuard],
    redirect:{ name:'Login'},
    component: ()=> import('@/modules/auth/layouts/AuthLayout.vue'),
    children:[
        {
            path:'login',
            name:'login',
             component: () => import('@/modules/auth/views/LoginView.vue')
        },
        {
            path:'register',
            name:'register',
            component: () => import('@/modules/auth/views/RegisterView.vue')
        },
    ]
}