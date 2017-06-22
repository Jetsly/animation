<template>
    <div class="anime">
        <ToolsHeader title="anime" slogan="个性化动画"></ToolsHeader>
        <div class="content">
            <div class="path" v-for="path in paths">
                <div class="type">{{path.type}}</div>
                <ul class="routers">
                    <template v-for="(router,idx) in path.routers">
                        <router-link tag="li" :to="path.base+router.path">{{router.name}}</router-link>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import ToolsHeader from 'components/ToolsHeader'
    export default {
      components: {
        ToolsHeader
      },
      data () {
        return {
          paths: [{
            type: 'pixi',
            base: '/pixi',
            routers: [{
              name: '汉诺塔',
              path: '/Hanoi'
            },{
              name: '打砖块',
              path: '/Breakout'
            },{
              name: '火柴人',
              path: '/Matchman'
            }]
          }]
        }
      }
    }
</script>
<style lang="scss">
    .anime {
        height: 100%;
        .content {
            padding-top: 20px;
        }
        .path {
            display: flex;
            padding: 8px;
        }
        .type {
            width: 100px;
            text-align: center;
        }
        .routers {
            flex: auto;
            list-style: none;
            font-size: 16px;
            li {
                cursor: pointer;
                display: inline-flex;
                border: 1px solid #dddee1;
                border-radius: 30px;
                padding: 0 9px;
                color: #495060;
                font-size: 14px;
                margin-right: 5px;
                &:last-child{
                    margin-right: 0;
                }
            }
        }
    }
</style>
