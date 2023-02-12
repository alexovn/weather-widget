<template>
  <div v-if="citiesFiltered.length" class="p-4 w-full h-full bg-slate-300 rounded-2xl overflow-hidden">
    <swiper
      :slides-per-view="3"
      :space-between="10"
      @swiper="setWeatherCitiesSlider"
      style="overflow: visible;"
    >
      <swiper-slide
        class="p-2 w-[6rem] h-[6rem] shrink-0 bg-slate-200 rounded-2xl hover:bg-slate-50 hover:shadow-md hover:scale-105 hover:rotate-2 transition-all cursor-pointer"
        v-for="city in citiesFiltered" :key="city.id"
        @click="handleClickOnSlide(city)"
      >
        <div class="mb-1 flex items-start justify-between">
          <div class="w-[2rem] h-[2rem]">
            <img :src="`https://openweathermap.org/img/wn/${city.weather.icon}@2x.png`" :alt="city.weather.description" />
          </div>
          <div class="max-w-[3.3rem] text-[0.7rem] text-right">
            <div class="font-medium truncate">
              {{ city.name }}
            </div>
            <div class="text-[0.5rem]">
              {{ city.weather.description }}
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-start">
            <span class="text-2xl font-medium">
              {{ Math.round(city.temp) }}
            </span>
            <span class="text-2xl">&#176;</span>
          </div>
          <div class="flex items-center gap-1">
            <div class="flex items-start">
              <span class="text-[0.7rem]">
                {{ Math.round(city.tempMax) }}
              </span>
              <span class="text-[0.7rem]">&#176;</span>
            </div>
            <div class="flex items-start">
              <span class="text-[0.7rem]">
                {{ Math.round(city.tempMin) }}
              </span>
              <span class="text-[0.7rem]">&#176;</span>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import { useCitiesStore } from '@/stores/cities';
import { storeToRefs } from 'pinia';

const store = useCitiesStore();
const { cities } = storeToRefs(store);

const citiesFiltered = computed(() => {
  return cities.value.slice(1);
});

const weatherCitiesSlider = ref(null);

const setWeatherCitiesSlider = (swiper) => {
  weatherCitiesSlider.value = swiper;
};

const handleClickOnSlide = (city) => {
  const idx = cities.value.findIndex(item => item === city)

  store.$patch((state) => {
    state.cities.splice(idx, 1, state.cities[0]);
    state.cities[0] = city;
  });
}

</script>