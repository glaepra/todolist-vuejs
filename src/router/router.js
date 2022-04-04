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
        component: PageHome
    },
    {
        path: "/liste",
        name: "liste",
        component: PageListe
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;