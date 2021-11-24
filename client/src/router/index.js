import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main.vue'
import Possible from '../views/Possible.vue'
import Survey from '../views/Survey.vue'
import Trade from '../views/Trade.vue'
import Company from '../views/Company.vue'
import Encrypt from '../views/Encrypt.vue'
import MyPage from '../views/MyPage.vue'
import About from '../views/About.vue'

import DefaultLayout from '../layouts/default/Index'
import DefaultLayout2 from '../layouts/default/Index2'
import PossibleLayout from '../layouts/possible/Index'

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
            }
        ]
    },
    {
        path: '/',
        component: DefaultLayout2,
        children: [
            {
                path: '/possible',
                component: Possible,
                children: [
                    {
                        path: '/possible',
                        name: 'possible',
                        component: PossibleLayout
                    }
                ]
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
            },
            {
                path: '/encrypt',
                name: 'Encrypt',
                component: Encrypt
            },
            {
                path: '/mypage',
                name: 'MyPage',
                component: MyPage
            },

            {
                path: '/company',
                name: 'Company',
                component: Company
            },
            {
                path: '/about',
                name: 'About',
                component: About
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
