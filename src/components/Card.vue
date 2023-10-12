


<script>

import { store } from '../data/store';

export default {
  name: 'Card',

  data(){
    return{
      store
    }
  }
}
</script>


<template>
  <div class="card-container">
    <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" alt="">
    <h3>{{store.provaTest}}</h3>
    <p>Tipologia</p>
  </div>
</template>


<style lang="scss">

  @use '../scss/partials/vars' as *;

  .card-container{
    height: 450px;
    border: 1px solid black;
    width: 18%;
    margin-bottom: 20px;
    background-color: $primary-color;
    display: flex;
    flex-direction: column;
    text-align: center;

    h3{
      color: white;
      font-size: 1.2rem;
      margin: 20px 0;
    }

    p{
      padding-top: 30px;
    }

    img{
      width: 100%;
    }

  }
</style>