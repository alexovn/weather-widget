<template>
  <div class="relative w-96">
    <WeatherView @show="showComponent" />

    <VueModal :show="isShowing" @show="showComponent">
      <WeatherSettings @show="showComponent" />
    </VueModal>

    <VueBackdrop :show="isShowing" @show="showComponent" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import WeatherView from '@/components/WeatherView.vue';
import VueModal from '@/components/Vue/VueModal.vue';
import WeatherSettings from '@/components/WeatherSettings.vue';
import VueBackdrop from '@/components/Vue/VueBackdrop.vue';

const isShowing = ref(false);

const showComponent = () => {
  isShowing.value = !isShowing.value
};

</script>