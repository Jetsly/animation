import {
    drawRoundRect,
    initCanvas,
} from './common';
/**
 * 汉诺塔的纹理
 */
export function hanoi(): HTMLCanvasElement {
    const [canvas, ctx] = initCanvas(20, 9);
    if (ctx === null) {
        return canvas;
    }
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    return canvas;
}
