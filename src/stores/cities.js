import {ref} from 'vue';
import { defineStore } from 'pinia';

export const useCitiesStore = defineStore('cities', () => {

  const cities = ref([]);

  return { cities };
});
