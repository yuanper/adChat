;function EmojiFall(options) {
    var id = options.id;
    var flakeSize = options.flakeSize || 20;
    var fallSpeed = options.fallSpeed || 5;
    var emojiImage = options.emojiImage;
    var ele = document.getElementById(id);
    var ctx = ele.getContext('2d');
    var width = ele.clientWidth;
    var height = ele.clientHeight;
    var emojiArr = [];
    this.init = function() {
        for(var i = 0;i < flakeSize; i++){
            var a = create()
            emojiArr.push(a)
        }
    }
    function create() {
        var obj = {}
        obj.x = Math.floor(Math.random() * width);
        obj.y = Math.floor(Math.random() * 1.5 * height) - 1.5 * height;
        obj.speed = 2 * Math.random() + fallSpeed;
        obj.emojiImage = emojiImage;
        obj.velY = obj.speed;
        obj.velX = 0;
        obj.stepSize = Math.random() / 30;
        obj.step = 0;
        return obj
    }
    function render(obj) {
        var img = new Image();
        img.src = './images/welcome.gif';
        ctx.drawImage(img,obj.x,obj.y,50,50)
    }
    function update(obj) {
        obj.x;
        obj.y;
        obj.velX *= 0.98;
        obj.velY <= obj.speed && (obj.velY = obj.speed);
        obj.velX += Math.cos(obj.step += .05) * obj.stepSize * 5;
        obj.y += obj.velY;
        obj.x += obj.velX
    }
    this.start = function() {
        ctx.clearRect(0, 0, width, height);
        for(var i = 0;i< flakeSize;i ++){
            update(emojiArr[i])
            render(emojiArr[i])
        }
        // window.requestAnimationFrame(this.start)
    }
}