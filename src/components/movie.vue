<template>
    <div class="movie">
        <loader v-show="this.loading"/>
        <img alt="" :srcset="getImgUrl()" @click="selectMovie()" sizes="(max-width:480px) 215px, 330px">
        <div id="buttons">
          <div class="icon">
          <router-link :to="getRouterLink()"><iconEdit/></router-link>
          </div>
          <div class="icon" @click="deleteMovie()">
          <iconDelete/>
          </div>
        </div>
        <h4>{{movie.title}}</h4>
    </div>
</template>

<script>
import { movieState } from '../states/movie-state'
import loader from './loader.vue'
import iconDelete from './icons/IconDelete.vue'
import iconEdit from './icons/IconEdit.vue'
export default {
  name: 'movie',
  props: {
    movie: Object
  },
  components: {
    loader,
    iconDelete,
    iconEdit
  },
  data () {
    return {
      movieState,
      loading: false,
      errorMessage: null
    }
  },
  methods: {
    async selectMovie () {
      this.loading = true
      try {
        const response = await fetch(`http://localhost:5000/movies${this.movie._id}`)
        const list = await response.json()
        this.movieState.selectedMovie = list
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },
    async deleteMovie () {
      this.errorMessage = null
      if (confirm('Do you really want to delete this movie ?')) {
        this.loading = true
        try {
          const response = await fetch(`http://localhost:5000/movies${this.movie._id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.movie)
          })
          if (!response.ok) {
            this.errorMessage = await response.json()
            this.loading = false
          } else {
            this.errorMessage = ['erreur innatendue']
            this.loading = false
          }
        } catch (error) {
          console.log(error.message)
          this.errorMessage = [error.message]
          this.loading = false
        }
      }
    },
    getRouterLink () {
      return `/Admin/${this.movie._id}`
    },
    getImgUrl () {
      return `http://localhost:5000/${this.movie.poster}-330.jpg 330w, http://localhost:5000/${this.movie.poster}-215.jpg 215w`
    }
  }
}
</script>

<style lang="less">
  div.movie {
    margin: auto;
    position: relative;
    div#buttons {
      display: none;
    }
    &:hover {
      div#buttons {
      width: 100%;
      position: absolute;
      top: 60%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      div.icon {
        width: 40px;
        height: 40px;
        background-color: #FFF;
        border-radius: 15px;
        padding: 15px;
      }
    }
    }
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
