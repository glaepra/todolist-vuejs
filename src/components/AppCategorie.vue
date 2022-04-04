<template>
  <div class="CatParent">
      <h2>{{Name}}</h2>
      <span>{{TacheRestante}} taches  restante </span>

      <div class="tag">
          <div>{{TagOne}}</div>
          <div>{{TagTwo}}</div>
      </div>

      <div class="icon">
          {{Icon}}
      </div>
  </div>
</template>

<script>
export default {
 props: {
     Name: {
         type: String,
         default: "Liste travail à faires"
     },
     TacheRestante: {
         type: Number,
         default: 3
     },
     TagOne:{
        type: String,
        default: "#Job"
     },
     TagTwo:{
        type: String,
        default: "#Web Dev"
     },

     Icon:{
         type: String,
         default: "💻"
     }
 },
}
</script>

<style>
.CatParent{
    height: 150px;
    width: 150px;
    border-radius: 15px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    background: #FFF;
    padding: 15px;
    box-sizing: border-box;
    position: relative;
}
h2{
    font-size: 14px;
    font-weight: 700;
}
span{
    display: block;
    margin-top: 10px;
    font-size: 12px;
    font-weight: 300;
    color: #a2b29f;
}
.tag{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 10px;
    color: #FFF;
    margin-top: 10px;

}
.tag>div{
    border-radius: 30px;
    padding: 5px 10px;
    box-sizing: border-box;
    background: #a2b29f;
    margin-right: 5px;
}
.icon{
    position: absolute;
    bottom: 15px;
    right: 15px;
    font-size: 20px;
}
</style>