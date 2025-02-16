<script setup lang="ts">
defineProps<{ title: string; value: string; description?: string }>();
</script>

<template>
  <div
    class="bg-white shadow-sm border border-gray-200 rounded-xl p-7 flex flex-col justify-between min-w-[250px] w-full min-h-52"
  >
    <div class="flex justify-between items-center">
      <h3>{{ title }}</h3>
      <slot name="icon" />
    </div>

    <slot name="content" />
  </div>
</template>
