<template>
    <div class="ParentResponsive">
        <div class="listCat">
            <HeaderMob />

            <div class="container">
                <div class="titreCat" style="margin-top: 40px">
                    <h2>Catégories</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a2b29f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </div>

                <div class="TouteLesCat">
                    <AppCategorie />
                    <AppCategorie />
                </div>
            </div>

            <div class="ContainerListe">
                <div class="titreCat">
                    <h2>Mes dernières listes</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a2b29f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </div>
                <AppListe v-for="todo in tabletoDo" 
                :key="todo.id" 
                :id="todo.id" 
                :Name="todo.attributes.Name" 
                :date="todo.attributes.createdAt" 
                :TagOne="todo.attributes.todos.data" />
            </div>
        </div>

        <div class="listedesktop">

            <listToDo />
        </div>
    </div>
</template>

<script>
import api from "@/plugin/axios";
import HeaderMob from "../components/HeaderMob.vue";
import AppCategorie from "../components/AppCategorie.vue";
import AppListe from "../components/AppListe.vue";
import listToDo from "./PageListe.vue";

export default {
    name: "HomePage",
    components: {
        HeaderMob,
        AppCategorie,
        AppListe,
        listToDo,
    },
    data() {
        return {
            tabletoDo: [],
        };
    },
    mounted() {
        api.get("todo-lists?populate=*").then((response) => {
            this.tabletoDo = response.data.data;
            console.log(this.tabletoDo);
        });
    },
};
</script>

<style scoped>
h2 {
    font-size: 20px;
    font-weight: 700;
}
.container {
    display: flex;

    flex-direction: column;
    align-items: center;
    width: 100%;
}
.titreCat {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.TouteLesCat {
    display: flex;
    width: 80%;
    margin-top: 15px;
    justify-content: space-between;
}
.ContainerListe {
    width: 100%;
    background: #f8ede3;
    padding: 30px 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
}

.listCat {
    width: 100%;
}
.listedesktop {
  /* display: none; */
}

@media screen and (min-width: 768px) {
    .ParentResponsive {
        display: flex;
        width: 100%;
        padding: 0px;
        margin-top: 0px;
    }
    .listCat {
        width: 30%;
    }

    .listedesktop {
        width: 70%;
    }
}
</style>
