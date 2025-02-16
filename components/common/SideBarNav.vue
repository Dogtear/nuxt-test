<script setup lang="ts">
import { LogOut, Menu, X } from 'lucide-vue-next';
import { navigationMenu } from '~/constants/navigation-menu';
import { cn } from '~/utils/cn';

const isMobileMenuOpen = ref(false);
const route = useRoute();

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <!-- mobile navbar-->
  <header
    class="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 flex items-center justify-between lg:hidden z-100"
  >
    <h2 class="">Visa Indonesia</h2>
    <button class="bg-gray-800 text-white p-2 rounded-md" @click="toggleMenu">
      <Menu v-if="!isMobileMenuOpen" />
      <X v-if="isMobileMenuOpen" />
    </button>
  </header>
  <aside
    claside
    :class="
      cn(
        'fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white flex flex-col justify-between p-5 z-40 transition-transform',
        'lg:translate-x-0 lg:flex', // Always visible on Desktop
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full' // Slide-in on Mobile
      )
    "
  >
    <div class="flex flex-col gap-5">
      <NuxtLink to="/" class="">
        <h2>Visa indonesia</h2>
      </NuxtLink>

      <!-- menu navigation  -->
      <nav class="flex flex-col gap-2">
        <NuxtLink
          v-for="(item, index) in navigationMenu"
          :key="index"
          :to="item.path"
          :class="
            cn(
              'flex gap-2 items-center p-2 rounded-md transition duration-300',
              route.path === item.path
                ? 'bg-gray-700 text-white font-semibold'
                : 'text-gray-white hover:bg-gray-800'
            )
          "
        >
          <component
            :is="item.icon"
            v-if="item.icon"
            class="w-5 h-5 text-gray-400"
          />
          {{ item.name }}
        </NuxtLink>
      </nav>
    </div>

    <div
      class="border-t flex items-center justify-between border-gray-500 py-3"
    >
      <div class="flex gap-2 items-center">
        <div class="w-8 h-8 bg-gray-200 rounded-full">
          <img
            src="https://avatars.githubusercontent.com/u/4723117?v=4"
            alt="profile"
            class="w-8 h-8 rounded-full"
          />
        </div>
        <div>
          <p class="text-sm">Admin</p>
          <p class="text-xs">admin@admin.com</p>
        </div>
      </div>
      <button>
        <LogOut class="text-gray-500" />
      </button>
    </div>
  </aside>

  <!-- overlay for mobile nav -->
  <div
    v-if="isMobileMenuOpen"
    class="fixed inset-0 bg-black opacity-50 lg:hidden z-30"
    @click="toggleMenu"
  />
</template>

<script setup lang="ts"></script>
