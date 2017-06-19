<template>
  <div>
    <ToolsHeader title="Hanoi" slogan="汉诺塔 pixi"></ToolsHeader>
  </div>
</template>
<script lang="ts">
  import {
    Application,
    Texture,
    Sprite,
    spine,
    Graphics,
    Point
  } from 'pixi.js'
  import {
    hanoi
  } from 'units/texture'
  import {
    bindDrag
  } from 'units/common'
  import 'pixi-spine'
  import ToolsHeader from 'components/ToolsHeader.vue'
  import Vue from "vue"
  export default Vue.extend({
    components: {
      ToolsHeader
    },
    mounted() {
      const app = new Application({
        transparent: true
      })
      document.body.appendChild(app.view)

      let graphics = new Graphics();
      graphics.lineStyle(5, 0x9e9b9b, 1);

      // 第一列 250*3 + 50 = 800
      graphics.moveTo(125, 500)
      graphics.lineTo(125, 250);
      graphics.moveTo(0, 500)
      graphics.lineTo(250, 500);
      // 第二列
      graphics.moveTo(125 + 250 + 25, 500)
      graphics.lineTo(125 + 250 + 25, 250);
      graphics.moveTo(250 + 25, 500)
      graphics.lineTo(250 * 2 + 25, 500);
      // 第三列
      graphics.moveTo(125 + 250 * 2 + 25 * 2, 500)
      graphics.lineTo(125 + 250 * 2 + 25 * 2, 250);
      graphics.moveTo(250 * 2 + 25 * 2, 500)
      graphics.lineTo(250 * 2 + 25 * 2 + 250, 500);
      app.stage.addChild(graphics);
      const hanoiTexture = Texture.fromCanvas(hanoi())

      const xpos = [125, 125 + 250 + 25, 125 + 250 * 2 + 25 * 2]
      const columns: any[] = [
        [],
        [],
        []
      ];
      for (var idx = 0; idx < 1; idx++) {
        for (var count = 0; count < 3; count++) {
          let point = new Point()
          let columnIndx = idx;
          let curIndx = count;
          const hanoi = new Sprite(hanoiTexture)
          hanoi.anchor.set(0.5);
          hanoi.position.set(xpos[idx], 500 - (count + 1) * 20);
          hanoi.scale.set(11 - count, 1);
          hanoi.cursor = 'not-allowed';
          bindDrag(hanoi, function (): boolean {
            if (columns[columnIndx].length != curIndx + 1) {
              return false
            }
            point.copy(hanoi.position)
            return true;
          }, function () {
            let dx = xpos.map((x, idx) => {
              if (Math.abs(hanoi.x - x) < hanoi.width / 2) {
                return idx
              }
              return -1;
            }).filter(x => x !== -1)[0]
            if (!isNaN(dx) && (columns[dx].length == 0 || columns[dx][columns[dx].length - 1].width >= hanoi.width)) {
              columns[columnIndx].splice(curIndx, 1)
              columns[columnIndx = dx][curIndx = columns[dx].length] = hanoi
              hanoi.position.set(xpos[dx], 500 - columns[columnIndx].length * 20)
            } else {
              hanoi.position.copy(point)
            }
          })
          columns[columnIndx].push(hanoi)
          app.stage.addChild(hanoi);
        }
      }
    }
  })
</script>
<style lang="scss">
  canvas {
    width: 100%;
    max-width: 800px;
  }
</style>