import Vue from 'vue'

import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'
import ShopHeader from '../components/ShopHeader/ShopHeader'

Vue.use(VueRouter);

const routes = [{
        path: '/home',
        component: Home,
        meta: {
            showFooterGuide: true
        }
    },
    {
        path: '/order',
        component: Order,
        meta: {
            showFooterGuide: true
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            showFooterGuide: true
        }
    },
    {
        path: '/search',
        component: Search,
        meta: {
            showFooterGuide: true
        }
    },
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/login',
        component: Login
            /* meta:{
                showFooterGuide:false  默认就有meta  是否显示
            } */
    },
    {
        path: '/shop',
        component: Shop,
        children: [{
                path: 'goods',
                component: ShopGoods,
            },
            {
                path: 'ratings',
                component: ShopRatings,
            },
            {
                path: 'info',
                component: ShopInfo,
            },
            {
                path: '',
                redirect: 'goods',
            },
        ]
    },
]

const router = new VueRouter({
    routes,
    mode: "hash"
})

export default router