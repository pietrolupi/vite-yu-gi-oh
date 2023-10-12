
<script>

import Card from './Card.vue';
import { store } from '../data/store';

export default {
  name: 'Main',
  
  components:{
    Card,
  },

  data(){
    return{
      store
    }
  },
  

}
</script>

<template>

  <main>

    <select class="cstm-select form-select" aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>

    <div class="container">
      
      <div class="results-bar w-100 d-flex">
        <p>Numero di carte trovate</p>
      </div>
      
      <div v-if="store.cardList.length === 20" class="w-100 d-flex justify-content-between flex-wrap ">
        
        <Card  v-for="card in store.cardList"
          :key="card.id"
          :name="card.name"
          :archetype="card.archetype"
          :img="card.card_images[0].image_url" /> 
      </div>
        
        <div v-else class="loading">
          <i class="fa-solid fa-hourglass-half"></i>
        </div>

    </div>

  </main>
  
</template>


<style lang="scss" scoped>

@use '../scss/partials/vars' as *;

  main{
    background-color: $primary-color;
    min-height: calc(100vh - 80px);
    padding-top: 20px;

    .cstm-select{
      width: 200px;
      margin: 0 0 20px 400px;
    };

    .container{
      background-color: white;
      padding: 0 40px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      min-height: 80vh;
      position: relative;

      .loading{
        font-size: 8rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        

      }

      .results-bar{
        background-color: black;
        color: white;
        height: 50px;
      }

    }
  }
</style>