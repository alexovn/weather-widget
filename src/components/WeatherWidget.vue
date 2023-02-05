<template>
  <div
    class="relative p-4 w-96 flex flex-col bg-slate-50 shadow-md rounded-3xl bg-clip-padding backdrop-filter bg-opacity-60 backdrop-blur-xl overflow-hidden">
    <transition name="translate" mode="out-in">
      <keep-alive>
        <component :is="componentName" @change-component="changeViews"></component>
      </keep-alive>
    </transition>
  </div>
</template>

<script setup>
import WeatherView from '@/components/WeatherView.vue';
import { shallowRef } from 'vue';

const componentName = shallowRef(WeatherView);

const changeViews = (component) => {
  componentName.value = component;
}

</script>