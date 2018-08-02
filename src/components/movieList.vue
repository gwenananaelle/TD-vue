<template>
    <main>
      <modal
      v-if="selectedMovie"
      :movie="selectedMovie"
      :getImgUrl="getImgUrl"
      @select-movie="selectMovie"
      />
      <movie
      v-for="(movie, index) in movies"
      :key="index"
      :movie="movie"
      :getImgUrl="getImgUrl"
      @select-movie="selectMovie"
      />
    </main>
</template>

<script>
import movie from './movie.vue'
import modal from './modal.vue'

export default {
  name: 'movieList',
  components: {
    movie,
    modal
  },
  async created () {
    try {
      const response = await fetch('/list.json')
      this.movies = await response.json()
    } catch (error) {
      console.log(error)
    }
  },
  data () {
    return ({
      movies: null,
      selectedMovie: null
    })
  },
  methods: {
    selectMovie (movie) {
      this.selectedMovie = movie
    },
    getImgUrl (movie) {
      return `${movie.poster}-330.jpg 330w, ${movie.poster}-215.jpg 215w`
    }
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
