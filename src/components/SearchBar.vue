
<script>

import { store } from '../data/store';

export default {
  name: 'SearchBar',
 
  data(){
    return{
      store,
    }
  },

 

  mounted(){
   console.log(this.store.archetypesList); 
  }
}
</script>

<template>

  <select v-model="store.archetypeToSearch" class="cstm-select form-select" aria-label="Default select example">
      <option selected>Select an Archetype</option>
      <option 
      v-for="(archetype,index) in store.archetypesList" 
      :key="index"
      :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
    
  </select>

  <button 
  class="btn btn-primary"
  @click="$emit('startSearch')">
    SEARCH
  </button>

</template>


<style lang="scss" scoped>

</style>