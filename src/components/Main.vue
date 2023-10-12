
<script>

import Card from './Card.vue';

export default {
  name: 'Main',
  
  components:{
    Card,
  }

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

      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>

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

      .results-bar{
        background-color: black;
        color: white;
        height: 50px;
      }

    }
  }
</style>