<template>
  <div>
    <loginModal v-show="showloginModal" />
    <NavBar />
    <NuxtPage />
  </div>
</template>

<script setup>
const showloginModal = ref(false)
</script>