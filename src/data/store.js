
import {reactive} from 'vue';

export const store = reactive({
  
  randomApiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num='+getRandomInt(20, 60) +'&offset='+getRandomInt(1, 1000),
  apiUrl: ' https://db.ygoprodeck.com/api/v7/cardinfo.php',
  archetypesApiUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
  cardList: [],
  archetypesList: [],
  archetypeToSearch : '',
  cardListLength: ''
  
})

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);}