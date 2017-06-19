<template>
  <div>
    <ToolsHeader title="Matchman" slogan="火柴人 pixi"></ToolsHeader>
  </div>
</template>
<script lang="ts">
  import {
    Application,
    Texture,
    loader,
    spine
  } from 'pixi.js'
  import 'pixi-spine'
  import {
    matchMan
  } from 'units/texture'
  import ToolsHeader from 'components/ToolsHeader.vue'
  import Vue from "vue"
  export default Vue.extend({
    components: {
      ToolsHeader
    },
    mounted() {
      const [circle,line] = matchMan()
      const app = new Application({
        transparent: true
      })
      document.body.appendChild(app.view)
      let spineAtlas = new spine.core.TextureAtlas();
      spineAtlas.addTextureHash({
        'circle': Texture.fromCanvas(circle),
        'line': Texture.fromCanvas(line),
      }, true);
      var spineAtlasLoader = new spine.core.AtlasAttachmentLoader(spineAtlas)
      var spineJsonParser = new spine.core.SkeletonJson(spineAtlasLoader);
      var spineData = spineJsonParser.readSkeletonData(require('units/spin/matchMan.json'));
      var animation = new spine.Spine(spineData);
      app.stage.addChild(animation);
      if (animation.state.hasAnimation('animation')) {
        // animation.state.setAnimation(0, 'animation', true); 
        animation.state.timeScale = 1;
      }
    }
  })
</script>
<style lang="scss">

</style>