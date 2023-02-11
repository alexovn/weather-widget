<template>
  <div>
    <div class="mb-6 flex items-start justify-between">
      <div class="w-[3rem] h-[3rem]">
        <img :src="`https://openweathermap.org/img/wn/${cities[0].weather.icon}@2x.png`" :alt="cities[0].weather.description" />
      </div>
      <div class="text-right">
        <div class="text-xl font-medium">
          {{ cities[0].name }}
        </div>
        <div>
          {{ cities[0].weather.description }}
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-[1rem]">
      <div class="flex items-start justify-between gap-[3rem]">
        <div>
          <div class="flex items-start">
            <span class="text-6xl font-medium">
              {{ Math.round(cities[0].temp) }}
            </span>
            <span class="text-3xl">&#176;</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="flex items-start">
              <span class="text-xl">
                {{ Math.round(cities[0].tempMax) }}
              </span>
              <span class="text-xl">&#176;</span>
            </div>
            <div class="flex items-start">
              <span class="text-xl">
                {{ Math.round(cities[0].tempMin) }}
              </span>
              <span class="text-xl">&#176;</span>
            </div>
          </div>
        </div>
        <WeatherInfo />
      </div>
      <SkeletonWeatherForecast />
    </div>
  </div>
</template>

<script setup>
import WeatherInfo from '@/components/WeatherInfo.vue';
import SkeletonWeatherForecast from '@/components/Skeleton/SkeletonWeatherForecast.vue';

import { useCitiesStore } from '@/stores/cities';
import { storeToRefs } from 'pinia';

const store = useCitiesStore();
const { cities } = storeToRefs(store);

</script>