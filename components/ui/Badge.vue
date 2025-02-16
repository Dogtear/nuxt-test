<script setup lang="ts">
import { cn } from '~/utils/cn';

const props = defineProps<{
  classes?: string; // Make it optional if needed
  name: string;
}>();
</script>

<template>
  <span
    :class="cn('px-3 py-1 rounded-full font-semibold text-sm', props.classes)"
  >
    {{ props.name }}
  </span>
</template>
