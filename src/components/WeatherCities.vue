<template>
  <div class="p-4 w-full h-full bg-slate-300 rounded-2xl overflow-hidden">
    <swiper :slides-per-view="3" :space-between="10" style="overflow: visible;">
      <swiper-slide
        class="p-2 w-[6rem] h-[6rem] shrink-0 bg-slate-200 rounded-2xl hover:bg-slate-400 transition-colors cursor-pointer"
        v-for="city in cities" :key="city.id">
        <div class="mb-1 flex items-start justify-between">
          <div class="w-[2rem] h-[2rem]">
            <img :src="`http://openweathermap.org/img/wn/${city.weather.icon}@2x.png`" alt="" />
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
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import { useCitiesStore } from '@/stores/cities';
import { storeToRefs } from 'pinia';

const store = useCitiesStore();
const { cities } = storeToRefs(store);

</script>