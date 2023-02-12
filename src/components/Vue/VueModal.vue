<template>
  <transition name="opacity" mode="out-in">
    <div
      v-if="show"
      class="pt-8 pb-4 absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full bg-slate-200 shadow-md rounded-3xl"
    >
      <button
        class="absolute top-2 right-3 w-8 h-8 flex items-center justify-center group"
        @click="$emit('show')"
      >
        <XCircleIcon class="w-6 h-6 group-hover:rotate-12 translate-transform" />
      </button>
      <div class="p-4">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { XCircleIcon } from '@heroicons/vue/24/outline';

defineProps({
  show: {
    type: Boolean,
    default: false
  }
})

</script>