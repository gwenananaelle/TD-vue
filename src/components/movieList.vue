<template>
    <main>
      <loader
      v-show="this.loading"/>
      <modal
      v-if="movieState.selectedMovie"
      :movie="movieState.selectedMovie"
      />
      <movie
      v-for="(movie, index) in this.movies"
      :key="index"
      :movie="movie"
      />
    </main>
</template>

<script>
import movie from './movie.vue'
import modal from './modal.vue'
import loader from './loader.vue'
import { movieState } from '../states/movie-state'

export default {
  name: 'movieList',
  components: {
    movie,
    modal,
    loader
  },
  async created () {
    try {
      this.loading = true
      const response = await fetch('http://localhost:5000/movies')
      this.movies = await response.json()
    } catch (error) {
      console.log(error)
    } finally {
      this.loading = false
    }
  },
  data () {
    return ({
      movieState,
      movies: null,
      loading: false
    })
  }
}
</script>
<style lang="less">
main {
      position: relative;
      max-width: 100vw;
      display: flex;
      flex-wrap: wrap;
      flex-grow: 1;
      justify-content: flex-start;
      overflow-y: scroll;
      padding: 5% 5%;
  }
</style>
