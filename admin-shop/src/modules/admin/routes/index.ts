import isAdminGuard from "@/modules/auth/guards/is-admin.guard";
import isAuthenticatedGuard from "@/modules/auth/guards/is-authenticated.guard";
import type { RouteRecordRaw } from "vue-router";

export const adminRoutes: RouteRecordRaw = {
    path:'/admin',
    name:'admin',
    beforeEnter:[
        isAuthenticatedGuard,
        isAdminGuard
    ],
    redirect:{name: 'admin-dashboard'},
    component: ()=>import('@/modules/admin/layouts/AdminLayout.vue'),
    children:[
        {
            path: 'dashboard',
            name: 'admin-dashboard',
            component: ()=> import('@/modules/admin/views/DashBoardView.vue')
        },
        {
            path: 'products',
            name: 'admin-products',
            component: ()=> import('@/modules/admin/views/ProductsView.vue')
        },
        {
            path: 'products/:productId', //aqui puede ir cualquier nombre 
            name: 'admin-product',
            props:true , //para que haga match, el del url
            component: ()=> import('@/modules/admin/views/ProductView.vue')
        },
    ]
}