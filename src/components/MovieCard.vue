<script setup lang="ts">
  import type { Movie } from '@/interfaces/Movie';
  import { GENRES_MAP } from '@/services/GenresMap';

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
  .movie-card {
    display: flex;
    gap: var(--gap-small);
    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
  .movie-cover {
    flex: 0 0 50%;
  }
  .movie-cover-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 15px;
    box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.31);
    @media only screen and (max-width: 768px) {
      width: 175px;
      text-align: center;
      margin: 0 auto;
    }
  }
  .movie-content {
    display: flex;
    flex-direction: column;
  }
  .movie-description {
    margin-bottom: var(--controls-margin);
  }
  .movie-badges {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--controls-margin);
  }
  .movie-badge {
    padding: 3px 10px;
    border-radius: 20px;
    background: rgba(255, 255, 255, .2);
  }
  .movie-trailer-btn {
    margin-top: auto;
  }
</style>
