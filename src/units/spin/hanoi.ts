import {
    Sprite,
} from 'pixi.js';
/**
 * 绑定元素拖拽
 * @param sprite 精灵元素
 */
export default function bindDrag(sprite: Sprite, begin: any, done: any): void {
    sprite.interactive = true;
    let defaultCursor: string;

    function onDragStart(this: any, event: any) {
        this.alpha = 0.5;
        const offset = event.data.getLocalPosition(this.parent);
        if (begin()) {
            this.dragging = this.dragging || {
                x: offset.x,
                y: offset.y,
            };
            defaultCursor = this.cursor;
        }
    }

    function onDragEnd(this: any) {
        this.alpha = 1;
        if (this.dragging) {
            this.cursor = defaultCursor;
            done();
            this.dragging = null;
        }
    }

    function onDragMove(this: any, event: any) {
        if (this.dragging) {
            const offset = event.data.getLocalPosition(this.parent);
            this.x += offset.x - this.dragging.x;
            this.y += offset.y - this.dragging.y;
            this.dragging = {
                x: offset.x,
                y: offset.y,
            };
            this.cursor = 'move';
        }
    }

    sprite
        .on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove);
}
