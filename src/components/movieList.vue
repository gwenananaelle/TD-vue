<template>
    <main id="main" :class="{animated:movieState.selectedMovie}">
        <router-link class="button" to="/Admin"> + </router-link>
        <div id="movieGrid">
          <loader
          v-show="this.loading"/>
          <movie
          v-for="(movie, index) in this.movieState.movies"
          :key="index"
          :movie="movie"
          />
        </div>
      <transition name="appear">
        <modal
        v-if="movieState.selectedMovie"
        :movie="movieState.selectedMovie"
        />
      </transition>
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
  async mounted () {
    try {
      this.loading = true
      const response = await fetch('http://localhost:5000/movies')
      this.movieState.movies = await response.json()
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
  display: flex;
  flex-direction: row;
  width: 200vw;
  height: 100vh;
  transform: translate3d(0,0,0);
  transition:transform 2s linear;
  .button {
    color: white;
    font-size: xx-large;
    text-decoration: none;
    :hover, :visited {
      color: white;
    }
  }
  &.animated {
    transform: translate3d(-100vw,0,0);
  }
  div#movieGrid {
    overflow-y: scroll;
    position: relative;
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
}
</style>
