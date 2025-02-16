<script setup lang="ts">
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-vue-next';

const props = defineProps<{
  totalPages: number;
  currentPage: number;
  prevPage: () => void;
  nextPage: () => void;
  changePage: (page: number) => void;
}>();

const pages = computed(() => {
  const { totalPages, currentPage } = props;
  const maxVisible = 6; // Fixed array length

  if (totalPages <= maxVisible) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const range: (number | '...')[] = [];
  range.push(1); // Always include first page

  let middleStart = Math.max(2, currentPage - 1);
  let middleEnd = Math.min(totalPages - 1, currentPage + 1);

  if (currentPage <= 3) {
    middleStart = 2;
    middleEnd = 4;
  } else if (currentPage >= totalPages - 2) {
    middleStart = totalPages - 3;
    middleEnd = totalPages - 1;
  }

  // Ensure leading "..." if there's a gap
  if (middleStart > 2) {
    range.push('...');
  }

  // Add middle pages
  for (let i = middleStart; i <= middleEnd; i++) {
    range.push(i);
  }

  // Ensure trailing "..." if there's a gap
  if (middleEnd < totalPages - 1) {
    range.push('...');
  }

  range.push(totalPages); // Always include last page

  return range;
});
</script>

<template>
  <ul
    role="menubar"
    aria-label="Pagination"
    class="pagination flex items-center border border-gray-300 rounded-lg overflow-hidden"
  >
    <!-- First Page ("<") -->
    <li
      role="presentation"
      :class="[
        'px-5 py-3 cursor-pointer flex items-center',
        { 'opacity-50 pointer-events-none': currentPage === 1 },
      ]"
      @click="currentPage !== 1 && prevPage()"
    >
      <ArrowLeftIcon :size="18" />
    </li>

    <!-- Page Numbers -->
    <li
      v-for="(page, index) in pages"
      :key="index"
      role="presentation"
      :class="[
        'px-5 py-3 hidden md:block cursor-pointer text-center border-r border-gray-300',
        {
          'font-bold bg-gray-200': page === currentPage,
          'pointer-events-none': page === '...',
        },
        { 'border-l': index === 0 },
      ]"
      @click="typeof page === 'number' ? changePage(page) : null"
    >
      {{ page }}
    </li>

    <!-- Last Page (">") -->
    <li
      role="presentation"
      :class="[
        'px-5 py-3 cursor-pointer flex items-center',
        { 'opacity-50 pointer-events-none': currentPage === totalPages },
      ]"
      @click="currentPage !== totalPages && nextPage()"
    >
      <ArrowRightIcon :size="18" />
    </li>
  </ul>
</template>
