<template>
    <ToolsHeader title="Breakout" slogan="打砖块 pixi"></ToolsHeader>
</template>
<script lang="ts">
    import {
        Application,
        Graphics
    } from 'pixi.js'
    import ToolsHeader from 'components/ToolsHeader.vue'
    import Vue from "vue"
    import bindDrag from 'units/spin/breakout'
    let ball = new Graphics();
    ball.beginFill(0x1d96dc);
    ball.drawCircle(10, 10, 10);
    ball.endFill();
    let bars = new Graphics();
    bars.beginFill(0x927a7a);
    bars.drawRoundedRect(0, 0, 100, 15, 5)
    bars.endFill();
    bars.interactive = true
    bars.buttonMode = true

    function initStart() {
        ball.position.set(bars.x + (bars.width - ball.width) / 2, bars.y - ball.height)
        return true
    }
    export default Vue.extend({
        components: {
            ToolsHeader
        },
        beforeDestroy(this: any) {
            document.body.removeChild(this.app.view)
            this.app.destroy()
        },
        mounted(this: any) {
            let isWait = true;
            let acceleration = 0;
            let tempAcceleration = 0;
            let speed = 4.5;
            let direction = 0
            this.app = new Application({
                backgroundColor: 0xe6e6e6
            })
            document.body.appendChild(this.app.view)
            bars.position.set((this.app.renderer.width - bars.width) / 2, 570);
            this.app.stage.addChild(ball);
            this.app.stage.addChild(bars);
            bindDrag(bars, this.app.renderer.width, (_acceleration: number) => {
                if (!isWait) {
                    tempAcceleration = _acceleration / 2
                }
            }, (_acceleration: number) => {
                tempAcceleration = 0;
                if (isWait) {
                    acceleration += _acceleration / 2
                    // console.log('1', _acceleration)
                    isWait = false
                }
            })
            let count = this.app.renderer.width / 100
            let bricks = new Graphics();
            for (var idx = 0; idx < count*4; idx++) {
                let brick = new Graphics();
                brick.beginFill(0xa99581);
                brick.drawRoundedRect(0, 0, 100, 15, 5);
                brick.endFill();
                brick.position.set((idx % count) * 100, Math.floor(idx / count) * 16);
                bricks.addChild(brick)
            }
            this.app.stage.addChild(bricks);
            this.app.ticker.add(() => {
                isWait && initStart() || (() => {
                    let posx = ball.x + ball.width / 2
                    if (ball.x <= 0 || ball.x >= (this.app.renderer.width - ball.width)) {
                        acceleration = -acceleration
                    }
                    ball.x += acceleration
                    if (direction === 0) {
                        ball.y -= speed
                    } else {
                        ball.y += speed
                    }
                    if (ball.y > bars.y - ball.height) {
                        direction = 0
                        acceleration += tempAcceleration
                        // console.log('2', tempAcceleration, acceleration)
                        tempAcceleration = 0;
                        if (posx < bars.x || bars.width < posx - bars.x) {
                            isWait = true
                        }
                    } else if (ball.y <= 0) {
                        direction = 1
                    } else {
                        bricks.children.forEach((brick: Graphics) => {
                            if (brick.y + brick.height >= ball.y) {
                                if (posx >= brick.x && brick.width >= posx - brick.x) {
                                    direction = 1
                                    bricks.removeChild(brick)
                                }
                            }
                        })
                    }
                })()
            })
        }
    })
</script>