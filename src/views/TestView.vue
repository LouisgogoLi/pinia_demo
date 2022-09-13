<template>
  <div style="margin-bottom: 50px">
    <h2>pinia computed: {{ common.doubleCount }}</h2>
    <button @click="common.count++">count++</button>
    <button @click="common.count--">count--</button>
  </div>
  <h1>{{ auth.token }}</h1>
  <MenuBtn />
  <div class="content" v-if="common.isOpen">
    <img id="img" alt="Vue logo" src="@/assets/images/logo.png" />
  </div>
</template>

<script setup>
import MenuBtn from '@/components/MenuBtn.vue';

import { watch } from 'vue';

import { useCommonStore } from '@/stores/common';
import { useAuthStore } from '@/stores/auth';
const common = useCommonStore();
const auth = useAuthStore();

watch(
  () => common.isOpen,
  () => {
    if (common.isOpen) {
      auth.token = '請點button隱藏';
    } else {
      auth.token = '請點button顯示';
    }
  }
);
</script>

<style lang=""></style>
