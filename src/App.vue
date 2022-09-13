<template>
  <nav>
    <RouterLink :to="{ name: 'TestView' }" :class="{ active: routeIndex === 0 }">TestView</RouterLink>
    |
    <RouterLink :to="{ name: 'goldsummary' }" :class="{ active: routeIndex === 1 }">黃金存摺帳戶內容查詢</RouterLink>
  </nav>
  <RouterView />
</template>

<script setup>
import { useRoute, RouterLink, RouterView } from 'vue-router';
import { ref, watchEffect } from 'vue';

let routerList = ['', 'golden'];

const route = useRoute();
const routeIndex = ref(0);
watchEffect(() => {
  const nowMainPath = route.path.split('/')[1];

  routerList.forEach((item, index) => {
    if (item === nowMainPath) {
      routeIndex.value = index;
    }
  });
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.active {
      color: #42b983;
    }
  }
}
</style>
