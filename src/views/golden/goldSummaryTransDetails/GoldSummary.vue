<template>
  <h1>測試</h1>
  <h2>{{ goldenGoldSummaryTransDetails.summary }}</h2>
</template>

<script setup>
import { useGoldenGoldSummaryTransDetailsStore } from '@/stores/golden-goldSummaryTransDetails';
const goldenGoldSummaryTransDetails = useGoldenGoldSummaryTransDetailsStore();
</script>

<style lang="scss"></style>
