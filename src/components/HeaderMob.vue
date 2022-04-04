<template>
  <div class="parentHeader">
    <div class="header">
      <div class="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#A2B29F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-check"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span style="display:block;">Task Do</span>
      </div>
      <div class="icone">
          <img src="../assets/Moi.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderMob',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  margin: 0px;
  text-decoration: none;
}
body {
  font-family: "Roboto", sans-serif;
  margin: 0;
}
.parentHeader {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.header {
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo{
    display: flex;
    align-items: center;
}
.logo>span{
    display: block;
    margin-left: 10px;
}
.icone{
    height: 45px;
    width: 45px;
    background: #F8EDE3;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
}
.icone>img{
    width: 80%;
    height: 80%;
    object-fit: contain;
}
</style>
