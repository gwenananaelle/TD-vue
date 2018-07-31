<template>
    <main>
      <movie
      v-for="(movie, index) in movies"
      :key="index"
      :movie-title="movie.title"
      :poster="getImgUrl(movie)"
      />
    </main>
</template>

<script>
import movie from './movie.vue'

export default {
  name: 'movieList',
  components: {
    movie
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
      movies: null
    })
  },
  methods: {
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
