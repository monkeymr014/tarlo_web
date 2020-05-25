import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

import Home from '../views/Home.vue'
import Tarlo from '../views/Tarlo.vue'
import Koncerty from '../views/Koncerty.vue'
import Uchem from '../views/Uchem.vue'
import Okiem from '../views/Okiem.vue'
import Kontakt from '../views/Kontakt.vue'
import PrasaRider from '../views/PrasaRider.vue'
import Kup from '../views/Kup.vue'

Vue.use(VueRouter)
Vue.use(Meta, {
    keyName: 'metaInfo', // the component option name that vue-meta looks for meta info on.
    attribute: 'data-vue-meta', // the attribute name vue-meta adds to the tags it observes
    ssrAttribute: 'data-vue-meta-server-rendered', // the attribute name that lets vue-meta know that meta info has already been server-rendered
    tagIDKeyName: 'vmid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
  })

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/tarlo',
        name: 'Tarlo',
        component: Tarlo,
        
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

export default new Router({
    path: '/',
    name: 'Home',
    component: Home,

    metaInfo: {
        meta: [
              { name: 'description', content: 'Tarło - Oficjalna Strona Zespołu | Łysybył  | List | Autorska Muzyka | https://www.facebook.com/tarlorockband/' },
              { name: 'keywords', content: "tarlo, zespół, Tarło, tarlo, muzyka, rock, kiedy, leszcza, w, ryb, u, okonia, szczupaka, legno, e, gurami, in, to, do, karpia, płoci, testa, danio, del, youtube, znachorka, jest, temperatura, amura, co, dorsza, lima, d'amor, cura, mordace, english, karasia, lina, minoga, neon, wody, pstrąga, asiatico, quanto, vive, quel, ma" }
        ] ,
       title: 'Tarło - Oficjalna Strona Zespołu',
       htmlAttrs: {
         lang: 'pl',
         amp: true,
         charset: 'utf-8',
         },
 
     }

})
  


const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    router,
    template: ''
  })
  .$mount('#app');