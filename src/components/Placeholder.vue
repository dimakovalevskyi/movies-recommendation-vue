<script setup lang="ts">
  defineProps<{
    text: string,
  }>();
</script>

<template>
  <div class="placeholder">{{text}}</div>
</template>

<style scoped>
  .placeholder {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 768px) {
      height: 150px;
    }
  }
</style>
