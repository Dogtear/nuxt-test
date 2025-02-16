<script setup lang="ts">
import SideBarNav from '~/components/common/SideBarNav.vue';
</script>

<template>
  <div class="flex min-h-screen w-full bg-gray-900">
    <SideBarNav />
    <main class="ml-0 lg:ml-64 flex-1 mt-5 bg-white rounded-tl-4xl">
      <slot />
    </main>
  </div>
</template>
