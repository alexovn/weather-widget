<template>
  <div>
    <button class="ml-auto w-6 h-6 flex items-center justify-center hover:rotate-45 translate-transform"
      @click="$emit('changeComponent', WeatherView)">
      <XCircleIcon class="w-full h-full" />
    </button>

    <div>
      <UiInput v-model="citySearch" id="search-city" placeholder="Location name" label="Add location:"
        @keyup.enter="addCity">
        <UiButtonDefault name="Add" @click="addCity" />
      </UiInput>
    </div>

    <WeatherCitiesList v-if="cities.length" @deleteItem="deleteCity" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCitiesStore } from '@/stores/cities';
import { storeToRefs } from 'pinia';
import { XCircleIcon } from '@heroicons/vue/24/outline';

import WeatherView from '@/components/WeatherView.vue';
import WeatherCitiesList from '@/components/WeatherCitiesList.vue';

import UiInput from '@/components/Ui/UiInput.vue';
import UiButtonDefault from '@/components/Ui/Button/UiButtonDefault.vue';

const store = useCitiesStore();
const citySearch = ref('');

const { cities } = storeToRefs(store);

const addCity = () => {
  store.$patch((state) => {
    state.cities.push({
      id: Date.now(),
      name: citySearch.value
    });
  });

  citySearch.value = '';
};

const deleteCity = (idx) => {
  store.$patch((state) => {
    state.cities.splice(idx, 1);
  });
};

</script>