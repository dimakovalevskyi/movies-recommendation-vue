<script setup lang="ts">
import { ref } from 'vue';
import RecommendCard from '@/components/RecommendCard.vue';

const bannerText = ref('Movie Recommendation App');
</script>

<template>
    <h1>{{ bannerText }}</h1>
    <RecommendCard />
</template>
