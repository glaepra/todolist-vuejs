<template>
  <div class="container">
    <div class="connexionBox">
      <HeaderMob />
      <AppConnexion />
    </div>
    <div class="ConnexionAppMedia">
      <img src="../assets/back.webp" alt="">
    </div>
  </div>
</template>
<script>
import HeaderMob from "../components/HeaderMob.vue";
import AppConnexion from "../components/AppConnexion.vue";

export default {
  name: "PageConnexion",
  components: {
    HeaderMob,
    AppConnexion,
  },
};
</script>
<style scoped>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

.ConnexionAppMedia {
  display: none;
}
.connexionBox {
  width: 100%;
}
.container {
  display: flex;
  width: 100%;
}
@media screen and (min-width: 768px) {
  .ConnexionAppMedia {
    display: block;
    width: 70%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  .ConnexionAppMedia>img{
    height: 90vh;
  }
  .connexionBox {
    width: 30%;
  }
}
</style>
