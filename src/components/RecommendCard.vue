<script setup lang="ts">
import RecommendForm from '@/components/RecommendForm.vue';
import MovieCard from '@/components/MovieCard.vue';
import Loader from '@/components/Loader.vue';
import Placeholder from '@/components/Placeholder.vue';

import { Ref, ref } from 'vue';
import type { Movie } from '@/interfaces/Movie';
import { RecommendationsService } from '@/services/RecommendationsService';

const recommendation: Ref<Movie|null> = ref(null);
const pristine: Ref<boolean> = ref(true);
const loading: Ref<boolean> = ref(false);

const service = new RecommendationsService('db.json');

function onSubmit(filters) {
  findMovie(filters);
}
function findMovie(filters) {
  recommendation.value = null;
  pristine.value = false;
  loading.value = true;

  service.getRecommendationByFilters(filters)
      .then(movie => {
        recommendation.value = movie;
        loading.value = false;
      });
}

</script>

<template>
  <div class="recommend-card">
    <RecommendForm @submit="onSubmit"/>
    <MovieCard v-if="recommendation" :movie="recommendation"/>
    <div v-if="!recommendation" class="recommend-card-item">
      <Loader v-if="loading"/>
      <Placeholder v-if="!loading" :text="pristine ? 'Click to start the journey' : 'Nothing found by your filters :('"/>
    </div>
  </div>
</template>

<style>
  .recommend-card {
    padding: var(--gap-big);
    display: flex;
    gap: var(--gap-big);
    justify-content: space-between;
    border-radius: 15px;
    background: rgb(70,70,77);
    background: linear-gradient(45deg, var(--color-background-mute) 0%, var(--color-background) 100%);
    box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.31);
    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
  .recommend-card-item {
    &:first-child {
      flex: 1 1 40%;
    }
    &:last-child {
      flex: 1 1 60%;
    }
  }
</style>
