<script setup lang="ts">
import { useDataTable } from '~/composables/use-data-table';
import type { IData } from '~/composables/use-data-table';
import {
  Badge,
  ProgressBar,
  AvatarName,
  Pagination,
  Toast,
} from '~/components/ui';
import { ArrowDown, ArrowUp, Search } from 'lucide-vue-next';

const props = defineProps<{ datas: IData[] }>();

const {
  searchQuery,
  selectedIds,
  sortAscending,
  paginatedData,
  totalPages,
  currentPage,
  toggleSort,
  toggleSelection,
  isAllSelected,
  isIndeterminate,
  toggleSelectAll,
  changePage,
  nextPage,
  prevPage,
  showToast,
} = useDataTable(props.datas);
</script>

<template>
  <div class="">
    <div class="mb-4 flex justify-end items-center">
      <!-- Search Inputs  -->
      <div class="relative w-full md:w-1/2 lg:w-1/3">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search"
          class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-gray-500 focus:outline-none"
        />

        <Search
          class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
        />
      </div>
    </div>

    <!-- Table Container  -->
    <div
      class="bg-white shadow-sm border rounded-lg border-gray-200 max-w-full overflow-auto"
    >
      <div class="overflow-x-auto">
        <table class="table-auto w-full">
          <thead>
            <tr class="border-b border-gray-200">
              <th class="py-4 px-6 text-left">
                <input
                  type="checkbox"
                  :checked="isAllSelected"
                  :indeterminate="isIndeterminate"
                  class="rounded border-gray-300 p-10 checked:bg-none checked:bg-white focus:ring-blue-500"
                  @change="toggleSelectAll"
                />
              </th>
              <th
                class="flex gap-2 py-4 px-6 text-left text-sm font-medium text-gray-500 cursor-pointer"
                @click="toggleSort"
              >
                Company
                <div>
                  <ArrowUp v-if="sortAscending" :size="22" />
                  <ArrowDown v-if="!sortAscending" :size="22" />
                </div>
              </th>
              <th class="py-4 px-6 text-left text-sm font-medium text-gray-500">
                License use
              </th>
              <th class="py-4 px-6 text-left text-sm font-medium text-gray-500">
                Status
              </th>
              <th class="py-4 px-6 text-left text-sm font-medium text-gray-500">
                Users
              </th>
              <th class="py-4 px-6 text-left text-sm font-medium text-gray-500">
                About
              </th>
              <th class="py-4 px-6" />
            </tr>
          </thead>
          <tbody v-if="!paginatedData.length">
            <tr class="border-b border-gray-200">
              <td class="py-4 px-6 text-center" colspan="7">
                <h4 class="text-gray-500">No data</h4>
              </td>
            </tr>
          </tbody>

          <tbody v-else>
            <tr
              v-for="data in paginatedData"
              :key="data.id"
              class="border-b border-gray-200 odd:bg-gray-50"
            >
              <td class="py-4 px-6">
                <input
                  type="checkbox"
                  class="rounded border-gray-300"
                  :checked="selectedIds.includes(data.id)"
                  @change="toggleSelection(data.id)"
                />
              </td>
              <td class="py-4 px-6 flex justify-between items-center">
                <div class="flex items-center gap-3">
                  <AvatarName
                    :name="data.company.name"
                    classes="rounded-full text-lg bg-gray-200 w-10 h-10 flex items-center border-none flex-shrink-0"
                  />
                  <div>
                    <div class="font-medium text-gray-900">
                      {{ data.company.name }}
                    </div>
                    <div class="text-sm text-gray-500">
                      {{ data.company.url }}
                    </div>
                  </div>
                </div>
              </td>
              <td class="py-4 px-6">
                <ProgressBar :data="data.lisenceUse" />
              </td>
              <td class="py-4 px-6">
                <Badge
                  :classes="
                    data.status.toLowerCase() === 'customer'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-700'
                  "
                  :name="data.status"
                />
              </td>
              <td class="py-4 px-6">
                <div class="flex -space-x-2">
                  <AvatarName
                    v-for="(user, index) in data.users.slice(0, 5)"
                    :key="index"
                    :name="user"
                  />
                  <span
                    v-if="data.users.length > 5"
                    class="w-10 h-10 font-bold rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-sm text-gray-500"
                  >
                    +{{ data.users.length - 5 }}
                  </span>
                </div>
              </td>
              <td class="py-4 px-6">
                <div class="font-medium text-gray-900">
                  {{ data.about.title }}
                </div>
                <div class="text-sm text-gray-500">
                  {{ data.about.description }}
                </div>
              </td>
              <td class="py-4 px-6">
                <div class="flex gap-2">
                  <button class="p-2 text-gray-400 hover:text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                  <button class="p-2 text-gray-400 hover:text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Paginations  -->
      <div class="flex justify-between items-center px-6 py-4">
        <div>Page {{ currentPage }} of {{ totalPages }}</div>
        <Pagination
          :current-page="currentPage"
          :total-pages="totalPages"
          :change-page="changePage"
          :next-page="nextPage"
          :prev-page="prevPage"
        />
      </div>
    </div>

    <!-- Toast Notification -->
    <Toast
      :show="showToast"
      :message="
        selectedIds.length.toString() +
        ` ${selectedIds.length > 1 ? 'rows are' : 'row is'} selected.`
      "
    />
  </div>
</template>
