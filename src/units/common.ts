/**
 * 画圆角矩形
 * @param {Context} ctx Canvas的Context上下文
 * @param {Number} x 左上角的X轴
 * @param {Number} y 左上角的Y轴
 * @param {Number} w 宽度
 * @param {Number} h 高度
 * @param {Number} r 圆角的半径
 */
export function drawRoundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
    if (w < 2 * r) {
        r = w / 2;
    }
    if (h < 2 * r) {
        r = h / 2;
    }
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
}

/**
 * 设置canvas的大小
 * @param width 宽
 * @param height 高
 */
export function initCanvas(width: number, height ? : number): [HTMLCanvasElement, CanvasRenderingContext2D | null] {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height || width;
    return [canvas, ctx];
}
