<script >

  import { store } from './data/store';
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  import axios from 'axios';

  export default {

    components: {
      Header,
      Main
    },

    data(){
      return{
        store
      }
    },

    methods:{
      getApi(){
        axios.get(store.apiUrl)
        .then(res =>{
          store.cardList = res.data.data
          console.log(this.store.cardList);
        })
      }
    },

    created(){
      this.getApi()
      console.log(this.store.cardList);
    },

    mounted(){
    console.log(this.store.cardList[1].card_images[0].id);
  }

    

  }

</script>

<template>
  <Header/>
  <Main/>
</template>

<style lang="scss">

  @use './scss/main.scss';

</style>
