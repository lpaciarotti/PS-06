var canvas = null,
    ctx = null;
var x = 50,
    y = 50;
function paint(ctx) {
    //For painting a new rectangle erasing a smaller previous one
    ctx.fillStyle = '#000';
    ctx.fillRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f0';
    //x,y,width,height
    ctx.fillRect(x, y, 10, 10);
}
function init() {
    //Gets the canvas
    canvas = document.getElementById('canvas');
    //Gets the context, necessary for painting
    ctx = canvas.getContext('2d');
    run(ctx);
}
//For animating the painting when "ctx" is called
function run() {
    //Request next animation frame
    window.requestAnimationFrame(run);
    act();
    paint(ctx);
}
function act(){
    //Rectangle movement at 2 px per sec
    x += 2;
    //In order to not disappear
    if (x > canvas.width) {
        x = 0;
        }
}
//For init to start when page load in order to avoid errors
window.addEventListener('load', init, false);