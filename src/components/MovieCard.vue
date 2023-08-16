<script setup lang="ts">
  import type { Movie } from '@/Movie';
  import { GENRES_MAP } from '@/GenresMap';

  const props = defineProps<{
    movie: Movie,
  }>();

  function watchTrailer() {
    const windowFeatures = "left=100,top=100,width=640,height=320,popup";

    window.open(
        props.movie.trailer_link,
        "popupWindow",
        windowFeatures,
    );
  }
</script>

<template>
  <div class="movie-card recommend-card-item">
    <div class="movie-cover">
      <img class="movie-cover-image" v-bind:src="movie.image_path" v-bind:alt="movie.title">
    </div>
    <div class="movie-content">
      <h2 class="movie-title">{{movie.title}}</h2>
      <div class="movie-badges">
        <div class="movie-badge">{{movie.year}}</div>
        <div class="movie-badge">{{movie.rating_score}}</div>
        <div class="movie-badge">{{GENRES_MAP[movie.genre_type]}}</div>
      </div>
      <div class="movie-description">{{movie.description}}</div>
      <button type="button" class="btn movie-trailer-btn" @click="watchTrailer">Watch Trailer</button>
    </div>
  </div>
</template>

<style scoped>

</style>
