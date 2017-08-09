<template>
  <ToolsHeader title="Matchman" slogan="火柴人 pixi"></ToolsHeader>
</template>
<script lang="ts">
  /* tslint dragonBones */
  // http://wanzao2.b0.upaiyun.com/system/pictures/16525619/original/01a1698bb782b7f6.gif
  import {
    WebGLRenderer,
    loaders,
    Container,
    Sprite
  } from 'pixi.js'
  import 'assets/libs/dragonBones'
  import ToolsHeader from 'components/ToolsHeader.vue'
  import Vue from "vue"
  export default Vue.extend({
    components: {
      ToolsHeader
    },
    mounted(this: any) {
      this._renderer = new WebGLRenderer(1136, 640)
      document.body.appendChild(this._renderer.view)
      this.stage = new PIXI.Container();
      this._backgroud = new PIXI.Sprite(PIXI.Texture.EMPTY);
      this._renderer.backgroundColor = 0x666666;
      this._backgroud.width = this._renderer.width;
      this._backgroud.height = this._renderer.height;
      this.stage.addChild(this._backgroud);
      let loader = new loaders.Loader()
      loader.add("dragonBonesData", require('!file-loader!../../assets/matchman/NewProject_ske.dbbin'), {
          loadType: loaders.Resource.LOAD_TYPE.XHR,
          xhrType: loaders.Resource.XHR_RESPONSE_TYPE.BUFFER
        })
        .add("textureData", require('!file-loader!../../assets/matchman/NewProject_tex.json'))
        .add("texture", require('!file-loader!../../assets/matchman/NewProject_tex.png'))

      loader.once('complete', (loader: loaders.Loader, resources: any) => {
        const factory = dragonBones.PixiFactory.factory;
        factory.parseDragonBonesData(resources["dragonBonesData"].data);
        factory.parseTextureAtlasData(resources["textureData"].data, resources["texture"].texture);
        const armatureDisplay = factory.buildArmatureDisplay("matchman");
        armatureDisplay.animation.play("move");
        this.stage.addChild(armatureDisplay);
        armatureDisplay.x = 0;
        armatureDisplay.y = 100;
        PIXI.ticker.shared.add(() => {
          this._renderer.render(this.stage);
        }, this);
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