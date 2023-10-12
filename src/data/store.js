
import {reactive} from 'vue';

export const store = reactive({
  
  apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=' + getRandomInt(1, 1000),

  cardList: [],

  cardListLength: ''
  
})

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);}