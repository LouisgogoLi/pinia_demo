import { ref } from "vue";
import { defineStore, acceptHMRUpdate } from "pinia";

export const useCommonStore = defineStore("common", () => {
  const isOpen = ref(false);
  function handSetOpen() {
    isOpen.value = !isOpen.value;
  }

  return { isOpen, handSetOpen };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCommonStore, import.meta.hot));
}
