<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  message: string;
  show: boolean;
}>();

const visible = ref(props.show);

// Keep `visible` in sync with the parent prop.
watch(
  () => props.show,
  (newVal) => {
    visible.value = newVal;
  }
);
</script>

<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed bottom-4 right-4 lg:right-4 w-1/2 lg:w-1/5 px-4 py-4 rounded-lg outline-2 bg-white outline-gray-200 shadow-sm flex items-center gap-2"
    >
      <p class="text-sm">{{ message }}</p>
      <!-- <button class="text-white font-bold" @click="hideToast">×</button> -->
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px); /* start 20px lower */
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0); /* end at natural position */
}
</style>
