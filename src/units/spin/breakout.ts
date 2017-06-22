import {
    Graphics,
} from 'pixi.js';

/**
 * 绑定元素拖拽
 * @param sprite 精灵元素
 */

export default function bindDrag(sprite: Graphics, width: number,
                                 move: (acceleration: number) => void, end: (acceleration: number) => void): void {
    sprite.interactive = true;
    let defaultCursor: string;

    function onDragStart(this: any, event: any) {
        this.alpha = 0.5;
        const offset = event.data.getLocalPosition(this.parent);
        this.dragging = this.dragging || {
            x: offset.x,
            prev: 0,
            acceleration: 0,
        };
        defaultCursor = this.cursor;
    }

    function onDragEnd(this: any) {
        this.alpha = 1;
        if (this.dragging) {
            this.cursor = defaultCursor;
            end(this.dragging.acceleration);
            this.dragging = null;
        }
    }

    function onDragMove(this: any, event: any) {
        if (this.dragging) {
            const offset = event.data.getLocalPosition(this.parent);
            const dx = offset.x - this.dragging.x;
            this.x = Math.max(Math.min(this.x + dx, width - this.width), 0);
            this.dragging = {
                x: offset.x,
                prev: dx,
                acceleration: this.dragging.prev - dx,
            };
            move(this.dragging.acceleration);
            this.cursor = 'move';
        }
    }
    sprite.on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove);
}