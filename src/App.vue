<script >

  import { store } from './data/store';
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  import axios from 'axios';
  import SearchBar from './components/SearchBar.vue';

  export default {

    components: {
      Header,
      Main,
      SearchBar
    },

    data(){
      return{
        store
      }
    },

    methods:{

      getSelectedApi(){

        axios.get(store.apiUrl,{
          params:{
            archetype: store.archetypeToSearch
          }
        }).then(res=> {

          store.cardList = res.data.data
          console.log('QUI---' + this.store.cardList);

        })
      },

      getRandomApi(){
        store.cardList = []
        axios.get(store.randomApiUrl)
        
        .then(res =>{
          
          store.cardListLength = res.data.meta.current_rows
          store.cardList = res.data.data
          console.log(this.store.cardList);
         
        })
      },

      getArchetypesApi(){
      axios.get(store.archetypesApiUrl)
      .then(res=>{
          store.archetypesList = res.data
          console.log(store.archetypesList);
        ;
      })
    },
    },

    created(){
      this.getArchetypesApi()
     /*  this.getRandomApi() */

    },

    

  }

</script>

<template>
  <Header/>
  <SearchBar @startSearch="getRandomApi"/>
  <Main/>
</template>

<style lang="scss">

  @use './scss/main.scss';

</style>
