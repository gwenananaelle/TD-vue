<template>
   <div>
     <form @submit.prevent="checkForm">
    <div>
        <label for="title">Title :</label>
        <input v-model="movie.title" type="text" id="title" name="title" placeholder="movie title">
    </div>
    <div>
        <label for="poster">Poster :</label>
        <input v-model="movie.poster" type="text" id="poster" name="poster">
    </div>
    <div>
        <label for="summary">Summary :</label>
        <textarea v-model="movie.summary" id="summary" name="summary"></textarea>
    </div>
    <div class="button">
        <button type="submit">Créer un nouveau film</button>
    </div>
</form>
   </div>
</template>
<script>
  export default {
    name: 'firstroute',
    data() {
      return({
        movie: {
          title: 'title',
          poster: 'poster',
          summary: 'summary'
        }
      })
    },
    methods: {
      async checkForm() {
        const response = await fetch("http://localhost:5000/form", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.movie)
        })
        .then(this.$router.push('/'))
      }
    }
}
</script>

<style lang="less" scoped>
form {
  /* Uniquement centrer le formulaire sur la page */
  margin: 0 auto;
  width: 400px;
  /* Encadré pour voir les limites du formulaire */
  padding: 1em;
  border: 1px solid #CCC;
  border-radius: 1em;
}

form div + div {
  margin-top: 1em;
}

label {
  /* Pour être sûrs que toutes les étiquettes ont même taille et sont correctement alignées */
  display: inline-block;
  width: 90px;
  text-align: right;
}

input, textarea {
  /* Pour s'assurer que tous les champs texte ont la même police.
     Par défaut, les textarea ont une police monospace */
  font: 1em sans-serif;

  /* Pour que tous les champs texte aient la même dimension */
  width: 300px;
  box-sizing: border-box;

  /* Pour harmoniser le look & feel des bordures des champs texte */
  border: 1px solid #999;
}

input:focus, textarea:focus {
  /* Pour souligner légèrement les éléments actifs */
  border-color: #000;
}

textarea {
  /* Pour aligner les champs texte multi‑ligne avec leur étiquette */
  vertical-align: top;

  /* Pour donner assez de place pour écrire du texte */
  height: 5em;
}

.button {
  /* Pour placer le bouton à la même position que les champs texte */
  padding-left: 90px; /* même taille que les étiquettes */
}

button {
  /* Cette marge supplémentaire représente grosso modo le même espace que celui
     entre les étiquettes et les champs texte */
  margin-left: .5em;
}
</style>
