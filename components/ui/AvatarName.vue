<script setup lang="ts">
import { cn } from '~/utils/cn';

const props = defineProps<{
  name: string;
  classes?: string;
}>();

const initialName = props.name.charAt(0).toUpperCase();
</script>

<template>
  <div
    :class="
      cn(
        'flex items-center justify-center font-bold text-sm w-10 h-10 rounded-full border-2 bg-blue-300 text-gray-900 border-white',
        classes
      )
    "
  >
    {{ initialName }}
  </div>
</template>
