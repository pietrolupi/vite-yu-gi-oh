

<script>


export default {
  name: 'Card',

  props:{
    name: String,
    archetype: String,
    img: String
  }


}
</script>


<template>
  <div class="card-container">
    <img :src="img" alt="">
    <h3>{{name}}</h3>
    <p>{{ archetype }}</p>
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