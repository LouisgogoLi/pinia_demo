<template>
  <h2>{{ goldenGoldSummaryTransDetails.summary }}</h2>
  <button @click="goldenGoldSummaryTransDetails.addSummary()">增加數字</button>
  <button @click="goldenGoldSummaryTransDetails.minusSummary()">減少數字</button>
</template>

<script setup>
import { useGoldenGoldSummaryTransDetailsStore } from '@/stores/golden-goldSummaryTransDetails';
const goldenGoldSummaryTransDetails = useGoldenGoldSummaryTransDetailsStore();
</script>
<style lang="scss"></style>
