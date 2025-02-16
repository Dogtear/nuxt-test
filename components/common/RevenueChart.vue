<script setup lang="ts">
import { computed } from 'vue';

// Define Props
interface Props {
  title?: string;
  dataPoints: number[];
  increase: number;
}

// Default Props
const props = withDefaults(defineProps<Props>(), {
  title: 'Revenue in Percentage',
});

// Catmull-Rom Spline for Smooth Curves
const generateSmoothPath = (data: number[]): string => {
  if (data.length === 0) return '';

  const width = 120; // Fixed width for consistency inside the card
  const height = 50; // Adjusted height to fit well

  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);

  const points = data.map((val, i) => ({
    x: (i / (data.length - 1)) * width,
    y: height - ((val - minValue) / (maxValue - minValue)) * height,
  }));

  if (points.length < 2) return ''; // Prevent errors if not enough points

  let path = `M${points[0].x},${points[0].y}`;

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] || points[0];
    const p1 = points[i];
    const p2 = points[i + 1] || points[points.length - 1];
    const p3 = points[i + 2] || p2;

    const controlX1 = p1.x + (p2.x - p0.x) / 6;
    const controlY1 = p1.y + (p2.y - p0.y) / 6;
    const controlX2 = p2.x - (p3.x - p1.x) / 6;
    const controlY2 = p2.y - (p3.y - p1.y) / 6;

    path += ` C${controlX1},${controlY1} ${controlX2},${controlY2} ${p2.x},${p2.y}`;
  }

  return path;
};

const linePath = computed(() => generateSmoothPath(props.dataPoints));
</script>

<template>
  <div class="flex justify-between items-center w-full">
    <!-- Left Section -->
    <div class="flex flex-col space-y-1">
      <h3 class="text-gray-800 font-semibold text-sm">{{ title }}</h3>
      <div class="flex items-center text-gray-600 text-sm">
        <span class="text-green-500 font-bold">▲ {{ increase }}%</span>
        <span class="ml-1">vs last month</span>
      </div>
    </div>

    <!-- Right Section (Chart) -->
    <svg viewBox="0 0 120 50" class="w-[120px] h-[50px]">
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="rgba(34, 197, 94, 0.3)" />
          <stop offset="100%" stop-color="rgba(34, 197, 94, 0)" />
        </linearGradient>
      </defs>

      <!-- Gradient Background -->
      <path :d="linePath + ' L120,50 L0,50 Z'" fill="url(#gradient)" />

      <!-- Smooth Line Chart -->
      <path
        :d="linePath"
        stroke="#22C55E"
        stroke-width="2.5"
        fill="none"
        stroke-linecap="round"
      />
    </svg>
  </div>
</template>
