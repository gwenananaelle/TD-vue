<template>
    <main>
      <modal
      v-if="movieState.selectedMovie"
      :movie="movieState.selectedMovie"
      />
      <movie
      v-for="(movie, index) in this.movieState.movies"
      :key="index"
      :movie="movie"
      />
    </main>
</template>

<script>
import movie from './movie.vue'
import modal from './modal.vue'
import { movieState } from '../states/movie-state'

export default {
  name: 'movieList',
  components: {
    movie,
    modal
  },
  async created () {
    try {
      const response = await fetch('/list.json')
      this.movieState.movies = await response.json()
    } catch (error) {
      console.log(error)
    }
  },
  data () {
    return ({
      movieState
    })
  }
}
</script>
<style lang="less">
main {
      max-width: 100vw;
      display: flex;
      flex-wrap: wrap;
      flex-grow: 1;
      justify-content: flex-start;
      overflow-y: scroll;
      padding: 5% 5%;
  }
</style>
