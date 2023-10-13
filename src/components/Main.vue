
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

    <div class="container">
      
      <div class="results-bar w-100 d-flex">
        <span v-if="store.cardList.length === store.cardListLength">Found {{ store.cardListLength }} cards</span>
      </div>
      
      <div v-if="store.cardList.length === store.cardListLength" class="w-100 d-flex flex-wrap justify-content-between ">
        
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
        padding-left: 10px;
        display: flex;
        align-items: center;
        
      }

    }
  }
</style>