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
// import CompanyLayout from '../layouts/company/Index'

// import MyPageLayout from '../layouts/mypage/Index'
// import Test1 from '../views/Test1.vue'
// import MyPage from '../views/MyPage.vue'

// import Test from '../views/Test.vue'
// import uploadTest from '../views/uploadTest.vue'
// import Test1 from '../views/Test1.vue'

import Test5 from '../views/Test5.vue'
import Filter from '../layouts/test2/filter.vue'

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
                path: '/test5',
                name: 'Test5',
                component: Test5
            },
            {
                path: '/filter',
                name: 'Filter',
                component: Filter
            },
            {
                path: '/company',
                name: 'Company',
                component: Company
                // children: [
                //     {
                //         path: '/company',
                //         name: 'Company',
                //         component: CompanyLayout
                //     }
                // ]
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
