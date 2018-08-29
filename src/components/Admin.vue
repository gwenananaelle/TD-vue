<template>
   <div>
     <router-link class="retour" to="/">❮</router-link>
     <form @submit.prevent="checkForm">
      <div>
          <label for="title">Title :</label>
          <input v-model="movie.title" type="text" id="title" name="title" placeholder="movie title">
      </div>
      <div>
          <label for="poster">Poster :</label>
          <input v-model="movie.poster" type="text" id="poster" name="poster">
      </div>
      <div>
          <label for="summary">Summary :</label>
          <textarea v-model="movie.summary" id="summary" name="summary"></textarea>
      </div>
      <div>
          <button type="submit" v-if="!this.$route.params.id">Créer un nouveau film</button>
          <button type="submit" v-if="this.$route.params.id">Mettre à jour</button>
      </div>
      <loader
            v-show="this.loading"/>
      <div v-if="errorMessage">
        <p v-for="(errorMessage, i) in errorMessage" :key="i"> {{ errorMessage }} </p>
      </div>
    </form>
   </div>
</template>
<script>
import loader from './loader.vue'
export default {
  name: 'admin',
  components: {
    loader
  },
  data () {
    return {
      movie: {
        title: 'title',
        poster: 'poster',
        summary: 'summary'
      },
      errorMessage: null,
      loading: false
    }
  },
  async created () {
    try {
      if (this.$route.params.id) {
        const response = await fetch(`http://localhost:5000/movies${this.$route.params.id}`)
        this.movie = await response.json()
      }
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async checkForm () {
      this.errorMessage = null
      this.loading = true
      try {
        const response = await fetch('http://localhost:5000/admin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.movie)
        })
        if (!response.ok) {
          if (response.status === 400) {
            this.errorMessage = await response.json()
            this.loading = false
          } else {
            this.errorMessage = ['erreur innatendue']
            this.loading = false
          }
        } else {
          this.$router.push('/')
        }
      } catch (error) {
        console.log(error.message)
        this.errorMessage = [error.message]
        this.loading = false
      }
    }
  }
}
</script>

<style lang='less' scoped>
  form {
    width: 100%;
    height: 60%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    div {
      margin: auto;
      width: 30%;
      label {
        display: block;
        text-transform: uppercase;
        margin: 20px 0 10px 0;
      }
      input {
        display: block;
        width: 100%;
      }
      textarea {
        width: 100%;
        height: 150px;
      }
      button {
        display: block;
        width: 100%;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #2b71d8;
        border: none;
        text-transform: uppercase;
        color: #ffffff;
        padding: 10px;
      }
    }
  }

  .retour {
    color: white;
    font-size: xx-large;
    text-decoration: none;
    :hover, :visited {
      color: white;
    }
  }

</style>
