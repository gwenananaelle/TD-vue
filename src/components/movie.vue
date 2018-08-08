<template>
    <div class="movie" @click="selectMovie()">
        <loader v-show="this.loading"/>
        <img alt="" :srcset="getImgUrl()" sizes="(max-width:480px) 215px, 330px">
        <h4>{{movie.title}}</h4>
    </div>
</template>

<script>
import { movieState } from '../states/movie-state'
import loader from './loader.vue'
export default {
  name: 'movie',
  props: {
    movie: Object
  },
  components: {
    loader
  },
  data () {
    return {
      movieState,
      loading: false
    }
  },
  methods: {
    async selectMovie () {
      this.loading = true
      try {
        const response = await fetch(`http://localhost:5000/movies${this.movie.id}`)
        const list = await response.json()
        this.movieState.selectedMovie = list
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },
    getImgUrl () {
      return `${this.movie.poster}-330.jpg 330w, ${this.movie.poster}-215.jpg 215w`
    }
  }
}
</script>

<style lang="less">
  div.movie {
    margin: auto;
    position: relative;
    img {
        margin: auto;
        width: 200px;
        display:block;
        border-radius: 5%;
        border: 0px solid transparent;
        box-shadow:0px 0px 15px #26282e;
        transition:border 1s, width 1s;
        @media only screen and (min-width: 480px) {
            img {
                width: 315px;
            }
            &:hover {
                width: 330px;
            }
        }
        &:hover {
            width: 215px;
            border:5px solid #2b71d8;
        }
    }
    h4 {
        width: 215px;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        @media only screen and (min-width: 480px) {
            h4 {
                width: 330px;
            }
        }
    }
  }
</style>
