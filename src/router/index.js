import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tarlo from '../views/Tarlo.vue'
import Koncerty from '../views/Koncerty.vue'
import Uchem from '../views/Uchem.vue'
import Okiem from '../views/Okiem.vue'
import Kontakt from '../views/Kontakt.vue'
import PrasaRider from '../views/PrasaRider.vue'
import Kup from '../views/Kup.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/tarlo',
        name: 'Tarlo',
        component: Tarlo
    },
    {
        path: '/koncerty',
        name: 'Koncerty',
        component: Koncerty
    },

    {
        path: '/rzucuchem',
        name: 'Uchem',
        component: Uchem

    },

    {
        path: '/rzucokiem',
        name: 'Okiem',
        component: Okiem

    },

    {
        path: '/kontakt',
        name: 'Kontakt',
        component: Kontakt

    },
    {
        path: '/prasa&rider',
        name: 'PR',
        component: PrasaRider

    },
    {
        path: '/kup',
        name: 'Kup',
        component: Kup

    },




    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router