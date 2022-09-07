import { ref, computed } from "vue";
import { defineStore, acceptHMRUpdate } from "pinia";

export const useCommonStore = defineStore("common", () => {
  const isOpen = ref(false);
  function handSetOpen() {
    isOpen.value = !isOpen.value;
  }

  const count = ref(1);
  const doubleCount = computed(() => count.value * 2);

  return { isOpen, handSetOpen, count, doubleCount };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCommonStore, import.meta.hot));
}
