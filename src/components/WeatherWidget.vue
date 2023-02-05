<template>
  <div
    class="relative p-4 w-96 flex flex-col bg-slate-50 shadow-md rounded-3xl bg-clip-padding backdrop-filter bg-opacity-60 backdrop-blur-xl">
    <div>
      <div>
        <div>
          <div class="mb-6 flex items-start justify-between">
            <div class="w-[3rem] h-[3rem]">
              <component class="w-full h-full" :is="currentConditionIcon"></component>
            </div>
            <div class="text-right">
              <div class="text-xl font-medium">
                New-York
              </div>
              <div>
                Cloudly
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-[1rem]">
            <div class="flex items-start justify-between gap-[4rem]">
              <div>
                <div class="flex items-start">
                  <span class="text-6xl font-medium">
                    20
                  </span>
                  <span class="text-3xl">&#176;</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="flex items-start">
                    <span class="text-xl">
                      18
                    </span>
                    <span class="text-xl">&#176;</span>
                  </div>
                  <div class="flex items-start">
                    <span class="text-xl">
                      16
                    </span>
                    <span class="text-xl">&#176;</span>
                  </div>
                </div>
              </div>
              <WeatherInfo />
            </div>
            <WeatherForecast />
          </div>
        </div>
      </div>
      <WeatherCities class="mt-4" />
      <div class="mt-3 min-h-[1.4rem]">
        <WeatherCredits />
        <button class="absolute bottom-4 right-4 ml-auto w-6 h-6 flex items-center justify-center hover:rotate-12 transition-transform">
          <Cog8ToothIcon class="w-full h-full text-slate-800" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import WeatherInfo from '@/components/WeatherInfo.vue';
import WeatherForecast from '@/components/WeatherForecast.vue';
import WeatherCities from '@/components/WeatherCities.vue';
import WeatherCredits from '@/components/WeatherCredits.vue';

import IconCloudy from '@/components/Icon/IconCloudy.vue';
import { Cog8ToothIcon } from '@heroicons/vue/24/outline';

const currentConditionIcon = IconCloudy;

</script>
