function initCanvas(width: number, height ? : number): [HTMLCanvasElement, CanvasRenderingContext2D | null] {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = width;
    canvas.height = height || width;
    return [canvas, ctx]
}

/**
 * 设置火柴人的纹理
 */
export function matchMan(): HTMLCanvasElement[] {
    function circle(): HTMLCanvasElement {
        const [canvas, ctx] = initCanvas(32)
        if (ctx == null) return canvas
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.arc(16, 16, 16, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        return canvas
    }

    function line(): HTMLCanvasElement {
        const [canvas, ctx] = initCanvas(5, 35)
        if (ctx == null) return canvas
        ctx.fillStyle = "#000000";
        ctx.lineWidth = 2
        ctx.beginPath();
        ctx.lineCap = "round";
        ctx.moveTo(3, 0);
        ctx.lineTo(3, 33);
        ctx.closePath();
        ctx.stroke();
        return canvas
    }
    return [circle(), line()]
}