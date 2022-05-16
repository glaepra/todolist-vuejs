<template>

  <div class="container-liste">
    <div class="titreCat">
      <router-link style="width:48%;" :to="'/liste/'+id">
      <h2>{{ Name }}</h2>
      </router-link>
      <div class="tag">
        



        <div># {{ getAllCat[0] }}</div>
        <div># {{ getAllCat[1] }}</div>
      </div>
    </div>
    <span>Membre de la team</span>
    <div class="personne-projet">
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
    <span>Créée</span>
    <div class="deadLine">
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 13.75C10.9518 13.75 13.75 10.9518 13.75 7.5C13.75 4.04822 10.9518 1.25 7.5 1.25C4.04822 1.25 1.25 4.04822 1.25 7.5C1.25 10.9518 4.04822 13.75 7.5 13.75Z"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.5 3.75V7.5L10 8.75"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>{{ dateFormated }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Name: {
      type: String,
      default: "Liste travail à faires",
    },
    TacheRestante: {
      type: Number,
      default: 3,
    },
    TagOne: {
      type: String,
      default: "Job",
    },
    TagTwo: {
      type: String,
      default: "Web Dev",
    },
    date: {
      type: String,
      default: "19 janv 2023",
    }, 
    Icon: {
      type: String,
      default: "💻",
    },
    id: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    getAllCat(){
      this.TagOne
      let cat1 = this.TagOne[0]?.attributes.Category;
      let cat2 = this.TagOne[1]?.attributes.Category;
      let table = Array(cat1, cat2);
      return table;
    },

    dateFormated() {
      this.date 
      let dateformat = new Date(this.date);
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      dateformat = dateformat.toLocaleDateString('fr-FR', options);
      return dateformat 
    }
  },
 
};
</script>

<style>
.container-liste {
  width: 80%;
  padding: 15px;
  border-radius: 15px;
  background: #fff;
  margin-top: 15px;
}
h2 {
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  color: #000;
}
.tag {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 10px;
  color: #fff;
  margin-top: 10px;
  max-width: 48%;
}
.tag > div {
  border-radius: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  background: #a2b29f;
  margin-right: 5px;
}
.titreCat {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
span {
  display: block;
  margin-top: 10px;
  font-size: 12px;
  font-weight: 300;
  color: #a2b29f;
}

.icone {
  height: 27px;
  width: 27px;
  background: #f8ede3;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  margin: 5px;
}
.icone > img {
  width: 80%;
  height: 80%;
  object-fit: contain;
}
.personne-projet {
  display: flex;
  width: 75%;
  align-items: center;
}
.deadLine {
  display: flex;
    align-items: center;
    margin-top: 5px;
}
.deadLine>span{
     color: #000;
     margin: 0;
     margin-left: 5px;
}


</style>
