<template >
    <div id="modal">
        <div>
            <h2>{{movie.title}}</h2>
            <img alt="" :srcset="getImgUrl(movie)" sizes="(max-width:480px) 215px, 330px">
            <p>{{movie.summary}}</p>
            <div @click="$emit('select-movie', null)">close</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    movie: Object,
    getImgUrl: Function
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
        }
        img {
            width: 215px;
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
