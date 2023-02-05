<template>
  <div
    class="relative p-4 w-96 flex flex-col bg-slate-50 shadow-md rounded-3xl bg-clip-padding backdrop-filter bg-opacity-60 backdrop-blur-xl overflow-hidden">
    <transition name="translate" mode="out-in">
      <component :is="componentName" @change-component="changeViews"></component>
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

<style scoped>
.translate-enter-active,
.translate-leave-active {
  transition: all 0.5s ease;
}

.translate-enter-from,
.translate-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>