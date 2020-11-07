var canvas = null,
    ctx = null;
function paint(ctx) {
    ctx.fillStyle = '#0f0';
    //x,y,width,height
    ctx.fillRect(50, 50, 100, 60);
}
function init() {
    //Gets the canvas
    canvas = document.getElementById('canvas');
    //Gets the context, necessary for painting
    ctx = canvas.getContext('2d');
    paint(ctx);
}
//For init to start when page load in order to avoid errors
window.addEventListener('load', init, false);