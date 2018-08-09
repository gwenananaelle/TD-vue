<template>
    <div class="container">
        <div class="loader"></div>
    </div>
</template>

<script>
export default {
  name: 'loader'
}
</script>

<style lang="less" scoped>
div.container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  .loader {
    margin: auto;
    border: 10px solid rgba(255, 255, 255, 0.65);
    border-radius: 50%;
    border-top: 10px solid #3498db;
    width: 100px;
    height: 100px;
    animation: spin 2s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
