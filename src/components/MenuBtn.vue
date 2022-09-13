<template>
  <button @click="handClickMenu()">測試pinia</button>
</template>

<script setup>
import { useCommonStore } from '@/stores/common';
const common = useCommonStore();

const handClickMenu = () => {
  common.handSetOpen();
};
</script>

<style lang="scss" scoped></style>
