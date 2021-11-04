import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main.vue'
import Possible from '../views/Possible.vue'
import MyPage from '../views/MyPage.vue'
import Survey from '../views/Survey.vue'
import Trade from '../views/Trade.vue'
import Company from '../views/Company.vue'

import DefaultLayout from '../layouts/default/Index'
import PossibleLayout from '../layouts/possible/Index'
import MyPageLayout from '../layouts/mypage/Index'
import CompanyLayout from '../layouts/company/Index'

// import Test1 from '../views/Test1.vue'

import Test from '../views/Test.vue'
import Test1 from '../views/Test1.vue'

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
                path: '/mypage',
                component: MyPage,
                children: [
                    {
                        path: '/mypage',
                        name: 'possible',
                        component: MyPageLayout
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
                path: '/test',
                name: 'Test',
                component: Test
            },
            {
                path: '/test1',
                name: 'Test1',
                component: Test1
            },
            {
                path: '/company',
                component: Company,
                children: [
                    {
                        path: '/company',
                        name: 'Company',
                        component: CompanyLayout
                    }
                ]
                // props: {
                //     listUp: true
                // }
            }
        ]
    },
    { path: '/test', name: 'Test', component: Test }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
