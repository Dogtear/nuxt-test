<script setup lang="ts">
import { cn } from '~/utils/cn';

defineProps<{ classes?: string }>();
</script>

<template>
  <div :class="cn('@container pt-18 pb-10 px-5 lg:px-10 lg:pt-10', classes)">
    <slot />
  </div>
</template>
