<script setup lang="ts">
import { ref } from 'vue';
import { Filters } from '@/Filters.ts';
import type { Ref } from 'vue';
import { GENRES_MAP } from '@/GenresMap';

const emit = defineEmits<{
  submit: [filters: Filters],
}>()

const filters: Ref<Filters> = ref({
  genre: null,
  year: null,
  score: null,
});

const genreOptions: Ref<Record<string, string>[]> = ref(Object.entries(GENRES_MAP).map(([key, value]) => {
  return {
    label: value,
    value: key,
  };
}));
const yearOptions: Ref<number[]> = ref([1984, 2001, 2004, 2005, 2007, 2011, 2012, 2014, 2015, 2017, 2020, 2021, 2023]);
const scoreOptions: Ref<number[]> = ref([...Array(10).keys()]); // array from 0 to 9
scoreOptions.value.splice(0, 1); // array from 1 to 9

function submit() {
  emit('submit', filters.value);
}
</script>

<template>
  <form class="recommend-card-item" @submit.prevent="submit">
    <div class="form-group">
      <label for="genre">Genre</label>
      <select class="form-control" name="genre" id="genre" v-model="filters.genre">
        <option v-bind:value="null">All</option>
        <option v-for="option in genreOptions" v-bind:value="option.value" :key="option.value">{{ option.label }}</option>
      </select>
    </div>

    <div class="form-group">
      <label for="score">IMDB Score</label>
      <select class="form-control" name="score" id="score" v-model="filters.score">
        <option v-bind:value="null">All</option>
        <option v-for="option in scoreOptions" v-bind:value="option" :key="option">{{ option }}+</option>
      </select>
    </div>

    <div class="form-group">
      <label for="year">Year</label>
      <select class="form-control" name="year" id="year" v-model="filters.year">
        <option v-bind:value="null">All</option>
        <option v-for="option in yearOptions" v-bind:value="option" :key="option">{{ option }}</option>
      </select>
    </div>

    <div class="form-group">
      <button type="submit" class="btn">Find Movie</button>
    </div>
  </form>
</template>

<style scoped>

</style>
