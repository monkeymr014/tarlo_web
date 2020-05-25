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
        path: '/prasarider',
        name: 'PR',
        component: PrasaRider

    },
    {
        path: '/kup',
        name: 'Kup',
        component: Kup

    },

]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router