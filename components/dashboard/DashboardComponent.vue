<script setup lang="ts">
import { Card } from '../ui';
import DataTable from '../common/DataTable.vue';
import RevenueChart from '../common/RevenueChart.vue';
import BookMarkIcon from '~/components/common/icons/BookMarkIcon.vue';
import MailIcon from '~/components/common/icons/MailIcon.vue';
import { EllipsisVerticalIcon } from 'lucide-vue-next';
import { generateFakeData } from '~/utils/generate-fake-data';

const { data: dataList } = await useAsyncData('fakeData', () =>
  Promise.resolve(generateFakeData(100))
);

const churnedCount = computed(
  () =>
    dataList.value?.filter((data) => data.status.toLowerCase() === 'churned') ||
    []
);
</script>

<template>
  <div class="flex flex-col gap-10">
    <!-- top desctiption -->
    <div>
      <h2 class="font-bold">Welcome back, Administrator</h2>
      <p class="text-muted">
        Track, manages and forecast your platform information here.
      </p>
    </div>

    <!-- card statistic -->
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
      <Card title="Revenue in  Percentage" value="400 Order">
        <template #icon> <EllipsisVerticalIcon /></template>
        <template #content>
          <RevenueChart :data-points="[10, 35, 30, 30, 45]" :increase="40" />
        </template>
      </Card>

      <Card title="Total Order" value="400 Order">
        <template #icon> <BookMarkIcon /></template>
        <template #content>
          <h1>
            {{ dataList.length || 0 }} Order{{
              dataList.length > 1 && dataList.length !== 0 ? 's' : ''
            }}
          </h1>
        </template>
      </Card>

      <Card title="Pending Customer" value="20 Cutomer">
        <template #icon> <MailIcon /> </template>
        <template #content>
          <h1>
            {{ churnedCount.length || 0 }} Cutomer{{
              churnedCount.length > 1 && churnedCount.length !== 0 ? 's' : ''
            }}
          </h1>
        </template>
      </Card>
    </div>

    <!-- <Table Data /> -->
    <div class="mb-10">
      <DataTable :datas="dataList" />
    </div>
  </div>
</template>
