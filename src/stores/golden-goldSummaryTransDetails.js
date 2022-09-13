import { ref } from 'vue';
import { defineStore, acceptHMRUpdate } from 'pinia';

export const useGoldenGoldSummaryTransDetailsStore = defineStore('golden/goldSummaryTransDetails', () => {
  const summary = ref(10);
  function addSummary() {
    summary.value++;
  }
  function minusSummary() {
    summary.value--;
  }

  return { summary, addSummary, minusSummary };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGoldenGoldSummaryTransDetailsStore, import.meta.hot));
}
