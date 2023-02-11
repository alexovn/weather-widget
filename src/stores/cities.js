import {ref} from 'vue';
import { defineStore } from 'pinia';

export const useCitiesStore = defineStore('cities', () => {

  const cities = ref([]);

  const updateCities = async (arr) => {
    try {
      cities.value = await arr;
    } catch(err) {
      console.error(err);
    }
  }

  return { cities, updateCities };
});
