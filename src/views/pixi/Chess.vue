<template>
  <div>
    <ToolsHeader title="Chess" slogan="象棋 pixi"></ToolsHeader>
  </div>
</template>
<script lang="ts">
  // import { Application, Point, mesh, Texture, Container } from 'pixi.js'
  import ToolsHeader from 'components/ToolsHeader.vue'
  import Vue from "vue"
  
  export default Vue.extend({
    components: {
      ToolsHeader
    }
    // mounted() {
      // const snake = require('assets/snake.png')
      // var app = new Application()
      // document.body.appendChild(app.view)
      // var count = 0
      //     // build a rope!
      // var ropeLength = 918 / 20
      // var points = []
      // for (var i = 0; i < 20; i++) {
      //   points.push(new Point(i * ropeLength, 0))
      // }
      // var strip = new mesh.Rope(Texture.fromImage(snake), points)
      // strip.x = -459

      // var snakeContainer = new Container()
      // snakeContainer.x = 400
      // snakeContainer.y = 300

      // snakeContainer.scale.set(800 / 1100)
      // app.stage.addChild(snakeContainer)

      // snakeContainer.addChild(strip)

      // app.ticker.add(function () {
      //   count += 0.1

      //     // make the snake
      //   for (var i = 0; i < points.length; i++) {
      //     points[i].y = Math.sin((i * 0.5) + count) * 30
      //     points[i].x = i * ropeLength + Math.cos((i * 0.3) + count) * 20
      //   }
      // })
    // }
  })
</script>
<style lang="scss">

</style>