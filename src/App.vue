<template>
  <div id="app">
    <pageTitle/>
    <router-view></router-view>
  </div>
</template>

<script>
import pageTitle from './components/pageTitle.vue'

export default {
  name: 'app',
  components: {
    pageTitle
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
