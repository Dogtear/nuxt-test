<script setup lang="ts">
import { cn } from "~/utils/cn";
const props = defineProps<{ progressClass?: string; data: number }>();
</script>

<template>
  <div class="w-24 bg-gray-200 rounded-full h-2">
    <div
      :class="cn('bg-gray-800 h-2 rounded-full', props.progressClass)"
      :style="{ width: `${props.data}%` }"
    />
  </div>
</template>
