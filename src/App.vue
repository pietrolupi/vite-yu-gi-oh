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
          store.cardListLength = res.data.meta.current_rows
          store.cardList = res.data.data
          console.log(this.store.cardList);
          console.log( 'QUIIII'+this.store.cardListLength);
        })
      }
    },

    created(){
      this.getApi()
      console.log(this.store.cardList);
    },

    mounted(){
    
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
