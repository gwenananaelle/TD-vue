<template>
    <div class="movie" @click="selectMovie()">
        <img alt="" :srcset="getImgUrl()" sizes="(max-width:480px) 215px, 330px">
        <h4>{{movie.title}}</h4>
    </div>
</template>

<script>
import { movieState } from '../states/movie-state'
export default {
  name: 'movie',
  props: {
    movie: Object
  },
  data () {
    return {
      movieState
    }
  },
  methods: {
    async selectMovie () {
      try {
        const response = await fetch(`http://localhost:5000/movies${this.movie.id}`)
        const list = await response.json()
        this.movieState.selectedMovie = list
      } catch (error) {
        console.log(error)
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
