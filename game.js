var KEY_ENTER = 13,
    KEY_LEFT = 37,
    KEY_UP = 38,
    KEY_RIGHT = 39,
    KEY_DOWN = 40,
    canvas = null,
    ctx = null,
    player = null, //In replacement of the x and y variables
    lastPress = null,
    dir = 0, //Saves the direction of our rectangle
    pause = true; //If the game is in pause
window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function (callback) {
    window.setTimeout(callback, 17);
    };
}());
//For saving the press key
document.addEventListener('keydown', function (evt) {
    lastPress = evt.which;
    }, false);
function paint(ctx) {
    //Clean canvas
    ctx.fillStyle = '#000';
    ctx.fillRect(0,0, canvas.width, canvas.height);
    //Draw square
    ctx.fillStyle = '#0f0';
    //x,y,width,height
    ctx.fillRect(player.x, player.y, 10, 10);
    //To know which was the last key press
    ctx.fillText('Last Press: ' + lastPress, 0, 20);
    // Draw pause
    if (pause) {
        ctx.textAlign = 'center';
        ctx.fillText('PAUSE', 150, 75);
        ctx.textAlign = 'left';
    }
}
//For playing the game if it isn't in pause
function act(){
    if (!pause) {
        // Change Direction
        if (lastPress == KEY_UP) {
            dir = 0;
        }
        if (lastPress == KEY_RIGHT) {
            dir = 1;
        }
        if (lastPress == KEY_DOWN) {
            dir = 2;
        }
        if (lastPress == KEY_LEFT) {
            dir = 3;
        }
        // Move Rect
        if (dir == 0) {
            player.y -= 10;
        }
        if (dir == 1) {
            player.x += 10;
        }
        if (dir == 2) {
            player.y += 10;
        }
        if (dir == 3) {
            player.x -= 10;
        }
        // Out Screen
        if (palyer.x > canvas.width) {
        player.x = 0;
        }
        if (player.y > canvas.height) {
        player.y = 0;
        }
        if (player.x < 0) {
        player.x = canvas.width;
        }
        if (player.y < 0) {
        player.y = canvas.height;
        }
    }
    // Pause/Unpause
    if (lastPress == KEY_ENTER) {
        pause = !pause;
        lastPress = null;
    }
}
function repaint() {
    window.requestAnimationFrame(repaint);
    paint(ctx);
}
function run() {
    //For having the game in a rate of 20 cyc/sec
    setTimeout(run, 50);
    act();
}
function init() {
    //Gets the canvas
    canvas = document.getElementById('canvas');
    //Gets the context, necessary for painting
    ctx = canvas.getContext('2d');
    //Start game
    run();
    repaint();
    // Create player
    player = new Rectangle(40, 40, 10, 10);
    player.fill(ctx);
}
//For init to start when page load in order to avoid errors
window.addEventListener('load', init, false);
//To know if our rectangle is in intersection with other
function Rectangle(player.x, player.y, width, height) {
    this.player.x = (player.x == null) ? 0 : player.x;
    this..player.y = (player.y == null) ? 0 : player.y;
    this.width = (width == null) ? 0 : width;
    this.height = (height == null) ? this.width : height;
    this.intersects = function (rect) {
        if (rect == null) {
            window.console.warn('Missing parameters on function intersects');
        } else {
            return (this.player.x < rect.player.x + rect.width &&
            this.player.x + this.width > rect.player.x &&
            this.player.y < rect.player.y + rect.height &&
            this.player.y + this.height > rect.player.y);
        }
    };
    this.fill = function (ctx) {
        if (ctx == null) {
            window.console.warn('Missing parameters on function fill');
        } else {
            ctx.fillRect(this.player.x, this.player.y, this.width, this.height);
        }
    };
}
