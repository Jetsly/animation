<template>
    <ToolsHeader title="Matchman" slogan="火柴人 pixi"></ToolsHeader>
</template>
<script lang="ts">
  // http://wanzao2.b0.upaiyun.com/system/pictures/16525619/original/01a1698bb782b7f6.gif
  import {
    Application,
    loaders,
    spine,
    BaseTexture
  } from 'pixi.js'
  import 'pixi-spine'
  import ToolsHeader from 'components/ToolsHeader.vue'
  import Vue from "vue"
  export default Vue.extend({
    components: {
      ToolsHeader
    },
    mounted(this: any) {
      this.app = new Application({
        transparent: true
      })
      document.body.appendChild(this.app.view)
      let loader = new loaders.Loader()
      loader.add("atlas", require('!file-loader!../../assets/matchman/NewProject_tex.atlas'));
      loader.once('complete', (loader: loaders.Loader, resources: any) => {
        var spineAtlas = new spine.core.TextureAtlas(resources.atlas.data, function (line, callback) {
          callback(BaseTexture.fromImage(require('!file-loader!../../assets/matchman/NewProject_tex.png')));
        });
        loader.add('spine', require('!file-loader!../../assets/matchman/NewProject.json'), {
          metadata: {
            spineAtlas: spineAtlas
          }
        }).once('complete', (loader: loaders.Loader, resources: any) => {
          var animation = new spine.Spine(resources.spine.spineData);
          animation.position.set(0,100);
          this.app.stage.addChild(animation);
          if (animation.state.hasAnimation('move')) {
            animation.state.setAnimation(0, 'move', true);
          }
        });
      })
      loader.load()
    },
    beforeDestroy(this: any) {
      document.body.removeChild(this.app.view)
      this.app.destroy()
    }
  })
</script>
<style lang="scss">

</style>