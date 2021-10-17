import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main.vue'
import Possible from '../views/Possible.vue'
import MyPage from '../views/MyPage.vue'
import Survey from '../views/Survey.vue'
import Trade from '../views/Trade.vue'

import DefaultLayout from '../layouts/default/Index'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'Main',
                component: Main
            },
            {
                path: '/possible',
                name: 'Possible',
                component: Possible
            },
            {
                path: '/mypage',
                name: 'mypage',
                component: MyPage
            },
            {
                path: '/survey',
                name: 'Survey',
                component: Survey
            },
            {
                path: '/trade',
                name: 'Trade',
                component: Trade
            }
        ]
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
