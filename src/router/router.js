import { createWebHistory, createRouter } from "vue-router";


import PageConnexion from "../pages/PageConnexion.vue"
import PageHome from "../pages/PageHome.vue"
import PageListe from "../pages/PageListe.vue"

const routes = [{
        path: "/",
        name: "login",
        component: PageConnexion
    },
    {
        path: "/home",
        name: "home",
        component: PageHome,
        // children: [
        //     // UserHome will be rendered inside User's <router-view>
        //     // when /user/:id is matched
        //     { path: '/:id', component: PageListe },
      
        //     // ...other sub routes
        //   ],
    },
    {
        path: "/liste/:id",
        name: "liste",
        component: PageListe
    }

]


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;