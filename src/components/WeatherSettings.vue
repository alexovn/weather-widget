<template>
  <div class="p-4 flex flex-col bg-slate-300 shadow-md rounded-3xl overflow-hidden">
    <div>
      <UiInput v-model="citySearch" id="search-city" placeholder="Location name" label="Add location:"
        @keyup.enter="addItem">
        <UiButtonDefault name="Add" @click="addItem" />
      </UiInput>
    </div>

    <div v-if="error" class="mt-2 text-red-600">
      {{ error }}
    </div>

    <WeatherCitiesList v-if="cities.length" @deleteItem="deleteCity" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCitiesStore } from '@/stores/cities';
import { storeToRefs } from 'pinia';

import WeatherCitiesList from '@/components/WeatherCitiesList.vue';
import UiInput from '@/components/Ui/UiInput.vue';
import UiButtonDefault from '@/components/Ui/Button/UiButtonDefault.vue';

import useGeocoding from '@/composables/useGeocoding';
import addCity from '@/composables/addCity';

const store = useCitiesStore();
const citySearch = ref('');

const { cities } = storeToRefs(store);

const error = ref(null);

const addItem = async () => {
  const regexp = /^[A-Za-zА-ЯЁа-яё\s-]*$/g;

  if(citySearch.value === '' || !regexp.test(citySearch.value) ) return;

  const { geocoding } = useGeocoding();
  const geocodingData = await geocoding(citySearch.value.trim());

  if (!geocodingData.length) {
    error.value = `No results for ${citySearch.value}`;
    return;
  }
  error.value = null;

  const { lat, lon } = geocodingData[0];

  const existedCity = cities.value.some(item => {
    return (item.coord.lat).toFixed(0) === lat.toFixed(0) && (item.coord.lon).toFixed(0) === lon.toFixed(0);
  });

  if(existedCity) return;

  addCity(lat, lon);
  citySearch.value = '';
};

const deleteCity = (idx) => {
  store.$patch((state) => {
    state.cities.splice(idx, 1);
  });
};

</script>