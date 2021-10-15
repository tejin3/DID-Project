import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main.vue'
import Possible from '../views/Possible.vue'
import MyPage from '../views/MyPage.vue'
import Survey from '../views/Survey.vue'
import Trade from '../views/Trade.vue'
import Test from '../views/Test.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main
    },
    {
        path: '/possible',
        name: 'possible',
        component: Possible
    },
    {
        path: '/mypage',
        name: 'mypage',
        component: MyPage
    },
    {
        path: '/survey',
        name: 'survey',
        component: Survey
    },
    {
        path: '/trade',
        name: 'Trade',
        component: Trade
    },
    {
        path: '/test',
        name: 'test',
        component: Test
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
