<template>
    <HeaderMob />
    <div class="containerParent">
        <div class="container">
            <div>Liste à faire</div>
            <div style="margin-top: 10px" class="flex">
                <div class="icone">
                    <img src="../assets/Moi.png" alt="" />
                </div>
                <div class="icone">
                    <img src="../assets/Moi.png" alt="" />
                </div>
                <div class="icone">
                    <img src="../assets/Moi.png" alt="" />
                </div>
            </div>
            <h1 style="margin-top: 20px">{{ dataTodo.Name }}</h1>
            <div class="tag">
                <div>{{ TagOne }}</div>
                <div>{{ TagTwo }}</div>
            </div>

            <div id="boucleJour" class="calendrier">
                <div v-for="(item, index) in items" :key="index">
                    <AppJour :jour="item.jour" :jourDate="item.jourDate" />
                </div>
            </div>

            <div class="lists">
                <div v-for="todo in listTodo" :key="todo.id" :NametoDo="todo.attributes.Name" :done="todo.attributes.Done">
                    <input type="checkbox" :id="todo.id" />
                    <label  :for="todo.id">{{todo.attributes.Name }}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from "@/plugin/axios";

import HeaderMob from "../components/HeaderMob.vue";
import AppJour from "../components/AppJour.vue";

export default {
    name: "AppListe",
    components: {
        HeaderMob,
        AppJour,
    },
    data() {
        return {
            dataTodo: [],
            items: [],
            listTodo: [],
            
        };
    },
    mounted() {
        //get today and get the first day of the week
        var today = new Date();
        var firstDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 1);
        var lastDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 7);
        var date = firstDay;
        while (date <= lastDay) {
            this.items.push({
                jour: date.toLocaleDateString("fr-FR", { weekday: "long" }).substr(0, 3),
                jourDate: date.toLocaleDateString("fr-FR", { day: "numeric" }),
            });
            date.setDate(date.getDate() + 1);
        }
        console.log(this.items);


        api.get("todo-lists/" + this.$route.params.id+"?populate=*").then((response) => {
            this.listTodo = response.data.data.attributes.todos.data;
            this.dataTodo = response.data.data.attributes;
            console.log(this.dataTodo);
        });
    },
    props: {
        Name: {
            type: String,
            default: "App de cuisine",
        },
        TagOne: {
            type: String,
            default: "#Job",
        },
        TagTwo: {
            type: String,
            default: "#Web Dev",
        },
    },
    
    computed: {
        currentItrem() {
            return this.$route.params.id;
        },
    },
};
</script>

<style>
.icone {
    height: 30px;
    width: 30px;
    background: #f8ede3;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
}
.icone > img {
    width: 80%;
    height: 80%;
    object-fit: contain;
}
.tag {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 10px;
    color: #fff;
    margin-top: 15px;
}
.tag > div {
    border-radius: 30px;
    padding: 5px 10px;
    box-sizing: border-box;
    background: #a2b29f;
    margin-right: 5px;
}
.flex {
    display: flex;
}
.calendrier {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 30px;
}
.calendrier > div {
    width: 10%;
    height: 50px;
}
.containerParent {
    width: 100%;
    display: flex;
    justify-content: center;
}
.container {
    width: 80%;
}

.lists {
    display: flex;
    margin-top: 30px;
    flex-direction: column;
}
.lists > div {
    width: 100%;
    border-bottom: 1px solid #eee;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 300;
}
.lists > div > input[type="checkbox"] {
    width: 12px;
    height: 12px;
    margin-right: 10px;
}
.lists > div > input[type="checkbox"]:active {
  background: #a2b29f;
}
</style>
