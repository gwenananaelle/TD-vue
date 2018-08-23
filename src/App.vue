<template>
  <div id="app">
    <pageTitle/>
    <!-- <movieList/> -->
    <router-view></router-view>
  </div>
</template>

<script>
import pageTitle from './components/pageTitle.vue'
// import movieList from './components/movieList.vue'

export default {
  name: 'app',
  components: {
    pageTitle
    // movieList
  }
}
</script>

<style lang="less">
@import '~normalize.css';
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #17181b;
  color: #ffffff;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
