<template>
  <div>
    <div class="mb-6 flex items-start justify-between">
      <div class="w-[3rem] h-[3rem]">
        <div class="w-[2rem] h-[2rem] bg-slate-400 rounded-full"></div>
      </div>
      <div>
        <div class="mb-2">
          <div class="w-[10rem] h-2 bg-slate-400 rounded"></div>
        </div>
        <div>
          <div class="ml-auto w-[5rem] h-2 bg-slate-400 rounded"></div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-[1rem]">
      <div class="flex items-start justify-between gap-[4rem]">
        <div>
          <div class="mb-2 w-[6rem] h-[6rem] bg-slate-400 rounded-2xl"></div>

          <div class="flex gap-2">
            <div>
              <div class="w-8 h-8 bg-slate-400 rounded-md"></div>
            </div>
            <div>
              <div class="w-8 h-8 bg-slate-400 rounded-md"></div>
            </div>
          </div>
        </div>

        <div class="w-[14.59rem] h-[8rem] bg-slate-50 rounded-2xl"></div>
      </div>
      <SkeletonWeatherForecast />
    </div>
  </div>
</template>

<script setup>
import SkeletonWeatherForecast from '@/components/Skeleton/SkeletonWeatherForecast.vue';

</script>