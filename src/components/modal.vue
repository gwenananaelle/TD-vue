<template >
    <div id="modal">
        <div>
            <h2>{{movie.title}}</h2>
            <img alt="" :srcset="getImgUrl()" sizes="(max-width:480px) 215px, 330px">
            <p>{{movie.summary}}</p>
            <div @click="selectMovie()">close</div>
        </div>
    </div>
</template>

<script>
import { movieState } from '../states/movie-state'
export default {
  name: 'modal',
  props: {
    movie: Object
  },
  created () {
    document.addEventListener('keydown', this.escapeKeyListener)
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.escapeKeyListener)
  },
  data () {
    return {
      movieState
    }
  },
  methods: {
    selectMovie () {
      this.movieState.selectedMovie = null
    },
    getImgUrl () {
      return `${this.movie.poster}-330.jpg 330w, ${this.movie.poster}-215.jpg 215w`
    },
    escapeKeyListener (event) {
      if (event.keyCode === 27) {
        this.selectMovie()
      }
    }
  }
}
</script>

<style lang="less" scoped>
div#modal {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    z-index: 1; /* Sit on top */
    width: 100%;
    height: 100vh;
    overflow: scroll;
    div {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        background-color: #17181b;
        @media only screen and (min-width: 800px) {
            max-width: 800px;
            box-shadow:0px 0px 15px #26282e;
        }
        h2 {
            width: 100%;
            padding: 2%;
            text-align: center;
        }
        img {
            width: 215px;
            margin: auto;
            display:block;
            border-radius: 5%;
            box-shadow:0px 0px 15px #26282e;
            margin-bottom: 2%;
            @media only screen and (min-width: 480px) {
                width: 330px;
            }
        }
        p {
            width: calc(90% - 330px);
            margin: auto;
            @media only screen and (min-width: 800px) {
                width: calc(90% - 330px);
            }
        }
        div {
            display: block;
            width: 100%;
            border: none;
            background-color: #2b71d8;
            color: #ffffff;
            text-align: center;
            line-height: 40px;
            min-height: 40px;
        }
    }
}
</style>
