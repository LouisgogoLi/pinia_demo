import { ref } from 'vue';
import { defineStore, acceptHMRUpdate } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
  const token = ref('請點button顯示');

  return { token };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
