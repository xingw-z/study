<template>
  <div class="index">index</div>
</template>

<script>
import Game from '../../public/game/Game.js'
import EventEmitter from '../../public/game/EventEmitter.js'
export default {
  name: "index",
  props: {},
  methods: {
    initEvents: function() {
            EventEmitter.on('EventAssetsProgress', (progress) => {
                this.progress = Math.ceil(progress*10000)/100
            })
            EventEmitter.on('EventAssetsLoaded', () => {
                setTimeout(() => {
                    document.getElementById('layaCanvas').style.display = 'block'
                    this.bIsShowLoading = false
                    this.bIsStartGame = true
                    this.jumpGame.start()
                }, 3000)
            })
            EventEmitter.on('EventGameWin', (scores) => {
                this.scores = scores
                this.onReqOverGame()
            })
            EventEmitter.on('EventGameOver', (scores) => {
                this.scores = scores
                this.onReqOverGame()
            })
        }
  },
  mounted() {
    this.initEvents()
    this.jumpGame = new Game()
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
