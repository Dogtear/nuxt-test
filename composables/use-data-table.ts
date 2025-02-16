import { ref, computed, watch } from 'vue';

export interface IData {
  id: number;
  company: {
    name: string;
    url: string;
  };
  lisenceUse: number;
  status: string;
  users: string[];
  about: {
    title: string;
    description: string;
  };
}

export function useDataTable(data: IData[]) {
  const searchQuery = ref('');
  const selectedIds = ref<number[]>([]);
  const sortAscending = ref(true);
  const currentPage = ref(1);
  const itemsPerPage = ref(10);
  const showToast = ref(false);

  const sortedData = computed(() => {
    return [...data].sort((a, b) => {
      const nameA = a.company.name.toLowerCase();
      const nameB = b.company.name.toLowerCase();
      return sortAscending.value
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
  });

  // Filter data based on search query
  const filteredData = computed(() => {
    if (!searchQuery.value) return sortedData.value;
    return sortedData.value.filter((item) =>
      item.company.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  // Pagination logic
  const totalPages = computed(() =>
    Math.max(1, Math.ceil(filteredData.value.length / itemsPerPage.value))
  );

  const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    return filteredData.value.slice(start, start + itemsPerPage.value);
  });

  // Toggle sorting order
  const toggleSort = () => {
    sortAscending.value = !sortAscending.value;
  };

  // Toggle row selection
  const toggleSelection = (id: number) => {
    const index = selectedIds.value.indexOf(id);
    if (index > -1) {
      selectedIds.value.splice(index, 1);
    } else {
      selectedIds.value.push(id);
    }
  };

  // Check if all rows are selected
  const isAllSelected = computed(
    () =>
      selectedIds.value.length === filteredData.value.length &&
      paginatedData.value.length > 0
  );

  const isIndeterminate = computed(
    () => selectedIds.value.length > 0 && !isAllSelected.value
  );

  // Toggle select all
  const toggleSelectAll = () => {
    if (isAllSelected.value) {
      selectedIds.value = [];
    } else {
      selectedIds.value = filteredData.value.map((item) => item.id);
    }
  };

  // Pagination handlers
  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
    }
  };

  const nextPage = () => changePage(currentPage.value + 1);
  const prevPage = () => changePage(currentPage.value - 1);

  // Auto-reset page when filter changes
  watch(filteredData, () => {
    if (currentPage.value > totalPages.value) {
      currentPage.value = totalPages.value;
    }
  });

  watch(
    selectedIds,
    (values) => {
      showToast.value = values.length > 0;
    },
    { deep: true }
  );

  return {
    searchQuery,
    selectedIds,
    sortAscending,
    paginatedData,
    isIndeterminate,
    totalPages,
    filteredData,
    currentPage,
    itemsPerPage,
    toggleSort,
    toggleSelection,
    isAllSelected,
    toggleSelectAll,
    nextPage,
    prevPage,
    changePage,
    showToast,
  };
}
