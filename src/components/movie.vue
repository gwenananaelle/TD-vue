<template>
    <div>
        <img alt="" :srcset="poster" sizes="(max-width:480px) 215px, 330px">
        <h4>{{movieTitle}}</h4>
    </div>
</template>

<script>
export default {
  name: 'movie',
  props: {
    movieTitle: String,
    poster: String
  }
}
</script>

<style lang="less">
  div {
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
