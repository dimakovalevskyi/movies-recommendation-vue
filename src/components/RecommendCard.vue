<script setup lang="ts">
import RecommendForm from '@/components/RecommendForm.vue';
import MovieCard from '@/components/MovieCard.vue';
import Loader from '@/components/Loader.vue';
import Placeholder from '@/components/Placeholder.vue';

import { Ref, ref } from 'vue';
import type { Movie } from '@/Movie';
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
